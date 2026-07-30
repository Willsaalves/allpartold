import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IPDCON 2026 — Grupo All Party";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(147,65,236,0.35) 0%, #080810 65%)",
          backgroundColor: "#080810",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(147,65,236,0.4)",
            borderRadius: 4,
            padding: "10px 24px",
            marginBottom: 40,
            color: "#d4af37",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          4ª Edição · 15.08.2026 · São Paulo
        </div>
        <div style={{ display: "flex", fontSize: 128, fontWeight: 900, color: "#fff" }}>
          IPD<span style={{ color: "#6d04d7" }}>CON</span>
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#d4af37", letterSpacing: 6, marginTop: 8 }}>
          2026
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#b0b0c8", marginTop: 32 }}>
          O encontro que vai transformar o mercado de formaturas e eventos
        </div>
      </div>
    ),
    { ...size }
  );
}
