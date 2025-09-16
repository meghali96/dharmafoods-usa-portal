import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { EnquiryModal } from './EnquiryModal';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/dharmafoods-logo.png';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Service Areas', href: '#service-areas' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-card' 
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Dharmafoods USA - Integrity, Fairness, Respect, Love" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden">
                <span className="text-2xl font-heading font-bold text-primary">
                  Dharmafoods USA
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-smooth font-medium relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>
              ))}
            </nav>

            {/* Desktop Enquiry Button */}
            <div className="hidden lg:flex">
              <Button
                onClick={() => setIsEnquiryModalOpen(true)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-2 h-12 shadow-accent transition-smooth hover:shadow-accent/60 hover:scale-105 min-w-[120px]"
              >
                Enquiry
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-md">
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-smooth font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-4 pt-4 pb-2">
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsEnquiryModalOpen(true);
                    }}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 shadow-accent"
                  >
                    Enquiry
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </>
  );
};