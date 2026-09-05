import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Layers, 
  Search, 
  X, 
  ChevronRight, 
  Code,
  Zap,
  ArrowRight,
  CheckCircle2,
  Box,
  Globe,
  Smartphone
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import { techSetupData } from '../data/techSetupData';

export default function TechStackMainPage({
  stack,
  onSelectItem,
  onBackToMaster,
  searchQuery = '',
  setSearchQuery
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSetupTab, setActiveSetupTab] = useState('all'); // 'all' | 'card1' | 'card2'

  // Derive unique categories from stack items
  const categories = useMemo(() => {
    if (!stack?.items) return ['All'];
    const set = new Set();
    stack.items.forEach(item => {
      if (item.category) set.add(item.category);
    });
    return ['All', ...Array.from(set)];
  }, [stack]);

  // Filter items by category and search query
  const filteredItems = useMemo(() => {
    if (!stack?.items) return [];
    const query = (searchQuery || '').trim().toLowerCase();

    return stack.items.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      if (!query) return matchesCategory;

      const nameMatch = item.name?.toLowerCase().includes(query) ?? false;
      const taglineMatch = item.tagline?.toLowerCase().includes(query) ?? false;
      const descMatch = item.description?.toLowerCase().includes(query) ?? false;

      return matchesCategory && (nameMatch || taglineMatch || descMatch);
    });
  }, [stack, selectedCategory, searchQuery]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    if (setSearchQuery) setSearchQuery('');
    setSelectedCategory('All');
  };

  if (!stack) return null;

  // Retrieve rich dual-workflow setup data
  const currentSetup = techSetupData[stack.id] || {
    card1: {
      title: `${stack.name} Native CLI`,
      subtitle: `Standard Toolchain & Runtime Environment`,
      prerequisites: [
        `Core runtime for ${stack.name}`,
        'System package manager installed',
        'Terminal shell (PowerShell, zsh, or bash)'
      ],
      commands: stack.commands || `# Initialize ${stack.name}\nnpm init -y\nnpm install ${stack.id}`,
      steps: [
        { step: 1, title: 'Environment Scaffolding', desc: `Initialize a clean workspace configured for ${stack.name}.` },
        { step: 2, title: 'Install Toolchain', desc: `Install primary toolchain binaries and verified dependencies.` },
        { step: 3, title: 'Run Local Daemon', desc: `Start development server or runtime watcher daemon.` },
        { step: 4, title: 'Build for Production', desc: `Compile optimized production bundle or executable artifact.` }
      ],
      folderStructure: `${stack.id}-project/\n├── src/              # Source code directory\n├── config/           # Configuration files\n└── README.md         # Documentation`
    },
    card2: {
      title: `${stack.name} Modern Framework`,
      subtitle: `Modern Enterprise Ecosystem & Tooling`,
      prerequisites: [
        'Modern development toolchain',
        'Container or cloud deployment target',
        'Automated testing runner'
      ],
      commands: `# 1. Scaffold modern application\nnpx create-${stack.id}-app my-project\ncd my-project\n\n# 2. Start development server\nnpm run dev`,
      steps: [
        { step: 1, title: 'Scaffold Framework', desc: `Initialize starter template with modern conventions and best practices.` },
        { step: 2, title: 'Architecture Setup', desc: `Configure modular structure with separation of concerns.` },
        { step: 3, title: 'Hot Module Reloading', desc: `Develop interactively with instantaneous code updates.` },
        { step: 4, title: 'Cloud Deployment', desc: `Deploy container or serverless bundle to production.` }
      ],
      folderStructure: `${stack.id}-framework/\n├── app/              # Application modules\n├── public/           # Static assets\n└── package.json      # Dependencies`
    }
  };

  const accent = stack.accentColor || 'var(--color-corona-green)';

  return (
    <div className="home-page">
      
      {/* ========================================================================= */}
      {/* 1. CORONA-STYLE DARK HERO SECTION                                        */}
      {/* ========================================================================= */}
      <section className="corona-hero-section">
        <div className="container">

          {/* Top Announcement Banner Tile */}
          <div className="corona-banner-tile">
            <div className="corona-banner-left">
              <div className="corona-banner-icon">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="corona-banner-title">
                  New {stack.name} {stack.version} Developer Hub
                </h4>
                <p className="corona-banner-desc">
                  {stack.tagline} • Interactive components, methods, parameters, and executable code snippets.
                </p>
              </div>
            </div>
            <button 
              className="corona-banner-btn" 
              onClick={() => scrollToSection('tech-items-section')}
            >
              <span>Get Started</span>
            </button>
          </div>

          {/* Metrics Stat Cards (Corona Dashboard Stat Row - 3 Cards) */}
          <div className="corona-stat-row">
            
            {/* Stat 1: Total Atomic Items */}
            <div className="corona-stat-card">
              <div className="corona-stat-top">
                <span className="corona-stat-value">{stack.items?.length || 0}</span>
                <span className="corona-stat-badge green">+100%</span>
                <div className="corona-icon-box green">
                  <Layers size={18} />
                </div>
              </div>
              <span className="corona-stat-label">Components, Methods & APIs</span>
            </div>

            {/* Stat 2: Workflows */}
            <div className="corona-stat-card">
              <div className="corona-stat-top">
                <span className="corona-stat-value">2</span>
                <span className="corona-stat-badge blue">Dual Workflows</span>
                <div className="corona-icon-box blue">
                  <Terminal size={18} />
                </div>
              </div>
              <span className="corona-stat-label">CLI Setup Workflows</span>
            </div>

            {/* Stat 3: Interactive Sandbox / Simulator */}
            <div className="corona-stat-card">
              <div className="corona-stat-card-inner">
                <div className="corona-stat-top">
                  <span className="corona-stat-value">Interactive</span>
                  <span className="corona-stat-badge purple">Live</span>
                  <div className="corona-icon-box purple">
                    <Sparkles size={18} />
                  </div>
                </div>
                <span className="corona-stat-label">Live Sandbox & Simulator</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TABLE OF CONTENTS SECTION (Corona Dark Boxed Cards)                     */}
      {/* ========================================================================= */}
      <section className="section-tile-parchment" id="tech-toc-section">
        <div className="container">
          
          <div className="section-header-apple">
            <h2 className="section-title-apple">Table of Contents</h2>
            <p className="section-subtext-apple">
              Jump directly to environment setup workflows or explore the complete interactive {stack.name} component & method catalog.
            </p>
          </div>

          <div className="toc-boxed-grid">
            
            {/* Box 1: Setup & Environment */}
            <div 
              className="toc-boxed-card"
              onClick={() => scrollToSection('tech-setup-section')}
            >
              <div className="toc-boxed-top">
                <div className="toc-icon-badge">
                  <Terminal size={22} />
                </div>
                <span className="toc-boxed-count-badge">2 Workflows</span>
              </div>

              <h3 className="toc-boxed-title">Setup & Environment</h3>
              <p className="toc-boxed-desc">
                Complete guide for setting up standard {stack.name} toolchains and modern framework workflows, prerequisites, terminal commands, and folder architectures.
              </p>

              <div className="toc-boxed-link">
                <span>Explore Setup Guides</span>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Box 2: All Components & Methods */}
            <div 
              className="toc-boxed-card"
              onClick={() => {
                setSelectedCategory('All');
                scrollToSection('tech-items-section');
              }}
            >
              <div className="toc-boxed-top">
                <div 
                  className="toc-icon-badge" 
                  style={{ 
                    color: accent, 
                    backgroundColor: `${accent}22` 
                  }}
                >
                  <Layers size={22} />
                </div>
                <span 
                  className="toc-boxed-count-badge" 
                  style={{ 
                    backgroundColor: `${accent}22`, 
                    color: accent 
                  }}
                >
                  {stack.items?.length || 0} Items
                </span>
              </div>

              <h3 className="toc-boxed-title">All Components & Methods</h3>
              <p className="toc-boxed-desc">
                Browse all {stack.items?.length || 0} core {stack.name} components, tags, runtime methods, and APIs featuring interactive parameters and copyable code.
              </p>

              <div className="toc-boxed-link" style={{ color: accent }}>
                <span>Browse {stack.items?.length || 0} Items</span>
                <ArrowRight size={16} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ALL COMPONENTS & METHODS GRID SECTION                                  */}
      {/* ========================================================================= */}
      <section className="section-tile-light" id="tech-items-section">
        <div className="container">
          
          {/* Header */}
          <div className="section-header-apple">
            <h2 className="section-title-apple">
              All {stack.name} Components, Methods & APIs
            </h2>
            <p className="section-subtext-apple">
              Complete interactive library of {stack.name} components, runtime methods, and core primitives. Click any card to view detailed documentation.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="controls-bar-apple">
            
            {/* Search Input */}
            <div className="search-pill-wrapper">
              <Search size={18} className="search-pill-icon" />
              <input
                type="text"
                placeholder={`Search ${stack.name} components & methods...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                className="search-pill-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery && setSearchQuery('')}
                  aria-label="Clear search"
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-corona-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="filter-chips">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`filter-chip ${isActive ? 'active' : ''}`}
                    style={isActive ? { borderColor: accent, color: accent, backgroundColor: `${accent}18` } : {}}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Empty State vs Items Grid */}
          {filteredItems.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '60px 20px', 
              backgroundColor: 'var(--color-corona-surface)', 
              border: '1px solid var(--color-corona-border)',
              borderRadius: 'var(--radius-sm)' 
            }}>
              <p style={{ fontSize: '16px', color: 'var(--color-corona-muted)', marginBottom: '16px' }}>
                No items match "{searchQuery}" in {selectedCategory}.
              </p>
              <button 
                type="button"
                onClick={handleResetFilters}
                className="corona-green-btn"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="components-grid-apple">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  onClick={() => onSelectItem && onSelectItem(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && onSelectItem) {
                      e.preventDefault();
                      onSelectItem(item.id);
                    }
                  }}
                  className="comp-card-apple"
                >
                  <div>
                    <div className="comp-card-header">
                      <span 
                        className="comp-num-badge"
                        style={{ 
                          borderColor: `${accent}55`,
                          color: accent
                        }}
                      >
                        {item.num}
                      </span>
                      <span 
                        className="comp-cat-tag"
                        style={{ 
                          backgroundColor: `${accent}15`,
                          color: accent
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <h3 className="comp-card-title">
                      {item.name}
                    </h3>
                    
                    <p className="comp-card-tagline">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="comp-card-footer">
                    <span style={{ fontSize: '12px', color: 'var(--color-corona-muted)' }}>
                      {stack.name} {stack.version}
                    </span>
                    <div 
                      className="comp-card-link"
                      style={{ color: accent }}
                    >
                      <span>View Details</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RICH DUAL-WORKFLOW SETUP SECTION (SetupSection Parity)                 */}
      {/* ========================================================================= */}
      <section className="section-tile-parchment" id="tech-setup-section">
        <div className="container">
          
          {/* Section Header */}
          <div className="section-header-apple">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-corona-border)',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                color: accent,
                fontWeight: '600',
                marginBottom: '14px',
              }}
            >
              <Terminal size={13} />
              <span>Environment Setup Guide</span>
            </div>
            <h2 className="section-title-apple">
              {currentSetup.card1.title} & {currentSetup.card2.title}
            </h2>
            <p className="section-subtext-apple">
              Choose between standard toolchain CLI for full native control or modern framework tooling for rapid development.
            </p>

            {/* Mobile Setup Tab Switcher (Visible on Mobile) */}
            <div className="setup-mobile-tabs">
              <button
                className={`setup-tab-btn ${activeSetupTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveSetupTab('all')}
                style={activeSetupTab === 'all' ? { backgroundColor: accent, borderColor: accent } : {}}
              >
                <Layers size={14} />
                <span>Both (Side by Side)</span>
              </button>
              <button
                className={`setup-tab-btn ${activeSetupTab === 'card1' ? 'active' : ''}`}
                onClick={() => setActiveSetupTab('card1')}
                style={activeSetupTab === 'card1' ? { backgroundColor: accent, borderColor: accent } : {}}
              >
                <Terminal size={14} />
                <span>{currentSetup.card1.title.split(' ')[0]} CLI</span>
              </button>
              <button
                className={`setup-tab-btn ${activeSetupTab === 'card2' ? 'active' : ''}`}
                onClick={() => setActiveSetupTab('card2')}
                style={activeSetupTab === 'card2' ? { backgroundColor: accent, borderColor: accent } : {}}
              >
                <Box size={14} />
                <span>{currentSetup.card2.title.split(' ')[0]} Framework</span>
              </button>
            </div>
          </div>

          {/* Side-by-Side Equal Height Setup Cards Grid */}
          <div className="setup-equal-grid">
            
            {/* Card 1: Primary CLI / Official Toolchain */}
            {(activeSetupTab === 'all' || activeSetupTab === 'card1') && (
              <div className="setup-compact-card">
                
                {/* Card Fixed Header */}
                <div className="setup-card-top-header">
                  <div 
                    className="setup-badge-icon-apple"
                    style={{ 
                      backgroundColor: `${accent}22`,
                      color: accent
                    }}
                  >
                    <Terminal size={24} />
                  </div>
                  <div className="setup-card-title-group">
                    <h3 className="setup-card-title">{currentSetup.card1.title}</h3>
                    <span className="setup-card-subtitle">{currentSetup.card1.subtitle}</span>
                  </div>
                </div>

                {/* Scrollable Viewport Body */}
                <div className="setup-card-scroll-body">
                  
                  {/* Terminal Setup Code Block */}
                  <div className="setup-block-sub">
                    <h4 className="setup-sub-heading">Terminal Setup Commands</h4>
                    <CodeBlock
                      filename={`terminal-${stack.id}-cli.sh`}
                      code={currentSetup.card1.commands}
                    />
                  </div>

                  {/* Requirements & Dependencies Checklist */}
                  <div className="setup-block-sub">
                    <h4 className="setup-sub-heading">Required System Dependencies</h4>
                    <ul className="setup-check-list">
                      {currentSetup.card1.prerequisites.map((req, idx) => (
                        <li key={idx}>
                          <CheckCircle2
                            size={15}
                            style={{ color: accent, flexShrink: 0 }}
                          />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step-by-Step Installation Timeline */}
                  <div className="setup-block-sub">
                    <h4 className="setup-sub-heading">Step-by-Step CLI Walkthrough</h4>
                    <div className="setup-steps-timeline">
                      {currentSetup.card1.steps.map((step) => (
                        <div key={step.step} className="timeline-step">
                          <span 
                            className="timeline-num"
                            style={{ backgroundColor: accent }}
                          >
                            {step.step}
                          </span>
                          <div className="timeline-content">
                            <div className="timeline-title">{step.title}</div>
                            <div className="timeline-desc">{step.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Directory Architecture Tree */}
                  <div className="setup-block-sub">
                    <h4 className="setup-sub-heading">Project Directory Architecture</h4>
                    <CodeBlock
                      filename={`${stack.id}-project-structure`}
                      code={currentSetup.card1.folderStructure}
                    />
                  </div>

                </div>

              </div>
            )}

            {/* Card 2: Modern Framework / Managed Toolchain */}
            {(activeSetupTab === 'all' || activeSetupTab === 'card2') && (
              <div className="setup-compact-card">
                
                {/* Card Fixed Header */}
                <div className="setup-card-top-header">
                  <div className="setup-badge-icon-apple expo-badge">
                    <Box size={24} />
                  </div>
                  <div className="setup-card-title-group">
                    <h3 className="setup-card-title">{currentSetup.card2.title}</h3>
                    <span className="setup-card-subtitle">{currentSetup.card2.subtitle}</span>
                  </div>
                </div>

                {/* Scrollable Viewport Body */}
                <div className="setup-card-scroll-body">
                  
                  {/* Terminal Setup Code Block */}
                  <div className="setup-block-sub">
                    <h4 className="setup-sub-heading">Terminal Setup Commands</h4>
                    <CodeBlock
                      filename={`terminal-${stack.id}-framework.sh`}
                      code={currentSetup.card2.commands}
                    />
                  </div>

                  {/* Prerequisites & Framework Tools Checklist */}
                  <div className="setup-block-sub">
                    <h4 className="setup-sub-heading">Prerequisites & Framework Tools</h4>
                    <ul className="setup-check-list">
                      {currentSetup.card2.prerequisites.map((req, idx) => (
                        <li key={idx}>
                          <CheckCircle2
                            size={15}
                            style={{ color: '#a855f7', flexShrink: 0 }}
                          />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step-by-Step Framework Walkthrough */}
                  <div className="setup-block-sub">
                    <h4 className="setup-sub-heading">Step-by-Step Framework Walkthrough</h4>
                    <div className="setup-steps-timeline">
                      {currentSetup.card2.steps.map((step) => (
                        <div key={step.step} className="timeline-step">
                          <span className="timeline-num expo-num">
                            {step.step}
                          </span>
                          <div className="timeline-content">
                            <div className="timeline-title">{step.title}</div>
                            <div className="timeline-desc">{step.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modern Directory Architecture Tree */}
                  <div className="setup-block-sub">
                    <h4 className="setup-sub-heading">Modern Directory Architecture</h4>
                    <CodeBlock
                      filename={`${stack.id}-framework-structure`}
                      code={currentSetup.card2.folderStructure}
                    />
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
