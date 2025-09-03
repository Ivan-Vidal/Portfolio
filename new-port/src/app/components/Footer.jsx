'use client'
import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-mono font-bold text-white">
              {`<IvanVidal />`}
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Desenvolvedor Fullstack especializado em soluções bancárias 
              e interfaces acessíveis. Transformando ideias em código.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-mono">
              Quick Links
            </h3>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about', prefix: './' },
                { name: 'Experience', href: '#experience', prefix: './' },
                { name: 'Projects', href: '#projects', prefix: './' },
                { name: 'Contact', href: '#contact', prefix: './' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.replace('#', ''));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-slate-400 hover:text-white transition-colors font-mono text-sm"
                >
                  {link.prefix}{link.name.toLowerCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-mono">
              Contact Info
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-slate-400 hover:text-blue-400 transition-colors"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-slate-400 hover:text-blue-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
              <p className="text-slate-400">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © {currentYear} Ivan Vidal. Todos os direitos reservados.
            </div>

            {/* Made with */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <Code className="w-4 h-4 text-blue-400" />
              <span>e</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Terminal-like signature */}
        <div className="mt-8 pt-4 border-t border-slate-800">
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-xs">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-slate-400 ml-2">ivan@portfolio:~$</span>
            </div>
            <div className="text-green-400">
              console.log("Obrigado pela visita! 🚀");
            </div>
            <div className="text-blue-400">
              // Portfolio built with React + Tailwind CSS
            </div>
            <div className="text-slate-500">
              // Last updated: {new Date().toLocaleDateString('pt-BR')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;