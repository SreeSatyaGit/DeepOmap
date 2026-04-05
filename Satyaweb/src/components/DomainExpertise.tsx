'use client';

import ScrollReveal from './ScrollReveal';

const domains = [
  {
    id: 'biology',
    label: '01',
    title: 'Cell Signaling Biology',
    accentClass: 'text-emerald-400',
    borderClass: 'border-emerald-500/25',
    glowColor: 'rgba(16,185,129,0.08)',
    glowHover: 'rgba(16,185,129,0.15)',
    dotColor: '#10B981',
    equation: 'EGFR → RAS → RAF → MEK → ERK',
    equationLabel: 'MAPK Signaling Cascade',
    description:
      'I decode intracellular communication networks using single-cell RNA sequencing (scRNA-seq & CITE-seq). My work predicts surface protein expression from transcriptomic data across tens of thousands of cells — turning molecular noise into biological signal.',
    tags: ['scRNA-seq', 'CITE-seq', 'Pathway Analysis', 'AML Subtyping', 'Melanoma'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="10" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="24" cy="24" r="4"  fill="#10B981" opacity="0.8" />
        {/* Receptor arms */}
        <line x1="14" y1="24" x2="6"  y2="18" stroke="#10B981" strokeWidth="1.2" opacity="0.6"/>
        <line x1="34" y1="24" x2="42" y2="18" stroke="#10B981" strokeWidth="1.2" opacity="0.6"/>
        <line x1="24" y1="14" x2="24" y2="6"  stroke="#10B981" strokeWidth="1.2" opacity="0.6"/>
        <circle cx="6"  cy="18" r="2.5" fill="#10B981" opacity="0.5" />
        <circle cx="42" cy="18" r="2.5" fill="#10B981" opacity="0.5" />
        <circle cx="24" cy="6"  r="2.5" fill="#10B981" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'math',
    label: '02',
    title: 'Mathematical Modeling',
    accentClass: 'text-sky-400',
    borderClass: 'border-sky-500/25',
    glowColor: 'rgba(56,189,248,0.07)',
    glowHover: 'rgba(56,189,248,0.14)',
    dotColor: '#38BDF8',
    equation: '∂u/∂t = NN(u, t; θ) + f(u)',
    equationLabel: 'Universal Differential Equations',
    description:
      'I build hybrid mechanistic-learning systems where neural networks augment ODEs — embedding known biology while learning unknown dynamics directly from data. This bridges the gap between first-principles modeling and black-box prediction.',
    tags: ['UDE', 'ODE Systems', 'Drug Resistance', 'Parametric UMAP', 'sciPENN'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        {/* Integral sign stylized */}
        <path d="M20 8 Q16 14 18 24 Q20 34 16 40" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        {/* d/dt arrow */}
        <text x="24" y="28" fontSize="12" fill="#38BDF8" fontFamily="monospace" opacity="0.9">dt</text>
        <path d="M24 18 L38 18" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M35 15 L38 18 L35 21" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* small = sign */}
        <line x1="24" y1="32" x2="38" y2="32" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />
        <line x1="24" y1="36" x2="38" y2="36" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'energy',
    label: '03',
    title: 'Energy & Thermodynamics',
    accentClass: 'text-amber-400',
    borderClass: 'border-amber-500/25',
    glowColor: 'rgba(251,191,36,0.07)',
    glowHover: 'rgba(251,191,36,0.14)',
    dotColor: '#FBBF24',
    equation: 'ΔG = ΔH − TΔS',
    equationLabel: 'Gibbs Free Energy',
    description:
      'Thermodynamic principles govern every cellular process. I use energy landscape frameworks to understand protein folding, receptor binding affinities, and how cells maintain far-from-equilibrium states to process information.',
    tags: ['Free Energy', 'Energy Landscapes', 'Protein Folding', 'Biophysics', 'Equilibrium'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        {/* Lightning bolt */}
        <path d="M26 6 L16 26 H24 L22 42 L36 20 H27 Z" fill="#FBBF24" opacity="0.85" />
        {/* Radiating lines */}
        <line x1="8"  y1="8"  x2="12" y2="12" stroke="#FBBF24" strokeWidth="1.2" opacity="0.4"/>
        <line x1="40" y1="8"  x2="36" y2="12" stroke="#FBBF24" strokeWidth="1.2" opacity="0.4"/>
        <line x1="6"  y1="24" x2="11" y2="24" stroke="#FBBF24" strokeWidth="1.2" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'ml',
    label: '04',
    title: 'Machine Learning & AI',
    accentClass: 'text-violet-400',
    borderClass: 'border-violet-500/25',
    glowColor: 'rgba(139,92,246,0.08)',
    glowHover: 'rgba(139,92,246,0.16)',
    dotColor: '#8B5CF6',
    equation: 'h_i = σ( Σⱼ α_{ij} · W hⱼ )',
    equationLabel: 'Graph Attention Network',
    description:
      'I design multimodal architectures that fuse kNN cell graphs (Graph Attention Networks) with Transformer cross-modal attention to translate RNA expression into protein abundance — my DeepOMAPNet framework.',
    tags: ['GAT', 'Transformers', 'GNN', 'DeepOMAPNet', 'Mixed Precision'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        {/* Neural network nodes */}
        <circle cx="8"  cy="16" r="3" fill="#8B5CF6" opacity="0.7"/>
        <circle cx="8"  cy="32" r="3" fill="#8B5CF6" opacity="0.7"/>
        <circle cx="24" cy="10" r="3" fill="#8B5CF6" opacity="0.9"/>
        <circle cx="24" cy="24" r="3" fill="#8B5CF6" opacity="0.9"/>
        <circle cx="24" cy="38" r="3" fill="#8B5CF6" opacity="0.9"/>
        <circle cx="40" cy="24" r="3" fill="#8B5CF6" />
        {/* Connections */}
        <line x1="11" y1="16" x2="21" y2="12" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="11" y1="16" x2="21" y2="24" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="11" y1="16" x2="21" y2="36" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="11" y1="32" x2="21" y2="12" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="11" y1="32" x2="21" y2="24" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="11" y1="32" x2="21" y2="36" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="27" y1="10" x2="37" y2="22" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="27" y1="24" x2="37" y2="24" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="27" y1="38" x2="37" y2="26" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5"/>
      </svg>
    ),
  },
];

// Floating equation decorations for the section background
const bgEquations = [
  { text: '∇L(θ)', x: '8%',  y: '15%', delay: '0s',   size: 'text-xs' },
  { text: 'RNA → Protein', x: '72%', y: '8%',  delay: '1.5s', size: 'text-xs' },
  { text: 'dX/dt',         x: '88%', y: '55%', delay: '3s',   size: 'text-sm' },
  { text: 'ΔG < 0',        x: '5%',  y: '80%', delay: '2s',   size: 'text-sm' },
  { text: 'Σ α_{ij}',      x: '55%', y: '88%', delay: '0.8s', size: 'text-xs' },
];

export default function DomainExpertise() {
  return (
    <section className="relative py-28 bg-[#080d1a] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="expertise-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#expertise-grid)" />
        </svg>
      </div>

      {/* Floating background equations */}
      {bgEquations.map((eq, i) => (
        <span
          key={i}
          className={`absolute font-mono ${eq.size} text-white pointer-events-none select-none animate-float-eq`}
          style={{
            left: eq.x,
            top: eq.y,
            opacity: 0.1,
            animationDelay: eq.delay,
            animationDuration: `${7 + i * 1.3}s`,
          }}
        >
          {eq.text}
        </span>
      ))}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4">
              Research Domains
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Where Biology Meets{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400">
                Intelligence
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              I work at the intersection of four disciplines — each essential to understanding life as a computational system.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {domains.map((domain, index) => (
            <ScrollReveal key={domain.id} animation="fade-up" delay={index * 120}>
              <div
                className={`relative group rounded-2xl border ${domain.borderClass} p-7 transition-all duration-400 overflow-hidden cursor-default`}
                style={{ background: `linear-gradient(135deg, ${domain.glowColor}, transparent)` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    `linear-gradient(135deg, ${domain.glowHover}, transparent)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    `linear-gradient(135deg, ${domain.glowColor}, transparent)`;
                }}
              >
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div>{domain.icon}</div>
                    <div>
                      <p className={`text-[10px] font-mono uppercase tracking-widest ${domain.accentClass} opacity-60 mb-0.5`}>
                        {domain.label}
                      </p>
                      <h3 className="text-lg font-bold text-white">{domain.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Key equation */}
                <div className="mb-5">
                  <p className={`text-[10px] font-mono uppercase tracking-widest ${domain.accentClass} opacity-60 mb-1.5`}>
                    {domain.equationLabel}
                  </p>
                  <div
                    className={`font-mono text-sm font-semibold ${domain.accentClass} bg-black/40 px-4 py-2.5 rounded-xl inline-block border ${domain.borderClass}`}
                  >
                    {domain.equation}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm mb-5">
                  {domain.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {domain.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border ${domain.borderClass} ${domain.accentClass} bg-black/30 tracking-wide`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle corner dot */}
                <div
                  className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                  style={{ background: domain.dotColor }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
