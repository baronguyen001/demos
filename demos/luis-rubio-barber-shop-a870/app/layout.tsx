import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luis Rubio Barber Shop | Salamanca Barber Demo",
  description:
    "A polished one-page demo site for Luis Rubio Barber Shop in Barrio de Salamanca, Madrid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link
          rel="preload"
          as="image"
          media="(max-width: 700px)"
          href="https://images.unsplash.com/photo-1536520002442-39764a41e987?auto=format&fit=crop&w=640&q=45"
        />
        <link
          rel="preload"
          as="image"
          media="(min-width: 701px)"
          href="https://images.unsplash.com/photo-1536520002442-39764a41e987?auto=format&fit=crop&w=1200&q=68"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
