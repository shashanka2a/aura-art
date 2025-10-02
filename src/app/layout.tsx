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
  title: "Aura Art - AI meets creativity",
  description: "The ultimate creative platform combining stunning templates, powerful editing tools, and intelligent AI assistance. Create professional content in seconds, not hours.",
  keywords: ["AI", "creative", "templates", "editing", "design", "art", "content creation"],
  authors: [{ name: "Aura Art Team" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Aura Art - AI meets creativity",
    description: "The ultimate creative platform combining stunning templates, powerful editing tools, and intelligent AI assistance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Art - AI meets creativity",
    description: "The ultimate creative platform combining stunning templates, powerful editing tools, and intelligent AI assistance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
