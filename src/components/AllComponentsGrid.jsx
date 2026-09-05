import React, { useMemo } from 'react';
import { Search, ChevronRight, X } from 'lucide-react';

const CATEGORIES = [
  'All', 
  'Core', 
  'Controls', 
  'Lists', 
  'Feedback', 
  'Layout', 
  'APIs', 
  'Animation',
  'Hooks',
  'React'
];

export default function AllComponentsGrid({ 
  components = [], 
  onSelectComponent, 
  selectedCategory = 'All', 
  setSelectedCategory,
  searchQuery = '',
  setSearchQuery
}) {
  // Safe search filtering with useMemo for performance
  const filteredComponents = useMemo(() => {
    const query = (searchQuery || '').trim().toLowerCase();
    return components.filter((comp) => {
      const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
      if (!query) return matchesCategory;

      const nameMatch = comp.name?.toLowerCase().includes(query) ?? false;
      const taglineMatch = comp.tagline?.toLowerCase().includes(query) ?? false;
      const descMatch = comp.description?.toLowerCase().includes(query) ?? false;

      return matchesCategory && (nameMatch || taglineMatch || descMatch);
    });
  }, [components, selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    if (setSearchQuery) setSearchQuery('');
    if (setSelectedCategory) setSelectedCategory('All');
  };

  return (
    <section className="section-tile-light" id="all-components-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header-apple">
          <h2 className="section-title-apple">
            All Components & APIs
          </h2>
          <p className="section-subtext-apple">
            Complete interactive gallery of React Native core components and native device APIs. Click any card to inspect dedicated documentation.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="controls-bar-apple">
          
          {/* Search Input Box */}
          <div className="search-pill-wrapper">
            <Search size={18} className="search-pill-icon" />
            <input
              type="text"
              placeholder="Search components (e.g. FlatList, Pressable)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-pill-input"
            />
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery('')}
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
                  onClick={() => setSelectedCategory && setSelectedCategory(cat)}
                  className={`filter-chip ${isActive ? 'active' : ''}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Empty State vs Component Grid */}
        {filteredComponents.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px', 
            backgroundColor: 'var(--color-corona-surface)', 
            border: '1px solid var(--color-corona-border)',
            borderRadius: 'var(--radius-sm)' 
          }}>
            <p style={{ fontSize: '16px', color: 'var(--color-corona-muted)', marginBottom: '16px' }}>
              No components match "{searchQuery}".
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
            {filteredComponents.map((comp) => (
              <article
                key={comp.id || comp.name}
                onClick={() => onSelectComponent && onSelectComponent(comp.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && onSelectComponent) {
                    e.preventDefault();
                    onSelectComponent(comp.id);
                  }
                }}
                className="comp-card-apple"
              >
                <div>
                  <div className="comp-card-header">
                    <span className="comp-num-badge">
                      {comp.num}
                    </span>
                    <span className="comp-cat-tag">
                      {comp.category}
                    </span>
                  </div>
                  <h3 className="comp-card-title">
                    {comp.name}
                  </h3>
                  <p className="comp-card-tagline">
                    {comp.tagline}
                  </p>
                </div>

                <div className="comp-card-footer">
                  <span style={{ fontSize: '12px', color: 'var(--color-corona-muted)' }}>RN 0.86 Native</span>
                  <div className="comp-card-link">
                    <span>View Component</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
