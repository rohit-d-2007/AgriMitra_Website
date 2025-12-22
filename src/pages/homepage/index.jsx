import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import BottomNav from '../../components/ui/BottomNav';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/PartnersSection';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="main-content flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Homepage;