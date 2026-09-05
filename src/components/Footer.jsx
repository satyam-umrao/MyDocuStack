import React from 'react';
import { ArrowUpRight, Layers, Github, Terminal, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigateHome, onSelectStack }) {
  const handleStackClick = (stackId) => {
    if (onSelectStack) {
      onSelectStack(stackId);
    } else {
      window.location.hash = `stack-${stackId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-datawizz-style">
      {/* Background ambient lighting */}
      <div className="footer-aurora-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* ========================================================================= */}
        {/* 1. TOP HEADER & DESCRIPTIVE PARAGRAPH HERO                                */}
        {/* ========================================================================= */}
        <div className="footer-docustack-hero">
          
          {/* Brand Tag Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(0, 210, 91, 0.15)',
              color: 'var(--color-corona-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(0, 210, 91, 0.3)'
            }}>
              <Layers size={18} />
            </div>
            <span style={{
              fontSize: '15px',
              fontWeight: '800',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff'
            }}>
              MY DOCUSTACK
            </span>
            <span className="corona-brand-tag" style={{
              backgroundColor: 'rgba(0, 210, 91, 0.15)',
              color: 'var(--color-corona-green)',
              borderColor: 'var(--color-corona-green)'
            }}>
              v2.0 MASTER HUB
            </span>
          </div>

          {/* Main Footer Heading */}
          <h2 style={{
            fontSize: 'clamp(22px, 3.2vw, 34px)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.25,
            marginBottom: '14px',
            maxWidth: '820px'
          }}>
            The Unified Multi-Technology Developer Stack & Interactive Documentation Hub
          </h2>

          {/* Descriptive Paragraph */}
          <p style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'var(--color-corona-muted)',
            maxWidth: '760px',
            marginBottom: '26px'
          }}>
            My DocuStack is a unified, high-performance documentation platform aggregating 18 mission-critical programming languages, frontend and mobile frameworks, backend runtimes, distributed databases, and cloud engineering technologies. Featuring 489+ individual component and method specifications, interactive desktop web & mobile screen previews, developer terminals, and verified CLI installation workflows.
          </p>

          {/* Quick Hub Actions & Contact Link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <button
              type="button"
              onClick={handleHomeClick}
              className="corona-green-btn"
              style={{ padding: '8px 20px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Layers size={15} />
              <span>Explore All 18 Technologies</span>
            </button>

            <a 
              href="https://github.com/satyam-umrao/react-native-docs" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-contact-link"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--color-corona-border)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-xs)',
                fontSize: '13px',
                color: '#ffffff'
              }}
            >
              <Github size={15} />
              <span>github.com/satyam-umrao/react-native-docs</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. CATEGORIZED MULTI-COLUMN DOCUMENTATION LINKS                           */}
        {/* ========================================================================= */}
        <div className="footer-links-grid">
          
          {/* Column 1: Frontend & Mobile Stacks */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Frontend & Mobile</h4>
            <button type="button" onClick={() => handleStackClick('html')} className="footer-col-link">HTML5 Standard</button>
            <button type="button" onClick={() => handleStackClick('css')} className="footer-col-link">CSS3 & Grid/Flexbox</button>
            <button type="button" onClick={() => handleStackClick('javascript')} className="footer-col-link">JavaScript (ES2024)</button>
            <button type="button" onClick={() => handleStackClick('typescript')} className="footer-col-link">TypeScript (Strict)</button>
            <button type="button" onClick={() => handleStackClick('react')} className="footer-col-link">React 19 Hooks</button>
            <button type="button" onClick={() => handleStackClick('nextjs')} className="footer-col-link">Next.js App Router</button>
            <button type="button" onClick={() => handleStackClick('react-native')} className="footer-col-link">React Native</button>
          </div>

          {/* Column 2: Backend & Systems */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Backend & Systems</h4>
            <button type="button" onClick={() => handleStackClick('nodejs')} className="footer-col-link">Node.js Runtime</button>
            <button type="button" onClick={() => handleStackClick('nestjs')} className="footer-col-link">NestJS Architecture</button>
            <button type="button" onClick={() => handleStackClick('java')} className="footer-col-link">Java SE 21 LTS</button>
            <button type="button" onClick={() => handleStackClick('springboot')} className="footer-col-link">Spring Boot 3</button>
            <button type="button" onClick={() => handleStackClick('golang')} className="footer-col-link">Golang (Go 1.23)</button>
            <button type="button" onClick={() => handleStackClick('gin')} className="footer-col-link">Gin Web Framework</button>
          </div>

          {/* Column 3: Databases & DevOps */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Database & Cloud</h4>
            <button type="button" onClick={() => handleStackClick('postgresql')} className="footer-col-link">PostgreSQL 16</button>
            <button type="button" onClick={() => handleStackClick('gorm')} className="footer-col-link">GORM Database ORM</button>
            <button type="button" onClick={() => handleStackClick('docker')} className="footer-col-link">Docker & Containers</button>
            <button type="button" onClick={() => handleStackClick('kubernetes')} className="footer-col-link">Kubernetes (K8s)</button>
            <button type="button" onClick={() => handleStackClick('aws')} className="footer-col-link">Amazon AWS Cloud</button>
          </div>

          {/* Column 4: Platform & Documentation Tools */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Platform Features</h4>
            <button type="button" onClick={handleHomeClick} className="footer-col-link">
              <Layers size={13} style={{ color: 'var(--color-corona-green)' }} />
              <span>Master Hub Catalog</span>
            </button>
            <a href="#stacks-grid-section" onClick={handleHomeClick} className="footer-col-link">
              <Terminal size={13} />
              <span>Dual CLI Setup Guides</span>
            </a>
            <a href="#stacks-grid-section" onClick={handleHomeClick} className="footer-col-link">
              <Sparkles size={13} style={{ color: 'var(--color-corona-purple)' }} />
              <span>Interactive Simulators</span>
            </a>
            <a href="https://github.com/satyam-umrao/react-native-docs" target="_blank" rel="noreferrer" className="footer-col-link">
              <Github size={13} />
              <span>GitHub Open Source</span>
            </a>
            <div className="footer-col-link" style={{ cursor: 'default', color: 'var(--color-corona-muted)' }}>
              <ShieldCheck size={13} />
              <span>MIT Licensed</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. GIANT SIGNATURE BRAND LOGO SHOWCASE                                    */}
        {/* ========================================================================= */}
        <div className="footer-giant-logo-container">
          <div 
            className="footer-giant-logo-text"
            style={{ 
              letterSpacing: '0.04em',
              cursor: 'pointer' 
            }}
            onClick={handleHomeClick}
            title="My DocuStack Master Hub"
          >
            MY DOCUSTACK
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM LEGAL COPYRIGHT & HUB LINKS                                     */}
        {/* ========================================================================= */}
        <div className="footer-datawizz-bottom">
          <div className="footer-copyright-text">
            © 2026 My DocuStack. Built for software engineers and teams worldwide. All rights reserved.
          </div>

          <div className="footer-social-links" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://github.com/satyam-umrao/react-native-docs" target="_blank" rel="noreferrer">
              GitHub Repository
            </a>
            <button 
              type="button" 
              onClick={handleHomeClick} 
              style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              18 Technologies
            </button>
            <button 
              type="button" 
              onClick={handleHomeClick} 
              style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Developer Catalog
            </button>
            <span style={{ color: 'var(--color-corona-border)' }}>•</span>
            <span style={{ color: 'var(--color-corona-muted)' }}>Open Source Documentation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
