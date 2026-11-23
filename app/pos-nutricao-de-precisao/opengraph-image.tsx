import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Imagem de compartilhamento (WhatsApp, Facebook, LinkedIn, X). Gerada no build, sem fontes externas.
export const alt = "Pós em Nutrição de Precisão Funcional e Fitoterapia · NutMed";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logo = await readFile(join(process.cwd(), "public/img/nutmed-logo-light.svg"), "utf8");
  const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logo).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          background: "linear-gradient(135deg, #4a2f9a 0%, #24124f 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={150} height={94} alt="" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 120, height: 8, borderRadius: 4, background: "#f47c3c", marginBottom: 30 }} />
          <div style={{ display: "flex", fontSize: 80, fontWeight: 800, lineHeight: 1.05 }}>
            Pós em Nutrição de Precisão
          </div>
          <div style={{ display: "flex", fontSize: 62, lineHeight: 1.15, color: "#f47c3c", marginTop: 6 }}>
            Funcional e Fitoterapia
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, opacity: 0.85 }}>
          Pós-graduação 2027 · Modalidade 3 em 1 · Reconhecida pelo MEC
        </div>
      </div>
    ),
    size,
  );
}
