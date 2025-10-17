import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Satya Nandivada - AI Engineer, Researcher and Founding Engineer",
  description: "Building deep learning systems that decode cellular complexity and transform single-cell data into actionable discoveries for precision medicine.",
  keywords: "AI engineer, computational biology, deep learning, precision medicine, single-cell data, DeepOMAP, GAME LLC",
  authors: [{ name: "Satya Nandivada" }],
  robots: "index, follow",
  icons: {
    icon: "/logo/logoDeepOmap.png",
    shortcut: "/logo/logoDeepOmap.png",
    apple: "/logo/logoDeepOmap.png",
  },
  openGraph: {
    title: "Satya Nandivada - AI Engineer, Researcher and Founding Engineer",
    description: "Building deep learning systems that decode cellular complexity and transform single-cell data into actionable discoveries for precision medicine",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function SatyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
