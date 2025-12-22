import React from 'react';
import Icon from '../../../components/AppIcon';

const IrrigationSchedule = ({ schedule }) => {
  return (
    <div className="bg-card rounded-2xl p-4 md:p-6 lg:p-8 border border-border">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-heading">
            Irrigation Schedule
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Water management for optimal growth
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg">
          <Icon name="Droplets" size={20} />
          <span className="text-sm font-medium">Smart Watering</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-background rounded-xl p-4 md:p-6 border border-border">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="Droplets" size={24} color="var(--color-primary)" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Total Water Need</p>
              <p className="text-lg md:text-xl font-bold text-foreground">{schedule?.totalWaterNeed}</p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">{schedule?.waterNeedDescription}</p>
        </div>

        <div className="bg-background rounded-xl p-4 md:p-6 border border-border">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
              <Icon name="Timer" size={24} color="var(--color-success)" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Irrigation Method</p>
              <p className="text-lg md:text-xl font-bold text-foreground">{schedule?.method}</p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">{schedule?.methodDescription}</p>
        </div>
      </div>
      <div className="space-y-4 md:space-y-6">
        {schedule?.stages?.map((stage, index) => (
          <div key={index} className="bg-background rounded-xl p-4 md:p-6 border border-border">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-base md:text-lg font-bold text-primary">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground">{stage?.stage}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{stage?.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Frequency</p>
                  <p className="text-sm md:text-base font-semibold text-foreground">{stage?.frequency}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Amount</p>
                  <p className="text-sm md:text-base font-semibold text-primary">{stage?.amount}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-xs md:text-sm font-semibold text-foreground flex items-center">
                  <Icon name="Clock" size={14} className="mr-2" />
                  Best Time
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">{stage?.bestTime}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs md:text-sm font-semibold text-foreground flex items-center">
                  <Icon name="AlertCircle" size={14} className="mr-2" />
                  Important Notes
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">{stage?.notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Sun" size={18} color="var(--color-warning)" />
            <h4 className="text-sm font-semibold text-foreground">Summer Tips</h4>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">{schedule?.seasonalTips?.summer}</p>
        </div>

        <div className="p-4 bg-success/5 rounded-xl border border-success/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CloudRain" size={18} color="var(--color-success)" />
            <h4 className="text-sm font-semibold text-foreground">Monsoon Tips</h4>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">{schedule?.seasonalTips?.monsoon}</p>
        </div>

        <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Snowflake" size={18} color="var(--color-accent)" />
            <h4 className="text-sm font-semibold text-foreground">Winter Tips</h4>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">{schedule?.seasonalTips?.winter}</p>
        </div>
      </div>
    </div>
  );
};

export default IrrigationSchedule;