import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const headingSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodySans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Obsidian Elegance — Vishal Dogra",
  description:
    "Portfolio of Vishal Dogra — Crafting quiet power through code. Dark, elegant, intentional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingSerif.variable} ${bodySans.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
