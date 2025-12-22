import React from 'react';
import { useRouter } from 'next/router';
import Icon from '../AppIcon';

const BottomNav = () => {
  const router = useRouter();
  const location = { pathname: router.pathname };

  const navigationItems = [
    { path: '/homepage', label: 'Home', labelHi: 'होम', icon: 'Home' },
    { path: '/ai-plant-diagnosis-showcase', label: 'Diagnose', labelHi: 'निदान', icon: 'Scan' },
    { path: '/crop-detail-pages', label: 'Crops', labelHi: 'फसल', icon: 'Wheat' },
    { path: '/live-updates', label: 'Updates', labelHi: 'अपडेट', icon: 'Radio' },
    { path: '/newsletter-hub', label: 'More', labelHi: 'अधिक', icon: 'MoreHorizontal' },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  const isActive = (path) => location?.pathname === path;

  return (
    <nav className="bottom-nav-container">
      <div className="bottom-nav-content">
        {navigationItems?.map((item) => (
          <button
            key={item?.path}
            onClick={() => handleNavigation(item?.path)}
            className={`bottom-nav-item ${isActive(item?.path) ? 'active' : ''}`}
            aria-label={item?.label}
          >
            <div className="bottom-nav-icon">
              <Icon 
                name={item?.icon} 
                size={22} 
                color={isActive(item?.path) ? 'var(--color-primary)' : 'var(--color-muted-foreground)'} 
              />
            </div>
            <span className="bottom-nav-label">
              {item?.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;