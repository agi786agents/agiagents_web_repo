import React from 'react';
import { Brain, Cpu, Network, Shield, Users, Trophy, Target, Lightbulb } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { SlideIn } from '../components/animations/SlideIn';
import { ParallaxSection } from '../components/animations/ParallaxSection';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Technology',
    description: 'Leveraging cutting-edge artificial intelligence and machine learning algorithms.',
  },
  {
    icon: Network,
    title: 'Scalable Architecture',
    description: 'Built on robust, cloud-native infrastructure that grows with your business.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and security protocols to protect your data.',
  },
  {
    icon: Cpu,
    title: 'Continuous Innovation',
    description: 'Regular updates and improvements to stay ahead of technology.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated AI specialists and developers at your service.',
  },
  {
    icon: Trophy,
    title: 'Proven Success',
    description: 'Track record of successful implementations across industries.',
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Tailored AI solutions designed for your specific needs.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Constantly evolving with the latest AI advancements.',
  }
];

export function About() {
  return (
    <div className="min-h-screen bg-black">
      <ParallaxSection className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Pioneering AI Solutions
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-xl text-text-light text-center mb-16 max-w-3xl mx-auto">
              At AGI Agents, we're dedicated to transforming businesses through innovative AI solutions. Our mission is to make advanced artificial intelligence accessible and practical for enterprises of all sizes.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <SlideIn
                key={feature.title}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 100}
                className="bg-primary bg-opacity-10 rounded-xl p-6 border border-primary-accent border-opacity-20 hover:border-opacity-100 transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 text-primary-accent mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-text-light">{feature.description}</p>
              </SlideIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-16">
              <a
                href="https://calendly.com/agi786agents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-accent text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)]"
              >
                Schedule a Consultation
              </a>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>
    </div>
  );
}