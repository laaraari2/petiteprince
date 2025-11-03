import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
    
  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#admin';
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${t('hero.backgroundImage')}')` }}>
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
      <div className="relative text-center text-white p-8 z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-8xl font-bold tracking-wider text-yellow-300" style={{ textShadow: '0 0 15px rgba(253, 224, 71, 0.5)' }}>
          {t('hero.title')}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
          {t('hero.quote')}
        </p>
        <div className="mt-12">
          <a href="#admin" onClick={handleLoginClick} className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-110 shadow-lg shadow-rose-500/30">
            {t('hero.login')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;