import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import NewsletterHub from './pages/newsletter-hub';
import AIPlantDiagnosisShowcase from './pages/ai-plant-diagnosis-showcase';
import LiveUpdates from './pages/live-updates';
import CarbonCreditInitiative from './pages/carbon-credit-initiative';
import CropDetailPages from './pages/crop-detail-pages';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/newsletter-hub" element={<NewsletterHub />} />
        <Route path="/ai-plant-diagnosis-showcase" element={<AIPlantDiagnosisShowcase />} />
        <Route path="/live-updates" element={<LiveUpdates />} />
        <Route path="/carbon-credit-initiative" element={<CarbonCreditInitiative />} />
        <Route path="/crop-detail-pages" element={<CropDetailPages />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
