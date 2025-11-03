import React from 'react';
import { useLanguage } from '../LanguageContext';
const aboutImg = new URL('../images/ChatGPT Image 2 nov. 2025, 20_55_07.png', import.meta.url).href;

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-start">
            <h2 className="text-4xl font-bold text-yellow-300 mb-6">{t('about.title')}</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {t('about.p2')}
            </p>
          </div>
          <div className="flex justify-center">
             <img src={aboutImg} alt={t('about.roseAlt')} className="rounded-full shadow-2xl shadow-yellow-500/20 w-3/4 md:w-full max-w-md aspect-square object-cover border-4 border-yellow-400/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;