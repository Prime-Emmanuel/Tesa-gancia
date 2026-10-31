import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { BackToTop } from './BackToTop';
import { OfflineBanner } from './OfflineBanner';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#191424] relative selection:bg-[#7B38A6]/20 selection:text-[#2D124D]">
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
      <OfflineBanner />
    </div>
  );
};
