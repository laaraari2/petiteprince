import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import type { NavLink } from '../types';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks: NavLink[] = t('header.navLinks') || [];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'ar' : 'fr');
    };

    const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#admin';
    };

    const handleMobileLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        handleLoginClick(e);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-slate-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg shadow-yellow-500/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2 text-xl font-bold text-yellow-300 hover:text-yellow-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" dangerouslySetInnerHTML={{ __html: t('header.starIconSvgContent') }} />
                    {t('header.title')}
                </a>
                <nav className="hidden md:flex items-center gap-x-6">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-300 hover:text-yellow-300 transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                    <button onClick={toggleLanguage} className="text-slate-300 hover:text-yellow-300 transition-colors duration-300">
                        {t('header.language')}
                    </button>
                     <a href="#admin" onClick={handleLoginClick} className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 hover:scale-105">
                        {t('header.login')}
                    </a>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-sm pb-4">
                    <nav className="flex flex-col items-center space-y-4 pt-4">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 text-lg">
                                {link.label}
                            </a>
                        ))}
                        <button onClick={toggleLanguage} className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 text-lg">
                           {t('header.language')}
                        </button>
                        <a href="#admin" onClick={handleMobileLoginClick} className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 mt-4">
                            {t('header.login')}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;