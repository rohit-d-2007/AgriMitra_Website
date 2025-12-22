import React from 'react';
import Icon from '../../../components/AppIcon';

const WeatherDetailPanel = ({ weather }) => {
  const detailItems = [
    {
      icon: 'Thermometer',
      label: 'Feels Like',
      labelHi: 'महसूस होता है',
      value: `${weather?.feelsLike}°C`,
      color: 'text-orange-600'
    },
    {
      icon: 'Droplets',
      label: 'Humidity',
      labelHi: 'आर्द्रता',
      value: `${weather?.humidity}%`,
      color: 'text-blue-600'
    },
    {
      icon: 'Wind',
      label: 'Wind Speed',
      labelHi: 'हवा की गति',
      value: `${weather?.windSpeed} km/h`,
      color: 'text-cyan-600'
    },
    {
      icon: 'Gauge',
      label: 'Pressure',
      labelHi: 'दबाव',
      value: `${weather?.pressure} mb`,
      color: 'text-purple-600'
    },
    {
      icon: 'Eye',
      label: 'Visibility',
      labelHi: 'दृश्यता',
      value: `${weather?.visibility} km`,
      color: 'text-green-600'
    },
    {
      icon: 'Sunrise',
      label: 'Sunrise',
      labelHi: 'सूर्योदय',
      value: weather?.sunrise,
      color: 'text-amber-600'
    },
    {
      icon: 'Sunset',
      label: 'Sunset',
      labelHi: 'सूर्यास्त',
      value: weather?.sunset,
      color: 'text-indigo-600'
    },
    {
      icon: 'CloudRain',
      label: 'Rain Chance',
      labelHi: 'बारिश की संभावना',
      value: `${weather?.rainChance}%`,
      color: 'text-blue-700'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-organic">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">
        Detailed Weather Information
      </h3>
      <p className="text-sm text-muted-foreground mb-4 md:mb-6">
        विस्तृत मौसम जानकारी
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {detailItems?.map((item, index) => (
          <div
            key={index}
            className="bg-muted rounded-lg p-3 md:p-4 hover:shadow-organic transition-all duration-300"
          >
            <div className="flex items-center space-x-2 mb-2">
              <Icon 
                name={item?.icon} 
                size={18} 
                className={item?.color}
              />
              <span className="text-xs md:text-sm font-medium text-foreground">
                {item?.label}
              </span>
            </div>
            <div className="text-xs text-muted-foreground mb-1">
              {item?.labelHi}
            </div>
            <div className="text-base md:text-lg font-bold text-foreground">
              {item?.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} color="var(--color-primary)" />
          <div>
            <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
              Farming Recommendation
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              {weather?.farmingAdvice}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {weather?.farmingAdviceHi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetailPanel;