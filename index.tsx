import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './LanguageContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("L'élément racine est introuvable pour monter l'application");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

// Preserve scroll position across Vite HMR updates (dev only)
if (import.meta && (import.meta as any).hot) {
  let __scrollY = 0;
  (import.meta as any).hot.on('vite:beforeUpdate', () => {
    __scrollY = window.scrollY || window.pageYOffset || 0;
  });
  (import.meta as any).hot.on('vite:afterUpdate', () => {
    window.scrollTo(0, __scrollY);
  });
}