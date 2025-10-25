'use client';

import { useState } from 'react';

interface ResumeItem {
  position: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
}

interface ResumeSection {
  title: string;
  items: ResumeItem[];
}

interface ResumeSectionProps {
  title: string;
  subtitle: string;
  pdfPath: string;
  sections: ResumeSection[];
}

export default function ResumeSection({ title, subtitle, pdfPath, sections }: ResumeSectionProps) {
  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf'>('interactive');

  return (
    <div className="space-y-8">
      {/* Header with Toggle */}
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h3>
        <div className="h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">{subtitle}</p>
        
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'interactive'
                  ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Interactive View
            </button>
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'pdf'
                  ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              PDF View
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Resume View */}
      {activeTab === 'interactive' && (
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">{sectionIndex + 1}</span>
                </div>
                {section.title}
              </h4>
              
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group relative border-l-4 border-[#6366F1] pl-6 pb-6">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#6366F1] rounded-full"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 group-hover:text-[#6366F1] transition-colors duration-300">
                          {item.position}
                        </h5>
                        <p className="text-lg font-semibold text-[#6366F1]">{item.company}</p>
                      </div>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1 md:mt-0">
                        {item.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PDF View */}
      {activeTab === 'pdf' && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-4">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-semibold">Resume PDF</h4>
              <a
                href={pdfPath}
                download
                className="bg-white text-[#6366F1] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
          
          <div className="h-[800px] w-full">
            <iframe
              src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              title="Resume PDF"
            />
          </div>
        </div>
      )}

      {/* Download CTA */}
      <div className="text-center bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl p-8 text-white">
        <h4 className="text-2xl font-bold mb-4">Ready to Connect?</h4>
        <p className="text-lg mb-6 opacity-90">
          Download my resume or get in touch to discuss opportunities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={pdfPath}
            download
            className="bg-white text-[#6366F1] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#6366F1] transition-colors duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
