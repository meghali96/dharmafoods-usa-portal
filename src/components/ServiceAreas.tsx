import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Truck, Clock, Phone } from 'lucide-react';

export const ServiceAreas: React.FC = () => {
  const states = [
    {
      name: "Georgia",
      abbreviation: "GA",
      cities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Macon"],
      deliveryTime: "1-2 days",
      color: "bg-gradient-states"
    },
    {
      name: "Florida",
      abbreviation: "FL", 
      cities: ["Jacksonville", "Miami", "Tampa", "Orlando", "Tallahassee"],
      deliveryTime: "2-3 days",
      color: "bg-gradient-states"
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
      cities: ["Charleston", "Columbia", "Greenville", "Spartanburg", "Rock Hill"],
      deliveryTime: "1-2 days",
      color: "bg-gradient-states"
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
      cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"],
      deliveryTime: "2-3 days", 
      color: "bg-gradient-states"
    },
    {
      name: "Alabama",
      abbreviation: "AL",
      cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"],
      deliveryTime: "1-3 days",
      color: "bg-gradient-states"
    }
  ];

  const serviceFeatures = [
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Temperature-controlled vehicles ensure product quality during transport"
    },
    {
      icon: Clock,
      title: "Scheduled Service",
      description: "Regular delivery schedules to keep your inventory well-stocked"
    },
    {
      icon: Phone,
      title: "Local Support",
      description: "Dedicated regional representatives for personalized service"
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Comprehensive coverage across all major cities and towns"
    }
  ];

  return (
    <section id="service-areas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-4">
            Service Coverage
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-gradient-states bg-clip-text text-transparent mb-6">
            Serving 5 States Across the Southeast
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our extensive distribution network ensures reliable delivery of authentic Telugu foods 
            to businesses throughout Georgia, Florida, South Carolina, Tennessee, and Alabama.
          </p>
        </div>

        {/* States Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {states.map((state, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                {/* State Header */}
                <div className={`${state.color} p-6 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-bold mb-1">
                      {state.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold opacity-90">
                        {state.abbreviation}
                      </span>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{state.deliveryTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                    <MapPin className="w-full h-full" />
                  </div>
                </div>

                {/* Cities List */}
                <div className="p-6">
                  <h4 className="font-heading font-semibold text-foreground mb-3">
                    Major Cities Served:
                  </h4>
                  <div className="space-y-2">
                    {state.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-muted-foreground">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Call to Action Card */}
          <Card className="md:col-span-2 lg:col-span-1 bg-gradient-brand text-white border-0 overflow-hidden group hover:shadow-brand transition-smooth">
            <CardContent className="p-8 text-center relative">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-3">
                  Not in These Areas?
                </h3>
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  Contact us to discuss expanding our services to your location. We're always 
                  looking to serve new markets.
                </p>
                
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-smooth"
                >
                  Get in Touch
                </button>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
            </CardContent>
          </Card>
        </div>

        {/* Service Features */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Service Excellence
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality extends beyond our products to exceptional service delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                 <div className="w-16 h-16 icon-container-3d rounded-full flex items-center justify-center mx-auto transition-smooth">
                   <feature.icon className="w-8 h-8 icon-3d-secondary" />
                 </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
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