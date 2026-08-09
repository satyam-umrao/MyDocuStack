import React from 'react';
import { Terminal, Layers, ArrowRight } from 'lucide-react';

export default function TableOfContentsGrid({ onSelectCategory, onSelectSetup }) {
  return (
    <section className="section-tile-parchment" id="toc-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-apple">
          <h2 className="section-title-apple">Table of Contents</h2>
          <p className="section-subtext-apple">
            Jump directly to environment setup workflows or explore the complete interactive component library.
          </p>
        </div>

        {/* Boxed Store Utility Cards Grid (2 Cards) */}
        <div className="toc-boxed-grid">
          
          {/* Box 1: Setup & Environment */}
          <div 
            className="toc-boxed-card"
            onClick={() => {
              onSelectSetup();
            }}
          >
            <div className="toc-boxed-top">
              <div className="toc-icon-badge">
                <Terminal size={22} />
              </div>
              <span className="toc-boxed-count-badge">2 Workflows</span>
            </div>

            <h3 className="toc-boxed-title">Setup & Environment</h3>
            <p className="toc-boxed-desc">
              Complete guide for setting up Bare React Native CLI and Managed Expo CLI workflows, prerequisites, terminal commands, and folder architectures.
            </p>

            <div className="toc-boxed-link">
              <span>Explore Setup Guides</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Box 2: All Components */}
          <div 
            className="toc-boxed-card"
            onClick={() => {
              if (onSelectCategory) onSelectCategory('All');
              const gridEl = document.getElementById('all-components-section');
              if (gridEl) gridEl.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="toc-boxed-top">
              <div className="toc-icon-badge" style={{ color: 'var(--color-corona-purple)', backgroundColor: 'rgba(143, 95, 232, 0.15)' }}>
                <Layers size={22} />
              </div>
              <span className="toc-boxed-count-badge" style={{ backgroundColor: 'rgba(143, 95, 232, 0.15)', color: 'var(--color-corona-purple)' }}>
                27 Components
              </span>
            </div>

            <h3 className="toc-boxed-title">All Components & APIs</h3>
            <p className="toc-boxed-desc">
              Browse all 27 core React Native components and APIs featuring authentic iOS & Android device frame previews, props tables, and copyable code.
            </p>

            <div className="toc-boxed-link" style={{ color: 'var(--color-corona-purple)' }}>
              <span>Browse 27 Components</span>
              <ArrowRight size={16} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
