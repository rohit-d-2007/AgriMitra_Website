import React from 'react';
import Icon from '../../../components/AppIcon';


const WeatherCard = ({ weather, isActive, onClick }) => {
  const getWeatherIcon = (condition) => {
    const iconMap = {
      'Sunny': 'Sun',
      'Partly Cloudy': 'CloudSun',
      'Cloudy': 'Cloud',
      'Rainy': 'CloudRain',
      'Thunderstorm': 'CloudLightning',
      'Foggy': 'CloudFog'
    };
    return iconMap?.[condition] || 'Cloud';
  };

  const getWeatherGradient = (condition) => {
    const gradientMap = {
      'Sunny': 'from-amber-400 to-orange-500',
      'Partly Cloudy': 'from-blue-400 to-gray-400',
      'Cloudy': 'from-gray-400 to-gray-600',
      'Rainy': 'from-blue-600 to-indigo-700',
      'Thunderstorm': 'from-purple-600 to-indigo-800',
      'Foggy': 'from-gray-300 to-gray-500'
    };
    return gradientMap?.[condition] || 'from-blue-400 to-blue-600';
  };

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl p-4 md:p-6 transition-all duration-300 ${
        isActive 
          ? 'ring-2 ring-primary shadow-organic-lg scale-105' 
          : 'hover:shadow-organic'
      } bg-card`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getWeatherGradient(weather?.condition)} opacity-10`} />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div>
            <div className="text-xs md:text-sm text-muted-foreground mb-1">
              {weather?.date}
            </div>
            <div className="text-sm md:text-base font-semibold text-foreground">
              {weather?.day}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {weather?.dayHi}
            </div>
          </div>
          <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-br ${getWeatherGradient(weather?.condition)}`}>
            <Icon 
              name={getWeatherIcon(weather?.condition)} 
              size={24} 
              color="#FFFFFF" 
            />
          </div>
        </div>

        <div className="space-y-2 md:space-y-3">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              {weather?.temp}°
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">
              {weather?.tempRange}
            </span>
          </div>

          <div className="text-xs md:text-sm font-medium text-foreground">
            {weather?.condition}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 md:pt-3 border-t border-border">
            <div className="flex items-center space-x-2">
              <Icon name="Droplets" size={14} color="var(--color-primary)" />
              <span className="text-xs text-muted-foreground">
                {weather?.humidity}%
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Wind" size={14} color="var(--color-primary)" />
              <span className="text-xs text-muted-foreground">
                {weather?.windSpeed} km/h
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default WeatherCard;