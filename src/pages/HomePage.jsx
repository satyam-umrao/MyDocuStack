import React from 'react';
import { ArrowRight, Sparkles, Terminal, Layers, Plus } from 'lucide-react';
import TableOfContentsGrid from '../components/TableOfContentsGrid';
import AllComponentsGrid from '../components/AllComponentsGrid';
import SetupSection from '../components/SetupSection';

export default function HomePage({ 
  tocItems, 
  components, 
  setupData, 
  onSelectComponent, 
  selectedCategory, 
  setSelectedCategory,
  searchQuery,
  setSearchQuery
}) {
  const scrollToSetup = () => {
    const el = document.getElementById('setup-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGrid = () => {
    const el = document.getElementById('all-components-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      
      {/* Corona-Style Dark Hero Section */}
      <section className="corona-hero-section">
        <div className="container">
          
          {/* Top Corona Announcement Banner Tile */}
          <div className="corona-banner-tile">
            <div className="corona-banner-left">
              <div className="corona-banner-icon">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="corona-banner-title">New React Native 0.86 Facelift</h4>
                <p className="corona-banner-desc">Interactive component hub with real-time iOS and Android device frame previews.</p>
              </div>
            </div>
            <button className="corona-banner-btn" onClick={scrollToGrid}>
              <span>Get Started</span>
            </button>
          </div>

          {/* Metrics Stat Cards (Corona Dashboard Stat Row) */}
          <div className="corona-stat-row">
            
            <div className="corona-stat-card">
              <div className="corona-stat-top">
                <span className="corona-stat-value">{components.length || 58}</span>
                <span className="corona-stat-badge green">+100%</span>
                <div className="corona-icon-box green">
                  <Layers size={18} />
                </div>
              </div>
              <span className="corona-stat-label">Components, Hooks & APIs</span>
            </div>

            <div className="corona-stat-card">
              <div className="corona-stat-top">
                <span className="corona-stat-value">2</span>
                <span className="corona-stat-badge blue">Bare / Expo</span>
                <div className="corona-icon-box blue">
                  <Terminal size={18} />
                </div>
              </div>
              <span className="corona-stat-label">CLI Setup Workflows</span>
            </div>

            <div className="corona-stat-card">
              <div className="corona-stat-card-inner">
                <div className="corona-stat-top">
                  <span className="corona-stat-value">iOS & Android</span>
                  <span className="corona-stat-badge purple">Live</span>
                  <div className="corona-icon-box purple">
                    <Sparkles size={18} />
                  </div>
                </div>
                <span className="corona-stat-label">Interactive Mobile Previews</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 1. Table of Contents Section (Corona Dark Boxed Cards) */}
      <TableOfContentsGrid 
        tocItems={tocItems} 
        totalCount={components.length}
        onSelectCategory={setSelectedCategory}
        onSelectSetup={scrollToSetup}
      />

      {/* 2. All Components Grid */}
      <AllComponentsGrid 
        components={components} 
        onSelectComponent={onSelectComponent}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 3. Setup Section (React Native CLI and Expo CLI) */}
      <SetupSection setupData={setupData} />
    </div>
  );
}
