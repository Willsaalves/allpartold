"use client";

import { Imagem } from "./Imagem";
import { useState } from "react";
import { VIDEOS, embed, thumb } from "@/lib/videos";

/**
 * Vitrine de vídeos. Cada card começa como capa estática e só carrega o
 * player do YouTube depois do clique, mantendo a home leve.
 */
export function Videos() {
  const [tocando, setTocando] = useState<string | null>(null);

  return (
    <section className="section band-dark videos">
      <div className="container">
        <div className="eyebrow">Vitrine de vídeos</div>
        <h2 className="h2">Veja o IPDCON em movimento.</h2>
        <div className="videos-grid">
          {VIDEOS.map(({ id, titulo }) =>
            tocando === id ? (
              <div className="video-embed" key={id}>
                <iframe
                  src={embed(id)}
                  title={titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ) : (
              <button
                type="button"
                className="video-card"
                key={id}
                onClick={() => setTocando(id)}
                aria-label={`Reproduzir vídeo: ${titulo}`}
              >
                <Imagem
                  src={thumb(id)}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 860px) 50vw, 100vw"
                  className="object-cover"
                />
                <strong>{titulo}</strong>
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
