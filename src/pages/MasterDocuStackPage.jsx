import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Layers, 
  Terminal, 
  ChevronRight, 
  Search, 
  X,
  Code,
  Server,
  Database,
  Cloud,
  Cpu,
  Globe
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Frontend',
  'Backend',
  'Mobile',
  'Database',
  'DevOps & Cloud',
  'Languages'
];

export default function MasterDocuStackPage({ 
  stacks = [], 
  onSelectStack,
  searchQuery = '',
  setSearchQuery
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const scrollToGrid = () => {
    const el = document.getElementById('stacks-grid-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Safe search filtering with useMemo
  const filteredStacks = useMemo(() => {
    const query = (searchQuery || '').trim().toLowerCase();
    return stacks.filter((stack) => {
      const matchesCategory = selectedCategory === 'All' || stack.category === selectedCategory;
      if (!query) return matchesCategory;

      const nameMatch = stack.name?.toLowerCase().includes(query) ?? false;
      const taglineMatch = stack.tagline?.toLowerCase().includes(query) ?? false;
      const overviewMatch = stack.overview?.toLowerCase().includes(query) ?? false;

      return matchesCategory && (nameMatch || taglineMatch || overviewMatch);
    });
  }, [stacks, selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    if (setSearchQuery) setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <div className="home-page">
      
      {/* Corona-Style Dark Master Hero Section */}
      <section className="corona-hero-section">
        <div className="container">
          
          {/* Top Corona Announcement Banner Tile */}
          <div className="corona-banner-tile">
            <div className="corona-banner-left">
              <div className="corona-banner-icon">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="corona-banner-title">My DocuStack 2026 Developer Edition</h4>
                <p className="corona-banner-desc">
                  Unified enterprise documentation hub featuring 18 full-stack, mobile, cloud, and systems engineering technologies with live interactive sandboxes.
                </p>
              </div>
            </div>
            <button className="corona-banner-btn" onClick={scrollToGrid}>
              <span>Explore Stacks</span>
            </button>
          </div>

          {/* Metrics Stat Cards (Corona Dashboard Stat Row) */}
          <div className="corona-stat-row">
            
            <div className="corona-stat-card">
              <div className="corona-stat-top">
                <span className="corona-stat-value">{stacks.length || 18}</span>
                <span className="corona-stat-badge green">All Live</span>
                <div className="corona-icon-box green">
                  <Layers size={18} />
                </div>
              </div>
              <span className="corona-stat-label">Technologies, Languages & Stacks</span>
            </div>

            <div className="corona-stat-card">
              <div className="corona-stat-top">
                <span className="corona-stat-value">6</span>
                <span className="corona-stat-badge blue">Full-Stack</span>
                <div className="corona-icon-box blue">
                  <Globe size={18} />
                </div>
              </div>
              <span className="corona-stat-label">Engineering Disciplines</span>
            </div>

            <div className="corona-stat-card">
              <div className="corona-stat-card-inner">
                <div className="corona-stat-top">
                  <span className="corona-stat-value">Simulators</span>
                  <span className="corona-stat-badge purple">Interactive</span>
                  <div className="corona-icon-box purple">
                    <Terminal size={18} />
                  </div>
                </div>
                <span className="corona-stat-label">Live Sandboxes & Previews</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Stacks Gallery Section */}
      <section className="section-tile-light" id="stacks-grid-section">
        <div className="container">
          
          {/* Header */}
          <div className="section-header-apple">
            <h2 className="section-title-apple">
              All Technologies & Frameworks
            </h2>
            <p className="section-subtext-apple">
              Explore deep-dive documentation, key methods, interactive code sandboxes, and copyable production snippets across modern development stacks.
            </p>
          </div>

          {/* Controls Bar: Search & Category Chips */}
          <div className="controls-bar-apple">
            
            {/* Search Input Box */}
            <div className="search-pill-wrapper">
              <Search size={18} className="search-pill-icon" />
              <input
                type="text"
                placeholder="Search 18 languages & frameworks (e.g. TypeScript, Docker, Go, React)..."
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

            {/* Horizontally Scrollable Category Filter Chips */}
            <div className="filter-chips">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`filter-chip ${isActive ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Empty State vs Stacks Grid */}
          {filteredStacks.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '60px 20px', 
              backgroundColor: 'var(--color-corona-surface)', 
              border: '1px solid var(--color-corona-border)',
              borderRadius: 'var(--radius-sm)' 
            }}>
              <p style={{ fontSize: '16px', color: 'var(--color-corona-muted)', marginBottom: '16px' }}>
                No technologies match "{searchQuery}".
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
              {filteredStacks.map((stack) => {
                const itemCount = stack.id === 'react-native' ? 58 : (stack.items?.length || 0);
                return (
                  <article
                    key={stack.id}
                    onClick={() => onSelectStack && onSelectStack(stack.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if ((e.key === 'Enter' || e.key === ' ') && onSelectStack) {
                        e.preventDefault();
                        onSelectStack(stack.id);
                      }
                    }}
                    className="comp-card-apple"
                  >
                    <div>
                      <div className="comp-card-header">
                        <span 
                          className="comp-num-badge"
                          style={{
                            borderColor: stack.accentColor || 'var(--color-corona-green)',
                            color: stack.accentColor || '#ffffff'
                          }}
                        >
                          {stack.num}
                        </span>
                        <span 
                          className="comp-cat-tag"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            color: stack.accentColor || 'var(--color-corona-green)'
                          }}
                        >
                          {stack.category}
                        </span>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <h3 className="comp-card-title" style={{ margin: 0 }}>
                          {stack.name}
                        </h3>
                        <span style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                          color: stack.accentColor || '#ffffff', 
                          fontSize: '11px', 
                          padding: '2px 8px', 
                          borderRadius: '12px',
                          fontWeight: '600'
                        }}>
                          {itemCount} Items
                        </span>
                      </div>

                      <p className="comp-card-tagline">
                        {stack.tagline}
                      </p>

                      {/* Pill tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                        <span className="filter-chip" style={{ fontSize: '11px', padding: '2px 8px', cursor: 'default' }}>
                          {stack.badge}
                        </span>
                        <span className="filter-chip" style={{ fontSize: '11px', padding: '2px 8px', cursor: 'default', color: 'var(--color-corona-muted)' }}>
                          {stack.version}
                        </span>
                      </div>
                    </div>

                    <div className="comp-card-footer">
                      <span style={{ fontSize: '12px', color: 'var(--color-corona-muted)' }}>
                        Interactive Reference
                      </span>
                      <div className="comp-card-link" style={{ color: stack.accentColor || 'var(--color-corona-green)' }}>
                        <span>Explore Docs</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
