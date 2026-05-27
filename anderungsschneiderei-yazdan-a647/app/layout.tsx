import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "./site-data";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Hamburg alterations demo`,
  description:
    "A static one-page demo site for a tailor in Hamburg Uhlenhorst.",
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
