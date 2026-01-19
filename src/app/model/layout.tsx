import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DeepOMAP | Foundational AI Model Portal",
    description: "Access DeepOMAP's foundational AI model weights. Upload single-cell datasets to predict disease progression and treatment response.",
    keywords: "Foundational Model, AI Weights, Single Cell Analysis, scRNA-seq, Deep Learning, Cancer Research, DeepOMAP",
    openGraph: {
        title: "DeepOMAP | Foundational AI Model Portal",
        description: "Analyze single-cell datasets with our 1.4B parameter neural foundational model.",
        type: "website",
    },
};

export default function ModelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
