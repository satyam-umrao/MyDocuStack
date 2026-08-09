import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const categories = ['All', 'Core', 'Controls', 'Lists', 'Feedback', 'Layout', 'APIs', 'Animation'];

export default function AllComponentsGrid({ components, onSelectComponent, selectedCategory, setSelectedCategory }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComponents = components.filter((comp) => {
    const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
    const matchesSearch = 
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section-tile-light" id="all-components-section">
      <div className="container">
        <div className="section-header-apple">
          <h2 className="section-title-apple">All Components Grid</h2>
          <p className="section-subtext-apple">
            Complete gallery of 27 React Native core components and native device APIs. Click any card to inspect dedicated documentation.
          </p>
        </div>

        {/* Search Pill Bar & Configurator Option Chips */}
        <div className="controls-bar-apple">
          <div className="search-pill-wrapper">
            <Search className="search-pill-icon" size={18} />
            <input
              type="text"
              placeholder="Search components (e.g. FlatList, Pressable, View)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-pill-input"
            />
          </div>

          <div className="filter-chips">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Components Grid */}
        {filteredComponents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-ink-muted-48)' }}>
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>No components match "{searchQuery}".</p>
            <button 
              className="button-secondary-pill" 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="components-grid-apple">
            {filteredComponents.map((comp) => (
              <div
                key={comp.id}
                className="comp-card-apple"
                onClick={() => onSelectComponent(comp.id)}
              >
                <div>
                  <div className="comp-card-header">
                    <span className="comp-num-badge">{comp.num}</span>
                    <span className="comp-cat-tag">{comp.category}</span>
                  </div>
                  <h3 className="comp-card-title">{comp.name}</h3>
                  <p className="comp-card-tagline">{comp.tagline}</p>
                </div>

                <div className="comp-card-footer">
                  <span style={{ fontSize: '13px', color: 'var(--color-ink-muted-48)' }}>RN 0.86 Native</span>
                  <div className="comp-card-link">
                    <span>View Component</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
