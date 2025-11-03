import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import AdminPanel from './components/AdminPanel';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('isAuthenticated') === 'true');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleLoginSuccess = () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    window.location.hash = '#';
  };

  const renderPage = () => {
    if (route === '#admin') {
      if (isAuthenticated) {
        return <AdminPanel onLogout={handleLogout} />;
      }
      return <LoginPage onLoginSuccess={handleLoginSuccess} />;
    }
    return <MainPage />;
  };

  return renderPage();
};

export default App;