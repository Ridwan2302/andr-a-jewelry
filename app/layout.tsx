import type { Metadata } from "next";
import { Alex_Brush, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andréa Jewelry · Bijoux acier inoxydable & plaqué or à Abidjan",
  description:
    "Andréa Jewelry — bijoux en acier inoxydable et plaqué or, sélectionnés à Abidjan. Colliers, boucles d'oreilles et bracelets, livrés en Côte d'Ivoire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${jost.variable} ${alexBrush.variable}`}
    >
      <body className="font-sans text-ink bg-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
