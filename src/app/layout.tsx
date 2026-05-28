import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VARTIA - Simulation de Port de Vêtements par Intelligence Artificielle",
  description: "Projet innovant réalisé dans le cadre de l'ISEA 2026 pour révolutionner l'expérience de conception vestimentaire grâce à l'IA. Essayez vos tenues traditionnelles et modernes virtuellement.",
  keywords: "VARTIA, ISEA 2026, Simulation de vêtement, Intelligence Artificielle, Mode africaine, Boubou, Wax, Agbada, Kente, Cotonou, Bénin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-dark-bg text-slate-100 font-sans selection:bg-brand-blue/30 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
