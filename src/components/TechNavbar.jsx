import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Github, 
  Plus, 
  Menu, 
  X,
  Code, 
  FileCode, 
  FileText, 
  Code2, 
  Globe, 
  Smartphone, 
  Server, 
  Shield, 
  Coffee, 
  Cpu, 
  Zap, 
  Database, 
  Box, 
  Layers, 
  Cloud 
} from 'lucide-react';

const stackGithubMap = {
  html: 'https://github.com/whatwg/html',
  css: 'https://github.com/w3c/csswg-drafts',
  javascript: 'https://github.com/tc39/ecma262',
  typescript: 'https://github.com/microsoft/TypeScript',
  react: 'https://github.com/facebook/react',
  nextjs: 'https://github.com/vercel/next.js',
  'react-native': 'https://github.com/facebook/react-native',
  nodejs: 'https://github.com/nodejs/node',
  nestjs: 'https://github.com/nestjs/nest',
  java: 'https://github.com/openjdk/jdk',
  springboot: 'https://github.com/spring-projects/spring-boot',
  golang: 'https://github.com/golang/go',
  gin: 'https://github.com/gin-gonic/gin',
  gorm: 'https://github.com/go-gorm/gorm',
  postgresql: 'https://github.com/postgres/postgres',
  docker: 'https://github.com/docker/cli',
  kubernetes: 'https://github.com/kubernetes/kubernetes',
  aws: 'https://github.com/aws/aws-cli'
};

const getStackIcon = (id, size = 18) => {
  switch (id) {
    case 'html': return <Code size={size} />;
    case 'css': return <FileCode size={size} />;
    case 'javascript': return <FileText size={size} />;
    case 'typescript': return <Code2 size={size} />;
    case 'react': return <Code size={size} />;
    case 'nextjs': return <Globe size={size} />;
    case 'react-native': return <Smartphone size={size} />;
    case 'nodejs': return <Server size={size} />;
    case 'nestjs': return <Shield size={size} />;
    case 'java': return <Coffee size={size} />;
    case 'springboot': return <Cpu size={size} />;
    case 'golang': return <Cpu size={size} />;
    case 'gin': return <Zap size={size} />;
    case 'gorm': return <Database size={size} />;
    case 'postgresql': return <Database size={size} />;
    case 'docker': return <Box size={size} />;
    case 'kubernetes': return <Layers size={size} />;
    case 'aws': return <Cloud size={size} />;
    default: return <Layers size={size} />;
  }
};

export default function TechNavbar({ 
  stack,
  onBackToMaster,
  onNavigateHome,
  activePage = 'home',
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
    if (activePage !== 'home' && onNavigateHome) {
      onNavigateHome();
    }
    setIsMobileMenuOpen(false);
    setIsMobileSearchOpen(false);
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  if (!stack) return null;

  const githubUrl = stackGithubMap[stack.id] || 'https://github.com';
  const accent = stack.accentColor || 'var(--color-corona-green)';

  return (
    <header className="corona-navbar">
      <div className="container corona-nav-container">
        
        {/* Left: Brand Logo & Title */}
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            if (onNavigateHome) onNavigateHome(); 
            setIsMobileMenuOpen(false); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="corona-brand"
        >
            <div 
              className="corona-brand-icon"
              style={{ 
                backgroundColor: `${accent}22`,
                color: accent
              }}
            >
              {getStackIcon(stack.id, 18)}
            </div>
            <span className="corona-brand-name">
              {stack.name.toUpperCase()}
            </span>
            <span 
              className="corona-brand-tag"
              style={{
                borderColor: `${accent}55`,
                color: accent,
                backgroundColor: `${accent}15`
              }}
            >
              {stack.version}
            </span>
          </a>

        {/* Desktop Search Documentation Box */}
        <div className={`corona-search-box desktop-search ${isSearchFocused ? 'focused' : ''}`}>
          <Search size={15} className="corona-search-icon" />
          <input
            id="navbar-search-input"
            type="text"
            placeholder={`Search ${stack.name} components & methods...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            onFocus={() => {
              setIsSearchFocused(true);
              scrollToSection('tech-items-section');
            }}
            onBlur={() => setIsSearchFocused(false)}
            className="corona-search-input"
          />
          <kbd className="corona-kbd">CTRL K</kbd>
        </div>

        {/* Right: Action Button & Links */}
        <div className="corona-nav-right">
          
          <nav className="corona-nav-links">
            <a href="#tech-toc-section" onClick={(e) => { e.preventDefault(); scrollToSection('tech-toc-section'); }}>
              Table of Contents
            </a>
            <a href="#tech-items-section" onClick={(e) => { e.preventDefault(); scrollToSection('tech-items-section'); }}>
              Components
            </a>
            <a href="#tech-setup-section" onClick={(e) => { e.preventDefault(); scrollToSection('tech-setup-section'); }}>
              Setup
            </a>
          </nav>

          {/* Corona Green Action Button */}
          <button 
            className="corona-green-btn desktop-btn"
            onClick={() => scrollToSection('tech-items-section')}
          >
            <Plus size={15} />
            <span>Explore Hub</span>
          </button>

          {/* GitHub Icon Link */}
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noreferrer"
            className="corona-github-icon desktop-github"
            title={`${stack.name} GitHub Repository`}
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
              placeholder={`Search ${stack.name} components & methods...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
              onFocus={() => scrollToSection('tech-items-section')}
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
              href="#tech-toc-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); scrollToSection('tech-toc-section'); }}
            >
              Table of Contents
            </a>
            <a 
              href="#tech-items-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); scrollToSection('tech-items-section'); }}
            >
              All Components & Methods ({stack.items?.length || 0})
            </a>
            <a 
              href="#tech-setup-section" 
              className="mobile-nav-item"
              onClick={(e) => { e.preventDefault(); scrollToSection('tech-setup-section'); }}
            >
              Setup & Environment Guide
            </a>
            
            <div className="mobile-drawer-footer">
              <button 
                className="corona-green-btn full-width"
                onClick={() => scrollToSection('tech-items-section')}
              >
                <Plus size={15} />
                <span>Explore {stack.name} Hub</span>
              </button>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="mobile-github-link"
              >
                <Github size={16} />
                <span>View {stack.name} on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
