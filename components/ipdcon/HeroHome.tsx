import Link from "next/link";
import { Imagem } from "./Imagem";
import { FOTO_HERO_HOME } from "@/lib/media";

export function HeroHome() {
  return (
    <section className="hero band-dark">
      <div className="hero-photo">
        <Imagem
          src={FOTO_HERO_HOME.src}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="hero-media" aria-hidden="true" />
      <div className="container hero-content">
        <div className="eyebrow">Evento proprietário · Grupo All Party</div>
        <h1 className="h1">IPDCON</h1>
        <p className="lead">
          Uma noite de networking, celebração e imersão no ecossistema de experiências que
          transforma encontros corporativos em momentos memoráveis.
        </p>
        <div className="actions">
          <Link className="btn" href="/ipdcon-2026">
            Veja como foi a 4ª edição
          </Link>
          <a className="btn btn--ghost" href="#trajetoria">
            Conheça a trajetória
          </a>
        </div>
      </div>
    </section>
  );
}
