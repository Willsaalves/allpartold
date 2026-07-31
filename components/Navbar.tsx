"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Programação", href: "#programacao" },
  { label: "Local", href: "#local" },
  { label: "Inscrição", href: "#inscricao" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 section-container ${
        scrolled ? "bg-[rgba(8,8,16,0.92)] backdrop-blur-2xl border-b border-card-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between flex-wrap gap-x-3 gap-y-2 min-h-[68px] py-2">
        <a href="#top" className="font-montserrat font-black text-[1.05rem] tracking-[0.06em] flex items-baseline gap-[0.1rem]">
          <span className="text-white">IPD</span>
          <span className="text-purple">CON</span>
          <span className="font-mono text-muted text-[0.62rem] ml-2 font-normal">_2026</span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray text-xs tracking-[0.08em] uppercase font-medium transition-colors hover:text-pink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#inscricao"
            className="bg-gradient-to-br from-pink to-[#e030b0] text-white px-6 py-2 rounded-lg font-montserrat font-bold text-[0.72rem] tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(147,65,236,0.3)] transition-opacity hover:opacity-85"
          >
            Inscrever-se
          </a>
        </div>

        <a
          href="#inscricao"
          className="md:hidden bg-gradient-to-br from-pink to-[#e030b0] text-white px-4 py-2 rounded-lg font-montserrat font-bold text-[0.68rem] tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(147,65,236,0.3)]"
        >
          Inscrever-se
        </a>
      </div>
    </nav>
  );
}
