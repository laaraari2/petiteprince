import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded credentials for simulation. In a real app, this would be an API call.
    if (username === 'admin' && password === 'password') {
      setError('');
      onLoginSuccess();
    } else {
      setError(t('login.error'));
    }
  };

  const handleBackToSite = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-4">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-lg shadow-lg shadow-yellow-500/10">
        <h1 className="text-3xl font-bold text-yellow-300 mb-6 text-center">{t('login.title')}</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-slate-300 mb-2 font-semibold">{t('login.username')}</label>
            <input 
              id="username"
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-slate-300 mb-2 font-semibold">{t('login.password')}</label>
            <input 
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-red-400 text-center">{error}</p>}
          <button 
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
          >
            {t('header.login')}
          </button>
        </form>
         <div className="mt-6 text-center">
            <a href="#" onClick={handleBackToSite} className="text-sm text-slate-400 hover:text-yellow-300 transition-colors">{t('login.backToSite')}</a>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;