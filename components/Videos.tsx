"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_IDS = [
  "vu6z3hU2ZqE",
  "5OMOmApOSX4",
  "q9co2iNlA_c",
  "xFfn-aw1iq4",
] as const;

const ACCENTS = [
  { border: "border-pink-border", corner: "border-pink", glow: "hover:shadow-[0_20px_60px_rgba(147,65,236,0.2)]" },
  { border: "border-gold-border", corner: "border-gold", glow: "hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]" },
  { border: "border-gold-border", corner: "border-gold", glow: "hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]" },
  { border: "border-pink-border", corner: "border-pink", glow: "hover:shadow-[0_20px_60px_rgba(147,65,236,0.2)]" },
] as const;

function embedSrc(id: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id,
    controls: "0",
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function VideoFrame({
  id,
  accent,
}: {
  id: string;
  accent: (typeof ACCENTS)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { rootMargin: "120px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative group transition-all duration-500 ${accent.glow}`}>
      <div
        className={`absolute -top-3 -right-3 bottom-3 left-3 border ${accent.border} rounded-2xl z-0`}
        aria-hidden="true"
      />

      <div
        className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 ${accent.corner} z-20 opacity-70`}
        aria-hidden="true"
      />
      <div
        className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 ${accent.corner} z-20 opacity-70`}
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 ${accent.corner} z-20 opacity-70`}
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 ${accent.corner} z-20 opacity-70`}
        aria-hidden="true"
      />

      <div
        className={`relative z-10 overflow-hidden rounded-2xl bg-card border ${accent.border} aspect-video`}
      >
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
            accent.corner.includes("pink") ? "from-pink" : "from-gold"
          } to-transparent z-10`}
          aria-hidden="true"
        />

        {active ? (
          <iframe
            src={embedSrc(id)}
            title=""
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={false}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-card" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}

export function Videos() {
  return (
    <section className="relative overflow-hidden bg-surface section-container py-24 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(147,65,236,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(109,4,215,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {VIDEO_IDS.map((id, i) => (
            <VideoFrame key={id} id={id} accent={ACCENTS[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
