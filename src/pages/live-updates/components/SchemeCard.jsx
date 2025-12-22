import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SchemeCard = ({ scheme, onLearnMore }) => {
  const getCategoryIcon = (category) => {
    const iconMap = {
      'Subsidy': 'BadgeIndianRupee',
      'Insurance': 'Shield',
      'Loan': 'Landmark',
      'Training': 'GraduationCap',
      'Equipment': 'Tractor'
    };
    return iconMap?.[category] || 'FileText';
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'Subsidy': 'text-green-600 bg-green-50',
      'Insurance': 'text-blue-600 bg-blue-50',
      'Loan': 'text-purple-600 bg-purple-50',
      'Training': 'text-orange-600 bg-orange-50',
      'Equipment': 'text-amber-600 bg-amber-50'
    };
    return colorMap?.[category] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-organic hover:shadow-organic-lg transition-all duration-300 border border-border">
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className={`p-2 md:p-3 rounded-lg ${getCategoryColor(scheme?.category)}`}>
          <Icon 
            name={getCategoryIcon(scheme?.category)} 
            size={20} 
            color="currentColor" 
          />
        </div>
        {scheme?.isNew && (
          <span className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-full">
            New
          </span>
        )}
      </div>
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 line-clamp-2">
        {scheme?.title}
      </h3>
      <p className="text-xs md:text-sm text-muted-foreground mb-1">
        {scheme?.titleHi}
      </p>
      <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
        {scheme?.description}
      </p>
      <div className="space-y-2 md:space-y-3 mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={16} color="var(--color-muted-foreground)" />
          <span className="text-xs md:text-sm text-muted-foreground">
            Deadline: {scheme?.deadline}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={16} color="var(--color-muted-foreground)" />
          <span className="text-xs md:text-sm text-muted-foreground">
            {scheme?.eligibility}
          </span>
        </div>
        {scheme?.benefit && (
          <div className="flex items-center space-x-2">
            <Icon name="TrendingUp" size={16} color="var(--color-success)" />
            <span className="text-xs md:text-sm font-medium text-success">
              {scheme?.benefit}
            </span>
          </div>
        )}
      </div>
      <Button
        variant="outline"
        size="sm"
        fullWidth
        iconName="ExternalLink"
        iconPosition="right"
        onClick={() => onLearnMore(scheme)}
      >
        Learn More
      </Button>
    </div>
  );
};

export default SchemeCard;