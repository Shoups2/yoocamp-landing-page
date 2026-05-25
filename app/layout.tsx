import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["800"],
});

const siteUrl = "https://yoocamp.com";
const title = "Yoocamp - Lance ta communauté et commence à vendre";
const description =
  "La solution la plus simple pour transformer ton contenu en revenus durables. Crée ta formation, bâtis ta communauté et monétise ton expertise.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Yoocamp",
    title,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Yoocamp" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6952E6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
