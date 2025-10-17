'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeroVisualization from "../../components/HeroVisualization";
import ScrollReveal from "../../components/ScrollReveal";
import DynamicResumeSection from "../../components/DynamicResumeSection";
import { SkillsGrid } from "../../components/SkillBar";
import AchievementCard from "../../components/AchievementCard";
import ContactForm from "../../components/ContactForm";
import { portfolioData } from "../../data/portfolio";

export default function SatyaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'resume', 'skills', 'achievements', 'contact'];
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
      {/* Header */}
      <header className="w-full bg-white text-[#0F172A] p-4 md:p-6 fixed top-0 z-50 shadow-sm backdrop-blur-sm bg-opacity-95 transition-all duration-300">
        <div className="max-w-7xl ml-4 md:ml-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer group">
            <h1 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]">
              Satya Nandivada
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {[
                { name: 'About', id: 'about' },
                { name: 'Resume', id: 'resume' },
                { name: 'Skills', id: 'skills' },
                { name: 'Achievements', id: 'achievements' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative font-medium transition-all duration-300 hover:text-[#6366F1] 
                    before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-[#6366F1] before:origin-top-right
                    before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-top-left
                    ${activeSection === item.id ? 'text-[#6366F1] before:scale-x-100' : 'before:scale-x-0'}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#0F172A] transition-transform duration-300 hover:scale-110"
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
                { name: 'About', id: 'about' },
                { name: 'Resume', id: 'resume' },
                { name: 'Skills', id: 'skills' },
                { name: 'Achievements', id: 'achievements' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-4 rounded-lg transition-all duration-300 hover:bg-[#6366F1] hover:translate-x-2
                    ${activeSection === item.id ? 'bg-[#6366F1] text-white' : 'text-[#1E293B]'}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden pt-20">
        {/* 3D Visualization Background */}
        <div className="w-full h-full absolute top-0 left-0 z-[-1]">
          <HeroVisualization />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-transparent z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="animate-fade-in mt-[-50px] md:mt-[-80px]">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] drop-shadow-sm leading-tight">
              <span className="block animate-slide-up">{portfolioData.hero.name}</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] animate-slide-up-delay">
                {portfolioData.hero.tagline}
              </span>
            </h2>
            <p className="mt-5 text-lg md:text-xl text-[#475569] max-w-2xl mx-auto text-center font-light animate-fade-in-delay">
              {portfolioData.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-delay-2">
              <button
                onClick={() => scrollToSection('resume')}
                className="w-full sm:w-auto group relative bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/30 hover:scale-105"
              >
                <span className="relative z-10">{portfolioData.hero.cta.primary}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto group relative border-2 border-[#6366F1] text-[#0F172A] px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">{portfolioData.hero.cta.secondary}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <button onClick={() => scrollToSection('about')} aria-label="Scroll Down">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0F172A] hover:text-[#6366F1] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Page Content */}
      <main className="relative z-10">
        {/* About Section */}
        <section id="about" className="py-24 bg-[#F8FAFC] transition-all duration-500">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6 transition-all duration-300"></div>
            </div>
            </ScrollReveal>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <ScrollReveal animation="slide-left" className="md:w-[40%]">
                <div className="group">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">
                  <div className="w-full h-80 relative overflow-hidden">
                    <Image
                        src={portfolioData.about.image}
                        alt="About Me"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </div>
              </div>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-right" className="md:w-[60%] space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {portfolioData.about.bio}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {portfolioData.about.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                      <div className="text-[#6366F1] text-3xl font-bold mb-2">{highlight.value}</div>
                      <p className="text-gray-600">{highlight.label}</p>
                  </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal animation="fade-up">
              <DynamicResumeSection 
                title={portfolioData.resume.title}
                subtitle={portfolioData.resume.subtitle}
                pdfPath={portfolioData.resume.pdfPath}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Skills & Technologies</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                  Technologies and tools I work with to bring ideas to life.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              <ScrollReveal animation="fade-up" delay={0}>
                <SkillsGrid skills={portfolioData.skills.frontend} title="Frontend" />
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <SkillsGrid skills={portfolioData.skills.backend} title="Backend" />
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={400}>
                <SkillsGrid skills={portfolioData.skills.tools} title="AI/ML Tools" />
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={600}>
                <SkillsGrid skills={portfolioData.skills.research} title="Research" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{portfolioData.achievements.title}</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {portfolioData.achievements.subtitle}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-8">
              {portfolioData.achievements.items.map((achievement, index) => (
                <ScrollReveal key={achievement.id} animation="fade-up" delay={index * 100}>
                  <AchievementCard achievement={achievement} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <ScrollReveal animation="slide-left" className="md:w-1/2">
                <div>
                  <h2 className="inline-block text-sm font-bold text-[#6366F1] uppercase tracking-wider mb-2">Get In Touch</h2>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Let's Work Together</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mb-6"></div>
                <p className="text-gray-700 mb-8">
                    I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{portfolioData.contact.email}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{portfolioData.contact.location}</span>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <a 
                      href={portfolioData.contact.social.github} 
                      className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:from-gray-700 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-800/30 group"
                      title="Visit my GitHub profile"
                    >
                      <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href={portfolioData.contact.social.linkedin} 
                      className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30 group"
                      title="Connect with me on LinkedIn"
                    >
                      <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href={`mailto:${portfolioData.contact.social.email}`} 
                      className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center hover:from-red-400 hover:to-red-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 group"
                      title="Send me an email"
                    >
                      <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" className="md:w-1/2">
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0F172A] text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                  {portfolioData.hero.name}
                </h4>
                <p className="text-gray-300 mb-6 max-w-md">
                  Full-stack developer passionate about creating elegant solutions that bridge the gap between design and technology.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { name: 'About', id: 'about' },
                    { name: 'Resume', id: 'resume' },
                    { name: 'Skills', id: 'skills' },
                    { name: 'Achievements', id: 'achievements' },
                    { name: 'Contact', id: 'contact' }
                  ].map((link) => (
                    <li key={link.id}>
                      <button 
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-300 hover:text-[#6366F1] transition-colors duration-300"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <ul className="space-y-3">
                  <li>
                    <a href={portfolioData.contact.social.github} className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 group">
                      <div className="w-6 h-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href={portfolioData.contact.social.linkedin} className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 group">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${portfolioData.contact.social.email}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 group">
                      <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 text-sm hover:text-[#6366F1] transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#6366F1] transition-colors duration-300">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
