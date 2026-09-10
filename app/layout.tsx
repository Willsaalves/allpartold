import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ipdcon.allparty.com.br";

const title = "IPDCON — Grupo All Party";
const description =
  "IPDCON — Evento autoral do Grupo All Party. Networking, celebração e imersão no ecossistema de experiências corporativas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — IPDCON",
  },
  description,
  keywords: [
    "IPDCON",
    "Grupo All Party",
    "All Party Corporate",
    "evento corporativo",
    "networking executivo",
    "Treme Terra Audiovisual",
    "AP7 Photo",
    "São Paulo",
  ],
  authors: [{ name: "Grupo All Party" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "IPDCON",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${montserrat.variable}`}>
      <body className="corporativo-page">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
