import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClientMarquee } from './components/ClientMarquee';
import { BentoGrid } from './components/BentoGrid';
import { DashboardPreview } from './components/DashboardPreview';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-violet-500/30 selection:text-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ClientMarquee />
        <BentoGrid />
        <DashboardPreview />
        <Testimonials />
        <PricingSection />
        <FAQSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
