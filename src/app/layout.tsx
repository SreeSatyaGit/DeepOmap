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
  title: "DeepOMAP - Revolutionizing Cancer Care with AI",
  description: "AI-powered diagnostic tool for early cancer detection and personalized treatment planning. Reducing turnaround times from weeks to hours.",
  keywords: "cancer diagnosis, AI healthcare, oncology, precision medicine, single-cell sequencing",
  authors: [{ name: "DeepOMAP Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "DeepOMAP - Revolutionizing Cancer Care with AI",
    description: "AI-powered diagnostic tool for early cancer detection and personalized treatment planning",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo/logoDeepOmap.png" />
        <link rel="apple-touch-icon" href="/logo/logoDeepOmap.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}