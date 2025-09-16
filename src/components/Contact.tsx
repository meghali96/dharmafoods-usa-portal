import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "Toll-free: 1-800-DHARMA",
      action: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "sales@dharmafoodsusa.com",
      secondary: "info@dharmafoodsusa.com",
      action: "mailto:sales@dharmafoodsusa.com"
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "1234 Distribution Center Dr",
      secondary: "Atlanta, GA 30309",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon - Fri: 8:00 AM - 6:00 PM",
      secondary: "Sat: 9:00 AM - 4:00 PM",
      action: null
    }
  ];

  const quickActions = [
    {
      title: "Request Quote",
      description: "Get pricing for bulk orders",
      icon: MessageCircle,
      color: "bg-primary hover:bg-primary/90"
    },
    {
      title: "Schedule Delivery",
      description: "Plan your next delivery",
      icon: Clock,
      color: "bg-secondary hover:bg-secondary/90"
    },
    {
      title: "Product Catalog",
      description: "Browse our full range",
      icon: MapPin,
      color: "bg-accent hover:bg-accent/90 text-accent-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-4">
            Get in Touch
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Ready to Start Your Partnership?
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Contact our team today to discuss your requirements and discover how we can support 
            your business with authentic Telugu foods.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="block space-y-1 hover:text-primary transition-smooth"
                          >
                            <div className="font-medium text-foreground">
                              {info.primary}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {info.secondary}
                            </div>
                          </a>
                        ) : (
                          <div className="space-y-1">
                            <div className="font-medium text-foreground">
                              {info.primary}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {info.secondary}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps Embed */}
            <Card className="overflow-hidden border-border/50">
              <CardContent className="p-0">
                <div className="relative h-80 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1234567890!2d-84.3876!3d33.7756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAtlanta%2C+GA!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dharmafoods USA Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  
                  {/* Map Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-card">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold text-sm text-foreground">
                          Distribution Center
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Atlanta, GA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index}
                    className={`w-full justify-start h-auto p-4 ${action.color}`}
                    onClick={() => {
                      // For demo purposes, scroll to top to trigger enquiry modal
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div className="flex items-center space-x-3 text-left">
                      <action.icon className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">{action.title}</div>
                        <div className="text-sm opacity-90">
                          {action.description}
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-destructive mx-auto mb-3" />
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    Emergency Support
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent delivery issues or time-sensitive orders
                  </p>
                  <a 
                    href="tel:+15551234567"
                    className="text-destructive font-semibold hover:underline"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Business Info */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h4 className="font-heading font-semibold text-foreground mb-4">
                  Business Information
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">License:</span>
                    <span className="ml-2 font-medium">FDA-12345678</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Established:</span>
                    <span className="ml-2 font-medium">2015</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Service Areas:</span>
                    <span className="ml-2 font-medium">GA, FL, SC, TN, AL</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};