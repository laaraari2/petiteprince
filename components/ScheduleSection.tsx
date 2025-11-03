import React from 'react';
import type { ShowTime } from '../types';
import { useLanguage } from '../LanguageContext';

const getStatusClass = (status: ShowTime['statusKey']) => {
  switch (status) {
    case 'available':
      return 'bg-green-500/20 text-green-300';
    case 'soldout':
      return 'bg-red-500/20 text-red-300';
    case 'cancelled':
      return 'bg-gray-500/20 text-gray-400 line-through';
    default:
      return 'bg-slate-700 text-slate-300';
  }
};

const ScheduleSection: React.FC = () => {
  const { t } = useLanguage();
  const scheduleData: ShowTime[] = t('schedule.data');

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#admin';
  };

  return (
    <section id="schedule" className="py-20 md:py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-start">
            <h2 className="text-4xl font-bold text-yellow-300 mb-8">{t('schedule.title')}</h2>
            <div className="space-y-4">
              {scheduleData.map((show, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg flex justify-between items-center transition-all duration-300 hover:bg-slate-700/80">
                  <div>
                    <p className="text-lg font-semibold text-white">{t(show.dateKey)}</p>
                    <p className="text-slate-400">{show.time}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm font-bold rounded-full ${getStatusClass(show.statusKey)}`}>
                    {t(`schedule.status.${show.statusKey}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div id="booking" className="bg-slate-800 p-8 rounded-lg sticky top-24 text-start">
            <h3 className="text-3xl font-bold text-yellow-300 mb-4">{t('schedule.locationTitle')}</h3>
            <p className="text-slate-300 text-xl font-semibold">{t('schedule.theater')}</p>
            <p className="text-slate-400 mb-6">{t('schedule.address')}</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Théâtre+de+la+Lune+Paris" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-yellow-400 hover:text-yellow-200 mb-8 transition-colors">
              {t('schedule.mapLink')}
            </a>
            <p className="text-slate-300 mb-6">{t('schedule.bookingInfo')}</p>
            <a href="#admin" onClick={handleLoginClick} className="inline-block text-center w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-rose-500/30">
              {t('schedule.login')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;