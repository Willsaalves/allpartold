import Image from "next/image";
import { FOTO_CAIO } from "@/lib/media";

/**
 * TEXTO PROVISÓRIO — substituir pelo conteúdo real da matéria do Caio.
 * O layout já está pronto: o retrato vertical fica à esquerda e o texto à
 * direita, quebrando em uma coluna só no mobile.
 */
const MATERIA = {
  eyebrow: "Palavra do Grupo All Party",
  titulo: "O IPDCON visto por dentro.",
  nome: "Caio",
  creditoFoto: "Caio, do Grupo All Party, durante o IPDCON 2026",
  paragrafos: [
    "A 4ª edição do IPDCON reuniu em São Paulo executivos e gestores de Marketing, Recursos Humanos, Comunicação, Eventos e Procurement em uma noite construída para aproximar pessoas e negócios.",
    "Mais do que uma confraternização, o encontro funcionou como um showroom ao vivo: cada ambiente demonstrou, na prática, a capacidade operacional, criativa e tecnológica do ecossistema do Grupo All Party.",
    "O resultado é uma trajetória que se fortalece a cada ano — e que já projeta a próxima edição.",
  ],
};

export function MateriaCaio() {
  return (
    <section className="section band-tint" id="materia">
      <div className="container">
        <div className="eyebrow">{MATERIA.eyebrow}</div>
        <h2 className="h2">{MATERIA.titulo}</h2>

        <div className="materia-grid">
          <div>
            <div className="materia-portrait">
              <Image
                src={FOTO_CAIO.src}
                alt={FOTO_CAIO.alt}
                fill
                sizes="(min-width: 860px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="materia-caption">{MATERIA.creditoFoto}</p>
          </div>

          <div className="materia-body">
            {MATERIA.paragrafos.map((texto) => (
              <p key={texto}>{texto}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
