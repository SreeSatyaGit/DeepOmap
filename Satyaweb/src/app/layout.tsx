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
  title: "Satya Bharadwaja Nandivada ",
  description: "Building deep learning systems that decode cellular complexity and transform single-cell data into actionable discoveries for precision medicine.",
  keywords: "AI engineer, computational biology, deep learning, precision medicine, single-cell data, DeepOMAP, GAME LLC",
  authors: [{ name: "Bharadwaja Nandivada" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Satya Bharadwaja Nandivada ",
    description: "Building deep learning systems that decode cellular complexity and transform single-cell data into actionable discoveries for precision medicine",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}