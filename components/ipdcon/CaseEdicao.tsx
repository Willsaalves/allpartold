import Image from "next/image";
import Link from "next/link";
import { FOTO_CASE } from "@/lib/media";
import { Ticker } from "./Ticker";

const NUMEROS = [
  { valor: "320+", rotulo: "lideranças reunidas" },
  { valor: "4", rotulo: "marcas apresentadas no ecossistema" },
  { valor: "2026", rotulo: "quarta edição do IPDCON" },
];

export function CaseEdicao() {
  return (
    <section className="section band-light" id="edicao" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="eyebrow">Edição recente</div>
        <h2 className="h2">O que aconteceu na 4ª edição.</h2>
        <div className="case-layout">
          <div className="case-card case-card--photo">
            <Image
              src={FOTO_CASE.src}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 860px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="case-name">IPDCON 2026</div>
            <p>
              Uma noite que reuniu executivos, gestores de Marketing, Recursos Humanos,
              Comunicação, Eventos e Procurement em São Paulo.
            </p>
            <div className="actions">
              <Link className="btn" href="/ipdcon-2026">
                Ver a retrospectiva completa
              </Link>
            </div>
          </div>
          <div className="case-side">
            <div className="stats-grid" style={{ gridTemplateColumns: "1fr" }}>
              {NUMEROS.map(({ valor, rotulo }) => (
                <div className="stat" key={rotulo}>
                  <div className="stat__value">{valor}</div>
                  <span>{rotulo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Ticker
        style={{ marginTop: "var(--space-3xl)" }}
        items={[
          "All Party Formatura",
          "All Party Corporate",
          "Treme Terra Audiovisual",
          "AP7 Photo",
        ]}
      />
    </section>
  );
}
