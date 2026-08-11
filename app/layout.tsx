import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ipdcon.allparty.com.br";

const title = "IPDCON 2026 — O encontro que vai transformar o mercado de formaturas e eventos";
const description =
  "4ª edição do IPDCON, o maior encontro de líderes do mercado de eventos educacionais e corporativos do Brasil. 15 de agosto de 2026, Espaço Hakka, São Paulo/SP. Inscreva-se gratuitamente.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "IPDCON",
    "IPDCON 2026",
    "All Party Eventos",
    "evento de formaturas",
    "evento corporativo",
    "networking eventos",
    "São Paulo",
  ],
  authors: [{ name: "Grupo All Party" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "IPDCON 2026",
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
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-inter bg-bg text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
