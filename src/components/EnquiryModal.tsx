import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  stateCity: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const STATES = [
  'Georgia (GA)',
  'Florida (FL)', 
  'South Carolina (SC)',
  'Tennessee (TN)',
  'Alabama (AL)'
];

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    stateCity: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  // Save form data to session storage
  useEffect(() => {
    if (isOpen) {
      const savedData = sessionStorage.getItem('enquiry-form-data');
      if (savedData) {
        try {
          setFormData(JSON.parse(savedData));
        } catch (e) {
          // Ignore parsing errors
        }
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (formData.name || formData.email || formData.message) {
      sessionStorage.setItem('enquiry-form-data', JSON.stringify(formData));
    }
  }, [formData]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call - replace with actual endpoint
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        sessionStorage.removeItem('enquiry-form-data');
        toast({
          title: "Enquiry Submitted Successfully",
          description: "We'll get back to you within 24-48 hours.",
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      // Fallback to mailto if API is not available
      const subject = encodeURIComponent('Enquiry from Website - ' + formData.name);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `State/City: ${formData.stateCity}\n` +
        `Message: ${formData.message}`
      );
      
      window.location.href = `mailto:sales@dharmafoodsusa.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening Email Client",
        description: "Please send the email to complete your enquiry.",
      });
      
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      onClose();
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[720px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-primary">
            Send Us Your Enquiry
          </DialogTitle>
          <p className="text-muted-foreground">
            Share your requirements and we'll get back to you shortly.
          </p>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-heading text-primary mb-2">
              Thank You!
            </h3>
            <p className="text-muted-foreground mb-6">
              We've received your enquiry and will contact you within 24-48 hours.
            </p>
            <Button onClick={handleClose} className="bg-secondary hover:bg-secondary/90">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={errors.name ? 'border-destructive' : ''}
                  autoFocus
                />
                {errors.name && (
                  <span className="text-sm text-destructive">{errors.name}</span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <span className="text-sm text-destructive">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stateCity" className="text-sm font-medium">
                  State / City <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Select value={formData.stateCity} onValueChange={(value) => handleInputChange('stateCity', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {STATES.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                placeholder="Please describe your requirements, order quantities, delivery preferences, or any questions..."
              />
              {errors.message && (
                <span className="text-sm text-destructive">{errors.message}</span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex-1 h-12 text-base font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Enquiry'
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
                className="h-12 text-base font-medium"
              >
                Cancel
              </Button>
            </div>

            {Object.keys(errors).length > 0 && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-sm text-destructive font-medium">
                  Please fix the errors above and try again.
                </p>
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};