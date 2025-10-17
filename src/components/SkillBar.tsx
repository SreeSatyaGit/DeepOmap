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
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const steps = 60;
      const stepDuration = duration / steps;
      const stepSize = skill.level / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setAnimatedLevel(Math.min(stepSize * currentStep, skill.level));
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium text-gray-800">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-[#6366F1]">
          {Math.round(animatedLevel)}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full transition-all duration-1500 ease-out"
          style={{
            width: `${animatedLevel}%`,
            transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
          }}
        />
      </div>
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
