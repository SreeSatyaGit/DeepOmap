'use client';

import { useState } from 'react';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  description: string;
  date: string;
  category: string;
  icon: string;
  pdfPath?: string;
}

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'award':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 'community':
        return 'bg-gradient-to-r from-green-400 to-green-600';
      case 'speaking':
        return 'bg-gradient-to-r from-blue-400 to-blue-600';
      case 'leadership':
        return 'bg-gradient-to-r from-purple-400 to-purple-600';
      case 'certification':
        return 'bg-gradient-to-r from-indigo-400 to-indigo-600';
      case 'entrepreneurship':
        return 'bg-gradient-to-r from-pink-400 to-pink-600';
      case 'recognition':
        return 'bg-gradient-to-r from-teal-400 to-teal-600';
      case 'research':
        return 'bg-gradient-to-r from-emerald-400 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  const handleFlip = () => {
    if (achievement.pdfPath) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleFullScreen = () => {
    if (achievement.pdfPath) {
      window.open(achievement.pdfPath, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div className="group relative h-80 perspective-1000 transition-all duration-500 hover:scale-110 hover:z-10">
        {/* Card Container */}
        <div 
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          } ${achievement.pdfPath ? 'group-hover:rotate-y-180' : ''}`}
        >
          {/* Front Side - Achievement Details */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
            <div className="p-6 h-full flex flex-col">
              {/* Header with icon and category */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#6366F1] transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">{achievement.organization}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(achievement.category)} group-hover:scale-105 transition-transform duration-300`}>
                  {achievement.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                {achievement.description}
              </p>
              
              {/* PDF Indicator */}
              {achievement.pdfPath && (
                <div className="mb-4">
                  
                </div>
              )}

              {/* Date and Action */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">{achievement.date}</span>
                <div className="flex items-center gap-2">
                  {achievement.pdfPath && (
                    <button
                      onClick={handleFullScreen}
                      className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover:scale-125"
                      title="Open PDF in New Tab"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                    </button>
                  )}
                  <div className="w-8 h-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover effect border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6366F1] rounded-xl transition-colors duration-300"></div>
          </div>

          {/* Back Side - PDF Preview */}
          {achievement.pdfPath && (
            <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden rotate-y-180 group-hover:shadow-2xl transition-shadow duration-500">
              <div className="h-full flex flex-col">
                {/* PDF Header */}
                <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-4 flex items-center justify-between">
                  <h4 className="text-white font-semibold">PDF Preview - Full Size</h4>
                  <button
                    onClick={handleFullScreen}
                    className="bg-white text-[#6366F1] px-3 py-1 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in New Tab
                  </button>
                </div>
                
                {/* PDF Preview Content - Larger for better visibility */}
                <div className="flex-1 p-2">
                  <div className="h-full bg-gray-50 rounded-lg overflow-hidden">
                    {achievement.pdfPath && (
                      <iframe
                        src={`${achievement.pdfPath}#toolbar=0&navpanes=0&scrollbar=1&zoom=75`}
                        className="w-full h-full border-0"
                        title={`${achievement.title} PDF Preview`}
                      />
                    )}
                  </div>
                </div>

                {/* PDF Actions */}
                {achievement.pdfPath && (
                  <div className="p-3 bg-gray-50 border-t">
                    <div className="flex gap-2 justify-center">
                      <a
                        href={achievement.pdfPath}
                        download
                        className="bg-[#6366F1] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#4F46E5] transition-colors duration-300 flex items-center gap-2 hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  );
}