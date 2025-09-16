import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Leaf, Award, Clock } from 'lucide-react';

export const Products: React.FC = () => {
  const productCategories = [
    {
      name: "Traditional Rice Varieties",
      description: "Premium quality traditional rice including Sona Masoori, Basmati, and regional specialties",
      icon: "🌾",
      features: ["Organic options available", "Multiple varieties", "Bulk packaging"]
    },
    {
      name: "Authentic Spices & Masalas",
      description: "Hand-selected spices and traditional masala blends prepared using ancestral recipes",
      icon: "🌶️",
      features: ["Fresh grinding", "Traditional recipes", "Premium quality"]
    },
    {
      name: "Pickles & Preserves",
      description: "Traditional Telugu pickles made with authentic recipes and finest ingredients",
      icon: "🥒",
      features: ["Traditional recipes", "No artificial preservatives", "Long shelf life"]
    },
    {
      name: "Ready-to-Cook Items",
      description: "Convenient ready-to-cook products that maintain authentic flavors and nutrition",
      icon: "🍛",
      features: ["Easy preparation", "Authentic taste", "Nutritious ingredients"]
    },
    {
      name: "Specialty Snacks",
      description: "Traditional Telugu snacks and savories perfect for retail and food service",
      icon: "🥨",
      features: ["Crispy texture", "Traditional flavors", "Extended shelf life"]
    },
    {
      name: "Oil & Ghee",
      description: "Pure oils and traditional ghee processed using time-tested methods",
      icon: "🫗",
      features: ["Cold-pressed oils", "Pure ingredients", "Health benefits"]
    }
  ];

  const qualityPoints = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Sourced from trusted suppliers with rigorous quality checks"
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "No artificial additives or preservatives in traditional products"
    },
    {
      icon: Award,
      title: "Certified Standards",
      description: "All products meet FDA and food safety certification requirements"
    },
    {
      icon: Clock,
      title: "Fresh Guarantee",
      description: "Optimal freshness maintained through proper storage and handling"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-4">
            Our Product Range
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Authentic Swetha Telugu Foods
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our comprehensive range of traditional Telugu foods, carefully selected and 
            distributed to maintain authenticity and quality across all our partner locations.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/20 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Quality Assurance Guarantee
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every product in our catalog undergoes strict quality control to ensure you receive 
              only the finest traditional Telugu foods.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <point.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {point.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};