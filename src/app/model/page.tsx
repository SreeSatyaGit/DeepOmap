'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DeepLearningModelPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [isDragActive, setIsDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragActive(true);
    };

    const handleDragLeave = () => {
        setIsDragActive(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleRunModel = () => {
        if (!file) return;

        setIsUploading(true);
        // Simulate upload
        setTimeout(() => {
            setIsUploading(false);
            setIsProcessing(true);
            // Simulate processing
            setTimeout(() => {
                setIsProcessing(false);
                setShowResults(true);
            }, 3000);
        }, 1500);
    };

    const reset = () => {
        setFile(null);
        setShowResults(false);
        setIsProcessing(false);
        setIsUploading(false);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Header */}
            <header className="w-full bg-white text-[#0F172A] p-4 md:p-6 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-opacity-95 transition-all duration-300">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 hover:gap-4 transition-all duration-300 group">
                        <Image
                            src="/logo/logoDeepOmap.png"
                            alt="DeepOMAP Logo"
                            width={48}
                            height={48}
                            unoptimized
                            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                        />
                        <h1 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]">
                            DeepOMAP
                        </h1>
                    </Link>
                    <nav>
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors duration-300"
                        >
                            Back to Home
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                {/* Hero Area */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6">
                        Foundational Model <span className="text-[#0EA5E9]">Analysis</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Upload your single-cell datasets (RNA-seq, Proteomics) to leverage our neural foundational model for cell-type mapping, protein prediction, and disease state classification.
                    </p>
                </div>

                {!showResults ? (
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden relative">
                        {/* Background Decorative Element */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#0EA5E9]/5 rounded-full blur-3xl"></div>

                        {/* Upload Area */}
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={`border-2 border-dashed rounded-2xl p-10 md:p-20 text-center transition-all duration-300 cursor-pointer group relative
                ${isDragActive ? 'border-[#0EA5E9] bg-[#0EA5E9]/5' : 'border-gray-200 hover:border-[#0EA5E9]/50 hover:bg-gray-50'}`}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                                accept=".h5ad,.csv,.mtx,.txt"
                            />

                            <div className="mb-6 flex justify-center">
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500
                  ${file ? 'bg-[#50C878] scale-110' : 'bg-[#0EA5E9]/10 group-hover:scale-110'}`}>
                                    {file ? (
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-10 h-10 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            {file ? (
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{file.name}</h3>
                                    <p className="text-gray-500 text-sm">{(file.size / (1024 * 1024)).toFixed(2)} MB • Ready to process</p>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Drop your dataset here</h3>
                                    <p className="text-gray-500">Supports .h5ad, .csv, and .mtx formats</p>
                                </div>
                            )}
                        </div>

                        <div className="mt-10 flex flex-col items-center">
                            <button
                                onClick={handleRunModel}
                                disabled={!file || isUploading || isProcessing}
                                className={`px-10 py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg
                  ${!file || isUploading || isProcessing
                                        ? 'bg-gray-300 cursor-not-allowed shadow-none'
                                        : 'bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:scale-105 hover:shadow-xl active:scale-95'}`}
                            >
                                {isUploading ? 'Uploading...' : isProcessing ? 'Processing with AI...' : 'Run Foundational Model'}
                            </button>

                            {(isUploading || isProcessing) && (
                                <div className="mt-8 w-full max-w-md">
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#0EA5E9] transition-all duration-500 animate-progress"></div>
                                    </div>
                                    <p className="text-center mt-3 text-sm font-medium text-gray-500 uppercase tracking-widest">
                                        {isUploading ? 'Optimizing Data Streams' : 'Executing Neural Layers'}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            {[
                                { label: 'Model Version', value: 'DeepOMAP-v1.2' },
                                { label: 'Parameters', value: '1.4 Billion' },
                                { label: 'Architecture', value: 'GNN-Transformer' }
                            ].map((stat, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                                    <p className="text-[#0F172A] font-bold">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900">Analysis Results</h3>
                            <button
                                onClick={reset}
                                className="text-sm font-bold text-[#0EA5E9] hover:underline"
                            >
                                Clear & Upload New
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Predicted Visualization Placeholder */}
                            <div className="aspect-square bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden relative group">
                                <Image
                                    src="/images/Cell Landscape-1.png"
                                    alt="Result Visualization"
                                    fill
                                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/20 to-transparent">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">Umap Embedding Prediction</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-[#50C878]/5 border border-[#50C878]/20">
                                    <h4 className="text-sm font-bold text-[#50C878] uppercase tracking-wider mb-3">Model Confidence</h4>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-black text-gray-900">98.4</span>
                                        <span className="text-xl font-bold text-gray-500 mb-1">%</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Top Detected Categories</h4>
                                    {[
                                        { name: 'T-Cell Subtypes', score: 92 },
                                        { name: 'B-Cell Lineage', score: 85 },
                                        { name: 'Myeloid Progenitors', score: 78 }
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="font-semibold text-gray-700">{item.name}</span>
                                                <span className="font-bold text-[#0EA5E9]">{item.score}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#0EA5E9]" style={{ width: `${item.score}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full bg-[#0F172A] text-white py-4 rounded-xl font-bold hover:bg-black transition-all duration-300 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Report (.pdf)
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <footer className="py-12 border-t border-gray-100 bg-white mt-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} DeepOMAP. Powered by Vanaja Lab & The Roux Institute.
                    </p>
                </div>
            </footer>

            <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}
