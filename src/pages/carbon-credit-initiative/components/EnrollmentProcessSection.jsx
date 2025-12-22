import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const EnrollmentProcessSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    district: '',
    landSize: '',
    farmingType: '',
    hasAadhar: false,
    hasLandRecords: false,
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const stateOptions = [
    { value: 'punjab', label: 'Punjab' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'up', label: 'Uttar Pradesh' },
    { value: 'mp', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'gujarat', label: 'Gujarat' }
  ];

  const farmingTypeOptions = [
    { value: 'conventional', label: 'Conventional Farming' },
    { value: 'organic', label: 'Organic Farming' },
    { value: 'mixed', label: 'Mixed Farming' },
    { value: 'natural', label: 'Natural Farming' }
  ];

  const requirements = [
    {
      icon: "FileText",
      title: "Land Ownership Documents",
      titleHi: "भूमि स्वामित्व दस्तावेज़",
      description: "Valid land records or lease agreement (minimum 5 acres)",
      items: ["7/12 Extract", "Khasra/Khatauni", "Land Revenue Receipt"]
    },
    {
      icon: "CreditCard",
      title: "Identity Verification",
      titleHi: "पहचान सत्यापन",
      description: "Government-issued identification documents",
      items: ["Aadhar Card", "PAN Card", "Voter ID"]
    },
    {
      icon: "Building2",
      title: "Bank Account Details",
      titleHi: "बैंक खाता विवरण",
      description: "Active bank account for credit payments",
      items: ["Bank Passbook", "Cancelled Cheque", "IFSC Code"]
    },
    {
      icon: "Camera",
      title: "Farm Documentation",
      titleHi: "खेत दस्तावेज़ीकरण",
      description: "Recent photographs and location details",
      items: ["Farm Photos", "GPS Coordinates", "Crop Details"]
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.fullName?.trim()) newErrors.fullName = 'Full name is required';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.state) newErrors.state = 'State is required';
    if (!formData?.district?.trim()) newErrors.district = 'District is required';
    if (!formData?.landSize?.trim()) newErrors.landSize = 'Land size is required';
    if (!formData?.farmingType) newErrors.farmingType = 'Farming type is required';
    if (!formData?.agreeTerms) newErrors.agreeTerms = 'You must agree to terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      alert('Enrollment form submitted successfully! Our team will contact you within 48 hours.');
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        state: '',
        district: '',
        landSize: '',
        farmingType: '',
        hasAadhar: false,
        hasLandRecords: false,
        agreeTerms: false
      });
    }
  };

  return (
    <section className="bg-background py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="ClipboardCheck" size={18} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Easy Enrollment</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Start Your Carbon Credit Journey
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Simple enrollment process with verification completed within 48 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Required Documents</h3>
            
            <div className="space-y-6">
              {requirements?.map((req) => (
                <div
                  key={req?.title}
                  className="bg-card rounded-xl p-6 shadow-organic border border-border"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={req?.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-bold text-foreground mb-1">{req?.title}</h4>
                      <p className="text-xs text-accent font-medium mb-2">{req?.titleHi}</p>
                      <p className="text-sm text-muted-foreground mb-3">{req?.description}</p>
                      <ul className="space-y-1">
                        {req?.items?.map((item) => (
                          <li key={item} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Check" size={16} color="var(--color-success)" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-success/10 rounded-lg p-4 border border-success/20">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                <div className="text-sm text-foreground leading-relaxed">
                  <strong>Note:</strong> All documents can be uploaded digitally. Physical copies are not required. Our team will guide you through the verification process.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 md:p-8 shadow-organic">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Enrollment Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData?.fullName}
                onChange={(e) => handleInputChange('fullName', e?.target?.value)}
                error={errors?.fullName}
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="Enter 10-digit mobile number"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />

              <Select
                label="State"
                options={stateOptions}
                value={formData?.state}
                onChange={(value) => handleInputChange('state', value)}
                placeholder="Select your state"
                error={errors?.state}
                required
              />

              <Input
                label="District"
                type="text"
                placeholder="Enter your district"
                value={formData?.district}
                onChange={(e) => handleInputChange('district', e?.target?.value)}
                error={errors?.district}
                required
              />

              <Input
                label="Total Land Size (Acres)"
                type="number"
                placeholder="Enter land size"
                value={formData?.landSize}
                onChange={(e) => handleInputChange('landSize', e?.target?.value)}
                error={errors?.landSize}
                description="Minimum 5 acres required"
                required
              />

              <Select
                label="Current Farming Type"
                options={farmingTypeOptions}
                value={formData?.farmingType}
                onChange={(value) => handleInputChange('farmingType', value)}
                placeholder="Select farming method"
                error={errors?.farmingType}
                required
              />

              <div className="space-y-3">
                <Checkbox
                  label="I have valid Aadhar card"
                  checked={formData?.hasAadhar}
                  onChange={(e) => handleInputChange('hasAadhar', e?.target?.checked)}
                />
                
                <Checkbox
                  label="I have land ownership documents"
                  checked={formData?.hasLandRecords}
                  onChange={(e) => handleInputChange('hasLandRecords', e?.target?.checked)}
                />
                
                <Checkbox
                  label="I agree to terms and conditions"
                  checked={formData?.agreeTerms}
                  onChange={(e) => handleInputChange('agreeTerms', e?.target?.checked)}
                  error={errors?.agreeTerms}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="default"
                fullWidth
                iconName="Send"
                iconPosition="left"
              >
                Submit Enrollment
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our Privacy Policy and Terms of Service
              </div>
            </form>
          </div>
        </div>

        <div className="bg-muted rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} color="var(--color-primary)" />
              </div>
              <div>
                <div className="text-base font-semibold text-foreground mb-1">48 Hours</div>
                <div className="text-sm text-muted-foreground">Verification Time</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={24} color="var(--color-success)" />
              </div>
              <div>
                <div className="text-base font-semibold text-foreground mb-1">24/7 Support</div>
                <div className="text-sm text-muted-foreground">Helpline Available</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" size={24} color="var(--color-accent)" />
              </div>
              <div>
                <div className="text-base font-semibold text-foreground mb-1">100% Secure</div>
                <div className="text-sm text-muted-foreground">Data Protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentProcessSection;