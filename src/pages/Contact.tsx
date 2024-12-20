import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { SlideIn } from '../components/animations/SlideIn';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (123) 456-7890',
    link: 'tel:+11234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'contact@agiagents.com',
    link: 'mailto:contact@agiagents.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'AI Innovation Hub, Silicon Valley, CA',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: '24/7 AI Support Available',
  },
];

export function Contact() {
  return (
    <div className="min-h-screen bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Get in Touch
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-xl text-text-light text-center mb-16 max-w-3xl mx-auto">
            Ready to transform your business with AI? Our team is here to help you implement cutting-edge solutions tailored to your needs.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SlideIn direction="left" className="order-2 md:order-1">
            <form className="space-y-6 bg-primary bg-opacity-10 p-8 rounded-xl border border-primary-accent border-opacity-20">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black border border-primary-accent border-opacity-20 rounded-lg focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-opacity-50 transition-all duration-300 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black border border-primary-accent border-opacity-20 rounded-lg focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-opacity-50 transition-all duration-300 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black border border-primary-accent border-opacity-20 rounded-lg focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-opacity-50 transition-all duration-300 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-accent text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)]"
              >
                Send Message
              </button>
            </form>
          </SlideIn>

          <div className="order-1 md:order-2 space-y-6">
            {contactInfo.map((item, index) => (
              <SlideIn
                key={item.title}
                direction="right"
                delay={index * 100}
                className="bg-primary bg-opacity-10 p-6 rounded-xl border border-primary-accent border-opacity-20 hover:border-opacity-100 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-8 h-8 text-primary-accent" />
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-text-light hover:text-primary-accent transition-colors"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-text-light">{item.details}</p>
                    )}
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}