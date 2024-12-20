import React from 'react';
import { Phone, MessageSquare, Cog } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

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

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          {...service}
          index={index}
        />
      ))}
    </div>
  );
}