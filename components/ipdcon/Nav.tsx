"use client";

import { useState } from "react";
import Link from "next/link";

export type NavLink = { label: string; href: string };

export function Nav({ links }: { links: NavLink[] }) {
  const [aberto, setAberto] = useState(false);

  const fechar = () => setAberto(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={fechar}>
          IPDCON
          <span className="brand-tag">Grupo All Party</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <nav className={`navlinks${aberto ? " is-open" : ""}`} aria-label="Navegação principal">
          {links.map(({ label, href }) =>
            href.startsWith("#") ? (
              <a key={label} href={href} onClick={fechar}>
                {label}
              </a>
            ) : (
              <Link key={label} href={href} onClick={fechar}>
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
