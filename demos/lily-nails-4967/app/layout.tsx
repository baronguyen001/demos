import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site } from "./site-data";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Ciutat Vella nail salon demo`,
  description:
    "A static one-page demo site for Lily Nails in Barcelona's Sant Pere area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.lang} className={`${body.variable} ${display.variable}`}>
      <head>
        <link rel="preload" as="image" href={site.heroImage.src} />
      </head>
      <body>{children}</body>
    </html>
  );
}
