import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, MapPin, Clock } from 'lucide-react';
import aboutImage from '@/assets/about-us-team.jpg';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with deep understanding of traditional foods"
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Serving 5 states with reliable distribution network"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Consistent on-time delivery to keep your business running"
    }
  ];

  const values = [
    "Authentic traditional recipes",
    "Premium quality ingredients",
    "Reliable distribution network",
    "Exceptional customer service",
    "Competitive wholesale pricing",
    "Fresh product guarantee"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={aboutImage}
                alt="Dharmafoods USA Team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-card">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">5</div>
                      <div className="text-sm text-muted-foreground">States Covered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">100+</div>
                      <div className="text-sm text-muted-foreground">Products</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-foreground">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                About Dharmafoods USA
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary">
                Your Trusted Partner for Authentic Telugu Foods
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As the official distributor of Swetha Telugu Foods, we take pride in bringing the 
                authentic flavors of traditional Telugu cuisine to businesses across the Southeast. 
                Our commitment to quality and reliability has made us the preferred choice for 
                restaurants, grocery stores, and food service providers.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/20 transition-smooth">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Why Choose Us?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};