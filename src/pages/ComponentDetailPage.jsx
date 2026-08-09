import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Code, 
  CheckCircle, 
  BookOpen, 
  Layers, 
  Smartphone 
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import MobileDevicePreview from '../components/MobileDevicePreview';

export default function ComponentDetailPage({ component, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [component]);

  if (!component) return null;

  return (
    <div className="detail-page-wrapper">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-apple">
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>Overview</a>
          <span>/</span>
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>Components</a>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{component.name}</span>
        </div>

        {/* Component Header Card */}
        <div className="detail-header-apple">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="comp-num-badge">{component.num}</span>
              <h1 style={{ fontSize: '40px', fontWeight: '600', color: 'var(--color-ink)' }}>{component.name}</h1>
              <span className="filter-chip" style={{ background: 'var(--color-canvas)', cursor: 'default' }}>{component.category}</span>
            </div>

            <button className="button-secondary-pill" onClick={onBack} style={{ padding: '8px 18px', fontSize: '14px' }}>
              <ArrowLeft size={14} />
              <span>Back to Library</span>
            </button>
          </div>

          <p style={{ fontSize: '21px', color: 'var(--color-ink-muted-80)', fontWeight: '400', lineHeight: '1.4' }}>
            {component.tagline}
          </p>

          <div className="import-pill-apple">
            <code>{component.importStatement}</code>
          </div>
        </div>

        {/* Main Content Sections Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* 1. Description & Native Mechanics */}
          <div className="block-card-apple" style={{ margin: 0 }}>
            <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={20} style={{ color: 'var(--color-primary)' }} />
              <span>Description & Native Mechanics</span>
            </h3>
            <p className="body-text" style={{ color: 'var(--color-body)' }}>{component.description}</p>
          </div>

          {/* 2. Interactive Mobile & Below Image (Positioned ABOVE When to Use & Guidelines) */}
          <div className="block-card-apple" style={{ margin: 0, backgroundColor: 'var(--color-canvas-parchment)' }}>
            <MobileDevicePreview component={component} />
          </div>

          {/* 3. When to Use & Guidelines */}
          <div className="block-card-apple" style={{ margin: 0 }}>
            <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle size={20} style={{ color: 'var(--color-primary)' }} />
              <span>When to Use & Guidelines</span>
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {component.useCases.map((useCase, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '10px', fontSize: '16px', color: 'var(--color-body)' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Key Props Reference Table */}
          {component.props && component.props.length > 0 && (
            <div className="block-card-apple" style={{ margin: 0 }}>
              <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Layers size={20} style={{ color: 'var(--color-primary)' }} />
                <span>Key Props Reference</span>
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>Prop Name</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.props.map((prop, idx) => (
                      <tr key={idx}>
                        <td className="prop-name">{prop.name}</td>
                        <td className="prop-type">{prop.type}</td>
                        <td style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>{prop.default}</td>
                        <td style={{ color: 'var(--color-ink-muted-80)' }}>{prop.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 5. Copyable Code Examples */}
          <div className="block-card-apple" style={{ margin: 0 }}>
            <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Code size={20} style={{ color: 'var(--color-primary)' }} />
              <span>Copyable Code Examples</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
              {component.codeExamples.map((ex, idx) => (
                <CodeBlock key={idx} title={ex.title} code={ex.code} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
