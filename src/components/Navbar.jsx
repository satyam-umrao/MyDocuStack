import React, { useState } from 'react';
import { Smartphone, Search, Github, Plus, Layers, Terminal } from 'lucide-react';

export default function Navbar({ 
  onNavigateHome, 
  onSelectSetup, 
  searchQuery, 
  setSearchQuery 
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const scrollToSection = (id) => {
    onNavigateHome();
    setTimeout(() => {
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
          onClick={(e) => { e.preventDefault(); onNavigateHome(); }} 
          className="corona-brand"
        >
          <div className="corona-brand-icon">
            <Smartphone size={18} />
          </div>
          <span className="corona-brand-name">REACT NATIVE</span>
          <span className="corona-brand-tag">0.86</span>
        </a>

        {/* Search Documentation Box in Corona Style */}
        <div className={`corona-search-box ${isSearchFocused ? 'focused' : ''}`}>
          <Search size={15} className="corona-search-icon" />
          <input
            type="text"
            placeholder="Search components or APIs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
            className="corona-green-btn"
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
            className="corona-github-icon"
            title="GitHub Repository"
          >
            <Github size={18} />
          </a>

        </div>

      </div>
    </header>
  );
}
