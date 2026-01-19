'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface GitHubProject {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  url: string;
  topics: string[];
}

interface GitHubProjectCardProps {
  project: GitHubProject;
}

const getLanguageColor = (language: string) => {
  const colors: { [key: string]: string } = {
    'Python': 'bg-yellow-500',
    'TypeScript': 'bg-blue-500',
    'JavaScript': 'bg-yellow-400',
    'R': 'bg-blue-600',
    'Java': 'bg-orange-500',
    'C++': 'bg-blue-700',
    'Go': 'bg-cyan-500',
    'Rust': 'bg-orange-600',
    'Swift': 'bg-orange-400',
    'Kotlin': 'bg-purple-500',
    'PHP': 'bg-purple-600',
    'Ruby': 'bg-red-500',
    'C#': 'bg-green-500',
    'Scala': 'bg-red-600',
    'HTML': 'bg-orange-500',
    'CSS': 'bg-blue-500',
    'Shell': 'bg-gray-600',
    'Dockerfile': 'bg-blue-400',
    'Vue': 'bg-green-400',
    'React': 'bg-blue-400',
    'Angular': 'bg-red-500',
    'Svelte': 'bg-orange-500',
    'Solid': 'bg-blue-500',
    'Elixir': 'bg-purple-500',
    'Clojure': 'bg-green-500',
    'Haskell': 'bg-purple-600',
    'OCaml': 'bg-orange-500',
    'F#': 'bg-blue-500',
    'Erlang': 'bg-red-500',
    'Lua': 'bg-blue-600',
    'Perl': 'bg-purple-500',
    'Racket': 'bg-blue-500',
    'Scheme': 'bg-blue-600',
    'Prolog': 'bg-purple-500',
    'Fortran': 'bg-green-500',
    'COBOL': 'bg-blue-500',
    'Ada': 'bg-green-500',
    'Pascal': 'bg-blue-500',
    'Delphi': 'bg-blue-500',
    'Assembly': 'bg-gray-500',
    'C': 'bg-gray-500',
    'Objective-C': 'bg-blue-500',
    'MATLAB': 'bg-orange-500',
    'Julia': 'bg-purple-500',
    'Dart': 'bg-blue-500',
    'PowerShell': 'bg-blue-500',
    'Batchfile': 'bg-gray-500',
    'Makefile': 'bg-gray-500',
    'CMake': 'bg-gray-500',
    'YAML': 'bg-red-500',
    'JSON': 'bg-yellow-500',
    'XML': 'bg-orange-500',
    'Markdown': 'bg-gray-500',
    'Text': 'bg-gray-500',
    'Other': 'bg-gray-500'
  };

  return colors[language] || colors['Other'];
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};

export default function GitHubProjectCard({ project }: GitHubProjectCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden h-full sleek-card">
        <div className="p-6 flex flex-col h-full">
          {/* Header with project name and language */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6366F1] transition-colors duration-300 mb-2">
                {project.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                <span className="text-sm text-gray-600">{project.language}</span>
              </div>
            </div>

          </div>

          {/* Project description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            {project.description}
          </p>

          {/* Topics/Tags */}
          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {project.topics.slice(0, 4).map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-wider font-semibold rounded-full group-hover:bg-[#6366F1]/10 group-hover:text-[#6366F1] transition-colors duration-300"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Stats and last updated */}
          <div className="flex items-center justify-end text-xs text-gray-500 pt-4 border-t border-gray-50">
            <span>
              {mounted ? `Updated ${formatDate(project.lastUpdated)}` : ''}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
