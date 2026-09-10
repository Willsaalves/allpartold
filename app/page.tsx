import type { Metadata } from "next";
import { Nav, type NavLink } from "@/components/ipdcon/Nav";
import { HeroHome } from "@/components/ipdcon/HeroHome";
import { GalleryStrip } from "@/components/ipdcon/GalleryStrip";
import { Statement } from "@/components/ipdcon/Statement";
import { Showcase } from "@/components/ipdcon/Showcase";
import { Objetivos } from "@/components/ipdcon/Objetivos";
import { Ecossistema } from "@/components/ipdcon/Ecossistema";
import { Ticker } from "@/components/ipdcon/Ticker";
import { Diferenciais } from "@/components/ipdcon/Diferenciais";
import { Videos } from "@/components/ipdcon/Videos";
import { Trajetoria } from "@/components/ipdcon/Trajetoria";
import { CaseEdicao } from "@/components/ipdcon/CaseEdicao";
import { CtaFinal } from "@/components/ipdcon/CtaFinal";
import { SiteFooter } from "@/components/ipdcon/SiteFooter";
import { FOTOS_2026 } from "@/lib/media";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ipdcon.allparty.com.br";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const NAV_LINKS: NavLink[] = [
  { label: "Conceito", href: "#conceito" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "4ª edição", href: "#edicao" },
  { label: "Sobre", href: "#sobre" },
];

const eventSeriesJsonLd = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  name: "IPDCON",
  description:
    "Evento autoral do Grupo All Party: uma noite de networking, celebração e imersão no ecossistema de experiências corporativas.",
  organizer: {
    "@type": "Organization",
    name: "Grupo All Party",
    url: "https://www.allpartyeventos.com.br/",
  },
  url: siteUrl,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSeriesJsonLd) }}
      />
      <Nav links={NAV_LINKS} />

      <main id="top">
        <HeroHome />
        <GalleryStrip fotos={FOTOS_2026} />
        <Statement />
        <Showcase />
        <Objetivos />
        <Ecossistema />
        <Ticker
          items={[
            "Experiência",
            "Networking",
            "Corporate",
            "Relacionamento",
            "Inovação",
            "Negócios",
          ]}
        />
        <Diferenciais />
        <Videos />
        <Trajetoria />
        <Ticker items={["2023", "2024", "2025", "2026", "IPDCON", "Grupo All Party"]} />
        <CaseEdicao />
        <CtaFinal />
      </main>

      <SiteFooter />
    </>
  );
}
