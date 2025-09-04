'use client'

import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Code, Database, Smartphone, BarChart3, Filter } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (title) => {
    if (title.includes('Bancário') || title.includes('Autoatendimento')) return <Database className="w-6 h-6" />;
    if (title.includes('Móveis') || title.includes('Aplicativo')) return <Smartphone className="w-6 h-6" />;
    if (title.includes('Dashboard') || title.includes('Monitoramento')) return <BarChart3 className="w-6 h-6" />;
    return <Code className="w-6 h-6" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Produção': return 'border-green-500 text-green-400';
      case 'Desenvolvimento': return 'border-yellow-500 text-yellow-400';
      case 'Manutenção': return 'border-blue-500 text-blue-400';
      default: return 'border-slate-500 text-slate-400';
    }
  };

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.status.toLowerCase() === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            ./projects<span className="text-blue-400">[*]</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Seleção de projetos desenvolvidos com foco em soluções bancárias, 
            interfaces acessíveis e arquiteturas escaláveis.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'default' : 'outline'}
            className={`font-mono text-sm cursor-pointer ${
              filter === 'all' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'border-slate-600 text-slate-300 hover:border-blue-500'
            }`}
          >
            <Filter className="w-4 h-4 mr-2" />
            Todos
          </Button>
          <Button
            onClick={() => setFilter('produção')}
            variant={filter === 'produção' ? 'default' : 'outline'}
            className={`font-mono text-sm cursor-pointer ${
              filter === 'produção' 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'border-slate-600 text-slate-300 hover:border-green-500'
            }`}
          >
            Produção
          </Button>
          <Button
            onClick={() => setFilter('desenvolvimento')}
            variant={filter === 'desenvolvimento' ? 'default' : 'outline'}
            className={`font-mono text-sm cursor-pointer ${
              filter === 'desenvolvimento' 
                ? 'bg-yellow-600 hover:bg-yellow-700 text-white' 
                : 'border-slate-600 text-slate-300 hover:border-yellow-500'
            }`}
          >
            Desenvolvimento
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                      {getProjectIcon(project.title)}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${getStatusColor(project.status)} text-xs`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white font-mono group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="border-slate-600 text-slate-400 text-xs hover:border-blue-500 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Quick Features */}
                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-slate-400 text-xs mb-2 font-mono">Principais recursos:</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-slate-400 text-xs">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Project Modal/Detail */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <Card className="bg-slate-800 border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                      {getProjectIcon(selectedProject.title)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-mono">
                        {selectedProject.title}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={`${getStatusColor(selectedProject.status)} mt-2`}
                      >
                        {selectedProject.status}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-white cursor-pointer"
                  >
                    ✕
                  </Button>
                </div>

                {/* Project Description */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 font-mono">
                      Descrição do Projeto
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 font-mono">
                      Stack Tecnológico
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 font-mono">
                      Principais Funcionalidades
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-mono cursor-pointer"
                      onClick={() => alert('Demo não disponível - Projeto confidencial')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-slate-600 text-slate-300 hover:border-blue-500 font-mono cursor-pointer"
                      onClick={() => alert('Código fonte confidencial')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código Fonte
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-slate-800/30 border-slate-700 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Interessado em saber mais?
            </h3>
            <p className="text-slate-300 mb-6">
              Estes são apenas alguns dos projetos em que trabalhei. 
              Entre em contato para discutir como posso ajudar em seu próximo projeto.
            </p>
            <Button 
              onClick={() => {
                 if (typeof document === 'undefined') return;
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-mono"
            >
              Iniciar Conversa
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;