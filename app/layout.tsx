import type { Metadata } from "next";
import { Inter, Playfair_Display, Fredoka } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoocamp - Lance ta communauté et commence à vendre",
  description:
    "La solution la plus simple pour transformer ton contenu en revenus durables. Crée ta formation, bâtis ta communauté et monétise ton expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} ${fredoka.variable} antialiased`}>{children}</body>
    </html>
  );
}
