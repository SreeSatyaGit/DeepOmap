export const theme = {
  colors: {
    primary: '#6366F1',      // Indigo
    primaryDark: '#4F46E5',
    secondary: '#F97316',    // Orange
    secondaryLight: '#FB923C',
    accent: '#8B5CF6',       // Purple
    accentLight: '#A78BFA',
    dark: '#0F172A',
    darkLight: '#1E293B',
    gray: '#475569',
    light: '#F8FAFC',
    white: '#FFFFFF'
  },
  gradients: {
    primary: 'from-[#6366F1] to-[#8B5CF6]',
    hero: 'from-[#6366F1] via-[#8B5CF6] to-[#F97316]',
    accent: 'from-[#8B5CF6] to-[#F97316]'
  },
  spacing: {
    section: 'py-24',
    container: 'max-w-6xl mx-auto px-6'
  },
  typography: {
    hero: 'text-4xl md:text-6xl font-bold',
    heading: 'text-3xl md:text-4xl font-bold',
    subheading: 'text-xl md:text-2xl font-semibold',
    body: 'text-lg text-gray-600',
    small: 'text-sm text-gray-500'
  },
  animations: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideUpDelay: 'animate-slide-up-delay',
    fadeInDelay: 'animate-fade-in-delay',
    fadeInDelay2: 'animate-fade-in-delay-2'
  }
} as const;

export type Theme = typeof theme;
