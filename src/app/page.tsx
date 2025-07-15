'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'leadership', 'foundationalmodel', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 80;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Header with improved styling and smooth transitions */}
      <header className="w-full bg-gradient-to-r from-[#001f3f] to-[#003366] text-white p-4 md:p-6 fixed top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a3e0ff]">
              DeepOMAP
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {[
                { name: 'Mission', id: 'mission' },
                { name: 'Leadership', id: 'leadership' },
                { name: 'Foundational Model', id: 'foundationalmodel' },
                { name: 'Journey', id: 'journey' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative font-medium transition-all duration-300 hover:text-[#50C878] 
                    before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-[#50C878] before:origin-top-right
                    before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-top-left
                    ${activeSection === item.id ? 'text-[#50C878] before:scale-x-100' : 'before:scale-x-0'}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="mt-4 pb-4">
            <ul className="space-y-2">
              {[
                { name: 'Mission', id: 'mission' },
                { name: 'Leadership', id: 'leadership' },
                { name: 'Foundational Model', id: 'foundationalmodel' },
                { name: 'Journey', id: 'journey' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-4 rounded-lg transition-all duration-300 hover:bg-[#50C878] hover:translate-x-2
                    ${activeSection === item.id ? 'bg-[#50C878] text-white' : 'text-gray-200'}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with overlay gradient and animation */}
      <section className="relative h-screen overflow-hidden pt-20">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/videos/BGV.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/70 to-transparent z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
              <span className="block animate-slide-up">Revolutionizing Cancer Care</span>
              <span className="block mt-2 text-[#50C878] animate-slide-up-delay">with Artificial Intelligence</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-lg font-light animate-fade-in-delay">
              Our AI-powered diagnostic tool assists oncologists in early detection and personalized treatment planning for improved patient outcomes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 animate-fade-in-delay-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative bg-[#50C878] text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#50C878]/30 hover:scale-105"
              >
                <span className="relative z-10">Request a Demo</span>
                <span className="absolute inset-0 bg-[#45b76a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="group relative border-2 border-[#50C878] text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Learn More</span>
                <span className="absolute inset-0 bg-[#50C878] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <button onClick={() => scrollToSection('mission')} aria-label="Scroll Down">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white hover:text-[#50C878] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Page Content */}
      <main className="relative z-10">
        {/* Mission Section */}
        <section id="mission" className="py-24 bg-[#f8f9fa] transition-all duration-500">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mission</h3>
              <div className="h-1 w-20 bg-[#50C878] mx-auto mb-6 transition-all duration-300"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-[60%] group">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">
                  <div className="w-full h-80 relative overflow-hidden">
                    <Image
                      src="/images/thumbnail_Image1.png"
                      alt="About DeepOMAP"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    At DeepOMAP, we're committed to transforming cancer diagnosis and treatment by reducing turnaround times from weeks to mere hours. Powered by cutting-edge AI and single-cell sequencing, our platform delivers early, accurate predictions of drug resistance—empowering oncologists to make timely, life-saving decisions. Rooted in Maine, our interdisciplinary team innovates solutions that overcome the unique challenges of rural healthcare, bringing advanced precision diagnostics directly to those who need them most.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                    <div className="text-[#50C878] text-3xl font-bold mb-2">94%</div>
                    <p className="text-gray-600">Detection Accuracy</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                    <div className="text-[#50C878] text-3xl font-bold mb-2">30%</div>
                    <p className="text-gray-600">Faster Diagnosis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Leadership</h3>
              <div className="h-1 w-20 bg-[#50C878] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our multidisciplinary team combines expertise in oncology, artificial intelligence, and software engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { name: 'Kiran Vanaja', title: 'Founder & Principal Investigator', bio: 'Research Assitant Professor at Roux Institute at Northeastern University' },
                { name: 'Michaela Reagan', title: 'Chief Scientific Officer ', bio: 'MaineHealth Institute of Research' },
                { name: 'Radha Mukherjee', title: 'President ', bio: 'Associate Research Scientist Memorial Slon kettering' },
                { name: 'Logan Schwartz', title: 'Vice President ', bio: 'Post-Doctoral at Roux Institute at Northeastern University ' },
                { name: 'Satya Nandivada', title: 'Co-Founder & Chief Executive Officer', bio: 'MS Northeastern University' } 
              ].map((member, idx) => (
                <div key={idx} className="group relative rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden bg-white">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/images/team/team${idx + 1}.png`}
                      alt={member.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-xl text-gray-900">{member.name}</h4>
                    <p className="text-[#50C878] font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                    <div className="flex mt-4 space-x-3">
                      {['LinkedIn', 'Twitter', 'Email'].map((social, i) => (
                        <a
                          key={i}
                          href="#"
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#50C878] hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          <span className="sr-only">{social}</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 8.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 15a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Foundational Model Section */}
        <section id="foundationalmodel" className="py-24 bg-[#f8f9fa]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Foundational AI Model</h3>
              <div className="h-1 w-20 bg-[#50C878] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                DeepOMAP's platform analyzes single-cell multi omics datasets to predict progression, and recommend personalized treatments.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
              <div className="w-full lg:w-1/2">
                <h4 className="text-2xl font-bold text-[#001f3f] mb-6">Key Features</h4>
                <ul className="space-y-6">
                  {[
                    { title: 'Advanced Detection', desc: 'Identify early-stage tumors with 94% accuracy' },
                    { title: 'Treatment Recommendations', desc: 'AI-assisted personalized treatment planning' },
                    { title: 'Progression Analysis', desc: 'Predict cancer progression pathways' },
                    { title: 'Integration', desc: 'Seamless workflow with existing hospital systems' }
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="bg-[#50C878] p-2 rounded-full mr-4 mt-1 transition-all duration-300 group-hover:scale-110">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="transition-all duration-300 group-hover:translate-x-2">
                        <h5 className="font-semibold text-gray-800">{feature.title}</h5>
                        <p className="text-gray-600 text-sm">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-[70%]">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                  <Image
                    src="/images/Cell Landscape-1.png"
                    alt="Cell Landscape Visualization"
                    fill
                    className="object-contain object-center p-4 transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Journey</h3>
              <div className="h-1 w-20 bg-[#50C878] mx-auto mb-6"></div>
            </div>

            <div className="relative">
              <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2"></div>

              <div className="space-y-16">
                {[
                  {
                    title: 'DeepOMAP Founded',
                    date: 'Jan 2025',
                    result: 'Registered as Maine-based LLC',
                    align: 'right'
                  },
                  {
                    title: 'Selected for MIT NSF I-Corps Program',
                    date: 'Mar 2025',
                    result: 'Customer discovery and validation',
                    description: 'Developed initial prototype and conducted user interviews.',
                    align: 'left'
                  },
                  {
                    title: 'Early Minimum Viable Product (MVP) Launched',
                    date: 'May 2024',
                    result: 'Validating and improving AI algorithms',
                    description: 'Developed initial foundational model for cancer detection and explainable AI.',
                    align: 'right'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between">
                    <div className={`w-5/12 ${item.align === 'left' ? '' : 'order-1 text-right'}`}>
                      <div className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 ${item.align === 'left' ? 'mr-10' : 'ml-10'}`}>
                        <span className="inline-block px-3 py-1 rounded-full bg-[#f8f9fa] text-[#50C878] text-sm font-medium mb-2">
                          {item.date}
                        </span>
                        <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                        <p className="text-[#50C878] font-medium">{item.result}</p>
                        <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-8 h-8 bg-[#50C878] rounded-full border-4 border-white shadow transition-all duration-300 hover:scale-110"></div>
                    </div>
                    <div className={`w-5/12 ${item.align === 'right' ? '' : 'order-1 text-right'}`}></div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <button className="inline-flex items-center text-[#50C878] font-medium hover:underline transition-all duration-300 hover:translate-x-2">
                  View all research publications
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#f8f9fa]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="md:w-1/2">
                <h2 className="inline-block text-sm font-bold text-[#50C878] uppercase tracking-wider mb-2">Get In Touch</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact Us</h3>
                <div className="h-1 w-20 bg-[#50C878] mb-6"></div>
                <p className="text-gray-700 mb-8">
                  Interested in learning more about DeepOMAP? find us at the Vanaja Lab at the Roux Institute, Northeastern University, Portland, Maine.
                </p>
                <a
                  href="https://vanajasysbiolab.org/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#50C878] underline hover:text-[#3ca96a] transition-colors duration-300"
                >
                  Vanaja Lab
                </a>
              </div>

              <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50C878] focus:border-transparent placeholder-gray-500 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50C878] focus:border-transparent placeholder-gray-500 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                    <input
                      type="text"
                      placeholder="Medical Center Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50C878] focus:border-transparent placeholder-gray-500 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50C878] focus:border-transparent placeholder-gray-500 transition-all duration-300"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#50C878] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#45b76a] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50C878] hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#001f3f] text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-xl font-bold mb-4">DeepOMAP</h4>
                <p className="text-gray-300 mb-6 max-w-md">
                  Revolutionizing cancer care through AI-powered diagnostic tools and personalized treatment planning.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { name: 'Mission', id: 'mission' },
                    { name: 'Leadership', id: 'leadership' },
                    { name: 'Foundational Model', id: 'foundationalmodel' },
                    { name: 'Journey', id: 'journey' },
                    { name: 'Contact', id: 'contact' }
                  ].map((link) => (
                    <li key={link.id}>
                      <button 
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-300 hover:text-[#50C878] transition-colors duration-300"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  {['FAQs', 'Privacy Policy', 'Terms of Service', 'Support', 'Documentation'].map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-300 hover:text-[#50C878] transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-[#50C878] font-medium hover:underline transition-all duration-300"
                  >
                    Subscribe to newsletter
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} DeepOMAP. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 text-sm hover:text-[#50C878] transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#50C878] transition-colors duration-300">Terms of Service</a>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#50C878] transition-colors duration-300">Accessibility</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}