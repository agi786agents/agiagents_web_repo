import React from 'react';
import { FadeIn } from '../components/animations/FadeIn';
import { SlideIn } from '../components/animations/SlideIn';
import { ParallaxSection } from '../components/animations/ParallaxSection';
import { servicesList } from '../components/services/ServicesList';

export function Services() {
  return (
    <div className="min-h-screen bg-black">
      <ParallaxSection className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Our Services
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-xl text-text-light text-center mb-16 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and enhance customer experience.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <SlideIn
                key={service.title}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 100}
                className="bg-primary bg-opacity-10 rounded-xl p-8 border border-primary-accent border-opacity-20 hover:border-opacity-100 transition-all duration-300 group"
              >
                <service.icon className="w-12 h-12 text-primary-accent mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-text-light mb-6 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-text-light flex items-center">
                      <div className="w-2 h-2 bg-primary-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </SlideIn>
            ))}
          </div>

          <FadeIn delay={400} className="text-center mt-16">
            <a
              href="https://calendly.com/agi786agents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-accent text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)]"
            >
              Schedule a Consultation
            </a>
          </FadeIn>
        </div>
      </ParallaxSection>
    </div>
  );
}