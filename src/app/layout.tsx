import type { Metadata, Viewport } from "next";
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
  robots: "index, follow",
  icons: {
    icon: "/logo/logoDeepOmap.png",
    shortcut: "/logo/logoDeepOmap.png",
    apple: "/logo/logoDeepOmap.png",
  },
  openGraph: {
    title: "DeepOMAP - Revolutionizing Cancer Care with AI",
    description: "AI-powered diagnostic tool for early cancer detection and personalized treatment planning",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}