import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const router = useRouter();
  const location = { pathname: router.pathname };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { path: '/homepage', label: 'Home', labelHi: 'होम', icon: 'Home' },
    { path: '/ai-plant-diagnosis-showcase', label: 'AI Diagnosis', labelHi: 'एआई निदान', icon: 'Scan' },
    { path: '/crop-detail-pages', label: 'Crop Guide', labelHi: 'फसल गाइड', icon: 'BookOpen' },
    { path: '/carbon-credit-initiative', label: 'Carbon Credits', labelHi: 'कार्बन क्रेडिट', icon: 'Leaf' },
    { path: '/live-updates', label: 'Live Updates', labelHi: 'लाइव अपडेट', icon: 'Radio' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location?.pathname === path;

  return (
    <>
      <header className={`header-container ${scrolled ? 'shadow-organic-lg' : ''}`}>
        <div className="header-content">
          <div className="header-inner">
            <div className="header-logo" onClick={() => handleNavigation('/homepage')}>
              <div className="header-logo-icon">
                <Icon name="Sprout" size={24} color="#FFFFFF" />
              </div>
              <div className="hidden sm:block">
                <div className="header-logo-text">AgriMitra</div>
                <div className="header-logo-tagline">Smart Kheti. Digital Sathi</div>
              </div>
            </div>

            <nav className="header-nav">
              {navigationItems?.slice(0, 5)?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`header-nav-link ${isActive(item?.path) ? 'active' : ''}`}
                >
                  {item?.label}
                </button>
              ))}
            </nav>

            <div className="header-actions">
              <Button
                variant="default"
                size="sm"
                iconName="Download"
                iconPosition="left"
                className="hidden lg:flex"
                onClick={() => window.open('https://play.google.com', '_blank')}
              >
                Download App
              </Button>

              <button
                className="header-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <Icon 
                  name={isMobileMenuOpen ? 'X' : 'Menu'} 
                  size={24} 
                  color="var(--color-foreground)" 
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-menu-nav">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`mobile-menu-link ${isActive(item?.path) ? 'active' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name={item?.icon} size={20} />
                  <div className="flex flex-col items-start">
                    <span>{item?.label}</span>
                    <span className="text-xs text-muted-foreground">{item?.labelHi}</span>
                  </div>
                </div>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-border">
            <Button
              variant="default"
              fullWidth
              iconName="Download"
              iconPosition="left"
              onClick={() => window.open('https://play.google.com', '_blank')}
            >
              Download App
            </Button>
            <Button
              variant="outline"
              fullWidth
              iconName="Mail"
              iconPosition="left"
              className="mt-3"
              onClick={() => handleNavigation('/newsletter-hub')}
            >
              Newsletter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;