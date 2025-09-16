import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Shield, Clock, Star, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: "Authentic Traditional Recipes",
      description: "Time-tested recipes passed down through generations, maintaining the authentic taste of Telugu cuisine."
    },
    {
      icon: Shield,
      title: "Premium Quality Ingredients",
      description: "Only the finest ingredients sourced from trusted suppliers to ensure consistent quality."
    },
    {
      icon: Clock,
      title: "Reliable Distribution Network",
      description: "Efficient logistics and timely delivery across all five southeastern states."
    },
    {
      icon: Users,
      title: "Exceptional Customer Service",
      description: "Dedicated support team committed to your business success and satisfaction."
    },
    {
      icon: Star,
      title: "Competitive Wholesale Pricing",
      description: "Fair pricing structure that helps your business maintain healthy profit margins."
    },
    {
      icon: CheckCircle,
      title: "Fresh Product Guarantee",
      description: "Temperature-controlled storage and transport ensuring products reach you at peak freshness."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-secondary border-secondary/20 bg-secondary/5 mb-4">
            Why Choose Us
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Your Trusted Partner for Success
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            We go beyond just distribution – we're your partner in bringing authentic Telugu flavors 
            to your customers with unmatched quality and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group p-6 rounded-xl bg-card border border-border/50 hover:border-secondary/30 hover:shadow-card transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-smooth">
                  <reason.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-secondary p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses who trust Dharmafoods USA for their authentic Telugu food needs.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-smooth shadow-accent hover:shadow-accent/60 hover:scale-105"
            >
              Start Your Partnership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};