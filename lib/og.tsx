import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import type { Course } from "@/content/types";

// Imagem de compartilhamento (Open Graph) padrão das LPs: 1200x630, usada no WhatsApp, Instagram, Facebook e LinkedIn.
// REGRA: a imagem de cada LP sai em /og/<slug>.jpg (app/og/[file]/route.ts) via courseOgImage(course). Ver CLAUDE.md.
export const OG_SIZE = { width: 1200, height: 630 };

async function dataUri(publicPath: string, mime: string) {
  const file = await readFile(join(process.cwd(), "public", publicPath.replace(/^\//, "")));
  return `data:${mime};base64,${file.toString("base64")}`;
}

type OgText = { kicker: string; title: string; highlight?: string; footer: string; image?: string };

// O Satori (next/og) só lê JPEG e PNG. Outros formatos ficam sem foto, só com o degradê.
function imageMime(publicPath: string) {
  if (/\.jpe?g$/i.test(publicPath)) return "image/jpeg";
  if (/\.png$/i.test(publicPath)) return "image/png";
  return null;
}

export function ogTextFromCourse(course: Course): OgText {
  return {
    kicker: course.og?.kicker ?? course.hero.eyebrow,
    title: course.og?.title ?? course.hero.title,
    highlight: course.og?.highlight ?? course.hero.highlight,
    footer: course.og?.footer ?? [course.hero.chips[0]?.label, ...course.hero.seals].filter(Boolean).join(" · "),
    // Sem og.image fica só o degradê. Use uma versão pequena (até ~480px) e levemente desfocada da foto do hero.
    image: course.og?.image,
  };
}

export async function renderOgImage({ kicker, title, highlight, footer, image }: OgText) {
  const logo = await dataUri("/img/nutmed-logo-light.svg", "image/svg+xml");
  const mime = image ? imageMime(image) : null;
  const photo = image && mime ? await dataUri(image, mime) : null;

  // Layout centralizado: o conteúdo cabe no quadrado central de 630x630, que o WhatsApp às vezes recorta.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(135deg, #4a2f9a 0%, #24124f 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Foto do curso suave no fundo: o degradê roxo por cima (~62-70%) deixa as ervas reconhecíveis. */}
        {photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            width={OG_SIZE.width}
            height={OG_SIZE.height}
            alt=""
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        {photo && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              background: "linear-gradient(135deg, rgba(74, 47, 154, 0.62) 0%, rgba(36, 18, 79, 0.7) 100%)",
            }}
          />
        )}
        {/* Reforço roxo atrás do texto central; as bordas ficam mais leves para as ervas aparecerem. */}
        {photo && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(36, 18, 79, 0.6) 0%, rgba(36, 18, 79, 0.35) 55%, rgba(36, 18, 79, 0) 100%)",
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: 560,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={136} height={86} alt="" />
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, textTransform: "uppercase", opacity: 0.85, marginTop: 26 }}>
            {kicker}
          </div>
          <div style={{ display: "flex", justifyContent: "center", fontSize: 60, fontWeight: 800, lineHeight: 1.08, marginTop: 14 }}>
            {title}
          </div>
          {highlight && (
            <div style={{ display: "flex", justifyContent: "center", fontSize: 44, lineHeight: 1.15, color: "#f47c3c", marginTop: 10 }}>
              {highlight}
            </div>
          )}
          <div style={{ display: "flex", width: 90, height: 6, borderRadius: 3, background: "#f47c3c", marginTop: 26 }} />
          <div style={{ display: "flex", justifyContent: "center", fontSize: 22, opacity: 0.9, marginTop: 20 }}>{footer}</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

// O PNG direto do Satori com a foto de fundo e o grão passa de 800 KB. Em JPEG (qualidade 84) fica
// visualmente igual e bem abaixo do limite de 300 KB do WhatsApp. O tipo é declarado em OG_CONTENT_TYPE.
export const OG_CONTENT_TYPE = "image/jpeg";

// Grão de papel (mesma textura das postagens do Instagram): ruído monocromático bem leve por cima de tudo.
function grainLayer({ width, height }: typeof OG_SIZE, alpha = 22) {
  const buf = Buffer.alloc(width * height * 4);
  let seed = 7;
  for (let i = 0; i < buf.length; i += 4) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    const v = seed & 0xff;
    buf[i] = buf[i + 1] = buf[i + 2] = v > 127 ? 255 : 0;
    buf[i + 3] = Math.round((Math.abs(v - 127.5) / 127.5) * alpha);
  }
  return sharp(buf, { raw: { width, height, channels: 4 } }).png().toBuffer();
}

async function compressOg(image: ImageResponse) {
  const raw = Buffer.from(await image.arrayBuffer());
  const jpg = await sharp(raw)
    .composite([{ input: await grainLayer(OG_SIZE) }])
    .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toBuffer();
  return new Response(new Uint8Array(jpg), { headers: { "Content-Type": OG_CONTENT_TYPE } });
}

export async function courseOgImage(course: Course) {
  return compressOg(await renderOgImage(ogTextFromCourse(course)));
}
