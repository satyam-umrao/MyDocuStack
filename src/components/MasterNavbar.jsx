import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Search, 
  Github, 
  Menu, 
  X, 
  ArrowLeft, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function MasterNavbar({ 
  currentStack = 'master',
  onNavigateMaster,
  activeStackTitle,
  searchQuery = '',
  setSearchQuery,
  onSelectCategory
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsMobileSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleCategoryClick = (cat) => {
    if (onNavigateMaster) onNavigateMaster();
    if (onSelectCategory) onSelectCategory(cat);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById('stacks-grid-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const isAtMaster = currentStack === 'master';

  return (
    <header className="corona-navbar">
      <div className="container corona-nav-container">
        
        {/* Left: Brand or Breadcrumb Back */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {!isAtMaster ? (
            <button 
              type="button"
              onClick={onNavigateMaster} 
              className="corona-green-btn"
              style={{ padding: '6px 14px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
              title="Return to Master DocuStack"
            >
              <ArrowLeft size={15} />
              <span>DocuStack Hub</span>
            </button>
          ) : (
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); if (onNavigateMaster) onNavigateMaster(); }} 
              className="corona-brand"
            >
              <div className="corona-brand-icon" style={{ backgroundColor: 'rgba(0, 210, 91, 0.15)', color: 'var(--color-corona-green)' }}>
                <Layers size={18} />
              </div>
              <span className="corona-brand-name" style={{ letterSpacing: '0.04em' }}>MY DOCUSTACK</span>
              <span className="corona-brand-tag" style={{ backgroundColor: 'rgba(0, 210, 91, 0.2)', color: 'var(--color-corona-green)', borderColor: 'var(--color-corona-green)' }}>
                MASTER
              </span>
            </a>
          )}

          {!isAtMaster && activeStackTitle && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderLeft: '1px solid var(--color-corona-border)', paddingLeft: '14px' }}>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff' }}>
                {activeStackTitle}
              </span>
              <span className="filter-chip" style={{ padding: '2px 8px', fontSize: '11px', cursor: 'default' }}>
                Docs
              </span>
            </div>
          )}
        </div>

        {/* Desktop Search Documentation Box */}
        <div className={`corona-search-box desktop-search ${isSearchFocused ? 'focused' : ''}`}>
          <Search size={15} className="corona-search-icon" />
          <input
            id="master-search-input"
            type="text"
            placeholder={isAtMaster ? "Search 18 languages & frameworks..." : `Search ${activeStackTitle || 'docs'}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            onFocus={() => {
              setIsSearchFocused(true);
              const el = document.getElementById(isAtMaster ? 'stacks-grid-section' : 'all-components-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onBlur={() => setIsSearchFocused(false)}
            className="corona-search-input"
          />
          <kbd className="corona-kbd">CTRL K</kbd>
        </div>

        {/* Right: Category Quick-Filters & Action Links */}
        <div className="corona-nav-right">
          {isAtMaster ? (
            <nav className="corona-nav-links">
              <a href="#stacks-grid-section" onClick={(e) => { e.preventDefault(); handleCategoryClick('Frontend'); }}>
                Frontend
              </a>
              <a href="#stacks-grid-section" onClick={(e) => { e.preventDefault(); handleCategoryClick('Backend'); }}>
                Backend
              </a>
              <a href="#stacks-grid-section" onClick={(e) => { e.preventDefault(); handleCategoryClick('Database'); }}>
                Database
              </a>
              <a href="#stacks-grid-section" onClick={(e) => { e.preventDefault(); handleCategoryClick('DevOps & Cloud'); }}>
                Cloud & DevOps
              </a>
            </nav>
          ) : (
            <nav className="corona-nav-links">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigateMaster(); }}>
                All Stacks
              </a>
            </nav>
          )}

          {/* GitHub Icon Link */}
          <a 
            href="https://github.com/satyam-umrao/react-native-docs" 
            target="_blank" 
            rel="noreferrer"
            className="corona-github-icon desktop-github"
            title="Project Repository"
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
              placeholder="Search technologies or docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
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
            {!isAtMaster && (
              <button 
                type="button" 
                className="corona-green-btn full-width" 
                onClick={() => { onNavigateMaster(); setIsMobileMenuOpen(false); }}
                style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <ArrowLeft size={16} />
                <span>Return to Master DocuStack</span>
              </button>
            )}

            <span style={{ fontSize: '12px', color: 'var(--color-corona-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'block' }}>
              Explore Disciplines
            </span>
            <a 
              href="#stacks-grid-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); handleCategoryClick('Frontend'); }}
            >
              Frontend (HTML, CSS, JS, React, Next.js)
            </a>
            <a 
              href="#stacks-grid-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); handleCategoryClick('Backend'); }}
            >
              Backend (Node.js, NestJS, Spring Boot, Gin)
            </a>
            <a 
              href="#stacks-grid-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); handleCategoryClick('Languages'); }}
            >
              Languages (TypeScript, Java, Golang)
            </a>
            <a 
              href="#stacks-grid-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); handleCategoryClick('Database'); }}
            >
              Databases (PostgreSQL, GORM)
            </a>
            <a 
              href="#stacks-grid-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); handleCategoryClick('DevOps & Cloud'); }}
            >
              DevOps & Cloud (Docker, Kubernetes, AWS)
            </a>
            
            <div className="mobile-drawer-footer">
              <a 
                href="https://github.com/satyam-umrao/react-native-docs" 
                target="_blank" 
                rel="noreferrer"
                className="mobile-github-link"
              >
                <Github size={16} />
                <span>View GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
