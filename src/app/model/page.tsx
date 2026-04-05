'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type DemoTab = 'report' | 'umap' | 'proteins' | 'genes';

const PROCESSING_STEPS = [
    'Loading patient sample (AML-0137)…',
    'Normalizing RNA + protein expression…',
    'Building cell-cell interaction graph…',
    'Running GATWithTransformerFusion…',
    'Predicting ADT surface protein levels…',
    'Classifying AML subtype & risk signal…',
    'Generating UMAP embeddings…',
    'Compiling clinical report…',
    'Analysis complete.',
];

const CELL_TYPES = [
    { name: 'AML Blast Cells', pct: 61, color: '#EF4444', clinical: 'Malignant progenitors — primary diagnostic target' },
    { name: 'Monocyte-derived', pct: 18, color: '#F97316', clinical: 'Dysplastic monocytic lineage — common in AML-M4/M5' },
    { name: 'T-Cell Effectors', pct: 11, color: '#0EA5E9', clinical: 'Residual immune response — suppressed in AML' },
    { name: 'Normal Progenitors', pct: 6, color: '#50C878', clinical: 'Healthy stem cell reserve' },
    { name: 'B-Cell Lineage', pct: 4, color: '#8B5CF6', clinical: 'Normal fraction — unaffected compartment' },
];

const PROTEIN_MARKERS = [
    { name: 'CD34', value: 3.82, ref: '< 1.0', flag: true, note: 'Stem cell marker — elevated in blast cells' },
    { name: 'CD117 (c-Kit)', value: 4.41, ref: '< 0.8', flag: true, note: 'AML-associated receptor tyrosine kinase' },
    { name: 'CD33', value: 5.10, ref: '< 1.5', flag: true, note: 'Myeloid antigen — therapeutic target (Gemtuzumab)' },
    { name: 'HLA-DR', value: 1.20, ref: '> 2.0', flag: true, note: 'Reduced expression — associated with FLT3-ITD and poor prognosis' },
    { name: 'CD3', value: 0.31, ref: '> 0.5', flag: false, note: 'T-cell marker — diminished but within AML range' },
    { name: 'CD19', value: 0.18, ref: '> 0.4', flag: false, note: 'B-cell marker — expected low in AML' },
];

/* ─── Clinical Report Component ──────────────────────────────────────────── */
function ClinicalReport({ animateBars }: { animateBars: boolean }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden font-sans text-[#0F172A]">

            {/* Report title bar */}
            <div className="bg-[#1E293B] px-6 py-3">
                <h2 className="text-white font-bold text-base tracking-wide">
                    DeepOMAP Overnight Companion Diagnostic Report
                </h2>
            </div>

            {/* Patient meta strip */}
            <div className="bg-gray-100 border-b border-gray-300 px-6 py-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-600 font-medium">
                <span><strong className="text-gray-800">Patient ID:</strong> AML-0137</span>
                <span><strong className="text-gray-800">Specimen:</strong> Bone marrow aspirate (banked, de-identified)</span>
                <span><strong className="text-gray-800">Assay:</strong> scRNA-seq (+/- CITE-seq)</span>
                <span><strong className="text-gray-800">Report date:</strong> 2026-04-05</span>
                <span><strong className="text-gray-800">Turnaround:</strong> &lt;24h target</span>
            </div>

            {/* Three-column summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">

                {/* Col 1 — Patient-level summary */}
                <div className="p-5">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3 border-b border-red-100 pb-2">
                        Patient-level summary
                    </p>
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-0.5">Malignant burden (estimated):</p>
                        <div className="flex items-end gap-2">
                            <span className="text-5xl font-black text-[#0F172A] leading-none">85%</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Uncertainty: 82–88% (bootstrap CI)</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>0%</span><span>100%</span>
                        </div>
                        <div className="h-5 bg-gray-100 rounded overflow-hidden border border-gray-200 relative">
                            <div
                                className="h-full bg-red-500 transition-all duration-1500 ease-out"
                                style={{ width: animateBars ? '85%' : '0%' }}
                            />
                            <div
                                className="absolute top-0 h-full bg-green-400 transition-all duration-1500 ease-out"
                                style={{ left: animateBars ? '85%' : '100%', width: '15%' }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Normal cell fraction: 15% (T/NK/mono mix)</p>
                    </div>
                </div>

                {/* Col 2 — Subtype / risk signal */}
                <div className="p-5">
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3 border-b border-orange-100 pb-2">
                        Subtype / risk signal
                    </p>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Subtype signal:</p>
                            <p className="text-sm font-bold text-[#0F172A]">AML-like (myeloid blast program)</p>
                            <div className="flex items-center gap-3 mt-2">
                                <p className="text-xs text-gray-400">Confidence:</p>
                                <span className="text-2xl font-black text-orange-600">0.81</span>
                            </div>
                        </div>
                        <div className="border-t border-gray-100 pt-4">
                            <p className="text-xs text-gray-500 mb-1">Risk signal:</p>
                            <p className="text-sm font-bold text-[#0F172A]">Adverse-like</p>
                            <div className="flex items-center gap-3 mt-2">
                                <p className="text-xs text-gray-400">Confidence:</p>
                                <span className="text-2xl font-black text-red-600">0.74</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Col 3 — Predicted antigen status */}
                <div className="p-5">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 border-b border-blue-100 pb-2">
                        Predicted antigen status
                    </p>
                    <div className="space-y-4">
                        {[
                            { name: 'CD33', level: 'High', conf: 0.86, pct: 86, color: '#EF4444' },
                            { name: 'CD123', level: 'Intermediate', conf: 0.78, pct: 78, color: '#F97316' },
                            { name: 'CD34', level: 'High', conf: 0.91, pct: 91, color: '#EF4444' },
                        ].map((ag, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-sm font-bold">{ag.name}</span>
                                    <span className="text-xs font-bold" style={{ color: ag.color }}>{ag.level}</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                            width: animateBars ? `${ag.pct}%` : '0%',
                                            backgroundColor: ag.color,
                                            transitionDelay: `${i * 150}ms`,
                                        }}
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5">Confidence: {ag.conf}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Explanation + QC panel */}
            <div className="border-t-2 border-gray-200 bg-gray-50">
                <div className="px-6 py-2 bg-gray-200">
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Concise explanation + QC / failure-mode flags&nbsp;
                        <span className="font-normal normal-case text-gray-500">(for clinician interpretation)</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 px-0">

                    {/* Key drivers — Antigen */}
                    <div className="p-5">
                        <p className="text-xs font-bold text-gray-700 mb-2">Key drivers (example) — Antigen prediction</p>
                        <ul className="text-xs text-gray-600 space-y-1.5">
                            <li className="flex gap-1.5"><span className="text-gray-400 flex-shrink-0">•</span>Feature set indicates myeloid blast differentiation program</li>
                            <li className="flex gap-1.5"><span className="text-gray-400 flex-shrink-0">•</span>Elevated marker-associated gene modules (e.g., myeloid lineage genes)</li>
                            <li className="flex gap-1.5"><span className="text-gray-400 flex-shrink-0">•</span>Consistent signal across malignant cluster (low intra-cluster variance)</li>
                        </ul>
                        <div className="mt-3 border-t border-gray-200 pt-3">
                            <p className="text-xs text-gray-500 mb-1">Top contributing features:</p>
                            <ol className="text-xs text-gray-600 space-y-0.5 list-decimal list-inside">
                                <li>HOXA9 / myeloid lineage module</li>
                                <li>CD33 / CD34 co-expression module</li>
                                <li>FLT3 / KIT signaling module</li>
                            </ol>
                        </div>
                    </div>

                    {/* Key drivers — Subtype/risk */}
                    <div className="p-5">
                        <p className="text-xs font-bold text-gray-700 mb-2">Key drivers — Subtype/risk</p>
                        <div className="space-y-3 text-xs text-gray-600">
                            <div>
                                <p className="font-semibold text-gray-700 mb-1">Subtype signal supported by:</p>
                                <ul className="space-y-1">
                                    <li className="flex gap-1.5"><span className="text-gray-400 flex-shrink-0">•</span>Feature D (blast-like program)</li>
                                    <li className="flex gap-1.5"><span className="text-gray-400 flex-shrink-0">•</span>Feature E (proliferation module)</li>
                                </ul>
                            </div>
                            <div className="border-t border-gray-200 pt-3">
                                <p className="font-semibold text-gray-700 mb-1">Risk signal supported by:</p>
                                <ul className="space-y-1">
                                    <li className="flex gap-1.5"><span className="text-gray-400 flex-shrink-0">•</span>WT1 overexpression (stress/DNA damage)</li>
                                    <li className="flex gap-1.5"><span className="text-gray-400 flex-shrink-0">•</span>GATA2/RUNX1 disruption (stem-like state)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* QC flags */}
                    <div className="p-5">
                        <p className="text-xs font-bold text-gray-700 mb-2">QC / flags</p>
                        <div className="space-y-1 text-xs">
                            {[
                                { label: 'Sample QC', val: 'PASS', ok: true },
                                { label: 'Cell count', val: 'OK', ok: true },
                                { label: 'RNA QC', val: 'OK', ok: true },
                                { label: 'Batch effect', val: 'NO', ok: true },
                                { label: 'OOD check', val: 'NO', ok: true },
                                { label: 'Uncertainty', val: 'OK', ok: true },
                            ].map((q, i) => (
                                <div key={i} className="flex justify-between">
                                    <span className="text-gray-500">{q.label}:</span>
                                    <span className={`font-bold ${q.ok ? 'text-green-600' : 'text-red-600'}`}>{q.val}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 border-t border-gray-200 pt-3">
                            <p className="text-xs font-semibold text-gray-700 mb-1">Failure-mode flags:</p>
                            <div className="space-y-1 text-xs">
                                {[
                                    { label: 'Low-confidence', val: 'NO', ok: true },
                                    { label: 'QC fail', val: 'NO', ok: true },
                                    { label: 'Discordant', val: 'CHECK', ok: false },
                                ].map((f, i) => (
                                    <div key={i} className="flex justify-between">
                                        <span className="text-gray-500">{f.label}:</span>
                                        <span className={`font-bold ${f.ok ? 'text-green-600' : 'text-yellow-600'}`}>{f.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

/* ─── Main Page ───────────────────────────────────────────────────────────── */
export default function DeepLearningModelPage() {
    const [demoState, setDemoState] = useState<'idle' | 'processing' | 'results'>('idle');
    const [stepIndex, setStepIndex] = useState(0);
    const [activeTab, setActiveTab] = useState<DemoTab>('report');
    const [animateBars, setAnimateBars] = useState(false);

    const runDemo = () => {
        setDemoState('processing');
        setStepIndex(0);
    };

    const reset = () => {
        setDemoState('idle');
        setStepIndex(0);
        setActiveTab('report');
        setAnimateBars(false);
    };

    useEffect(() => {
        if (demoState !== 'processing') return;
        if (stepIndex < PROCESSING_STEPS.length - 1) {
            const t = setTimeout(() => setStepIndex(i => i + 1), 600);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => {
                setDemoState('results');
                setTimeout(() => setAnimateBars(true), 400);
            }, 700);
            return () => clearTimeout(t);
        }
    }, [demoState, stepIndex]);

    const tabs: { id: DemoTab; label: string }[] = [
        { id: 'report', label: 'Clinical Report' },
        { id: 'umap', label: 'Cell Landscape' },
        { id: 'proteins', label: 'Protein Markers' },
        { id: 'genes', label: 'Gene Signals' },
    ];

    return (
        <div className="min-h-screen bg-[#F0F4F8]">

            {/* Header */}
            <header className="w-full bg-white px-4 md:px-6 py-4 sticky top-0 z-50 shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/logo/logoDeepOmap.png"
                            alt="DeepOMAP Logo"
                            width={44}
                            height={44}
                            unoptimized
                            className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                        />
                        <div>
                            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] leading-none">
                                DeepOMAP
                            </h1>
                            <p className="text-xs text-gray-400 font-medium">AI-Powered Hematologic Oncology</p>
                        </div>
                    </Link>
                    <div className="flex items-center gap-5">
                        <span className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            Live Demo — Patient AML-0137
                        </span>
                        <Link href="/" className="text-sm text-gray-500 hover:text-[#0EA5E9] font-medium transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">

                {/* ── IDLE ─────────────────────────────────────────────── */}
                {demoState === 'idle' && (
                    <div className="space-y-12">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0284C7] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                                Proof of Concept · Bone Marrow Analysis
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-5 leading-tight">
                                AML Detection from<br />
                                <span className="text-[#0EA5E9]">Single-Cell Data</span>
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                DeepOMAP processes raw single-cell RNA and protein expression from a bone marrow aspirate,
                                identifies malignant cell populations, predicts surface protein markers, and generates a
                                clinician-facing diagnostic report — in seconds.
                            </p>
                            <button
                                onClick={runDemo}
                                className="px-10 py-4 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-base"
                            >
                                Run Demo →
                            </button>
                            <p className="mt-4 text-xs text-gray-400">
                                Pre-loaded: de-identified bone marrow sample
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Seconds, Not Weeks', body: 'Traditional flow cytometry panels take 5–14 days for full characterization. DeepOMAP delivers a comprehensive cell-type and protein landscape in under 60 seconds.', accent: '#0EA5E9' },
                                { title: 'Clinically Actionable', body: 'Outputs map directly to standard AML classification (FAB/WHO) and surface proteins targeted by approved therapies — gemtuzumab, venetoclax, ivosidenib.', accent: '#50C878' },
                                { title: 'Beyond Bulk Sequencing', body: 'Single-cell resolution exposes heterogeneous blast populations missed by bulk RNA-seq, enabling detection of minimal residual disease and therapy-resistant subclones.', accent: '#8B5CF6' },
                            ].map((card, i) => (
                                <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-base font-bold text-[#0F172A] mb-2">{card.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Demo Sample Profile</h3>
                                <span className="text-xs text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full border border-red-100">Unanalyzed</span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { label: 'Patient ID', value: 'AML-0137' },
                                    { label: 'Specimen', value: 'Bone Marrow Aspirate' },
                                    { label: 'Cells Captured', value: '8,412' },
                                    { label: 'Assay', value: 'scRNA-seq + CITE-seq' },
                                    { label: 'RNA Features', value: '33,538 genes' },
                                    { label: 'Protein Panel', value: '25 ADT markers' },
                                    { label: 'Collection Date', value: 'De-identified' },
                                    { label: 'Reference Dx', value: 'AML — pending AI report' },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <p className="text-xs text-gray-400 font-semibold mb-1">{item.label}</p>
                                        <p className="text-sm font-bold text-[#0F172A]">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── PROCESSING ───────────────────────────────────────── */}
                {demoState === 'processing' && (
                    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-10">
                        <div className="relative w-24 h-24">
                            <div className="absolute inset-0 rounded-full border-4 border-[#0EA5E9]/20"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0EA5E9] animate-spin"></div>
                            <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-[#50C878] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl">🧬</div>
                        </div>

                        <div className="text-center max-w-sm">
                            <h3 className="text-xl font-bold text-[#0F172A] mb-1">Analyzing Patient AML-0137</h3>
                            <p className="text-sm text-gray-400 mb-8">GATWithTransformerFusion · 8,412 cells · 25 proteins</p>
                            <div className="space-y-2 text-left">
                                {PROCESSING_STEPS.map((step, i) => (
                                    <div key={i} className={`flex items-center gap-3 text-sm transition-all duration-300 ${i === stepIndex ? 'opacity-100 font-semibold text-[#0F172A]' : i < stepIndex ? 'opacity-40 text-gray-500' : 'opacity-20 text-gray-400'}`}>
                                        <span className="w-4 flex-shrink-0">{i < stepIndex ? '✓' : i === stepIndex ? '▶' : '○'}</span>
                                        {step}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#50C878] rounded-full transition-all duration-500"
                                    style={{ width: `${((stepIndex + 1) / PROCESSING_STEPS.length) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* ── RESULTS ──────────────────────────────────────────── */}
                {demoState === 'results' && (
                    <div className="space-y-6 animate-fade-in">

                        {/* Results header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs font-bold text-red-600 uppercase tracking-widest">AML Detected — Adverse-like Risk</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]">Patient AML-0137 · Diagnostic Report</h2>
                                <p className="text-sm text-gray-400 mt-1">8,412 cells · 25 proteins · {new Date().toLocaleTimeString()}</p>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={reset} className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                    ← New Sample
                                </button>
                                <button className="px-4 py-2 text-sm font-semibold text-white bg-[#0F172A] rounded-xl hover:bg-black transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Export Report
                                </button>
                            </div>
                        </div>


                        {/* Tabs */}
                        <div className="flex gap-1 bg-white border border-gray-100 rounded-xl p-1 shadow-sm w-fit">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === tab.id ? 'bg-[#0EA5E9] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                                >
                                    <span className="hidden sm:inline">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* ── Tab: Clinical Report ── */}
                        {activeTab === 'report' && <ClinicalReport animateBars={animateBars} />}

                        {/* ── Tab: UMAP ── */}
                        {activeTab === 'umap' && (
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-base font-bold text-[#0F172A]">Single-Cell UMAP — Disease Landscape</h3>
                                            <p className="text-sm text-gray-500 mt-1">Each dot is a single cell. Spatial proximity reflects transcriptomic similarity. Colors distinguish AML blast populations from normal hematopoietic cells.</p>
                                        </div>
                                        <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full flex-shrink-0">8,412 cells</span>
                                    </div>
                                    <div className="relative rounded-xl overflow-hidden bg-gray-950 aspect-video group">
                                        <Image src="/images/results/aml_landscape.png" alt="AML Cell Landscape UMAP" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" unoptimized />
                                    </div>
                                    <div className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-3">
                                        {CELL_TYPES.map((cell, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                                                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: cell.color }}></span>
                                                <span className="font-medium">{cell.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { title: 'AML Blast Cluster', body: 'The large contiguous cluster contains 85% of cells. Its tight grouping indicates a clonal blast expansion — characteristic of de novo AML with a dominant malignant population.', color: '#EF4444' },
                                        { title: 'Normal Hematopoiesis', body: 'The scattered lower region represents residual healthy progenitors, T-cells, and B-cells. Their spatial separation from blasts confirms distinct transcriptomic programs.', color: '#50C878' },
                                        { title: 'Monocytic Bridge', body: 'A transitional population between blast and monocyte clusters may represent differentiation-arrested monocytic precursors — an immunophenotypic hallmark of AML-M4.', color: '#F97316' },
                                    ].map((card, i) => (
                                        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: card.color }}></span>
                                                <h4 className="text-sm font-bold text-[#0F172A]">{card.title}</h4>
                                            </div>
                                            <p className="text-xs text-gray-500 leading-relaxed">{card.body}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── Tab: Proteins ── */}
                        {activeTab === 'proteins' && (
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                    <div className="mb-4">
                                        <h3 className="text-base font-bold text-[#0F172A]">Predicted Surface Protein Expression</h3>
                                        <p className="text-sm text-gray-500 mt-1">DeepOMAP predicted all 25 CITE-seq protein levels from RNA alone (Pearson r² = 0.916). Key diagnostic and therapeutic markers shown below.</p>
                                    </div>
                                    <div className="relative rounded-xl overflow-hidden bg-gray-950 aspect-video group">
                                        <Image src="/images/results/aml_protein_markers.png" alt="Predicted protein marker expression" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" unoptimized />
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-gray-100">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Key Diagnostic Markers — Predicted vs. Reference</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    {['Marker', 'Predicted', 'Normal Ref', 'Clinical Note', 'Status'].map(h => (
                                                        <th key={h} className="px-5 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {PROTEIN_MARKERS.map((m, i) => (
                                                    <tr key={i} className={`hover:bg-gray-50 transition-colors ${m.flag ? 'bg-red-50/30' : ''}`}>
                                                        <td className="px-5 py-4 font-bold text-[#0F172A]">{m.name}</td>
                                                        <td className="px-5 py-4 font-mono font-semibold" style={{ color: m.flag ? '#EF4444' : '#50C878' }}>{m.value.toFixed(2)}</td>
                                                        <td className="px-5 py-4 text-gray-500 font-mono">{m.ref}</td>
                                                        <td className="px-5 py-4 text-gray-600 text-xs">{m.note}</td>
                                                        <td className="px-5 py-4">
                                                            {m.flag
                                                                ? <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">Abnormal</span>
                                                                : <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">Normal</span>}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-400">
                                        Expression values are CLR-normalized. Reference ranges from healthy bone marrow donors (n=120, The Human Cell Atlas).
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Tab: Genes ── */}
                        {activeTab === 'genes' && (
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                    <div className="mb-4">
                                        <h3 className="text-base font-bold text-[#0F172A]">Top Gene Signals — Model Attention</h3>
                                        <p className="text-sm text-gray-500 mt-1">Genes ranked by their contribution to the AML classification decision, computed via gradient-based feature attribution across the GNN-Transformer architecture.</p>
                                    </div>
                                    <div className="relative rounded-xl overflow-hidden bg-gray-950 aspect-video group">
                                        <Image src="/images/results/gene_importance.png" alt="Gene importance scores" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" unoptimized />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Clinical Relevance of Top Genes</h3>
                                        <ul className="space-y-3 text-xs">
                                            {[
                                                { gene: 'HOXA9 / MEIS1', note: 'Master transcription factors in AML blast differentiation arrest' },
                                                { gene: 'FLT3 / KIT', note: 'Receptor tyrosine kinases — targetable in 30% of AML cases' },
                                                { gene: 'WT1', note: 'AML tumor marker — elevated in >75% of cases at diagnosis' },
                                                { gene: 'GATA2 / RUNX1', note: 'Hematopoietic regulators — mutated in secondary AML' },
                                            ].map((g, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <span className="font-mono font-bold text-[#0EA5E9] flex-shrink-0 w-28">{g.gene}</span>
                                                    <span className="text-gray-500 leading-relaxed">{g.note}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Audit-Ready Outputs</h3>
                                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs space-y-1.5 text-gray-600">
                                            {['Per-cell classification probability', 'Gene-level attribution scores', 'Cell-cell graph attention weights', 'Predicted vs. measured protein correlation', 'Uncertainty estimates (dropout inference)'].map((item, i) => (
                                                <p key={i}>✓ {item}</p>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                                            Designed to support — not replace — hematologist review. All outputs exported alongside raw scores for independent verification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                )}
            </main>

            <footer className="py-10 border-t border-gray-200 bg-white mt-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} DeepOMAP · Vanaja Lab & The Roux Institute at Northeastern University</p>
                    <p className="text-xs text-gray-300">For research and demonstration purposes only. Not a clinical diagnostic device.</p>
                </div>
            </footer>

            <style jsx>{`
                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
