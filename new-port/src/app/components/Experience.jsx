'use client'
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experience, education } from '../data/mock';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experience[0]);

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            ./experience<span className="text-blue-400">.log</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline/List */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-6 font-mono">
                Histórico Profissional
              </h3>
              
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExperience(exp)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                      selectedExperience.id === exp.id
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-slate-800/30 border-slate-700 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold font-mono text-sm mb-1">
                          {exp.company}
                        </h4>
                        <p className="text-xs text-slate-400 mb-2">
                          {exp.position}
                        </p>
                        <div className="flex items-center text-xs text-slate-500">
                          <Calendar size={12} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`transition-transform ${
                          selectedExperience.id === exp.id ? 'rotate-90 text-blue-400' : 'text-slate-500'
                        }`} 
                      />
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Education */}
            <Card className="bg-slate-800/50 border-slate-700 p-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">
                Formação
              </h3>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400 font-mono text-sm">
                  {education.degree}
                </h4>
                <div className="text-slate-300 text-sm">
                  {education.institution}
                </div>
                <div className="flex items-center text-xs text-slate-500">
                  <Calendar size={12} className="mr-1" />
                  {education.period}
                </div>
                <Badge variant="outline" className="border-green-500 text-green-400 text-xs">
                  {education.status}
                </Badge>
              </div>
            </Card>
          </div>

          {/* Selected Experience Details */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 p-8 h-full">
              <div className="space-y-6">
                {/* Company Header */}
                <div className="border-b border-slate-700 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-600/20 rounded-lg">
                        <Building className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white font-mono">
                          {selectedExperience.company}
                        </h3>
                        <p className="text-blue-400 font-mono">
                          {selectedExperience.position}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-blue-500 text-blue-400">
                      {selectedExperience.period}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {selectedExperience.description}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 font-mono">
                    Principais Realizações
                  </h4>
                  <div className="space-y-4">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <p className="text-slate-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Used */}
                <div className="pt-6 border-t border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-4 font-mono">
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Angular', 'TypeScript', 'Node.js', 'Java', 'Git', 'Jest', 'CI/CD', 'Scrum'].map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="border-slate-600 text-slate-300 hover:border-blue-500/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16">
          <Card className="bg-slate-800/30 border-slate-700 p-8">
            <h3 className="text-xl font-semibold text-white mb-8 font-mono text-center">
              Linha do Tempo Profissional
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900 flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold text-white font-mono">
                          {exp.company}
                        </h4>
                        <Badge variant="outline" className="border-blue-500 text-blue-400 text-xs mt-1 sm:mt-0">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-blue-400 text-sm font-mono mb-2">
                        {exp.position}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;