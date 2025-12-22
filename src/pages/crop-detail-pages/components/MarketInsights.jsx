import React from 'react';
import Icon from '../../../components/AppIcon';

const MarketInsights = ({ insights }) => {
  return (
    <div className="bg-card rounded-2xl p-4 md:p-6 lg:p-8 border border-border">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-heading">
            Market Insights
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Current pricing and demand trends
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-success/10 text-success rounded-lg">
          <Icon name="TrendingUp" size={20} />
          <span className="text-sm font-medium">Live Data</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-4 md:p-6 border border-success/20">
          <div className="flex items-center justify-between mb-3">
            <Icon name="IndianRupee" size={24} color="var(--color-success)" />
            <div className="flex items-center space-x-1 text-success text-xs md:text-sm">
              <Icon name="TrendingUp" size={14} />
              <span>{insights?.priceChange}</span>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mb-1">Current Price</p>
          <p className="text-2xl md:text-3xl font-bold text-foreground">₹{insights?.currentPrice}</p>
          <p className="text-xs text-muted-foreground mt-1">per quintal</p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 md:p-6 border border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <Icon name="BarChart3" size={24} color="var(--color-primary)" />
            <span className="text-xs md:text-sm text-primary font-medium">{insights?.demandLevel}</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mb-1">Market Demand</p>
          <p className="text-2xl md:text-3xl font-bold text-foreground">{insights?.demandPercentage}</p>
          <p className="text-xs text-muted-foreground mt-1">above average</p>
        </div>

        <div className="bg-gradient-to-br from-warning/10 to-warning/5 rounded-xl p-4 md:p-6 border border-warning/20">
          <div className="flex items-center justify-between mb-3">
            <Icon name="Calendar" size={24} color="var(--color-warning)" />
            <Icon name="Star" size={20} color="var(--color-warning)" fill="currentColor" />
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mb-1">Best Selling Period</p>
          <p className="text-lg md:text-xl font-bold text-foreground">{insights?.bestSellingPeriod}</p>
          <p className="text-xs text-muted-foreground mt-1">optimal timing</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-background rounded-xl p-4 md:p-6 border border-border">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="MapPin" size={20} className="mr-2" />
            Top Markets
          </h3>
          <div className="space-y-3">
            {insights?.topMarkets?.map((market, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-medium text-foreground">{market?.name}</p>
                    <p className="text-xs text-muted-foreground">{market?.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm md:text-base font-semibold text-success">₹{market?.price}</p>
                  <p className="text-xs text-muted-foreground">per quintal</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background rounded-xl p-4 md:p-6 border border-border">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Lightbulb" size={20} className="mr-2" />
            Selling Tips
          </h3>
          <div className="space-y-3">
            {insights?.sellingTips?.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg">
                <Icon name="CheckCircle2" size={18} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm text-muted-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <Icon name="Bell" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                Price Alert Service
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                Get notified when prices reach your target. Set custom alerts for better selling decisions.
              </p>
            </div>
          </div>
          <button className="px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap">
            Set Alert
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;