import Image from "next/image";
import { FOTO_HERO_HOME } from "@/lib/media";

export function HeroHome() {
  return (
    <section className="hero hero--center band-dark" id="inicio">
      <div className="hero-photo">
        <Image
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
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Evento proprietário • Desde 2023
        </div>
        <h1 className="h1">IPDCON</h1>
        <p className="hero-subtitle">O evento autoral do Grupo All Party</p>
        <p className="lead">
          Uma noite de networking, celebração e imersão no ecossistema de experiências que
          transforma encontros corporativos em momentos memoráveis.
        </p>
        <div className="actions">
          <a className="btn" href="#trajetoria">
            Conheça a trajetória
          </a>
        </div>
      </div>
    </section>
  );
}
