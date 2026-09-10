import type { Metadata } from "next";
import { Nav, type NavLink } from "@/components/ipdcon/Nav";
import { HeroEdicao } from "@/components/ipdcon/HeroEdicao";
import { MateriaCaio } from "@/components/ipdcon/MateriaCaio";
import { NumerosEdicao } from "@/components/ipdcon/NumerosEdicao";
import { GaleriaEdicao } from "@/components/ipdcon/GaleriaEdicao";
import { Ticker } from "@/components/ipdcon/Ticker";
import { CtaFinal } from "@/components/ipdcon/CtaFinal";
import { SiteFooter } from "@/components/ipdcon/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ipdcon.allparty.com.br";

const title = "IPDCON 2026 — 4ª edição";
const description =
  "Retrospectiva da 4ª edição do IPDCON: mais de 320 lideranças reunidas em São Paulo para uma noite de networking, celebração e imersão no ecossistema do Grupo All Party.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ipdcon-2026",
  },
  openGraph: {
    title: `${title} — IPDCON`,
    description,
    url: `${siteUrl}/ipdcon-2026`,
    siteName: "IPDCON",
    locale: "pt_BR",
    type: "article",
  },
};

const NAV_LINKS: NavLink[] = [
  { label: "Matéria", href: "#materia" },
  { label: "Números", href: "#numeros" },
  { label: "Galeria", href: "#galeria" },
  { label: "O IPDCON", href: "/" },
  { label: "Sobre", href: "#sobre" },
];

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "IPDCON 2026",
  description,
  startDate: "2026-08-15T19:00:00-03:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "São Paulo",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  },
  superEvent: {
    "@type": "EventSeries",
    name: "IPDCON",
    url: siteUrl,
  },
  organizer: {
    "@type": "Organization",
    name: "Grupo All Party",
    url: "https://www.allpartyeventos.com.br/",
  },
  url: `${siteUrl}/ipdcon-2026`,
};

export default function Ipdcon2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Nav links={NAV_LINKS} />

      <main id="top">
        <HeroEdicao />
        <MateriaCaio />
        <NumerosEdicao />
        <GaleriaEdicao />
        <Ticker
          items={[
            "All Party Formatura",
            "All Party Corporate",
            "Treme Terra Audiovisual",
            "AP7 Photo",
          ]}
        />
        <CtaFinal />
      </main>

      <SiteFooter />
    </>
  );
}
