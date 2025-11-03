import React from 'react';
import { useLanguage } from '../LanguageContext';
const img1 = new URL('../images/ChatGPT Image 1 nov. 2025, 22_41_24.png', import.meta.url).href;
const img2 = new URL('../images/ChatGPT Image 1 nov. 2025, 22_49_30.png', import.meta.url).href;


const scenographyImages = [
  {
    src: img1,
    alt: 'Scénographie de la pièce Le Petit Prince - Scène 1 avec rideau',
  },
  {
    src: img2,
    alt: 'Scénographie de la pièce Le Petit Prince - Scène 2 avec avion',
  },
];


const DetailLine: React.FC<{ text: string }> = ({ text }) => {
  const splitIndex = text.indexOf(':');
  if (splitIndex === -1) {
    return <p>{text}</p>;
  }
  const label = text.substring(0, splitIndex).trim();
  const value = text.substring(splitIndex + 1).trim();
  return (
    <p>
      <strong className="font-semibold text-slate-100">{label}:</strong> {value}
    </p>
  );
};


const ScenographySection: React.FC = () => {
  const { t } = useLanguage();
  const scenes: any[] = t('scenography.scenes') || [];
  const directorsNote = t('scenography.directorsNote');

  return (
    <section id="scenography" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-300 mb-12 text-center">{t('scenography.title')}</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {scenographyImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group aspect-video bg-slate-800">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto space-y-12 text-start">

          {/* Scenes */}
          {scenes.map((scene, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">{scene.title}</h3>
              <div className="space-y-4 text-slate-300">
                {scene.space && <DetailLine text={scene.space} />}
                {scene.scenography_detail && <DetailLine text={scene.scenography_detail} />}
                {scene.lighting && <DetailLine text={scene.lighting} />}
                
                {scene.event && (
                  <div>
                    <strong className="font-semibold text-slate-100">{scene.event.title}</strong>
                    <div className="mt-1 space-y-1 leading-relaxed ps-4 border-s-2 border-slate-600">
                      {scene.event.lines.map((line: string, lineIndex: number) => (
                         <p key={lineIndex}>{line}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {scene.symbolism && <DetailLine text={scene.symbolism} />}
                {scene.music && <DetailLine text={scene.music} />}
              </div>
            </div>
          ))}
        </div>
        
        {directorsNote && (
           <div className="mt-16 max-w-4xl mx-auto bg-slate-800 p-8 rounded-lg border-2 border-yellow-500/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4 text-center">{directorsNote.title}</h4>
              <p className="text-slate-300 leading-relaxed text-center">
                  {directorsNote.text}
              </p>
              <div className="mt-6 text-center text-lg text-yellow-400 font-bold tracking-wider">
                  <p>{directorsNote.durationTitle}</p>
                  <p>{directorsNote.duration}</p>
              </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScenographySection;