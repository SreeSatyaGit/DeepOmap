import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Satya Nandivada | Machine Learning Engineer & Systems Biology Researcher",
  description: "Machine Learning Engineer and researcher building high-impact intelligent systems at the intersection of Deep Learning, GNNs, scRNA-seq, and Computational Systems Biology. Expert in PyTorch and Transformers.",
  keywords: "Machine Learning Engineer, ML Engineer, Satya Nandivada, Deep Learning, scRNA-seq, Computational Biology, GNN, PyTorch, Transformers, AI Research, Systems Biology Researcher, DeepOMAPNet",
  authors: [{ name: "Satya Nandivada" }],
  robots: "index, follow",
  icons: {
    icon: "/logo/logoDeepOmap.png",
    shortcut: "/logo/logoDeepOmap.png",
    apple: "/logo/logoDeepOmap.png",
  },
  openGraph: {
    title: "Satya Nandivada | Machine Learning Engineer & Systems Biology Researcher",
    description: "Machine Learning Engineer and researcher building high-impact intelligent systems at the intersection of Deep Learning, GNNs, scRNA-seq, and Computational Systems Biology.",
    type: "website",
    locale: "en_US",
    siteName: "Satya Nandivada Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satya Nandivada | Machine Learning Engineer",
    description: "Machine Learning Engineer specializing in scRNA-seq and Deep Learning systems.",
  }
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
