import React from 'react';
import type { CastMember } from '../types';
import { useLanguage } from '../LanguageContext';


const CastCard: React.FC<{ member: CastMember }> = ({ member }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
      <img src={member.imageUrl} alt={t(member.nameKey)} className="w-full h-64 object-cover object-center" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{t(member.nameKey)}</h3>
        <p className="text-yellow-400">{t(member.roleKey)}</p>
      </div>
    </div>
  );
};

const CastSection: React.FC = () => {
  const { t } = useLanguage();
  const castData: CastMember[] = t('cast.data');

  return (
    <section id="cast" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">{t('cast.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {castData.map((member, index) => (
            <CastCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CastSection;