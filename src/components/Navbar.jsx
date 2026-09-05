import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Search, Github, Plus, Menu, X } from 'lucide-react';

export default function Navbar({ 
  onNavigateHome, 
  onSelectSetup, 
  searchQuery = '', 
  setSearchQuery 
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const scrollTimerRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsMobileSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const scrollToSection = (id) => {
    if (onNavigateHome) onNavigateHome();
    setIsMobileMenuOpen(false);
    setIsMobileSearchOpen(false);
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="corona-navbar">
      <div className="container corona-nav-container">
        
        {/* Left: Corona-Style Brand Logo & Title */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); setIsMobileMenuOpen(false); }} 
          className="corona-brand"
        >
          <div className="corona-brand-icon">
            <Smartphone size={18} />
          </div>
          <span className="corona-brand-name">REACT NATIVE</span>
          <span className="corona-brand-tag">0.86</span>
        </a>

        {/* Desktop Search Documentation Box */}
        <div className={`corona-search-box desktop-search ${isSearchFocused ? 'focused' : ''}`}>
          <Search size={15} className="corona-search-icon" />
          <input
            id="navbar-search-input"
            type="text"
            placeholder="Search components or APIs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            onFocus={() => {
              setIsSearchFocused(true);
              scrollToSection('all-components-section');
            }}
            onBlur={() => setIsSearchFocused(false)}
            className="corona-search-input"
          />
          <kbd className="corona-kbd">CTRL K</kbd>
        </div>

        {/* Right: Action Button & Links */}
        <div className="corona-nav-right">
          
          <nav className="corona-nav-links">
            <a href="#toc-section" onClick={(e) => { e.preventDefault(); scrollToSection('toc-section'); }}>
              Table of Contents
            </a>
            <a href="#all-components-section" onClick={(e) => { e.preventDefault(); scrollToSection('all-components-section'); }}>
              Components
            </a>
            <a href="#setup-section" onClick={(e) => { e.preventDefault(); scrollToSection('setup-section'); }}>
              Setup
            </a>
          </nav>

          {/* Corona Green Action Button */}
          <button 
            className="corona-green-btn desktop-btn"
            onClick={() => scrollToSection('all-components-section')}
          >
            <Plus size={15} />
            <span>Explore Hub</span>
          </button>

          {/* GitHub Icon Link */}
          <a 
            href="https://github.com/facebook/react-native" 
            target="_blank" 
            rel="noreferrer"
            className="corona-github-icon desktop-github"
            title="GitHub Repository"
          >
            <Github size={18} />
          </a>

          {/* Mobile Actions: Search toggle & Menu hamburger button */}
          <div className="corona-mobile-actions">
            <button 
              className="corona-icon-btn mobile-only" 
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              aria-label="Toggle Search"
            >
              <Search size={18} />
            </button>
            <button 
              className="corona-icon-btn mobile-only" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Expandable Search Bar */}
      {isMobileSearchOpen && (
        <div className="corona-mobile-search-bar">
          <div className="corona-search-box mobile-search-inner">
            <Search size={15} className="corona-search-icon" />
            <input
              type="text"
              placeholder="Search components or APIs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
              onFocus={() => scrollToSection('all-components-section')}
              className="corona-search-input"
              autoFocus
            />
            <button 
              className="corona-search-close" 
              onClick={() => setIsMobileSearchOpen(false)}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Dropdown Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="corona-mobile-drawer">
          <div className="container mobile-drawer-inner">
            <a 
              href="#toc-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); scrollToSection('toc-section'); }}
            >
              Table of Contents
            </a>
            <a 
              href="#all-components-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); scrollToSection('all-components-section'); }}
            >
              All Components & APIs
            </a>
            <a 
              href="#setup-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); scrollToSection('setup-section'); }}
            >
              Setup Guide (Bare / Expo)
            </a>
            
            <div className="mobile-drawer-footer">
              <button 
                className="corona-green-btn full-width"
                onClick={() => scrollToSection('all-components-section')}
              >
                <Plus size={15} />
                <span>Explore Component Hub</span>
              </button>
              <a 
                href="https://github.com/facebook/react-native" 
                target="_blank" 
                rel="noreferrer"
                className="mobile-github-link"
              >
                <Github size={16} />
                <span>View React Native on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

