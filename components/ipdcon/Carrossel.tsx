"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import type { Foto } from "@/lib/media";

/**
 * Carrossel horizontal com scroll-snap. A navegação por setas desloca a
 * viewport pela largura de um slide; arrastar e o teclado seguem nativos.
 */
export function Carrossel({ fotos, titulo }: { fotos: Foto[]; titulo: string }) {
  const viewport = useRef<HTMLDivElement>(null);

  const mover = useCallback((direcao: 1 | -1) => {
    const el = viewport.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".carousel-slide");
    const passo = slide ? slide.offsetWidth + 16 : el.clientWidth;
    el.scrollBy({ left: passo * direcao, behavior: "smooth" });
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-viewport"
        ref={viewport}
        tabIndex={0}
        role="group"
        aria-label={titulo}
      >
        {fotos.map((foto) => (
          <figure className="carousel-slide" key={foto.src}>
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(min-width: 860px) 760px, 82vw"
              className="object-cover"
            />
            {foto.legenda && <figcaption className="carousel-caption">{foto.legenda}</figcaption>}
          </figure>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-btn"
          onClick={() => mover(-1)}
          aria-label="Foto anterior"
        >
          ←
        </button>
        <button
          type="button"
          className="carousel-btn"
          onClick={() => mover(1)}
          aria-label="Próxima foto"
        >
          →
        </button>
      </div>
    </div>
  );
}
