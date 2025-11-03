import React from 'react';
import { useLanguage } from '../LanguageContext';
import type { SocialIcon } from '../types';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const socialIcons: SocialIcon[] = t('footer.socials') || [];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-400">
        <div className="flex justify-center gap-x-6 mb-6">
          {socialIcons.map((icon, index) => (
            <a 
              key={index}
              href={icon.href} 
              onClick={(e) => { if (icon.href === '#') e.preventDefault(); }}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-yellow-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon.svg }} />
            </a>
          ))}
        </div>
        <p className="text-sm">
          {t('footer.copyright')}
        </p>
        <p className="text-xs mt-2">
          {t('footer.credit')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;