import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const CarbonCalculatorSection = () => {
  const [formData, setFormData] = useState({
    landSize: '',
    farmingType: '',
    cropType: '',
    irrigationType: ''
  });

  const [result, setResult] = useState(null);

  const farmingTypeOptions = [
    { value: 'conventional', label: 'Conventional Farming' },
    { value: 'organic', label: 'Organic Farming' },
    { value: 'mixed', label: 'Mixed Farming' }
  ];

  const cropTypeOptions = [
    { value: 'rice', label: 'Rice (धान)' },
    { value: 'wheat', label: 'Wheat (गेहूं)' },
    { value: 'sugarcane', label: 'Sugarcane (गन्ना)' },
    { value: 'cotton', label: 'Cotton (कपास)' },
    { value: 'vegetables', label: 'Vegetables (सब्जियां)' }
  ];

  const irrigationTypeOptions = [
    { value: 'flood', label: 'Flood Irrigation' },
    { value: 'drip', label: 'Drip Irrigation' },
    { value: 'sprinkler', label: 'Sprinkler System' },
    { value: 'rainfed', label: 'Rainfed' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCarbon = () => {
    const landSize = parseFloat(formData?.landSize) || 0;
    const baseCredits = landSize * 2.5;
    
    let multiplier = 1;
    if (formData?.farmingType === 'organic') multiplier = 1.5;
    if (formData?.farmingType === 'mixed') multiplier = 1.2;
    
    if (formData?.irrigationType === 'drip') multiplier += 0.3;
    if (formData?.irrigationType === 'sprinkler') multiplier += 0.2;

    const totalCredits = Math.round(baseCredits * multiplier);
    const annualEarnings = totalCredits * 1800;

    setResult({
      credits: totalCredits,
      earnings: annualEarnings,
      co2Reduced: totalCredits
    });
  };

  return (
    <section className="bg-muted py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Calculator" size={18} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Earnings Estimator</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Calculate Your Potential Earnings
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Get an instant estimate of carbon credits and annual income based on your farm details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-organic">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Farm Details</h3>
            
            <div className="space-y-6">
              <Input
                label="Land Size (Acres)"
                type="number"
                placeholder="Enter your farm size"
                value={formData?.landSize}
                onChange={(e) => handleInputChange('landSize', e?.target?.value)}
                description="Total cultivable land area"
              />

              <Select
                label="Farming Type"
                options={farmingTypeOptions}
                value={formData?.farmingType}
                onChange={(value) => handleInputChange('farmingType', value)}
                placeholder="Select farming method"
              />

              <Select
                label="Primary Crop"
                options={cropTypeOptions}
                value={formData?.cropType}
                onChange={(value) => handleInputChange('cropType', value)}
                placeholder="Select main crop"
              />

              <Select
                label="Irrigation Method"
                options={irrigationTypeOptions}
                value={formData?.irrigationType}
                onChange={(value) => handleInputChange('irrigationType', value)}
                placeholder="Select irrigation type"
              />

              <Button
                variant="default"
                fullWidth
                iconName="TrendingUp"
                iconPosition="left"
                onClick={calculateCarbon}
              >
                Calculate Earnings
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 md:p-8 shadow-organic">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Estimated Results</h3>
            
            {result ? (
              <div className="space-y-6">
                <div className="bg-success/10 rounded-lg p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Annual Carbon Credits</span>
                    <Icon name="Award" size={20} color="var(--color-success)" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-success">{result?.credits}</div>
                  <div className="text-xs text-muted-foreground mt-1">Credits per year</div>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Estimated Annual Earnings</span>
                    <Icon name="IndianRupee" size={20} color="var(--color-primary)" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    ₹{result?.earnings?.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Based on current market rates</div>
                </div>

                <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">CO₂ Reduction Impact</span>
                    <Icon name="Leaf" size={20} color="var(--color-accent)" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{result?.co2Reduced}</div>
                  <div className="text-xs text-muted-foreground mt-1">Tonnes of CO₂ equivalent</div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                    <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      <strong>Note:</strong> These are estimated values based on average conditions. Actual earnings may vary based on verification, market rates, and farming practices. Current rate: ₹1,800 per credit.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Calculator" size={48} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Ready to Calculate?
                </h4>
                <p className="text-sm md:text-base text-muted-foreground max-w-md">
                  Fill in your farm details on the left to see your potential carbon credit earnings and environmental impact
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-card rounded-xl p-6 md:p-8 shadow-organic">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">₹1,800</div>
              <div className="text-sm text-muted-foreground">Current Market Rate per Credit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-success mb-2">90 Days</div>
              <div className="text-sm text-muted-foreground">Average Time to First Payment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">Quarterly</div>
              <div className="text-sm text-muted-foreground">Credit Issuance Frequency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCalculatorSection;