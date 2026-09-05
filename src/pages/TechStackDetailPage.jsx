import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Code, 
  CheckCircle, 
  BookOpen, 
  Layers, 
  Terminal, 
  Play, 
  Sparkles,
  Server,
  Database,
  Cloud,
  Cpu,
  RefreshCw,
  Zap
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

export default function TechStackDetailPage({ stack, onBackToMaster }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stack]);

  // Interactive Sandbox States
  const [sandboxLog, setSandboxLog] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [selectedDemoTab, setSelectedDemoTab] = useState('demo1');

  if (!stack) return null;

  // Custom simulator actions based on technology
  const runSimulatorAction = (actionType) => {
    setIsRunning(true);
    setSandboxLog('Executing command...');
    setTimeout(() => {
      setIsRunning(false);
      switch (stack.id) {
        case 'docker':
          setSandboxLog(`$ docker run -d -p 8080:80 --name my-app nginx:alpine\n✓ 7d4a8f9c1b3e (Container Started)\n✓ Port mapping: 0.0.0.0:8080 -> 80/tcp\n✓ Status: Up 2 seconds (Healthy)`);
          break;
        case 'postgresql':
          setSandboxLog(`EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'completed';\n-> Index Scan using idx_orders_status on orders (cost=0.42..8.44 rows=100 width=72)\n   Index Cond: (status = 'completed'::text)\nExecution Time: 0.184 ms (Ultra Fast!)`);
          break;
        case 'golang':
          setSandboxLog(`[Goroutine #1] Worker initialized (Stack: 2KB)\n[Goroutine #2] Processing job 101 through channel -> Result: 202\n[Goroutine #3] Processing job 102 through channel -> Result: 204\n✓ All channels synchronized with sync.WaitGroup. (0.002s elapsed)`);
          break;
        case 'kubernetes':
          setSandboxLog(`$ kubectl scale deployment/api-server --replicas=5\ndeployment.apps/api-server scaled\nNAME                          READY   STATUS    RESTARTS   AGE\napi-server-79bbd-4xk9p        1/1     Running   0          4s\napi-server-79bbd-9m2lp        1/1     Running   0          4s\napi-server-79bbd-q8w1z        1/1     Running   0          4s`);
          break;
        case 'aws':
          setSandboxLog(`$ aws lambda invoke --function-name ProcessOrder output.json\n{\n  "StatusCode": 200,\n  "ExecutedVersion": "$LATEST",\n  "Payload": "{\\"success\\":true,\\"orderId\\":\\"ord-9821\\",\\"s3Location\\":\\"s3://my-bucket/orders/9821.json\\"}"\n}\nDuration: 42.18 ms | Billed Duration: 43 ms | Memory: 128 MB`);
          break;
        case 'nestjs':
        case 'gin':
        case 'springboot':
          setSandboxLog(`HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\nDate: ${new Date().toUTCString()}\n\n{\n  "status": "success",\n  "framework": "${stack.name}",\n  "latency": "1.4ms",\n  "data": { "id": "res_8492", "active": true }\n}`);
          break;
        case 'typescript':
          setSandboxLog(`$ npx tsc --noEmit\n✓ Type-checking completed in 0.42s\n✓ 0 Errors found across 48 source files.\n✓ Strict mode: true | No implicit any: true`);
          break;
        default:
          setSandboxLog(`✓ Successfully executed ${stack.name} demonstration.\n✓ Environment runtime verified and active.\n✓ Status: 200 OK`);
          break;
      }
    }, 600);
  };

  return (
    <div className="detail-page-wrapper" style={{ paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-apple">
          <a href="#" onClick={(e) => { e.preventDefault(); onBackToMaster(); }}>My DocuStack</a>
          <span>/</span>
          <span style={{ color: 'var(--color-corona-muted)' }}>{stack.category}</span>
          <span>/</span>
          <span style={{ color: stack.accentColor || 'var(--color-corona-blue)', fontWeight: '700' }}>
            {stack.name}
          </span>
        </div>

        {/* Stack Header Card */}
        <div className="detail-header-apple" style={{ borderTop: `3px solid ${stack.accentColor || 'var(--color-corona-green)'}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span className="comp-num-badge" style={{ borderColor: stack.accentColor || 'var(--color-corona-green)', color: stack.accentColor || '#ffffff' }}>
                {stack.num}
              </span>
              <h1 style={{ fontSize: '34px', fontWeight: '800', color: '#ffffff' }}>{stack.name}</h1>
              <span className="filter-chip" style={{ background: 'var(--color-corona-surface-hover)', cursor: 'default', color: stack.accentColor || 'var(--color-corona-green)', fontWeight: '600' }}>
                {stack.category}
              </span>
              <span className="filter-chip" style={{ background: 'rgba(255, 255, 255, 0.08)', cursor: 'default', color: '#ffffff' }}>
                {stack.badge}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--color-corona-muted)', fontFamily: 'var(--font-mono)' }}>
                {stack.version}
              </span>
            </div>

            <button 
              type="button"
              className="corona-green-btn" 
              onClick={onBackToMaster} 
              style={{ padding: '8px 16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <ArrowLeft size={15} />
              <span>Back to Master Hub</span>
            </button>
          </div>

          <p style={{ fontSize: '18px', color: 'var(--color-corona-muted)', fontWeight: '400', lineHeight: '1.6' }}>
            {stack.tagline}
          </p>
        </div>

        {/* Main Content Sections Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* 1. Overview & Architectural Highlights */}
          <div className="block-card-apple" style={{ margin: 0 }}>
            <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={20} style={{ color: stack.accentColor || 'var(--color-corona-blue)' }} />
              <span>Overview & Architectural Mechanics</span>
            </h3>
            <p style={{ color: '#ffffff', fontSize: '15px', lineHeight: '1.7', marginBottom: '18px' }}>
              {stack.overview}
            </p>

            <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-corona-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
              Key Production Advantages
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {stack.keyHighlights?.map((highlight, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#ffffff' }}>
                  <CheckCircle size={18} style={{ color: stack.accentColor || 'var(--color-corona-green)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Interactive Technology Sandbox & Terminal Simulator */}
          <div className="block-card-apple" style={{ margin: 0, backgroundColor: 'var(--color-corona-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
                <Terminal size={20} style={{ color: stack.accentColor || 'var(--color-corona-green)' }} />
                <span>Interactive {stack.name} Runtime Simulator</span>
              </h3>
              <button 
                type="button"
                className="corona-green-btn"
                onClick={() => runSimulatorAction('test')}
                disabled={isRunning}
                style={{ padding: '6px 14px', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Play size={14} />
                <span>{isRunning ? 'Executing...' : 'Run Simulation'}</span>
              </button>
            </div>

            {/* Terminal Window Output */}
            <div style={{
              backgroundColor: '#070a12',
              border: '1px solid var(--color-corona-border)',
              borderRadius: '8px',
              overflow: 'hidden',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px'
            }}>
              {/* Terminal Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                backgroundColor: '#121620',
                borderBottom: '1px solid #1c2230'
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                </div>
                <span style={{ color: 'var(--color-corona-muted)', fontSize: '12px' }}>
                  {stack.id}-runtime-terminal
                </span>
                <span style={{ color: '#27c93f', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  ● Active
                </span>
              </div>

              {/* Terminal Content */}
              <div style={{ padding: '16px', minHeight: '140px', color: '#e0e0e0', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                {sandboxLog || (
                  <span style={{ color: 'var(--color-corona-muted)' }}>
                    # Interactive simulation console ready. Click "Run Simulation" above to execute realistic {stack.name} commands and inspect runtime outputs.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* 3. Core Concepts & Architectural Primitives */}
          {stack.coreConcepts && stack.coreConcepts.length > 0 && (
            <div className="block-card-apple" style={{ margin: 0 }}>
              <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Layers size={20} style={{ color: 'var(--color-corona-purple)' }} />
                <span>Core Concepts & Primitives</span>
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {stack.coreConcepts.map((concept, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      backgroundColor: 'var(--color-corona-surface)', 
                      border: '1px solid var(--color-corona-border)', 
                      borderRadius: '8px', 
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: stack.accentColor || 'var(--color-corona-green)' }} />
                      <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff' }}>{concept.title}</h4>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-corona-muted)', lineHeight: '1.5' }}>
                      {concept.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Essential Methods, Commands & API Reference Table */}
          {stack.methodsAndCommands && stack.methodsAndCommands.length > 0 && (
            <div className="block-card-apple" style={{ margin: 0 }}>
              <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Terminal size={20} style={{ color: 'var(--color-corona-green)' }} />
                <span>Essential Methods, Commands & Functions</span>
              </h3>
              <div style={{ overflowX: 'auto', marginTop: '12px' }}>
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>Method / Command</th>
                      <th>Signature / Usage</th>
                      <th>Returns / Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stack.methodsAndCommands.map((m, idx) => (
                      <tr key={idx}>
                        <td className="prop-name" style={{ color: stack.accentColor || 'var(--color-corona-green)' }}>
                          {m.name}
                        </td>
                        <td className="prop-type" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                          {m.signature}
                        </td>
                        <td style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px', color: '#ffffff' }}>
                          {m.returns || 'void'}
                        </td>
                        <td style={{ color: 'var(--color-corona-muted)' }}>
                          {m.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 5. Production Code Examples */}
          {stack.codeExamples && stack.codeExamples.length > 0 && (
            <div className="block-card-apple" style={{ margin: 0 }}>
              <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Code size={20} style={{ color: 'var(--color-corona-blue)' }} />
                <span>Production Code Examples</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
                {stack.codeExamples.map((ex, idx) => (
                  <CodeBlock key={idx} title={ex.title} code={ex.code} />
                ))}
              </div>
            </div>
          )}

          {/* 6. Getting Started & Quickstart */}
          {stack.quickstart && (
            <div className="block-card-apple" style={{ margin: 0 }}>
              <h3 className="block-title-apple" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={20} style={{ color: 'var(--color-corona-gold)' }} />
                <span>Quickstart & Setup Commands</span>
              </h3>
              <div style={{ marginTop: '14px' }}>
                <CodeBlock title="Terminal Quickstart" code={stack.quickstart} />
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
