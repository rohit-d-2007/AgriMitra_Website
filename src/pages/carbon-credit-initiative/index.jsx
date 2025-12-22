import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BottomNav from '../../components/ui/BottomNav';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import CarbonCalculatorSection from './components/CarbonCalculatorSection';
import BlockchainVisualizationSection from './components/BlockchainVisualizationSection';
import ImpactMetricsSection from './components/ImpactMetricsSection';
import EnrollmentProcessSection from './components/EnrollmentProcessSection';
import PartnershipSection from './components/PartnershipSection';
import FAQSection from './components/FAQSection';

const CarbonCreditInitiative = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Carbon Credit Initiative - AgriMitra | Earn While Protecting the Planet</title>
        <meta 
          name="description" 
          content="Join India's first blockchain-powered carbon credit program for farmers. Transform sustainable farming practices into verified income. Earn ₹1.5L-₹4L annually while reducing carbon footprint." 
        />
        <meta 
          name="keywords" 
          content="carbon credits, sustainable farming, blockchain agriculture, farmer income, climate action, carbon offset, ESG goals, organic farming, AgriMitra" 
        />
        <meta property="og:title" content="Carbon Credit Initiative - AgriMitra" />
        <meta 
          property="og:description" 
          content="Earn while protecting the planet. Join 15,000+ farmers in India's blockchain-powered carbon credit program." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://agrimitra.com/carbon-credit-initiative" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="main-content flex-1">
          <HeroSection />
          <HowItWorksSection />
          <CarbonCalculatorSection />
          <BlockchainVisualizationSection />
          <ImpactMetricsSection />
          <EnrollmentProcessSection />
          <PartnershipSection />
          <FAQSection />
        </main>

        <Footer />
        <BottomNav />
      </div>
    </>
  );
};

export default CarbonCreditInitiative;