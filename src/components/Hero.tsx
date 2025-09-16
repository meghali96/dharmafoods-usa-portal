import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Shield, Award } from 'lucide-react';
import heroImage from '@/assets/hero-food-image.jpg';

export const Hero: React.FC = () => {
  const handleCTAClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Truck,
      text: "Fast Delivery Across 5 States"
    },
    {
      icon: Shield,
      text: "Authentic Quality Guaranteed"
    },
    {
      icon: Award,
      text: "Trusted Distribution Partner"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Authentic Telugu Foods"
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Official Distributor of{' '}
                <span className="text-accent">
                  Swetha Telugu Foods
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Bringing authentic traditional flavors to businesses across Georgia, Florida, South Carolina, Tennessee, and Alabama.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <feature.icon className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-white">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-4 h-14 shadow-accent hover:shadow-accent/60 transition-smooth group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4 h-14 transition-smooth"
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Premium Telugu Food Products"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-accent">
                Premium Quality
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-0.5 h-8 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};