import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Products } from '@/components/Products';
import { ServiceAreas } from '@/components/ServiceAreas';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Products />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
