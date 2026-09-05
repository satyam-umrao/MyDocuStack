import React, { useState, useEffect } from 'react';
import MasterNavbar from './components/MasterNavbar';
import TechNavbar from './components/TechNavbar';
import MasterDocuStackPage from './pages/MasterDocuStackPage';
import TechStackMainPage from './pages/TechStackMainPage';
import TechStackItemDetailPage from './pages/TechStackItemDetailPage';

// Existing React Native Docs Components & Data (100% Preserved)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ComponentDetailPage from './pages/ComponentDetailPage';
import { componentsData } from './data/componentsData';
import { tocData } from './data/tocData';
import { setupData } from './data/setupData';

// 18 Stacks Data
import { stacksData } from './data/stacksData';

export default function App() {
  // Navigation State: 'master' | 'react-native' | stack.id
  const [currentStack, setCurrentStack] = useState('master');
  
  // React Native Sub-Navigation State (100% Preserved)
  const [rnActivePage, setRnActivePage] = useState('home'); // 'home' | 'detail'
  const [selectedRNComponentId, setSelectedRNComponentId] = useState(null);
  const [selectedRNCategory, setSelectedRNCategory] = useState('All');
  const [rnSearchQuery, setRNSearchQuery] = useState('');

  // Other Tech Stacks Sub-Navigation State (Level 2 Main Page & Level 3 Item Detail Page)
  const [techActivePage, setTechActivePage] = useState('home'); // 'home' | 'detail'
  const [selectedTechItemId, setSelectedTechItemId] = useState(null);
  const [techSearchQuery, setTechSearchQuery] = useState('');

  // Master Hub Search State
  const [masterSearchQuery, setMasterSearchQuery] = useState('');

  // Global keyboard shortcut: CTRL/CMD + K to search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        const searchInput = 
          document.getElementById('master-search-input') || 
          document.getElementById('navbar-search-input') || 
          document.querySelector('.search-pill-input');
        if (searchInput) {
          searchInput.focus();
          if (searchInput.select) searchInput.select();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle URL hash changes for deep linking across all stacks and components
  useEffect(() => {
    let scrollTimer = null;
    const handleHashChange = () => {
      const rawHash = decodeURIComponent(window.location.hash || '').replace(/^#\/?/, '').trim();

      if (!rawHash || rawHash === 'master') {
        setCurrentStack('master');
        setSelectedRNComponentId(null);
        setSelectedTechItemId(null);
        return;
      }

      // Backward compatibility with direct RN component hashes (e.g. #comp-view)
      if (rawHash.startsWith('comp-')) {
        const compId = rawHash.replace('comp-', '');
        const exists = componentsData.find(c => c.id === compId);
        if (exists) {
          setCurrentStack('react-native');
          setSelectedRNComponentId(compId);
          setRnActivePage('detail');
          return;
        }
      }

      // Backward compatibility with direct RN setup hash (#setup)
      if (rawHash === 'setup') {
        setCurrentStack('react-native');
        setRnActivePage('home');
        scrollTimer = setTimeout(() => {
          const el = document.getElementById('setup-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }

      // Stacks routing: stack-<stackId> or stack-<stackId>/comp-<id> or stack-<stackId>/item-<id>
      if (rawHash.startsWith('stack-')) {
        const path = rawHash.slice(6); // remove 'stack-'
        const slashIndex = path.indexOf('/');
        const stackId = slashIndex === -1 ? path : path.slice(0, slashIndex);
        const subPath = slashIndex === -1 ? '' : path.slice(slashIndex + 1);

        if (stackId === 'react-native') {
          setCurrentStack('react-native');
          if (subPath.startsWith('comp-')) {
            const compId = subPath.replace('comp-', '');
            setSelectedRNComponentId(compId);
            setRnActivePage('detail');
          } else {
            setSelectedRNComponentId(null);
            setRnActivePage('home');
          }
          return;
        }

        const foundStack = stacksData.find(s => s.id === stackId);
        if (foundStack) {
          setCurrentStack(stackId);
          if (subPath.startsWith('item-') || subPath.startsWith('comp-')) {
            const itemId = subPath.replace(/^(item-|comp-)/, '');
            setSelectedTechItemId(itemId);
            setTechActivePage('detail');
          } else {
            setSelectedTechItemId(null);
            setTechActivePage('home');
          }
          return;
        }
      }

      // Default fallback: Master Hub
      setCurrentStack('master');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  // Navigation Handlers
  const handleSelectStack = (stackId) => {
    setCurrentStack(stackId);
    if (stackId === 'react-native') {
      setRnActivePage('home');
      setSelectedRNComponentId(null);
      window.location.hash = 'stack-react-native';
    } else {
      setTechActivePage('home');
      setSelectedTechItemId(null);
      window.location.hash = `stack-${stackId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateMaster = () => {
    setCurrentStack('master');
    setSelectedRNComponentId(null);
    setSelectedTechItemId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // React Native Handlers (100% Preserved)
  const handleSelectRNComponent = (id) => {
    setSelectedRNComponentId(id);
    setRnActivePage('detail');
    window.location.hash = `stack-react-native/comp-${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateRNHome = () => {
    setRnActivePage('home');
    setSelectedRNComponentId(null);
    window.location.hash = 'stack-react-native';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSetup = () => {
    setRnActivePage('home');
    window.location.hash = 'setup';
    setTimeout(() => {
      const el = document.getElementById('setup-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Other Tech Stack Handlers (Level 2 & Level 3)
  const handleSelectTechItem = (itemId) => {
    setSelectedTechItemId(itemId);
    setTechActivePage('detail');
    window.location.hash = `stack-${currentStack}/item-${itemId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTechHome = () => {
    setTechActivePage('home');
    setSelectedTechItemId(null);
    window.location.hash = `stack-${currentStack}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeRNComponentObj = componentsData.find(c => c.id === selectedRNComponentId);
  const activeStackObj = stacksData.find(s => s.id === currentStack);
  const activeTechItemObj = activeStackObj?.items?.find(item => item.id === selectedTechItemId);

  return (
    <div className="app-container">
      <div className="bg-ambient-glow" />

      {/* ========================================================================= */}
      {/* 1. MASTER DOCUSTACK HUB VIEW (Level 1)                                    */}
      {/* ========================================================================= */}
      {currentStack === 'master' && (
        <>
          <MasterNavbar
            currentStack="master"
            onNavigateMaster={handleNavigateMaster}
            searchQuery={masterSearchQuery}
            setSearchQuery={setMasterSearchQuery}
          />

          <main style={{ flexGrow: 1 }}>
            <div key="master-hub" className="page-enter-active">
              <MasterDocuStackPage
                stacks={stacksData}
                onSelectStack={handleSelectStack}
                searchQuery={masterSearchQuery}
                setSearchQuery={setMasterSearchQuery}
              />
            </div>
          </main>

          <Footer onNavigateHome={handleNavigateMaster} onSelectStack={handleSelectStack} />
        </>
      )}

      {/* ========================================================================= */}
      {/* 2. REACT NATIVE DOCS VIEW (Level 2 & Level 3 - 100% Preserved)            */}
      {/* ========================================================================= */}
      {currentStack === 'react-native' && (
        <>
          <Navbar 
            onNavigateHome={handleNavigateRNHome} 
            activePage={rnActivePage}
            onSelectSetup={handleSelectSetup}
            searchQuery={rnSearchQuery}
            setSearchQuery={setRNSearchQuery}
          />

          <main style={{ flexGrow: 1 }}>
            <div key={`rn-${rnActivePage}-${selectedRNComponentId || 'home'}`} className="page-enter-active">
              {rnActivePage === 'home' ? (
                <HomePage
                  tocItems={tocData}
                  components={componentsData}
                  setupData={setupData}
                  onSelectComponent={handleSelectRNComponent}
                  selectedCategory={selectedRNCategory}
                  setSelectedCategory={setSelectedRNCategory}
                  searchQuery={rnSearchQuery}
                  setSearchQuery={setRNSearchQuery}
                />
              ) : (
                <ComponentDetailPage
                  component={activeRNComponentObj}
                  onBack={handleNavigateRNHome}
                />
              )}
            </div>
          </main>

          <Footer onNavigateHome={handleNavigateRNHome} onSelectStack={handleSelectStack} />
        </>
      )}

      {/* ========================================================================= */}
      {/* 3. OTHER TECH STACK DOCS VIEW (Level 2 Main Page & Level 3 Detail Page)   */}
      {/* ========================================================================= */}
      {currentStack !== 'master' && currentStack !== 'react-native' && activeStackObj && (
        <>
          <TechNavbar
            stack={activeStackObj}
            onBackToMaster={handleNavigateMaster}
            onNavigateHome={handleNavigateTechHome}
            activePage={techActivePage}
            searchQuery={techSearchQuery}
            setSearchQuery={setTechSearchQuery}
          />

          <main style={{ flexGrow: 1 }}>
            <div key={`tech-${currentStack}-${techActivePage}-${selectedTechItemId || 'home'}`} className="page-enter-active">
              {techActivePage === 'home' ? (
                <TechStackMainPage
                  stack={activeStackObj}
                  onSelectItem={handleSelectTechItem}
                  onBackToMaster={handleNavigateMaster}
                  searchQuery={techSearchQuery}
                  setSearchQuery={setTechSearchQuery}
                />
              ) : (
                <TechStackItemDetailPage
                  item={activeTechItemObj}
                  stack={activeStackObj}
                  onBackToStack={handleNavigateTechHome}
                  onBackToMaster={handleNavigateMaster}
                />
              )}
            </div>
          </main>

          <Footer onNavigateHome={handleNavigateMaster} onSelectStack={handleSelectStack} />
        </>
      )}

    </div>
  );
}
