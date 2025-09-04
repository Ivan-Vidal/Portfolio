'use client'
import React from 'react';
import { Card } from './ui/card';
import { Code2, Layers, Shield, Zap } from 'lucide-react';
import { about, skills } from '../data/mock';

const About = () => {
  const focusAreas = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Angular, TypeScript, JavaScript com foco em interfaces acessíveis"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Backend Integration",
      description: "Node.js, Java, APIs RESTful e arquitetura de microserviços"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Setor Bancário",
      description: "Experiência em ambientes regulamentados e alta segurança"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Otimização de aplicações e práticas de desenvolvimento ágil"
    }
  ];

  const SkillCategory = ({ title, skills: skillList, color }) => (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold text-${color}-400 font-mono`}>
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {skillList.map((skill, index) => (
          <div 
            key={index}
            className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-blue-500/50 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            ./about<span className="text-blue-400">_me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">Status: Available</span>
                </div>
                
                <p className="text-slate-300 leading-relaxed text-lg">
                  {about.summary}
                </p>

                <div className="pt-6 border-t border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4 font-mono">
                    Áreas de Especialização
                  </h3>
                  <ul className="space-y-2">
                    {about.focus.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3 text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Focus Areas */}
            <div className="grid sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700 p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-blue-600/20 rounded-lg text-blue-400">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 font-mono text-sm">
                        {area.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-8 font-mono">
                Tech Stack
              </h3>
              
              <div className="space-y-8">
                <SkillCategory 
                  title="Frontend" 
                  skills={skills.frontend} 
                  color="blue"
                />
                <SkillCategory 
                  title="Backend" 
                  skills={skills.backend} 
                  color="green"
                />
                <SkillCategory 
                  title="Tools & Methods" 
                  skills={skills.tools} 
                  color="red"
                />
                <SkillCategory 
                  title="Methodologies" 
                  skills={skills.methodologies} 
                  color="yellow"
                />
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800/30 border-slate-700 p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 font-mono mb-2">5+</div>
                <div className="text-slate-300 text-sm">Anos de Experiência</div>
              </Card>
              <Card className="bg-slate-800/30 border-slate-700 p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 font-mono mb-2">20+</div>
                <div className="text-slate-300 text-sm">Projetos Entregues</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;