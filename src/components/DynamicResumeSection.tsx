'use client';

interface DynamicResumeSectionProps {
  title: string;
  subtitle: string;
  pdfPath: string;
}

export default function DynamicResumeSection({ title, subtitle, pdfPath }: DynamicResumeSectionProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h3>
        <div className="h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">{subtitle}</p>
      </div>

      {/* PDF View */}
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