import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CropHero = ({ crop, onBookConsultation }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <div className="px-3 py-1 bg-success/10 text-success rounded-full text-xs md:text-sm font-medium">
                {crop?.category}
              </div>
              <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                {crop?.season}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 font-heading">
              {crop?.name}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-2">
              {crop?.nameHindi}
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 line-clamp-3">
              {crop?.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="bg-card p-3 md:p-4 rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Calendar" size={18} color="var(--color-primary)" />
                  <span className="text-xs text-muted-foreground">Duration</span>
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground whitespace-nowrap">
                  {crop?.duration}
                </p>
              </div>

              <div className="bg-card p-3 md:p-4 rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Droplets" size={18} color="var(--color-primary)" />
                  <span className="text-xs text-muted-foreground">Water</span>
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground">
                  {crop?.waterRequirement}
                </p>
              </div>

              <div className="bg-card p-3 md:p-4 rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Thermometer" size={18} color="var(--color-primary)" />
                  <span className="text-xs text-muted-foreground">Temp</span>
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground whitespace-nowrap">
                  {crop?.temperature}
                </p>
              </div>

              <div className="bg-card p-3 md:p-4 rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="TrendingUp" size={18} color="var(--color-success)" />
                  <span className="text-xs text-muted-foreground">Yield</span>
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground whitespace-nowrap">
                  {crop?.yield}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={onBookConsultation}
                className="w-full sm:w-auto"
              >
                Book Expert Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Download Guide
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-organic-lg aspect-[4/3] lg:aspect-square">
              <Image
                src={crop?.image}
                alt={crop?.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={18} />
                    <span className="text-sm md:text-base font-medium">
                      {crop?.suitableRegions}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={18} fill="currentColor" />
                    <span className="text-sm md:text-base font-medium">
                      {crop?.rating}/5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropHero;