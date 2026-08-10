import React, { useState } from 'react';
import { Terminal, Smartphone, CheckCircle2, Layers } from 'lucide-react';
import CodeBlock from './CodeBlock';

export default function SetupSection({ setupData }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'cli' | 'expo'

  const cliTerminalCommands = `# 1. Initialize new React Native CLI project
npx @react-native-community/cli@latest init MyApp

# 2. Navigate into project folder
cd MyApp

# 3. Start JavaScript Metro Bundler daemon
npm start

# 4. Launch on Android emulator or physical device
npm run android

# Or launch on iOS simulator (macOS required)
npm run ios`;

  const expoTerminalCommands = `# 1. Initialize new Expo project
npx create-expo-app@latest MyApp

# 2. Navigate into project folder
cd MyApp

# 3. Start Expo Dev Server with QR code
npx expo start

# 4. Scan QR code in Expo Go app, or launch on emulator
npx expo run:android
# or
npx expo run:ios`;

  return (
    <section className="section-tile-parchment" id="setup-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-apple">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-corona-border)',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '12px',
            color: 'var(--color-corona-blue)',
            fontWeight: '600',
            marginBottom: '14px'
          }}>
            <Terminal size={13} />
            <span>Environment Setup Guide</span>
          </div>
          <h2 className="section-title-apple">React Native CLI & Expo CLI</h2>
          <p className="section-subtext-apple">
            Choose between Bare Native CLI for full native control or Managed Expo CLI for zero-config rapid development.
          </p>

          {/* Mobile Setup Tab Switcher (Visible on Mobile) */}
          <div className="setup-mobile-tabs">
            <button 
              className={`setup-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <Layers size={14} />
              <span>Both (Side by Side)</span>
            </button>
            <button 
              className={`setup-tab-btn ${activeTab === 'cli' ? 'active' : ''}`}
              onClick={() => setActiveTab('cli')}
            >
              <Terminal size={14} />
              <span>React Native CLI</span>
            </button>
            <button 
              className={`setup-tab-btn ${activeTab === 'expo' ? 'active' : ''}`}
              onClick={() => setActiveTab('expo')}
            >
              <Smartphone size={14} />
              <span>Expo CLI</span>
            </button>
          </div>
        </div>

        {/* Side-by-Side Equal Height Setup Cards */}
        <div className="setup-equal-grid">
          
          {/* Card 1: React Native CLI */}
          {(activeTab === 'all' || activeTab === 'cli') && (
            <div className="setup-compact-card">
              
              {/* Card Fixed Header */}
              <div className="setup-card-top-header">
                <div className="setup-badge-icon-apple">
                  <Terminal size={24} />
                </div>
                <div className="setup-card-title-group">
                  <h3 className="setup-card-title">{setupData.cli.title}</h3>
                  <span className="setup-card-subtitle">{setupData.cli.subtitle}</span>
                </div>
              </div>

              {/* Scrollable Viewport Body */}
              <div className="setup-card-scroll-body">
                
                {/* Full Terminal Setup Code Block */}
                <div className="setup-block-sub">
                  <h4 className="setup-sub-heading">Terminal Setup Commands</h4>
                  <CodeBlock 
                    filename="terminal-rn-cli.sh"
                    code={cliTerminalCommands}
                  />
                </div>

                {/* Requirements & Tools */}
                <div className="setup-block-sub">
                  <h4 className="setup-sub-heading">Required System Dependencies</h4>
                  <ul className="setup-check-list">
                    {setupData.cli.prerequisites.map((req, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} style={{ color: '#0066cc', flexShrink: 0 }} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step-by-Step Installation */}
                <div className="setup-block-sub">
                  <h4 className="setup-sub-heading">Step-by-Step CLI Walkthrough</h4>
                  <div className="setup-steps-timeline">
                    {setupData.cli.steps.map((step) => (
                      <div key={step.step} className="timeline-step">
                        <span className="timeline-num">{step.step}</span>
                        <div className="timeline-content">
                          <div className="timeline-title">{step.title}</div>
                          <div className="timeline-desc">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Folder Architecture Tree */}
                <div className="setup-block-sub">
                  <h4 className="setup-sub-heading">Native Directory Architecture</h4>
                  <CodeBlock 
                    filename="bare-cli-project-structure"
                    code={setupData.cli.folderStructure}
                  />
                </div>

              </div>

            </div>
          )}

          {/* Card 2: Managed Expo CLI */}
          {(activeTab === 'all' || activeTab === 'expo') && (
            <div className="setup-compact-card">
              
              {/* Card Fixed Header */}
              <div className="setup-card-top-header">
                <div className="setup-badge-icon-apple expo-badge">
                  <Smartphone size={24} />
                </div>
                <div className="setup-card-title-group">
                  <h3 className="setup-card-title">{setupData.expo.title}</h3>
                  <span className="setup-card-subtitle">{setupData.expo.subtitle}</span>
                </div>
              </div>

              {/* Scrollable Viewport Body */}
              <div className="setup-card-scroll-body">
                
                {/* Full Terminal Setup Code Block */}
                <div className="setup-block-sub">
                  <h4 className="setup-sub-heading">Terminal Setup Commands</h4>
                  <CodeBlock 
                    filename="terminal-expo-cli.sh"
                    code={expoTerminalCommands}
                  />
                </div>

                {/* Requirements & Tools */}
                <div className="setup-block-sub">
                  <h4 className="setup-sub-heading">Prerequisites & Expo Go App</h4>
                  <ul className="setup-check-list">
                    {setupData.expo.prerequisites.map((req, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} style={{ color: '#a855f7', flexShrink: 0 }} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step-by-Step Installation */}
                <div className="setup-block-sub">
                  <h4 className="setup-sub-heading">Step-by-Step Expo Walkthrough</h4>
                  <div className="setup-steps-timeline">
                    {setupData.expo.steps.map((step) => (
                      <div key={step.step} className="timeline-step">
                        <span className="timeline-num expo-num">{step.step}</span>
                        <div className="timeline-content">
                          <div className="timeline-title">{step.title}</div>
                          <div className="timeline-desc">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Folder Architecture Tree */}
                <div className="setup-block-sub">
                  <h4 className="setup-sub-heading">Expo Directory Architecture</h4>
                  <CodeBlock 
                    filename="expo-app-structure"
                    code={setupData.expo.folderStructure}
                  />
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

