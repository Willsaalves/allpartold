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
      <div className="relative text-center px-6 sm:px-8 pt-[clamp(4rem,18vh,9rem)] pb-[clamp(1.5rem,8vh,4rem)] max-w-[960px] w-full">
        <div className="inline-flex items-center gap-2 bg-[rgba(147,65,236,0.08)] border border-pink-border px-[1.1rem] py-[0.38rem] rounded-full mb-[clamp(1rem,6vh,2rem)]">
          <span className="w-[5px] h-[5px] rounded-full bg-pink shadow-[0_0_8px_#9341ec]" />
          <span className="mono-label text-gold">4ª Edição · 15.08.2026 · São Paulo</span>
        </div>

        <h1 className="font-montserrat font-black text-[clamp(1.75rem,min(14vw,20vh),10rem)] leading-[0.9] tracking-[-0.03em] mb-[clamp(0.75rem,5vh,1.75rem)] text-white">
          IPD<span className="text-purple [text-shadow:0_0_40px_rgba(109,4,215,0.5)]">CON</span>
          <br />
          <span className="block text-[0.28em] font-bold font-mono text-[#cb1696] tracking-[0.15em] mt-2">
            {yearDisplay}
          </span>
        </h1>

        <p className="font-inter text-[clamp(1rem,2.2vw,1.25rem)] font-light text-gray max-w-[600px] mx-auto mb-[clamp(1.5rem,7vh,3rem)] leading-[1.7]">
          O encontro que vai transformar
          <br />
          <strong className="text-white font-semibold">o mercado de formaturas e eventos</strong>
        </p>

        <div className="relative w-full h-px mb-[clamp(1.5rem,7vh,3rem)] opacity-40" aria-hidden="true">
          <div
            className="absolute left-1/2 top-0 h-px w-screen -translate-x-1/2"
            style={{ background: "linear-gradient(90deg, transparent, #9341ec, transparent)" }}
          />
        </div>

        <div className="flex justify-center">
          <a
            href="#inscricao"
            className="inline-block bg-[linear-gradient(135deg,#d4af37_0%,#f0d060_50%,#d4af37_100%)] text-[#0a0808] px-6 sm:px-11 py-4 rounded-lg font-montserrat font-extrabold text-[0.82rem] tracking-[0.15em] uppercase shadow-[0_0_28px_rgba(212,175,55,0.45)] transition-all hover:-translate-y-[3px] hover:shadow-[0_8px_40px_rgba(212,175,55,0.6)]"
          >
            Quero participar
          </a>
        </div>

        <div className="mt-[clamp(1.5rem,11vh,5rem)] flex flex-col items-center gap-2 opacity-40 [@media(max-height:480px)]:hidden">
          <div className="w-px h-9 bg-[linear-gradient(180deg,#9341ec,transparent)]" />
        </div>
      </div>
    </section>
  );
}
