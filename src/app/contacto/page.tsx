'use client';

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/SocialIcons";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="mb-16">
          <SectionHeading 
            title="Contacto" 
            subtitle="Escríbeme sobre derechos humanos, investigación jurídica o tecnología."
            eyebrow="CONTACTO"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <Reveal>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Información de Contacto</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              Puedes usar el formulario o escribirme directamente por correo o WhatsApp.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <a href={siteConfig.links.email} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface/50 transition-colors border border-transparent hover:border-border">
                <div className="p-3 bg-surface border border-border rounded-lg text-accent-cyan">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Email</h4>
                  <p className="text-text-muted">{siteConfig.author.email}</p>
                </div>
              </a>

              <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface/50 transition-colors border border-transparent hover:border-border">
                <div className="p-3 bg-surface border border-border rounded-lg text-success">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">WhatsApp</h4>
                  <p className="text-text-muted">{siteConfig.author.phoneDisplay}</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent">
                <div className="p-3 bg-surface border border-border rounded-lg text-accent-violet">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Ubicación</h4>
                  <p className="text-text-muted">{siteConfig.author.location}</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-text-primary mb-4">Redes Profesionales</h4>
            <div className="flex gap-4">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-xl hover:text-accent-cyan hover:border-accent-cyan/30 transition-all">
                <LinkedInIcon size={24} />
              </a>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-xl hover:text-accent-cyan hover:border-accent-cyan/30 transition-all">
                <GitHubIcon size={24} />
              </a>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.2}>
            <div className="glass p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Envíame un mensaje</h3>
              <form className="flex flex-col gap-6" action="https://formspree.io/f/example" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input 
                    label="Nombre completo" 
                    id="name" 
                    name="name" 
                    placeholder="Tu nombre" 
                    required 
                  />
                  <Input 
                    label="Email" 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="tu@email.com" 
                    required 
                  />
                </div>
                
                <Input 
                  label="Asunto" 
                  id="subject" 
                  name="subject" 
                  placeholder="¿En qué te puedo ayudar?" 
                  required 
                />
                
                <Textarea 
                  label="Mensaje" 
                  id="message" 
                  name="message" 
                  placeholder="Cuéntame sobre tu proyecto o consulta..." 
                  rows={5} 
                  required 
                />
                
                <Button type="button" variant="primary" size="lg" className="w-full mt-2" onClick={() => alert('El formulario en el MVP es de demostración. Configura Supabase o Formspree para envíos reales.')}>
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
}
