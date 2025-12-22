import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const GrowingCalendar = ({ stages }) => {
  const [activeStage, setActiveStage] = useState(0);

  const getStageIcon = (type) => {
    const icons = {
      'Land Preparation': 'Tractor',
      'Sowing': 'Sprout',
      'Germination': 'Leaf',
      'Vegetative Growth': 'TreePine',
      'Flowering': 'Flower2',
      'Fruiting': 'Apple',
      'Maturity': 'CheckCircle2',
      'Harvesting': 'Scissors'
    };
    return icons?.[type] || 'Circle';
  };

  return (
    <div className="bg-card rounded-2xl p-4 md:p-6 lg:p-8 border border-border">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-heading">
            Growing Calendar
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Complete cultivation timeline from seed to harvest
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg">
          <Icon name="Calendar" size={20} />
          <span className="text-sm font-medium">{stages?.length} Stages</span>
        </div>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-4 md:space-y-6">
          {stages?.map((stage, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 ${
                activeStage === index ? 'scale-100' : 'scale-95 opacity-70'
              }`}
              onMouseEnter={() => setActiveStage(index)}
            >
              <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                <div className="flex items-start lg:items-center space-x-4">
                  <div className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeStage === index
                      ? 'bg-primary text-primary-foreground shadow-organic'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={getStageIcon(stage?.stage)} size={24} />
                  </div>
                  <div className="lg:hidden flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                      {stage?.stage}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span>{stage?.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-background rounded-xl p-4 md:p-6 border border-border hover:border-primary/50 transition-colors duration-300">
                  <div className="hidden lg:flex items-center justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {stage?.stage}
                    </h3>
                    <div className="flex items-center space-x-2 px-3 py-1 bg-muted rounded-lg">
                      <Icon name="Clock" size={16} color="var(--color-primary)" />
                      <span className="text-sm font-medium text-foreground">{stage?.duration}</span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {stage?.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-foreground mb-2 flex items-center">
                        <Icon name="ListChecks" size={16} className="mr-2" />
                        Key Activities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stage?.activities?.map((activity, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start space-x-2">
                        <Icon name="Droplets" size={16} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Water Requirement</p>
                          <p className="text-sm font-medium text-foreground">{stage?.waterNeed}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Icon name="Leaf" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Fertilizer</p>
                          <p className="text-sm font-medium text-foreground">{stage?.fertilizer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowingCalendar;