import type { Metadata } from "next";
import { Nav, type NavLink } from "@/components/ipdcon/Nav";
import { HeroHome } from "@/components/ipdcon/HeroHome";
import { Showcase } from "@/components/ipdcon/Showcase";
import { Idealizador } from "@/components/ipdcon/Idealizador";
import { Objetivos } from "@/components/ipdcon/Objetivos";
import { Ecossistema } from "@/components/ipdcon/Ecossistema";
import { Trajetoria } from "@/components/ipdcon/Trajetoria";
import { CaseEdicao } from "@/components/ipdcon/CaseEdicao";
import { GaleriaHome } from "@/components/ipdcon/GaleriaHome";
import { SobreGrupo } from "@/components/ipdcon/SobreGrupo";
import { CtaFinal } from "@/components/ipdcon/CtaFinal";
import { SiteFooter } from "@/components/ipdcon/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ipdcon.allparty.com.br";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const NAV_LINKS: NavLink[] = [
  { label: "O que é", href: "#conceito" },
  { label: "Para que serve", href: "#objetivos" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Edições", href: "#trajetoria" },
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
        <Showcase />
        <Idealizador />
        <Objetivos />
        <Ecossistema />
        <Trajetoria />
        <CaseEdicao />
        <GaleriaHome />
        <SobreGrupo />
        <CtaFinal />
      </main>

      <SiteFooter />
    </>
  );
}
