import React from 'react';
import { Phone, MessageSquare, Cog } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { ServiceCard } from './services/ServiceCard';
import { StaggeredContainer } from './animations/StaggeredContainer';

const services = [
  {
    icon: Phone,
    title: 'AI Calling Bots',
    description: 'Automate customer calls with intelligent, natural voice AI.',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots',
    description: 'Enhance customer interactions with 24/7 smart chat.',
  },
  {
    icon: Cog,
    title: 'Business Automation',
    description: 'Streamline operations with tailored AI workflows.',
  },
];

export function ServicesSection() {
  return (
    <section className="relative bg-primary py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn delay={200}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            Our AI Solutions Tailored for Your Success
          </h2>
        </FadeIn>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </StaggeredContainer>

        <FadeIn direction="up" delay={600} className="text-center mt-8 md:mt-16">
          <a
            href="https://calendly.com/agi786agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-accent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)]"
          >
            Get a Free Demo
          </a>
        </FadeIn>
      </div>
    </section>
  );
}