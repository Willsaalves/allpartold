import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SobreEvento } from "@/components/SobreEvento";
import { Estrutura } from "@/components/Estrutura";
import { Lancamento } from "@/components/Lancamento";
import { Servicos } from "@/components/Servicos";
import { Local } from "@/components/Local";
import { GrupoAllParty } from "@/components/GrupoAllParty";
import { Formulario } from "@/components/Formulario";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ipdcon.allparty.com.br";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "IPDCON 2026",
  description:
    "4ª edição do IPDCON, o maior encontro de líderes do mercado de eventos educacionais e corporativos do Brasil.",
  startDate: "2026-08-15",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Espaço Hakka",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua São Joaquim, 460 — Liberdade",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Grupo All Party",
    url: siteUrl,
  },
  url: siteUrl,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <SobreEvento />
        <Estrutura />
        <Lancamento />
        <Servicos />
        <Local />
        <GrupoAllParty />
        <Formulario />
      </main>
      <Footer />
    </>
  );
}
