"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Foto } from "@/lib/media";

export function GaleriaFotos({
  fotos,
  titulo = "Galeria do IPDCON",
}: {
  fotos: Foto[];
  titulo?: string;
}) {
  const [indice, setIndice] = useState<number | null>(null);
  const total = fotos.length;
  const aberta = indice !== null;

  const fechar = useCallback(() => setIndice(null), []);
  const ir = useCallback(
    (delta: number) => {
      setIndice((atual) => {
        if (atual === null) return atual;
        return (atual + delta + total) % total;
      });
    },
    [total]
  );

  useEffect(() => {
    if (!aberta) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") fechar();
      if (event.key === "ArrowLeft") ir(-1);
      if (event.key === "ArrowRight") ir(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [aberta, fechar, ir]);

  const fotoAtiva = indice !== null ? fotos[indice] : null;

  return (
    <>
      <div className="photo-grid" aria-label={titulo}>
        {fotos.map((foto, i) => (
          <button
            type="button"
            className="photo-item"
            key={foto.src}
            onClick={() => setIndice(i)}
            aria-label={`Ampliar: ${foto.alt}`}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(min-width: 860px) 33vw, (min-width: 560px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="photo-hint">Ampliar</span>
          </button>
        ))}
      </div>

      {fotoAtiva && indice !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos do IPDCON"
          onClick={fechar}
        >
          <button type="button" className="lightbox-btn lightbox-close" onClick={fechar} aria-label="Fechar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              ir(-1);
            }}
            aria-label="Foto anterior"
          >
            ←
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              ir(1);
            }}
            aria-label="Próxima foto"
          >
            →
          </button>

          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={fotoAtiva.src} alt={fotoAtiva.alt} />
            </div>
            <p className="lightbox-caption">
              {indice + 1} / {total}
              {fotoAtiva.legenda ? ` — ${fotoAtiva.legenda}` : ""}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
