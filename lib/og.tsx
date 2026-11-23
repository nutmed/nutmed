import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Course } from "@/content/types";

// Imagem de compartilhamento (Open Graph) padrão das LPs: 1200x630, usada no WhatsApp, Instagram, Facebook e LinkedIn.
// REGRA: toda LP tem app/<slug>/opengraph-image.tsx chamando courseOgImage(course). Ver CLAUDE.md.
export const OG_SIZE = { width: 1200, height: 630 };

async function dataUri(publicPath: string, mime: string) {
  const file = await readFile(join(process.cwd(), "public", publicPath.replace(/^\//, "")));
  return `data:${mime};base64,${file.toString("base64")}`;
}

type OgText = { kicker: string; title: string; highlight?: string; footer: string };

export function ogTextFromCourse(course: Course): OgText {
  return {
    kicker: course.og?.kicker ?? course.hero.eyebrow,
    title: course.og?.title ?? course.hero.title,
    highlight: course.og?.highlight ?? course.hero.highlight,
    footer: course.og?.footer ?? [course.hero.chips[0]?.label, ...course.hero.seals].filter(Boolean).join(" · "),
  };
}

export async function renderOgImage({ kicker, title, highlight, footer }: OgText) {
  const logo = await dataUri("/img/nutmed-logo-light.svg", "image/svg+xml");

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
          background: "linear-gradient(135deg, #4a2f9a 0%, #24124f 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
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

export function courseOgImage(course: Course) {
  return renderOgImage(ogTextFromCourse(course));
}
