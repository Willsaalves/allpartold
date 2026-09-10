import Image from "next/image";
import Link from "next/link";
import { FOTO_HERO_2026 } from "@/lib/media";

export function HeroEdicao() {
  return (
    <section className="hero band-dark">
      <div className="hero-photo">
        <Image
          src={FOTO_HERO_2026.src}
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
        <div className="eyebrow">4ª edição · 2026 · São Paulo</div>
        <h1 className="h1">IPDCON 2026</h1>
        <p className="lead">
          A quarta edição aconteceu e reuniu executivos, gestores de Marketing, Recursos Humanos,
          Comunicação, Eventos e Procurement em uma noite de networking, celebração e experiência.
        </p>
        <div className="actions">
          <a className="btn" href="#galeria">
            Ver a galeria
          </a>
          <Link className="btn btn--ghost" href="/">
            Conheça o IPDCON
          </Link>
        </div>
      </div>
    </section>
  );
}
