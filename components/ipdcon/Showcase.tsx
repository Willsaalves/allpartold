import Image from "next/image";
import { FOTO_SHOWCASE } from "@/lib/media";

const CHIPS = [
  "Networking executivo",
  "Showroom imersivo",
  "Experiência 360°",
  "Relacionamento",
];

export function Showcase() {
  return (
    <section className="section band-dark showcase" id="conceito">
      <div className="container showcase-grid">
        <div>
          <div className="eyebrow">O que é o IPDCON</div>
          <h2 className="h2">O evento autoral do Grupo All Party.</h2>
          <p>
            O IPDCON é uma noite exclusiva de networking e celebração que reúne executivos,
            gestores e tomadores de decisão em um formato imersivo.
          </p>
          <p>
            Mais do que uma confraternização, funciona como um showroom ao vivo: os ambientes
            demonstram, na prática, a capacidade operacional, criativa e tecnológica do grupo.
          </p>
          <div className="chips">
            {CHIPS.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="showcase-visual showcase-visual--photo">
          <Image
            src={FOTO_SHOWCASE.src}
            alt={FOTO_SHOWCASE.alt}
            fill
            sizes="(min-width: 860px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
