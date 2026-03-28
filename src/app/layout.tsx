import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Auto Yousfi | Premium Imported Cars",
  description: "Drive your dream car from Europe to Algeria. Exclusive showroom for luxury and premium vehicles.",
};


import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContact } from "@/components/ui/StickyContact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>


  );
}
