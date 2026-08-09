import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ComponentDetailPage from './pages/ComponentDetailPage';

import { componentsData } from './data/componentsData';
import { tocData } from './data/tocData';
import { setupData } from './data/setupData';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'detail'
  const [selectedComponentId, setSelectedComponentId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('comp-')) {
        const compId = hash.replace('comp-', '');
        const exists = componentsData.find(c => c.id === compId);
        if (exists) {
          setSelectedComponentId(compId);
          setActivePage('detail');
          return;
        }
      }
      if (hash === 'setup') {
        setActivePage('home');
        setTimeout(() => {
          const el = document.getElementById('setup-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
      setActivePage('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectComponent = (id) => {
    setSelectedComponentId(id);
    setActivePage('detail');
    window.location.hash = `comp-${id}`;
  };

  const handleNavigateHome = () => {
    setActivePage('home');
    setSelectedComponentId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSetup = () => {
    setActivePage('home');
    window.location.hash = 'setup';
    setTimeout(() => {
      const el = document.getElementById('setup-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const activeComponentObj = componentsData.find(c => c.id === selectedComponentId);

  return (
    <div className="app-container">
      <div className="bg-ambient-glow" />

      <Navbar 
        onNavigateHome={handleNavigateHome} 
        activePage={activePage}
        onSelectSetup={handleSelectSetup}
      />

      <main style={{ flexGrow: 1 }}>
        {activePage === 'home' ? (
          <HomePage
            tocItems={tocData}
            components={componentsData}
            setupData={setupData}
            onSelectComponent={handleSelectComponent}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ) : (
          <ComponentDetailPage
            component={activeComponentObj}
            onBack={handleNavigateHome}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
