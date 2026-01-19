'use client';

import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

export default function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[#6366F1]/30 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
    >
      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
      <span className="font-medium text-gray-700 group-hover:text-[#6366F1] transition-colors duration-300">{skill.name}</span>
    </div>
  );
}

interface SkillsGridProps {
  skills: Skill[];
  title: string;
}

export function SkillsGrid({ skills, title }: SkillsGridProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}
