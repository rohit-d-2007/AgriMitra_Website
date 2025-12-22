import React from 'react';
import Icon from '../../../components/AppIcon';

const AlertBanner = ({ alert, onDismiss }) => {
  const getAlertStyle = (severity) => {
    const styleMap = {
      'critical': 'bg-red-50 border-red-200 text-red-900',
      'warning': 'bg-amber-50 border-amber-200 text-amber-900',
      'info': 'bg-blue-50 border-blue-200 text-blue-900',
      'success': 'bg-green-50 border-green-200 text-green-900'
    };
    return styleMap?.[severity] || styleMap?.info;
  };

  const getAlertIcon = (severity) => {
    const iconMap = {
      'critical': 'AlertTriangle',
      'warning': 'AlertCircle',
      'info': 'Info',
      'success': 'CheckCircle'
    };
    return iconMap?.[severity] || 'Info';
  };

  return (
    <div className={`rounded-lg border p-3 md:p-4 ${getAlertStyle(alert?.severity)} transition-all duration-300`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          <Icon 
            name={getAlertIcon(alert?.severity)} 
            size={20} 
            color="currentColor" 
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="text-sm md:text-base font-semibold mb-1">
                {alert?.title}
              </h4>
              <p className="text-xs md:text-sm opacity-90 mb-2">
                {alert?.message}
              </p>
              <div className="flex items-center space-x-4 text-xs opacity-75">
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{alert?.time}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="MapPin" size={12} />
                  <span>{alert?.location}</span>
                </span>
              </div>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(alert?.id)}
                className="flex-shrink-0 ml-3 p-1 rounded-lg hover:bg-black/5 transition-colors"
                aria-label="Dismiss alert"
              >
                <Icon name="X" size={16} color="currentColor" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;