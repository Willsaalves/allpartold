import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IPDCON — Grupo All Party";
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
          background:
            "radial-gradient(ellipse 70% 55% at 50% 25%, rgba(60,0,121,0.9) 0%, #12002A 62%)",
          backgroundColor: "#12002A",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#fff",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 36,
          }}
        >
          Evento proprietário · Grupo All Party
        </div>
        <div style={{ display: "flex", fontSize: 150, fontWeight: 800, color: "#fff" }}>
          IPDCON
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 27,
            color: "#C4B5D4",
            marginTop: 30,
            maxWidth: 860,
            textAlign: "center",
          }}
        >
          Networking, experiência e negócios em um único encontro.
        </div>
      </div>
    ),
    { ...size }
  );
}
