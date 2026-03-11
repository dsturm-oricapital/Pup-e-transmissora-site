import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "PuP-E Transmissora — Aquisição e Gestão de Ativos de Transmissão de Energia",
  description:
    "Retorno por meio da aquisição disciplinada, gestão eficiente e realocação de capital sustentável de ativos de transmissão de energia elétrica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorantGaramond.variable} ${ibmPlexSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
