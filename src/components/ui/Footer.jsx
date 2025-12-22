import React from 'react';
import { useRouter } from 'next/router';
import Icon from '../AppIcon';

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      titleHi: 'प्लेटफार्म',
      links: [
        { path: '/ai-plant-diagnosis-showcase', label: 'AI Diagnosis', labelHi: 'एआई निदान' },
        { path: '/crop-detail-pages', label: 'Crop Guide', labelHi: 'फसल गाइड' },
        { path: '/carbon-credit-initiative', label: 'Carbon Credits', labelHi: 'कार्बन क्रेडिट' },
        { path: '/live-updates', label: 'Live Updates', labelHi: 'लाइव अपडेट' },
      ],
    },
    {
      title: 'Resources',
      titleHi: 'संसाधन',
      links: [
        { path: '/newsletter-hub', label: 'Newsletter', labelHi: 'न्यूज़लेटर' },
        { path: '/homepage#about', label: 'About Us', labelHi: 'हमारे बारे में' },
        { path: '/homepage#contact', label: 'Contact', labelHi: 'संपर्क करें' },
        { path: '/homepage#faq', label: 'FAQ', labelHi: 'सामान्य प्रश्न' },
      ],
    },
    {
      title: 'Legal',
      titleHi: 'कानूनी',
      links: [
        { path: '/privacy', label: 'Privacy Policy', labelHi: 'गोपनीयता नीति' },
        { path: '/terms', label: 'Terms of Service', labelHi: 'सेवा की शर्तें' },
        { path: '/data-security', label: 'Data Security', labelHi: 'डेटा सुरक्षा' },
      ],
    },
  ];

  const socialLinks = [
    { icon: 'Facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'Twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'Instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'Youtube', url: 'https://youtube.com', label: 'YouTube' },
  ];

  const handleNavigation = (path) => {
    if (path?.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      router.push(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="header-logo-icon">
                <Icon name="Sprout" size={24} color="#FFFFFF" />
              </div>
              <div>
                <div className="text-xl font-bold text-primary font-heading">AgriMitra</div>
                <div className="text-xs text-muted-foreground">Smart Kheti. Digital Sathi</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Empowering Indian farmers with AI-powered crop diagnosis, weather alerts, and sustainable farming practices. Join thousands of farmers growing smarter.
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              भारतीय किसानों को एआई-संचालित फसल निदान, मौसम अलर्ट और टिकाऊ खेती प्रथाओं के साथ सशक्त बनाना।
            </p>
            <div className="flex space-x-3">
              {socialLinks?.map((social) => (
                <button
                  key={social?.label}
                  onClick={() => handleNavigation(social?.url)}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={18} />
                </button>
              ))}
            </div>
          </div>

          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h3 className="text-sm font-semibold text-foreground mb-4 font-heading">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.path}>
                    <button
                      onClick={() => handleNavigation(link?.path)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link?.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} AgriMitra Digital Platform. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="Award" size={16} color="var(--color-success)" />
                <span>Government Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;