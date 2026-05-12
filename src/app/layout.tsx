import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dranzo — We build B2B products that ship",
  description:
    "Dranzo is an IT product company crafting premium B2B software: Mr.Fiber (OLT Management), DeskHub (workflow automation) and Clariva (private consultation).",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Dranzo — B2B Product Studio",
    description:
      "Premium B2B products: Mr.Fiber, DeskHub, Clariva. Built, not configured.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground grain">{children}</body>
    </html>
  );
}
