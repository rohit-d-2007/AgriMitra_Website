import React from 'react';
import Icon from '../../../components/AppIcon';

const SoilRequirements = ({ requirements }) => {
  const getProgressColor = (value) => {
    if (value >= 7) return 'bg-success';
    if (value >= 4) return 'bg-warning';
    return 'bg-error';
  };

  return (
    <div className="bg-card rounded-2xl p-4 md:p-6 lg:p-8 border border-border">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-heading">
            Soil Requirements
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Optimal soil conditions for maximum yield
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-lg">
          <Icon name="Mountain" size={20} />
          <span className="text-sm font-medium">Soil Analysis</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-6">
          <div className="bg-background rounded-xl p-4 md:p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base md:text-lg font-semibold text-foreground">pH Level</h3>
              <span className="text-xl md:text-2xl font-bold text-primary">
                {requirements?.phLevel}
              </span>
            </div>
            <div className="relative h-3 bg-muted rounded-full overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full ${getProgressColor(
                  parseFloat(requirements?.phLevel?.split('-')?.[0])
                )} transition-all duration-500`}
                style={{ width: `${(parseFloat(requirements?.phLevel?.split('-')?.[0]) / 14) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Acidic (0)</span>
              <span>Neutral (7)</span>
              <span>Alkaline (14)</span>
            </div>
          </div>

          <div className="bg-background rounded-xl p-4 md:p-6 border border-border">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">Soil Types</h3>
            <div className="space-y-3">
              {requirements?.soilTypes?.map((type, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon name="Layers" size={20} color="var(--color-accent)" />
                    </div>
                    <span className="text-sm md:text-base text-foreground">{type}</span>
                  </div>
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-background rounded-xl p-4 md:p-6 border border-border">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
              Nutrient Requirements
            </h3>
            <div className="space-y-4">
              {requirements?.nutrients?.map((nutrient, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Leaf" size={16} color="var(--color-success)" />
                      <span className="text-sm md:text-base text-foreground">{nutrient?.name}</span>
                    </div>
                    <span className="text-sm font-medium text-primary">{nutrient?.level}</span>
                  </div>
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-success transition-all duration-500"
                      style={{ width: nutrient?.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-xl p-4 md:p-6 border border-border">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
              Organic Amendments
            </h3>
            <div className="space-y-3">
              {requirements?.organicAmendments?.map((amendment, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-success/5 rounded-lg"
                >
                  <Icon name="Sprout" size={18} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-medium text-foreground mb-1">
                      {amendment?.name}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">{amendment?.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-8 p-4 md:p-6 bg-primary/5 rounded-xl border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
              Soil Testing Recommendation
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              {requirements?.testingRecommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilRequirements;