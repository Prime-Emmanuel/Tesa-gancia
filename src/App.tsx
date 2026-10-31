/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Layout } from './components/layout/Layout';

// Route-level code splitting with React.lazy
const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage }))
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage }))
);
const PortfolioPage = lazy(() =>
  import('./pages/PortfolioPage').then((module) => ({ default: module.PortfolioPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage }))
);
const ProcessPage = lazy(() =>
  import('./pages/ProcessPage').then((module) => ({ default: module.ProcessPage }))
);
const LocationsPage = lazy(() =>
  import('./pages/LocationsPage').then((module) => ({ default: module.LocationsPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage }))
);
const LegalPage = lazy(() =>
  import('./pages/LegalPage').then((module) => ({ default: module.LegalPage }))
);

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          {/* No loading screen as requested */}
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="process" element={<ProcessPage />} />
                <Route path="locations" element={<LocationsPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="legal" element={<LegalPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
