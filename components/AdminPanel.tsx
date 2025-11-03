import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import type { CastMember as OriginalCastMember, ShowTime as OriginalShowTime, GalleryImage, SocialIcon, NavLink } from '../types';

interface AdminPanelProps {
  onLogout: () => void;
}

interface EditableCastMember {
    name: string;
    role: string;
    imageUrl: string;
}

interface EditableShowTime {
    date: string;
    time: string;
    statusKey: OriginalShowTime['statusKey'];
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const { t, language, updateTranslations } = useLanguage();
  
  // States for form fields
  const [starIconSvgContent, setStarIconSvgContent] = useState('');
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [heroTitle, setHeroTitle] = useState('');
  const [heroQuote, setHeroQuote] = useState('');
  const [heroBgUrl, setHeroBgUrl] = useState('');
  const [aboutTitle, setAboutTitle] = useState('');
  const [aboutP1, setAboutP1] = useState('');
  const [aboutP2, setAboutP2] = useState('');
  const [aboutImageUrl, setAboutImageUrl] = useState('');
  const [scenographyTitle, setScenographyTitle] = useState('');
  const [directorsNote, setDirectorsNote] = useState({ title: '', text: '', durationTitle: '', duration: '' });
  const [cast, setCast] = useState<EditableCastMember[]>([]);
  const [schedule, setSchedule] = useState<EditableShowTime[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [socials, setSocials] = useState<SocialIcon[]>([]);


  useEffect(() => {
    // Populate form with current content when language changes
    setStarIconSvgContent(t('header.starIconSvgContent'));
    setNavLinks(t('header.navLinks') || []);
    setHeroTitle(t('hero.title'));
    setHeroQuote(t('hero.quote'));
    setHeroBgUrl(t('hero.backgroundImage'));
    setAboutTitle(t('about.title'));
    setAboutP1(t('about.p1'));
    setAboutP2(t('about.p2'));
    setAboutImageUrl(t('about.roseImage'));
    setScenographyTitle(t('scenography.title'));
    setDirectorsNote(t('scenography.directorsNote'));
    setGallery(t('gallery.data') || []);
    setSocials(t('footer.socials') || []);

    const initialCastData: OriginalCastMember[] = t('cast.data');
    if (Array.isArray(initialCastData)) {
        const populatedCast = initialCastData.map((member, index) => ({
            name: t(`cast.${index}.name`),
            role: t(`cast.${index}.role`),
            imageUrl: member.imageUrl,
        }));
        setCast(populatedCast);
    }
    
    const initialScheduleData: OriginalShowTime[] = t('schedule.data');
    if (Array.isArray(initialScheduleData)) {
        const populatedSchedule = initialScheduleData.map((show, index) => ({
            date: t(`schedule.${index}.date`),
            time: show.time,
            statusKey: show.statusKey,
        }));
        setSchedule(populatedSchedule);
    }

  }, [language, t]);


  const handleSave = () => {
    const newLangContent = t('.');

    // Header
    newLangContent.header.starIconSvgContent = starIconSvgContent;
    newLangContent.header.navLinks = navLinks;

    // Hero
    newLangContent.hero.title = heroTitle;
    newLangContent.hero.quote = heroQuote;
    newLangContent.hero.backgroundImage = heroBgUrl;

    // About
    newLangContent.about.title = aboutTitle;
    newLangContent.about.p1 = aboutP1;
    newLangContent.about.p2 = aboutP2;
    newLangContent.about.roseImage = aboutImageUrl;

    // Scenography
    newLangContent.scenography.title = scenographyTitle;
    newLangContent.scenography.directorsNote = directorsNote;

    // Cast
    const castKeysToRemove = Object.keys(newLangContent.cast).filter(k => !isNaN(parseInt(k)));
    castKeysToRemove.forEach(k => delete newLangContent.cast[k]);

    const newCastData = cast.map((member, index) => {
        newLangContent.cast[index] = { name: member.name, role: member.role };
        return {
            nameKey: `cast.data.${index}.name`,
            roleKey: `cast.data.${index}.role`,
            imageUrl: member.imageUrl,
        };
    });
    newLangContent.cast.data = newCastData;

    // Schedule
    const scheduleKeysToRemove = Object.keys(newLangContent.schedule).filter(k => !isNaN(parseInt(k)));
    scheduleKeysToRemove.forEach(k => delete newLangContent.schedule[k]);
    
    const newScheduleData = schedule.map((show, index) => {
        newLangContent.schedule[index] = { date: show.date };
        return {
            dateKey: `schedule.data.${index}.date`,
            time: show.time,
            statusKey: show.statusKey,
        };
    });
    newLangContent.schedule.data = newScheduleData;
    
    // Gallery
    newLangContent.gallery.data = gallery;

    // Footer
    newLangContent.footer.socials = socials;


    updateTranslations(newLangContent);
    alert(`Contenu pour "${language}" sauvegardé !`);
  };

  const handleLogoutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onLogout();
  };

  // NavLink handlers
  const handleNavLinkChange = (index: number, field: keyof NavLink, value: string) => {
    const newNavLinks = [...navLinks];
    newNavLinks[index][field] = value;
    setNavLinks(newNavLinks);
  };
  const addNavLink = () => setNavLinks([...navLinks, { href: '', label: '' }]);
  const removeNavLink = (index: number) => setNavLinks(navLinks.filter((_, i) => i !== index));

  // Cast handlers
  const handleCastChange = (index: number, field: keyof EditableCastMember, value: string) => {
    const newCast = [...cast];
    newCast[index][field] = value;
    setCast(newCast);
  };
  const addCastMember = () => setCast([...cast, { name: '', role: '', imageUrl: '' }]);
  const removeCastMember = (index: number) => setCast(cast.filter((_, i) => i !== index));

  // Schedule handlers
  const handleScheduleChange = (index: number, field: keyof EditableShowTime, value: string) => {
    const newSchedule = [...schedule];
    (newSchedule[index] as any)[field] = value;
    setSchedule(newSchedule);
  };
  const addScheduleItem = () => setSchedule([...schedule, { date: '', time: '20:00', statusKey: 'available' }]);
  const removeScheduleItem = (index: number) => setSchedule(schedule.filter((_, i) => i !== index));

  // Gallery handlers
  const handleGalleryChange = (index: number, field: keyof GalleryImage, value: string) => {
    const newGallery = [...gallery];
    newGallery[index][field] = value;
    setGallery(newGallery);
  };
  const addGalleryImage = () => setGallery([...gallery, { src: '', alt: '' }]);
  const removeGalleryImage = (index: number) => setGallery(gallery.filter((_, i) => i !== index));

  // Socials handlers
  const handleSocialChange = (index: number, field: keyof SocialIcon, value: string) => {
    const newSocials = [...socials];
    newSocials[index][field] = value;
    setSocials(newSocials);
  };
  const addSocial = () => setSocials([...socials, { href: '', svg: '' }]);
  const removeSocial = (index: number) => setSocials(socials.filter((_, i) => i !== index));


  const Section: React.FC<{title: string, children: React.ReactNode}> = ({title, children}) => (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 border-b-2 border-slate-700 pb-2">{title}</h2>
        <div className="space-y-4">
            {children}
        </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300">{t('admin.title')}</h1>
          <div>
            <a href="#" onClick={handleLogoutClick} className="text-slate-300 hover:text-yellow-300 transition-colors">{t('admin.logout')}</a>
          </div>
        </header>

        <main>
            <Section title={t('admin.headerSection')}>
                <div>
                    <label htmlFor="starIconSvg" className="block text-slate-300 mb-2 font-semibold">{t('admin.starIconSvg')}</label>
                    <textarea id="starIconSvg" value={starIconSvgContent} onChange={(e) => setStarIconSvgContent(e.target.value)} rows={3} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-mono text-sm" />
                </div>
            </Section>

            <Section title={t('admin.navSection')}>
                {navLinks.map((link, index) => (
                    <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 relative mt-4">
                         <h3 className="text-lg font-bold text-yellow-500 mb-4">{t('admin.navLink')} #{index + 1}</h3>
                         <button onClick={() => removeNavLink(index)} className="absolute top-4 end-4 text-red-400 hover:text-red-200 text-2xl font-bold leading-none" aria-label={t('admin.remove')}>&times;</button>
                         <div className="space-y-3">
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.navLabel')}</label>
                                <input type="text" value={link.label} onChange={e => handleNavLinkChange(index, 'label', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.navHref')}</label>
                                <input type="text" value={link.href} onChange={e => handleNavLinkChange(index, 'href', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                         </div>
                    </div>
                ))}
                <button onClick={addNavLink} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full transition-colors mt-4">{t('admin.add')} {t('admin.navLink')}</button>
            </Section>

            <Section title={t('admin.heroSection')}>
                <div>
                    <label htmlFor="heroTitle" className="block text-slate-300 mb-2 font-semibold">{t('admin.heroTitle')}</label>
                    <input id="heroTitle" type="text" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <div>
                    <label htmlFor="heroQuote" className="block text-slate-300 mb-2 font-semibold">{t('admin.heroQuote')}</label>
                    <textarea id="heroQuote" value={heroQuote} onChange={(e) => setHeroQuote(e.target.value)} rows={3} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <div>
                    <label htmlFor="heroBgUrl" className="block text-slate-300 mb-2 font-semibold">{t('admin.heroBgUrl')}</label>
                    <input id="heroBgUrl" type="text" value={heroBgUrl} onChange={(e) => setHeroBgUrl(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
            </Section>

            <Section title={t('admin.aboutSection')}>
                <div>
                    <label htmlFor="aboutTitle" className="block text-slate-300 mb-2 font-semibold">{t('admin.aboutTitle')}</label>
                    <input id="aboutTitle" type="text" value={aboutTitle} onChange={(e) => setAboutTitle(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <div>
                    <label htmlFor="aboutP1" className="block text-slate-300 mb-2 font-semibold">{t('admin.aboutP1')}</label>
                    <textarea id="aboutP1" value={aboutP1} onChange={(e) => setAboutP1(e.target.value)} rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <div>
                    <label htmlFor="aboutP2" className="block text-slate-300 mb-2 font-semibold">{t('admin.aboutP2')}</label>
                    <textarea id="aboutP2" value={aboutP2} onChange={(e) => setAboutP2(e.target.value)} rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <div>
                    <label htmlFor="aboutImageUrl" className="block text-slate-300 mb-2 font-semibold">{t('admin.aboutImageUrl')}</label>
                    <input id="aboutImageUrl" type="text" value={aboutImageUrl} onChange={(e) => setAboutImageUrl(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
            </Section>

             <Section title={t('admin.scenographySection')}>
                <div>
                    <label htmlFor="scenographyTitle" className="block text-slate-300 mb-2 font-semibold">{t('admin.scenographyTitle')}</label>
                    <input id="scenographyTitle" type="text" value={scenographyTitle} onChange={(e) => setScenographyTitle(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-yellow-500 mt-6 mb-4 border-b border-slate-700 pb-2">{t('admin.directorsNoteSection')}</h3>
                 <div>
                    <label htmlFor="noteTitle" className="block text-slate-300 mb-2 font-semibold">{t('admin.noteTitle')}</label>
                    <input id="noteTitle" type="text" value={directorsNote.title} onChange={(e) => setDirectorsNote({...directorsNote, title: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                 <div>
                    <label htmlFor="noteText" className="block text-slate-300 mb-2 font-semibold">{t('admin.noteText')}</label>
                    <textarea id="noteText" value={directorsNote.text} onChange={(e) => setDirectorsNote({...directorsNote, text: e.target.value})} rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <div>
                    <label htmlFor="noteDurationTitle" className="block text-slate-300 mb-2 font-semibold">{t('admin.noteDurationTitle')}</label>
                    <input id="noteDurationTitle" type="text" value={directorsNote.durationTitle} onChange={(e) => setDirectorsNote({...directorsNote, durationTitle: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <div>
                    <label htmlFor="noteDuration" className="block text-slate-300 mb-2 font-semibold">{t('admin.noteDuration')}</label>
                    <input id="noteDuration" type="text" value={directorsNote.duration} onChange={(e) => setDirectorsNote({...directorsNote, duration: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
             </Section>

             <Section title={t('admin.castSection')}>
                {cast.map((member, index) => (
                    <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 relative mt-4">
                         <h3 className="text-lg font-bold text-yellow-500 mb-4">{t('admin.castMember')} #{index + 1}</h3>
                         <button onClick={() => removeCastMember(index)} className="absolute top-4 end-4 text-red-400 hover:text-red-200 text-2xl font-bold leading-none" aria-label={t('admin.remove')}>&times;</button>
                         <div className="space-y-3">
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.castName')}</label>
                                <input type="text" value={member.name} onChange={e => handleCastChange(index, 'name', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.castRole')}</label>
                                <input type="text" value={member.role} onChange={e => handleCastChange(index, 'role', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.castImageUrl')}</label>
                                <input type="text" value={member.imageUrl} onChange={e => handleCastChange(index, 'imageUrl', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                         </div>
                    </div>
                ))}
                <button onClick={addCastMember} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full transition-colors mt-4">{t('admin.add')} {t('admin.castMember')}</button>
            </Section>

            <Section title={t('admin.scheduleSection')}>
                {schedule.map((show, index) => (
                    <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 relative mt-4">
                         <h3 className="text-lg font-bold text-yellow-500 mb-4">{t('admin.show')} #{index + 1}</h3>
                         <button onClick={() => removeScheduleItem(index)} className="absolute top-4 end-4 text-red-400 hover:text-red-200 text-2xl font-bold leading-none" aria-label={t('admin.remove')}>&times;</button>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.showDate')}</label>
                                <input type="text" value={show.date} onChange={e => handleScheduleChange(index, 'date', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.showTime')}</label>
                                <input type="text" value={show.time} onChange={e => handleScheduleChange(index, 'time', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.showStatus')}</label>
                                <select value={show.statusKey} onChange={e => handleScheduleChange(index, 'statusKey', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500">
                                    <option value="available">{t('admin.available')}</option>
                                    <option value="soldout">{t('admin.soldout')}</option>
                                    <option value="cancelled">{t('admin.cancelled')}</option>
                                </select>
                             </div>
                         </div>
                    </div>
                ))}
                 <button onClick={addScheduleItem} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full transition-colors mt-4">{t('admin.add')} {t('admin.show')}</button>
            </Section>

             <Section title={t('admin.gallerySection')}>
                {gallery.map((image, index) => (
                    <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 relative mt-4">
                         <h3 className="text-lg font-bold text-yellow-500 mb-4">{t('admin.galleryImage')} #{index + 1}</h3>
                         <button onClick={() => removeGalleryImage(index)} className="absolute top-4 end-4 text-red-400 hover:text-red-200 text-2xl font-bold leading-none" aria-label={t('admin.remove')}>&times;</button>
                         <div className="space-y-3">
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.imageUrl')}</label>
                                <input type="text" value={image.src} onChange={e => handleGalleryChange(index, 'src', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.imageAlt')}</label>
                                <input type="text" value={image.alt} onChange={e => handleGalleryChange(index, 'alt', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                         </div>
                    </div>
                ))}
                <button onClick={addGalleryImage} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full transition-colors mt-4">{t('admin.add')} {t('admin.galleryImage')}</button>
            </Section>

            <Section title={t('admin.footerSection')}>
                {socials.map((icon, index) => (
                    <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 relative mt-4">
                         <h3 className="text-lg font-bold text-yellow-500 mb-4">{t('admin.socialIcon')} #{index + 1}</h3>
                         <button onClick={() => removeSocial(index)} className="absolute top-4 end-4 text-red-400 hover:text-red-200 text-2xl font-bold leading-none" aria-label={t('admin.remove')}>&times;</button>
                         <div className="space-y-3">
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.socialLink')}</label>
                                <input type="text" value={icon.href} onChange={e => handleSocialChange(index, 'href', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                             </div>
                             <div>
                                <label className="block text-slate-300 mb-1 text-sm">{t('admin.socialSvg')}</label>
                                <textarea value={icon.svg} onChange={e => handleSocialChange(index, 'svg', e.target.value)} rows={4} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500 font-mono text-sm" />
                             </div>
                         </div>
                    </div>
                ))}
                <button onClick={addSocial} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full transition-colors mt-4">{t('admin.add')} {t('admin.socialIcon')}</button>
            </Section>
        </main>

        <footer className="mt-8 text-right">
            <button onClick={handleSave} className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
                {t('admin.save')}
            </button>
        </footer>
      </div>
    </div>
  );
};

export default AdminPanel;