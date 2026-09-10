import { Imagem } from "./Imagem";
import type { Foto } from "@/lib/media";

/**
 * Faixa animada de fotos. A lista é duplicada para o loop contínuo do marquee
 * (a animação desloca a trilha em -50%).
 */
export function GalleryStrip({ fotos }: { fotos: Foto[] }) {
  const track = [...fotos, ...fotos];

  return (
    <section className="gallery-strip" aria-label="Galeria do IPDCON">
      <div className="gallery-track">
        {track.map((foto, i) => (
          <div className="gallery-card" key={`${foto.src}-${i}`}>
            <Imagem
              src={foto.src}
              alt={i < fotos.length ? foto.alt : ""}
              aria-hidden={i >= fotos.length}
              fill
              sizes="340px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
