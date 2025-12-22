import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationSelector = ({ currentLocation, onLocationChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const locations = [
    { id: 1, name: 'Pune, Maharashtra', nameHi: 'पुणे, महाराष्ट्र', lat: 18.5204, lng: 73.8567 },
    { id: 2, name: 'Nashik, Maharashtra', nameHi: 'नासिक, महाराष्ट्र', lat: 19.9975, lng: 73.7898 },
    { id: 3, name: 'Ahmednagar, Maharashtra', nameHi: 'अहमदनगर, महाराष्ट्र', lat: 19.0948, lng: 74.7480 },
    { id: 4, name: 'Solapur, Maharashtra', nameHi: 'सोलापुर, महाराष्ट्र', lat: 17.6599, lng: 75.9064 },
    { id: 5, name: 'Satara, Maharashtra', nameHi: 'सातारा, महाराष्ट्र', lat: 17.6805, lng: 74.0183 }
  ];

  const handleLocationSelect = (location) => {
    onLocationChange(location);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        iconName="MapPin"
        iconPosition="left"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto"
      >
        <span className="flex flex-col items-start">
          <span className="text-sm md:text-base font-medium">{currentLocation?.name}</span>
          <span className="text-xs text-muted-foreground">{currentLocation?.nameHi}</span>
        </span>
        <Icon 
          name={isOpen ? 'ChevronUp' : 'ChevronDown'} 
          size={16} 
          className="ml-2"
        />
      </Button>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-80 mt-2 bg-card rounded-lg shadow-organic-lg border border-border z-50 max-h-80 overflow-y-auto">
            <div className="p-2">
              {locations?.map((location) => (
                <button
                  key={location?.id}
                  onClick={() => handleLocationSelect(location)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    currentLocation?.id === location?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name="MapPin" 
                      size={16} 
                      color={currentLocation?.id === location?.id ? '#FFFFFF' : 'var(--color-primary)'}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{location?.name}</div>
                      <div className="text-xs opacity-75">{location?.nameHi}</div>
                    </div>
                    {currentLocation?.id === location?.id && (
                      <Icon name="Check" size={16} color="#FFFFFF" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LocationSelector;