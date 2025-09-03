'use client'
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Code, Database, Server } from 'lucide-react';
import { personalInfo, about } from '../data/mock';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = personalInfo.title;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToAbout = () => {
     if (typeof document === 'undefined') return;
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
     if (typeof document === 'undefined') return;
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #1e40af 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Floating Code Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code className="absolute top-20 left-10 text-blue-500/20 w-8 h-8 animate-pulse" />
        <Database className="absolute top-40 right-20 text-blue-400/20 w-6 h-6 animate-bounce" />
        <Server className="absolute bottom-40 left-20 text-blue-300/20 w-7 h-7 animate-pulse" />
        <Code className="absolute bottom-20 right-10 text-blue-600/20 w-5 h-5 animate-bounce" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
            {personalInfo.name}
          </h1>
          
          <div className="text-2xl md:text-4xl text-blue-400 mb-4 font-mono min-h-[60px] flex items-center justify-center">
            <span className="mr-2">{'>'}</span>
            <span>{displayText}</span>
            {isTyping && <span className="animate-pulse ml-1">|</span>}
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {personalInfo.subtitle}
          </p>

          {/* Tech Stack Highlight */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12 text-sm md:text-base">
            <span className="px-4 py-2 bg-slate-800/50 border border-blue-500/30 rounded-full text-blue-300 font-mono">
              Angular 8-14
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-blue-500/30 rounded-full text-blue-300 font-mono">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-blue-500/30 rounded-full text-blue-300 font-mono">
              Node.js
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-blue-500/30 rounded-full text-blue-300 font-mono">
              Java
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={handleContactClick}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-mono text-lg transition-all duration-300 hover:scale-105"
          >
            Iniciar Projeto
          </Button>
          <Button 
            onClick={scrollToAbout}
            variant="outline" 
            size="lg"
            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 font-mono text-lg transition-all duration-300 hover:scale-105"
          >
            Ver Trabalhos
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Terminal-like decoration */}
      <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg p-3 font-mono text-xs text-green-400">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <div>ivan@portfolio:~$ whoami</div>
        <div className="text-blue-400">fullstack_developer</div>
        <div className="animate-pulse">█</div>
      </div>
    </section>
  );
};

export default Hero;