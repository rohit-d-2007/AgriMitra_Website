import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BottomNav from '../../components/ui/BottomNav';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import LiveDemoSection from './components/LiveDemoSection';
import AccuracyMetrics from './components/AccuracyMetrics';
import SupportedCrops from './components/SupportedCrops';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import HowItWorks from './components/HowItWorks';
import ExpertValidation from './components/ExpertValidation';
import CTASection from './components/CTASection';

const AIPlantDiagnosisShowcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTryDemo = () => {
    const demoSection = document.getElementById('live-demo');
    if (demoSection) {
      demoSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Plant Diagnosis - AgriMitra | Instant Crop Disease Detection</title>
        <meta
          name="description"
          content="Experience AgriMitra's AI-powered plant disease diagnosis with 95% accuracy. Instant crop health analysis, treatment recommendations, and expert validation. Try our live demo now."
        />
        <meta
          name="keywords"
          content="AI plant diagnosis, crop disease detection, agricultural AI, plant health analysis, farming technology, AgriMitra"
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="main-content flex-1">
          <HeroSection onTryDemo={handleTryDemo} />
          
          <div id="live-demo">
            <LiveDemoSection />
          </div>
          
          <AccuracyMetrics />
          <SupportedCrops />
          <BeforeAfterGallery />
          <HowItWorks />
          <ExpertValidation />
          <CTASection />
        </main>

        <Footer />
        <BottomNav />
      </div>
    </>
  );
};

export default AIPlantDiagnosisShowcase;