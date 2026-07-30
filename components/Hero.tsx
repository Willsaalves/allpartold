"use client";

import { useEffect, useState } from "react";

const GLITCH_CHARS = "01アイウエオ∑∆Ωβ#@%&";
const randChar = () => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];

export function Hero() {
  const [yearDisplay, setYearDisplay] = useState("2026");

  useEffect(() => {
    let tick = 0;
    const id = setInterval(() => {
      tick += 1;
      setYearDisplay(
        tick % 40 < 3
          ? randChar() + randChar() + randChar() + randChar()
          : "2026"
      );
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      <div
        className="absolute inset-0 bg-cover bg-[position:center_top]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1784542471032-9ba2b8386ca7?w=1920&h=1080&fit=crop&auto=format)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,16,0.7) 0%, rgba(8,8,16,0.82) 50%, rgba(8,8,16,0.97) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(147,65,236,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(147,65,236,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute left-0 right-0 h-px opacity-40"
        style={{
          background: "linear-gradient(90deg, transparent, #9341ec, transparent)",
          top: "45%",
        }}
      />

      <div className="relative text-center px-8 pt-36 pb-16 max-w-[960px] w-full">
        <div className="inline-flex items-center gap-2 bg-[rgba(147,65,236,0.08)] border border-pink-border px-[1.1rem] py-[0.38rem] rounded-sm mb-8">
          <span className="w-[5px] h-[5px] rounded-full bg-pink shadow-[0_0_8px_#9341ec]" />
          <span className="mono-label text-gold">4ª Edição · 15.08.2026 · São Paulo</span>
        </div>

        <h1 className="font-montserrat font-black text-[clamp(4.5rem,14vw,10rem)] leading-[0.9] tracking-[-0.03em] mb-7 text-white">
          IPD<span className="text-purple [text-shadow:0_0_40px_rgba(109,4,215,0.5)]">CON</span>
          <br />
          <span className="block text-[0.28em] font-bold font-mono text-[#cb1696] tracking-[0.15em] mt-2">
            {yearDisplay}
          </span>
        </h1>

        <p className="font-inter text-[clamp(1rem,2.2vw,1.25rem)] font-light text-gray max-w-[600px] mx-auto mb-12 leading-[1.7]">
          O encontro que vai transformar
          <br />
          <strong className="text-white font-semibold">o mercado de formaturas e eventos</strong>
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#inscricao"
            className="inline-block bg-[linear-gradient(135deg,#d4af37_0%,#f0d060_50%,#d4af37_100%)] text-[#0a0808] px-11 py-4 rounded-[3px] font-montserrat font-extrabold text-[0.82rem] tracking-[0.15em] uppercase shadow-[0_0_28px_rgba(212,175,55,0.45)] transition-all hover:-translate-y-[3px] hover:shadow-[0_8px_40px_rgba(212,175,55,0.6)]"
          >
            Quero participar
          </a>
          <a
            href="#programacao"
            className="inline-block border border-pink-border text-pink px-9 py-4 rounded-[3px] font-montserrat font-semibold text-[0.82rem] tracking-[0.1em] uppercase transition-colors hover:bg-pink-dim hover:border-pink"
          >
            Ver programação
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <span className="mono-label text-muted">scroll</span>
          <div className="w-px h-9 bg-[linear-gradient(180deg,#9341ec,transparent)]" />
        </div>
      </div>
    </section>
  );
}
