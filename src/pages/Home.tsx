import React from 'react';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { ServicesSection } from '../components/ServicesSection';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ServicesSection />
      <Testimonials />
      <CTA />
    </>
  );
}