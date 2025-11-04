'use client'
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
     if (typeof document === 'undefined') return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
     if (typeof document === 'undefined') return;
    // Mock download functionality
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'ivan-vidal.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download iniciado",
      description: "Currículo sendo baixado...",
      });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-mono font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              {`<IvanVidal />`}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors font-mono text-sm cursor-pointer"
            >
              ./about
            </button>
           
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-white transition-colors font-mono text-sm cursor-pointer"
            >
              ./projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-white transition-colors font-mono text-sm cursor-pointer"
            >
              ./contact
            </button>
          </nav>

          {/* Desktop Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <Button 
              onClick={handleDownloadResume}
              variant="outline" 
              size="sm"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-mono cursor-pointer"
            >
              <Download size={16} className="mr-2" />
              CV em PDF
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 rounded-xl">
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-slate-300 hover:text-white font-mono text-sm w-full text-left"
              >
                ./about
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block px-3 py-2 text-slate-300 hover:text-white font-mono text-sm w-full text-left"
              >
                ./experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-slate-300 hover:text-white font-mono text-sm w-full text-left"
              >
                ./projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-slate-300 hover:text-white font-mono text-sm w-full text-left"
              >
                ./contact
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
              
              <div className="px-3 py-2">
                <Button 
                  onClick={handleDownloadResume}
                  variant="outline" 
                  size="sm"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-mono w-full"
                >
                  <Download size={16} className="mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
