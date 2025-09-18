import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake, Calendar, Award, Globe } from 'lucide-react';
import swethaLogo from '@/assets/swetha-telugu-foods-logo.png';

export const Partnership: React.FC = () => {
  const milestones = [
    {
      icon: Calendar,
      year: "1979",
      title: "Humble Beginnings",
      description: "Started as Vamana Pickles by Tejas Food Industries LLP"
    },
    {
      icon: Award,
      year: "40+ Years",
      title: "Legacy of Excellence",
      description: "Four decades of authentic South Indian culinary traditions"
    },
    {
      icon: Globe,
      year: "Today",
      title: "Global Reach",
      description: "Bringing traditional South Indian tastes with global appeal"
    },
    {
      icon: Handshake,
      year: "Partnership",
      title: "Dharmafoods USA",
      description: "Official distributor bringing authentic flavors to America"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                Partnership Excellence
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary">
                <span className="text-secondary">Swetha Telugu Foods</span> × Dharmafoods USA
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                What began as a humble venture in <span className="text-primary font-semibold">1979</span> under the name 
                <span className="text-secondary font-semibold"> Vamana Pickles</span> by Tejas Food Industries LLP, has today 
                blossomed into an iconic brand, <span className="text-secondary font-semibold">Swetha Telugu Foods</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rooted in the rich culinary traditions of South India, we have made it our mission to bring you the 
                authentic, bold, and vibrant flavors that have made South Indian cuisine a global sensation.
              </p>
            </div>

            {/* Mission Statement */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  "Our journey, now spanning over four decades, has been guided by the true spirit of Indian 
                  home-cooked meals. From our signature pickles to masalas, snacks, powders, and pastes, 
                  every product we create is crafted with passion, creativity, and the utmost care."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Logo and Visual Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 rounded-3xl p-12 text-center">
              
              {/* Swetha Telugu Foods Logo */}
              <div className="w-48 h-48 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl icon-container-3d p-4">
                <img 
                  src={swethaLogo} 
                  alt="Swetha Telugu Foods Logo" 
                  className="w-40 h-40 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Partnership Badge */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-card mb-8">
                <div className="flex items-center justify-center space-x-3 text-primary">
                  <Handshake className="w-6 h-6 icon-3d-primary" />
                  <span className="font-heading font-semibold">Official Partnership</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Our Journey Together
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to a trusted partnership bringing authentic South Indian flavors to America
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 icon-container-3d rounded-full flex items-center justify-center mx-auto mb-4 transition-smooth">
                    <milestone.icon className="w-8 h-8 icon-3d-primary" />
                  </div>
                  <div className="text-2xl font-heading font-bold text-secondary mb-2">
                    {milestone.year}
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};