'use client'

import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { personalInfo, contactInfo } from '../data/mock';
import { sendEmail } from '@/services/emailService';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
const res = await sendEmail(formData);
  try {
  const res = await sendEmail(formData);
  console.log('Email enviado com sucesso:', res);

  toast({
    title: "Mensagem enviada!",
    description: "Obrigado pelo contato. Responderei em breve.",
  });

  setFormData({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
} catch (error) {
  console.log('Email nao enviado:', error);

  toast({
    title: "Erro ao enviar",
    description: "Houve um problema ao enviar sua mensagem. Tente novamente.",
    variant: "destructive",
  });
} finally {
  setIsSubmitting(false);
}

  };

const handleDownloadResume = () => {
  if (typeof document === 'undefined') return;

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


  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Resposta em até 24h'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'WhatsApp disponível'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      value: personalInfo.location,
      href: '#',
      description: 'Disponível para remoto'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      href: personalInfo.github,
      color: 'hover:text-blue-400'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            ./contact<span className="text-blue-400">.me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {contactInfo.title}
            </h3>
            <p className="text-slate-300 text-lg">
              {contactInfo.subtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Methods */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-6 font-mono">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="flex-shrink-0 p-2 bg-blue-600/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white font-mono text-sm mb-1">
                        {method.title}
                      </h4>
                      <p className="text-slate-300 text-sm mb-1">
                        {method.value}
                      </p>
                      <p className="text-slate-500 text-xs">
                        {method.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-6 font-mono">
                Redes Sociais
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 ${social.color} transition-all duration-300 hover:transform hover:scale-110 hover:border-current`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Card>

            {/* Download Resume */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">
                Currículo
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Baixe meu currículo completo em PDF para mais detalhes sobre minha experiência.
              </p>
              <Button 
                onClick={handleDownloadResume}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </Card>

            {/* Availability Status */}
            <Card className="bg-slate-800/30 border-slate-700 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-mono text-sm">Disponível</span>
                  </div>
                </div>
                <Clock className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-slate-400 text-xs mt-2">
                Aberto para novos projetos e oportunidades
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                  Enviar Mensagem
                </h3>
                <p className="text-slate-300">
                  Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 font-mono">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 font-mono">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2 font-mono">
                    Assunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 font-mono">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white font-mono text-lg py-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>

              {/* Form Footer */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Respostas em até 24 horas</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;