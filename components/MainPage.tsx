import React from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutSection from './AboutSection';
import CastSection from './CastSection';
import ScheduleSection from './ScheduleSection';
import Footer from './Footer';
import ScenographySection from './ScenographySection';
import GallerySection from './GallerySection';

const MainPage: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ScenographySection />
        <CastSection />
        <ScheduleSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;