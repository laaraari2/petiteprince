import React from 'react';
import { useLanguage } from '../LanguageContext';
import type { GalleryImage } from '../types';

const GallerySection: React.FC = () => {
  const { t } = useLanguage();
  const galleryData: GalleryImage[] = t('gallery.data') || [];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">{t('gallery.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group aspect-w-1 aspect-h-1 bg-slate-800">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;