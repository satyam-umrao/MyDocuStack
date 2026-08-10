import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onNavigateHome }) {
  const scrollToSection = (id) => {
    onNavigateHome();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="footer-datawizz-style">
      {/* Soft Multicolor Aurora Radial Glow Background */}
      <div className="footer-aurora-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Header Row */}
        <div className="footer-datawizz-top">
          {/* Left: Contact / Direct Link */}
          <div className="footer-contact-block">
            <span className="footer-contact-label">Official Documentation Hub:</span>
            <a 
              href="https://reactnative.dev" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-contact-link"
            >
              <span>docs@reactnative.dev</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Middle: Giant Signature Brand Logo Showcase */}
        <div className="footer-giant-logo-container">
          <div className="footer-giant-logo-text">
            react native
          </div>
        </div>

        {/* Bottom: Legal Copyright & Social Links */}
        <div className="footer-datawizz-bottom">
          <div className="footer-copyright-text">
            © 2026 React Native Docs. All rights reserved.
          </div>

          <div className="footer-social-links" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/facebook/react-native" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://expo.dev" target="_blank" rel="noreferrer">Expo</a>
            <a href="https://reactnavigation.org" target="_blank" rel="noreferrer">Navigation</a>
            <a href="https://twitter.com/reactnative" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
