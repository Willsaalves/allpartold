import Image from "next/image";
import { FOTO_CAIO } from "@/lib/media";

export function Idealizador() {
  return (
    <section className="section band-tint" id="idealizador">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Liderança e visão</div>
          <h2 className="h2">O idealizador</h2>
        </div>

        <div className="founder-wrap">
          <div className="founder-photo-col">
            <div className="founder-frame">
              <div className="founder-portrait">
                <Image
                  src={FOTO_CAIO.src}
                  alt={FOTO_CAIO.alt}
                  width={800}
                  height={1200}
                  sizes="(min-width: 860px) 350px, 80vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="founder-name">Caio Vinicius Basílio</h3>
            <span className="founder-role">CEO do Grupo All Party</span>
            <p>
              Idealizador do IPDCON, Caio lidera o Grupo All Party com a missão de transformar
              encontros corporativos em experiências memoráveis — unindo criatividade, tecnologia,
              planejamento e execução em uma única operação.
            </p>

            <blockquote className="quote-box">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>
                O mercado deixou de buscar apenas fornecedores de eventos. Hoje, as empresas
                procuram parceiros estratégicos capazes de entender seus objetivos e transformar
                encontros corporativos em experiências memoráveis que fortalecem cultura,
                relacionamento e posicionamento de marca. O IPDCON nasceu justamente para
                demonstrar essa capacidade de forma prática.
              </p>
              <cite>Caio Vinicius Basílio</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
