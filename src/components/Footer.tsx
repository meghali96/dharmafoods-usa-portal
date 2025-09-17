import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logoImage from '@/assets/dharmafoods-logo.png';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Contact', href: '#contact' }
  ];

  const productCategories = [
    'Traditional Rice Varieties',
    'Spices & Masalas',
    'Pickles & Preserves',
    'Ready-to-Cook Items',
    'Specialty Snacks',
    'Oil & Ghee'
  ];

  const serviceAreas = [
    'Georgia (GA)',
    'Florida (FL)',
    'South Carolina (SC)',
    'Tennessee (TN)',
    'Alabama (AL)'
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="bg-white p-2 rounded-lg inline-block mb-3">
                <img 
                  src={logoImage} 
                  alt="Dharmafoods USA - Integrity, Fairness, Respect, Love" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white/80 leading-relaxed">
                Official distributor of <span className="text-accent font-semibold">Swetha Telugu Foods</span>, bringing authentic 
                traditional flavors to businesses across the Southeast.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 icon-3d-accent flex-shrink-0" />
                <span className="text-white/80">Atlanta, GA 30309</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 icon-3d-accent flex-shrink-0" />
                <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-smooth">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 icon-3d-accent flex-shrink-0" />
                <a href="mailto:sales@dharmafoodsusa.com" className="text-white/80 hover:text-white transition-smooth">
                  sales@dharmafoodsusa.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 icon-3d-accent flex-shrink-0" />
                <span className="text-white/80">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-white/80 hover:text-white transition-smooth text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Our Products
            </h4>
            <div className="space-y-2">
              {productCategories.map((category, index) => (
                <div key={index} className="text-white/80 text-sm">
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Service Areas
            </h4>
            <div className="space-y-2">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-white/80 text-sm">
                  {area}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
              <h5 className="font-semibold text-sm mb-2">
                Need Service Elsewhere?
              </h5>
              <p className="text-xs text-white/80 mb-3">
                Contact us to discuss expanding to your area.
              </p>
              <button 
                onClick={() => handleNavClick('#contact')}
                className="text-accent hover:text-accent/80 text-sm font-semibold transition-smooth"
              >
                Get in Touch →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © {new Date().getFullYear()} Dharmafoods USA. All rights reserved. 
              Official distributor of <span className="text-accent font-semibold">Swetha Telugu Foods</span>.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-smooth">
                Food Safety
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};