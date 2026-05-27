import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { site } from "./site-data";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Roboto_Slab({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Berlin barber demo`,
  description:
    "A static one-page demo site for a gentlemen's barber in Berlin Schöneberg.",
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
