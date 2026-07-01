import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rudra Upasani",
    template: "%s | Rudra Upasani",
  },
  description: "Portfolio of Rudra Upasani, a Full Stack Developer and Freelancer building Cluezy.",
  keywords: ["Rudra Upasani", "Software Developer", "Freelancer", "Full Stack Developer", "Next.js", "React", "TypeScript", "Cluezy", "cluezy"],
  authors: [{ name: "Rudra Upasani", url: "https://rudraupasani.vercel.app" }],
  creator: "Rudra Upasani",
  metadataBase: new URL("https://rudraupasani.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rudraupasani.vercel.app",
    title: "Rudra Upasani",
    description: "Portfolio of Rudra Upasani, a Full Stack Developer and Freelancer building Cluezy.",
    siteName: "Rudra Upasani",
    images: [
      {
        url: "/opengraph-image1.png",
        width: 1200,
        height: 630,
        alt: "Rudra Upasani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Upasani",
    description: "Portfolio of Rudra Upasani, a Full Stack Developer and Freelancer.",
    images: ["/opengraph-image1.png"],
    creator: "@rudra_upasani",
  },
  icons: {
    icon: "/favicon.ico",
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
        <Analytics />
      </body>
    </html>
  );
}
