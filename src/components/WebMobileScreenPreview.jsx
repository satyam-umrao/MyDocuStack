import React, { useState, useEffect, useRef } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Sun, 
  Moon, 
  RotateCcw, 
  Wifi, 
  Battery, 
  Signal, 
  ExternalLink,
  Sliders,
  Check,
  Play,
  Pause,
  Send,
  Sparkles,
  Layers,
  Database,
  Code,
  FileText,
  CheckSquare,
  Volume2,
  Maximize2,
  Trash2,
  RefreshCw,
  Search,
  Menu,
  X,
  AlertCircle
} from 'lucide-react';

export default function WebMobileScreenPreview({ item, stack }) {
  // Device mode: 'desktop' (Web Browser) or 'mobile' (Phone Screen)
  const [deviceMode, setDeviceMode] = useState('desktop');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Interactive UI states for live sandbox testing
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Production');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flexDir, setFlexDir] = useState('row');
  const [justify, setJustify] = useState('space-between');
  const [align, setAlign] = useState('center');
  const [gridCols, setGridCols] = useState(3);
  const [borderRadiusVal, setBorderRadiusVal] = useState(12);
  const [shadowVal, setShadowVal] = useState(16);
  const [opacityVal, setOpacityVal] = useState(100);
  const [transformRotate, setTransformRotate] = useState(0);
  const [transformScale, setTransformScale] = useState(100);
  const [toastMessage, setToastMessage] = useState('');

  // Media & Animation States
  const [isPlaying, setIsPlaying] = useState(false);
  const [mediaProgress, setMediaProgress] = useState(35);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Storage / Fetch States
  const [storageItems, setStorageItems] = useState([
    { key: 'theme', value: 'corona-dark' },
    { key: 'authToken', value: 'jwt_sec_8921x' },
    { key: 'locale', value: 'en-US' }
  ]);
  const [storageKeyInput, setStorageKeyInput] = useState('');
  const [storageValInput, setStorageValInput] = useState('');

  const [fetchMethod, setFetchMethod] = useState('GET');
  const [fetchStatus, setFetchStatus] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(false);

  // Timer / Stopwatch state
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Tasks state
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Configure semantic HTML landmarks', done: true },
    { id: 2, text: 'Verify WCAG AAA color contrast', done: true },
    { id: 3, text: 'Implement responsive CSS Grid matrix', done: false }
  ]);

  // Canvas ref
  const canvasRef = useRef(null);

  const isDesktop = deviceMode === 'desktop';
  const itemName = (item?.name || '').toLowerCase();
  const itemId = (item?.id || '').toLowerCase();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  const handleReset = () => {
    setClickCount(0);
    setInputValue('');
    setDropdownValue('Production');
    setIsModalOpen(false);
    setFlexDir('row');
    setJustify('space-between');
    setAlign('center');
    setGridCols(3);
    setBorderRadiusVal(12);
    setShadowVal(16);
    setOpacityVal(100);
    setTransformRotate(0);
    setTransformScale(100);
    setIsPlaying(false);
    setMediaProgress(35);
    setIsTimerRunning(false);
    setTimerSeconds(0);
    setToastMessage('Sandbox reset to defaults');
    setTimeout(() => setToastMessage(''), 2000);
  };

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Canvas particle trail effect
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const colors = ['#00d25b', '#0090e7', '#8f5fe8', '#fc424a', '#ffab00'];
    for (let i = 0; i < 16; i++) {
      const radius = Math.random() * 6 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      ctx.beginPath();
      ctx.arc(x + (Math.random() - 0.5) * 40, y + (Math.random() - 0.5) * 40, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
    showToast('Particle emitted on canvas!');
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    showToast('Canvas cleared');
  };

  // Render tailored interactive element content based on item identity
  const renderInteractiveContent = () => {
    // 1. Navigation & Headers (<header>, <nav>)
    if (itemName.includes('header') || itemName.includes('nav')) {
      return (
        <div style={{ padding: '16px 12px' }}>
          <header 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 18px',
              backgroundColor: isDarkMode ? '#191c24' : '#ffffff',
              borderRadius: '8px',
              border: `1px solid ${isDarkMode ? '#2c2e33' : '#e5e7eb'}`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: stack?.accentColor || '#00d25b' }} />
              <strong style={{ fontSize: '14px', color: isDarkMode ? '#fff' : '#111' }}>DocuStack Portal</strong>
            </div>

            {isDesktop ? (
              <nav style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
                <a href="#overview" onClick={(e) => { e.preventDefault(); showToast('Navigated to: Overview'); }} style={{ color: stack?.accentColor || '#00d25b', textDecoration: 'none', fontWeight: '600' }}>Overview</a>
                <a href="#architecture" onClick={(e) => { e.preventDefault(); showToast('Navigated to: Architecture'); }} style={{ color: isDarkMode ? '#aaa' : '#555', textDecoration: 'none' }}>Architecture</a>
                <a href="#api" onClick={(e) => { e.preventDefault(); showToast('Navigated to: API Specs'); }} style={{ color: isDarkMode ? '#aaa' : '#555', textDecoration: 'none' }}>API</a>
                <a href="#status" onClick={(e) => { e.preventDefault(); showToast('Navigated to: Status'); }} style={{ color: isDarkMode ? '#aaa' : '#555', textDecoration: 'none' }}>Status</a>
              </nav>
            ) : (
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ background: 'none', border: 'none', color: isDarkMode ? '#fff' : '#000', cursor: 'pointer' }}
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            )}
          </header>

          {isMenuOpen && !isDesktop && (
            <nav style={{ marginTop: '8px', padding: '12px', background: isDarkMode ? '#191c24' : '#fff', borderRadius: '6px', border: '1px solid #333', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <a href="#overview" onClick={(e) => { e.preventDefault(); showToast('Navigated to: Overview'); }} style={{ color: stack?.accentColor || '#00d25b', textDecoration: 'none', fontWeight: 'bold' }}>Overview</a>
              <a href="#architecture" onClick={(e) => { e.preventDefault(); showToast('Navigated to: Architecture'); }} style={{ color: isDarkMode ? '#aaa' : '#555', textDecoration: 'none' }}>Architecture</a>
              <a href="#api" onClick={(e) => { e.preventDefault(); showToast('Navigated to: API Specs'); }} style={{ color: isDarkMode ? '#aaa' : '#555', textDecoration: 'none' }}>API</a>
            </nav>
          )}

          <div style={{ marginTop: '16px', padding: '16px', backgroundColor: isDarkMode ? '#13151b' : '#f9fafb', borderRadius: '8px', border: `1px dashed ${isDarkMode ? '#2c2e33' : '#e5e7eb'}` }}>
            <p style={{ margin: 0, fontSize: '13px', color: isDarkMode ? '#bbb' : '#444' }}>
              Semantic <code>&lt;{item?.name}&gt;</code> landmark verified by screen readers. Maintains ARIA document role.
            </p>
          </div>
        </div>
      );
    }

    // 2. Articles, Sections & Asides (<main>, <article>, <section>, <aside>, <footer>)
    if (itemName.includes('article') || itemName.includes('section') || itemName.includes('main') || itemName.includes('aside') || itemName.includes('footer')) {
      return (
        <div style={{ padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <article 
            style={{
              padding: '18px',
              backgroundColor: isDarkMode ? '#191c24' : '#ffffff',
              borderRadius: '8px',
              border: `1px solid ${isDarkMode ? '#2c2e33' : '#e5e7eb'}`,
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: stack?.accentColor || '#00d25b' }}>Engineering Documentation</span>
              <span style={{ fontSize: '11px', color: isDarkMode ? '#888' : '#777' }}>4 min read</span>
            </div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', color: isDarkMode ? '#fff' : '#111' }}>
              High-Throughput Modern Architecture Patterns
            </h4>
            <p style={{ margin: '0 0 14px 0', fontSize: '13px', color: isDarkMode ? '#bbb' : '#555', lineHeight: '1.6' }}>
              High-throughput asynchronous communication pipelines require strict fault-tolerance boundaries and zero-allocation routing algorithms.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: isDarkMode ? '#2c2e33' : '#e5e7eb', color: isDarkMode ? '#ddd' : '#333' }}>#architecture</span>
              <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: isDarkMode ? '#2c2e33' : '#e5e7eb', color: isDarkMode ? '#ddd' : '#333' }}>#performance</span>
            </div>
          </article>

          <aside 
            style={{
              padding: '12px 16px',
              backgroundColor: isDarkMode ? '#13151b' : '#f3f4f6',
              borderRadius: '6px',
              borderLeft: `4px solid ${stack?.accentColor || '#0090e7'}`,
              fontSize: '12.5px',
              color: isDarkMode ? '#aaa' : '#555'
            }}
          >
            <strong>Architectural Aside:</strong> Screen readers treat <code>&lt;aside&gt;</code> as complementary landmark content without disrupting the main narrative flow.
          </aside>
        </div>
      );
    }

    // 3. Tables (<table>, <thead>, <tbody>, <tr>, <th>, <td>)
    if (itemName.includes('table') || itemName.includes('tr') || itemName.includes('th') || itemName.includes('td') || itemName.includes('tbody') || itemName.includes('thead')) {
      return (
        <div style={{ padding: '16px 10px', overflowX: 'auto' }}>
          <table 
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '12.5px',
              textAlign: 'left',
              backgroundColor: isDarkMode ? '#191c24' : '#ffffff',
              borderRadius: '8px',
              overflow: 'hidden',
              border: `1px solid ${isDarkMode ? '#2c2e33' : '#e5e7eb'}`
            }}
          >
            <thead>
              <tr style={{ backgroundColor: isDarkMode ? '#13151b' : '#f3f4f6', borderBottom: `1px solid ${isDarkMode ? '#2c2e33' : '#e5e7eb'}` }}>
                <th style={{ padding: '10px 14px', color: isDarkMode ? '#fff' : '#111' }}>Service</th>
                <th style={{ padding: '10px 14px', color: isDarkMode ? '#fff' : '#111' }}>Region</th>
                <th style={{ padding: '10px 14px', color: isDarkMode ? '#fff' : '#111' }}>Latency</th>
                <th style={{ padding: '10px 14px', color: isDarkMode ? '#fff' : '#111' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Core Gateway', region: 'us-east-1', lat: '12ms', status: 'Healthy' },
                { name: 'Auth Cluster', region: 'eu-west-1', lat: '18ms', status: 'Healthy' },
                { name: 'Analytics API', region: 'ap-south-1', lat: '24ms', status: 'Optimal' }
              ].map((row, idx) => (
                <tr 
                  key={idx}
                  onClick={() => showToast(`Selected row: ${row.name}`)}
                  style={{
                    borderBottom: idx < 2 ? `1px solid ${isDarkMode ? '#252830' : '#f3f4f6'}` : 'none',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#232733' : '#f9fafb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: isDarkMode ? '#fff' : '#222' }}>{row.name}</td>
                  <td style={{ padding: '10px 14px', color: isDarkMode ? '#aaa' : '#666' }}>{row.region}</td>
                  <td style={{ padding: '10px 14px', fontFamily: 'monospace', color: stack?.accentColor || '#00d25b' }}>{row.lat}</td>
                  <td style={{ padding: '10px 14px' }}>
                    <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: 'rgba(0, 210, 91, 0.15)', color: '#00d25b', fontWeight: 'bold' }}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '10px', fontSize: '11px', color: isDarkMode ? '#777' : '#888', textAlign: 'center' }}>
            Click table row to inspect telemetry metrics
          </div>
        </div>
      );
    }

    // 4. Lists (<ul>, <ol>, <li>)
    if (itemName.includes('ul') || itemName.includes('ol') || itemName.includes('li') || itemName.includes('list')) {
      return (
        <div style={{ padding: '16px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h4 style={{ margin: 0, fontSize: '14px', color: isDarkMode ? '#fff' : '#111' }}>Production Launch Checklist</h4>
            <span style={{ fontSize: '11px', color: '#00d25b', fontWeight: 'bold' }}>
              {tasks.filter(t => t.done).length}/{tasks.length} Completed
            </span>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tasks.map((t) => (
              <li 
                key={t.id}
                onClick={() => {
                  setTasks(prev => prev.map(item => item.id === t.id ? { ...item, done: !item.done } : item));
                  showToast(`Toggled: ${t.text}`);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  backgroundColor: isDarkMode ? '#191c24' : '#ffffff',
                  borderRadius: '6px',
                  border: `1px solid ${isDarkMode ? '#2c2e33' : '#e5e7eb'}`,
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: isDarkMode ? '#fff' : '#111',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: t.done ? (stack?.accentColor || '#00d25b') : 'transparent',
                  border: `2px solid ${t.done ? (stack?.accentColor || '#00d25b') : '#666'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000'
                }}>
                  {t.done && <Check size={12} strokeWidth={3} />}
                </div>
                <span style={{ textDecoration: t.done ? 'line-through' : 'none', opacity: t.done ? 0.6 : 1 }}>
                  {t.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // 5. Media Players (<video>, <audio>)
    if (itemName.includes('video') || itemName.includes('audio')) {
      return (
        <div style={{ padding: '16px 12px' }}>
          <div 
            style={{
              backgroundColor: '#0a0c10',
              borderRadius: '8px',
              padding: '24px 16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100px', backgroundColor: '#13151b', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              {/* Waveform Visualization Bars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '60px' }}>
                {[30, 55, 80, 40, 95, 60, 45, 85, 30, 70, 90, 40, 65, 80, 50, 90, 75, 40, 60, 35].map((height, i) => (
                  <div 
                    key={i} 
                    style={{
                      width: '4px',
                      height: isPlaying ? `${height}%` : '20%',
                      backgroundColor: i < (mediaProgress / 5) ? (stack?.accentColor || '#00d25b') : '#333',
                      borderRadius: '2px',
                      transition: 'height 0.2s ease, background 0.2s'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Media Player Controls */}
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <button
                onClick={() => {
                  setIsPlaying(!isPlaying);
                  showToast(isPlaying ? 'Playback paused' : 'Playback started');
                }}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: stack?.accentColor || '#00d25b',
                  color: '#000',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
              </button>

              <input 
                type="range" 
                min="0" 
                max="100" 
                value={mediaProgress}
                onChange={(e) => setMediaProgress(Number(e.target.value))}
                style={{ flex: 1, cursor: 'pointer' }}
              />

              <span style={{ fontSize: '11px', fontFamily: 'monospace', color: isDarkMode ? '#aaa' : '#666' }}>
                {Math.floor(mediaProgress * 0.02)}:{(Math.floor(mediaProgress * 1.4) % 60).toString().padStart(2, '0')} / 02:20
              </span>
            </div>
          </div>
        </div>
      );
    }

    // 6. Canvas & Visual Graphics (<canvas>)
    if (itemName.includes('canvas')) {
      return (
        <div style={{ padding: '16px 12px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '12px', color: isDarkMode ? '#aaa' : '#666' }}>Interactive 2D Rendering Surface:</span>
            <button
              onClick={clearCanvas}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', padding: '4px 10px', borderRadius: '4px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}
            >
              <Trash2 size={12} /> Clear
            </button>
          </div>

          <canvas 
            ref={canvasRef}
            width={isDesktop ? 480 : 300}
            height={160}
            onClick={handleCanvasClick}
            style={{
              backgroundColor: '#0a0c10',
              borderRadius: '8px',
              border: `1px solid ${stack?.accentColor || '#00d25b'}`,
              cursor: 'crosshair',
              display: 'block',
              margin: '0 auto',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
            }}
          />
          <div style={{ marginTop: '10px', fontSize: '11px', color: isDarkMode ? '#777' : '#888' }}>
            Click anywhere on the canvas to render real-time vector particles
          </div>
        </div>
      );
    }

    // 7. Buttons & Clickable Elements
    if (itemName.includes('button') || itemName.includes('action') || itemName.includes('click')) {
      return (
        <div style={{ textAlign: 'center', padding: '24px 12px' }}>
          <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#666', marginBottom: '16px' }}>
            Click button below to test interactive event handling:
          </p>
          <button
            onClick={() => {
              setClickCount(prev => prev + 1);
              showToast(`Button clicked! Count: ${clickCount + 1}`);
            }}
            style={{
              backgroundColor: stack?.accentColor || 'var(--color-corona-green)',
              color: '#000000',
              border: 'none',
              padding: isDesktop ? '10px 24px' : '12px 20px',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              transition: 'transform 0.1s ease',
              width: isDesktop ? 'auto' : '100%',
              maxWidth: '280px'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {clickCount === 0 ? 'Click Me' : `Clicked ${clickCount} time${clickCount > 1 ? 's' : ''}`}
          </button>
          
          <div style={{ marginTop: '16px', fontSize: '12px', color: isDarkMode ? '#00d25b' : '#008a3c', fontWeight: '600' }}>
            {clickCount > 0 ? `✓ Event listener dispatched: ${clickCount} interaction(s)` : 'Awaiting click event...'}
          </div>
        </div>
      );
    }

    // 8. Input Fields & Textareas & Forms
    if (itemName.includes('input') || itemName.includes('form') || itemName.includes('textarea')) {
      return (
        <div style={{ padding: '20px 14px', maxWidth: '400px', margin: '0 auto' }}>
          <form 
            onSubmit={(e) => { 
              e.preventDefault(); 
              if (inputValue.trim()) {
                showToast(`Form submitted with payload: "${inputValue}"`);
              }
            }}
          >
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: isDarkMode ? '#ccc' : '#333' }}>
              Interactive Input ({item?.name})
            </label>
            <input
              type="text"
              placeholder="Type message here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '6px',
                backgroundColor: isDarkMode ? '#13151b' : '#ffffff',
                border: `1px solid ${isDarkMode ? '#333' : '#ccc'}`,
                color: isDarkMode ? '#ffffff' : '#000000',
                fontSize: '13.5px',
                outline: 'none',
                boxSizing: 'border-box',
                marginBottom: '10px'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', fontSize: '11px', color: isDarkMode ? '#777' : '#888' }}>
              <span>Chars: {inputValue.length}</span>
              <span style={{ color: inputValue.length >= 3 ? '#00d25b' : '#ffab00' }}>
                {inputValue.length >= 3 ? 'Valid input ✓' : 'Min 3 chars required'}
              </span>
            </div>

            <button
              type="submit"
              disabled={inputValue.length < 3}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: inputValue.length >= 3 ? (stack?.accentColor || 'var(--color-corona-green)') : '#333',
                color: inputValue.length >= 3 ? '#000' : '#888',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '13px',
                cursor: inputValue.length >= 3 ? 'pointer' : 'not-allowed'
              }}
            >
              Submit Form
            </button>
          </form>
        </div>
      );
    }

    // 9. Dialogs & Modals (<dialog>)
    if (itemName.includes('dialog') || itemName.includes('modal') || itemName.includes('portal')) {
      return (
        <div style={{ textAlign: 'center', padding: '28px 14px', position: 'relative' }}>
          <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#666', marginBottom: '14px' }}>
            Native modal dialog with focus trapping and backdrop:
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              backgroundColor: stack?.accentColor || 'var(--color-corona-purple)',
              color: '#ffffff',
              border: 'none',
              padding: '10px 22px',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '13.5px',
              cursor: 'pointer'
            }}
          >
            Launch Modal Dialog
          </button>

          {/* Modal Backdrop & Body */}
          {isModalOpen && (
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                backdropFilter: 'blur(4px)',
                borderRadius: '6px',
                padding: '16px'
              }}
              onClick={() => setIsModalOpen(false)}
            >
              <div 
                style={{
                  backgroundColor: isDarkMode ? '#191c24' : '#ffffff',
                  border: '1px solid var(--color-corona-border)',
                  borderRadius: '8px',
                  padding: '18px 22px',
                  maxWidth: '280px',
                  textAlign: 'left',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h4 style={{ margin: '0 0 8px 0', fontSize: '15px' }}>Native Dialog Window</h4>
                <p style={{ margin: '0 0 16px 0', fontSize: '12.5px', color: isDarkMode ? '#aaa' : '#666' }}>
                  Native accessibility focus trap active. Click Dismiss or outside backdrop.
                </p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      showToast('Dialog dismissed');
                    }}
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid #555',
                      color: isDarkMode ? '#fff' : '#333',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    Dismiss
                  </button>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      showToast('Confirmed action ✓');
                    }}
                    style={{
                      backgroundColor: stack?.accentColor || 'var(--color-corona-green)',
                      border: 'none',
                      color: '#000',
                      fontWeight: 'bold',
                      padding: '6px 14px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    // 10. CSS Grid (grid, grid-template-columns, grid-template-rows, gap)
    if (itemName.includes('grid') || itemName.includes('column') || itemName.includes('row')) {
      return (
        <div style={{ padding: '16px 12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '12px', color: isDarkMode ? '#aaa' : '#666', fontWeight: 'bold' }}>Columns:</span>
            {[1, 2, 3, 4].map((num) => (
              <button 
                key={num}
                onClick={() => setGridCols(num)}
                style={{
                  fontSize: '11px',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  border: 'none',
                  background: gridCols === num ? (stack?.accentColor || '#00d25b') : '#333',
                  color: gridCols === num ? '#000' : '#fff',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {num} Col{num > 1 ? 's' : ''}
              </button>
            ))}
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
              gap: '10px',
              padding: '14px',
              backgroundColor: isDarkMode ? '#13151b' : '#f0f2f5',
              borderRadius: '8px',
              border: `1px dashed ${isDarkMode ? '#333' : '#ccc'}`,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta'].slice(0, gridCols * 2).map((label, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: ['#00d25b', '#0090e7', '#8f5fe8', '#ffab00', '#fc424a', '#00bcd4'][idx % 6],
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  padding: '16px 10px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
              >
                {label} ({idx + 1})
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 11. CSS Flexbox (flex, flex-direction, justify-content, align-items, flex-wrap)
    if (itemName.includes('flex') || itemName.includes('gap') || itemName.includes('justify') || itemName.includes('align')) {
      return (
        <div style={{ padding: '16px 12px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: isDarkMode ? '#aaa' : '#666', fontWeight: 'bold' }}>Direction:</span>
            <button 
              onClick={() => setFlexDir('row')} 
              style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', border: 'none', background: flexDir === 'row' ? (stack?.accentColor || '#00d25b') : '#333', color: flexDir === 'row' ? '#000' : '#fff', cursor: 'pointer' }}
            >
              row
            </button>
            <button 
              onClick={() => setFlexDir('column')} 
              style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', border: 'none', background: flexDir === 'column' ? (stack?.accentColor || '#00d25b') : '#333', color: flexDir === 'column' ? '#000' : '#fff', cursor: 'pointer' }}
            >
              column
            </button>

            <span style={{ fontSize: '11px', color: isDarkMode ? '#aaa' : '#666', fontWeight: 'bold', marginLeft: '6px' }}>Justify:</span>
            <button 
              onClick={() => setJustify('space-between')} 
              style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', border: 'none', background: justify === 'space-between' ? (stack?.accentColor || '#00d25b') : '#333', color: justify === 'space-between' ? '#000' : '#fff', cursor: 'pointer' }}
            >
              between
            </button>
            <button 
              onClick={() => setJustify('center')} 
              style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', border: 'none', background: justify === 'center' ? (stack?.accentColor || '#00d25b') : '#333', color: justify === 'center' ? '#000' : '#fff', cursor: 'pointer' }}
            >
              center
            </button>
          </div>

          <div 
            style={{
              display: 'flex',
              flexDirection: flexDir,
              justifyContent: justify,
              alignItems: align,
              gap: '10px',
              padding: '16px',
              backgroundColor: isDarkMode ? '#13151b' : '#f0f2f5',
              borderRadius: '8px',
              border: `1px dashed ${isDarkMode ? '#333' : '#ccc'}`,
              minHeight: '140px',
              transition: 'all 0.25s ease'
            }}
          >
            <div style={{ background: '#00d25b', color: '#000', padding: '12px 18px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>
              Flex 1
            </div>
            <div style={{ background: '#8f5fe8', color: '#fff', padding: '12px 18px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>
              Flex 2
            </div>
            <div style={{ background: '#0090e7', color: '#fff', padding: '12px 18px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>
              Flex 3
            </div>
          </div>
        </div>
      );
    }

    // 12. CSS Transforms, Transitions & Animations
    if (itemName.includes('transform') || itemName.includes('transition') || itemName.includes('animation') || itemName.includes('keyframes')) {
      return (
        <div style={{ padding: '20px 14px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <label style={{ fontSize: '11px', color: isDarkMode ? '#aaa' : '#666' }}>
              Rotate: {transformRotate}°
              <input 
                type="range" 
                min="-45" 
                max="45" 
                value={transformRotate} 
                onChange={(e) => setTransformRotate(Number(e.target.value))} 
                style={{ display: 'block', width: '120px' }}
              />
            </label>
            <label style={{ fontSize: '11px', color: isDarkMode ? '#aaa' : '#666' }}>
              Scale: {transformScale}%
              <input 
                type="range" 
                min="80" 
                max="125" 
                value={transformScale} 
                onChange={(e) => setTransformScale(Number(e.target.value))} 
                style={{ display: 'block', width: '120px' }}
              />
            </label>
          </div>

          <div 
            style={{
              width: '140px',
              height: '100px',
              margin: '0 auto',
              backgroundColor: stack?.accentColor || '#00d25b',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '13px',
              transform: `rotate(${transformRotate}deg) scale(${transformScale / 100})`,
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
              cursor: 'pointer'
            }}
            onClick={() => {
              setTransformRotate(prev => prev === 0 ? 15 : 0);
              showToast('Transform toggled');
            }}
          >
            GPU Matrix Card
          </div>
          <div style={{ marginTop: '16px', fontSize: '11px', color: isDarkMode ? '#777' : '#888' }}>
            Uses hardware-accelerated CSS compositor layers (60 FPS)
          </div>
        </div>
      );
    }

    // 13. CSS Styling (border, radius, shadow, color, opacity, z-index)
    if (itemName.includes('border') || itemName.includes('radius') || itemName.includes('shadow') || itemName.includes('color') || itemName.includes('opacity') || itemName.includes('z-index') || itemName.includes('overflow')) {
      return (
        <div style={{ padding: '20px 14px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '18px', flexWrap: 'wrap' }}>
            <label style={{ fontSize: '11px', color: isDarkMode ? '#aaa' : '#666' }}>
              Radius: {borderRadiusVal}px
              <input 
                type="range" 
                min="0" 
                max="36" 
                value={borderRadiusVal} 
                onChange={(e) => setBorderRadiusVal(Number(e.target.value))} 
                style={{ display: 'block', width: '110px' }}
              />
            </label>
            <label style={{ fontSize: '11px', color: isDarkMode ? '#aaa' : '#666' }}>
              Opacity: {opacityVal}%
              <input 
                type="range" 
                min="20" 
                max="100" 
                value={opacityVal} 
                onChange={(e) => setOpacityVal(Number(e.target.value))} 
                style={{ display: 'block', width: '110px' }}
              />
            </label>
          </div>

          <div 
            style={{
              width: '180px',
              height: '90px',
              margin: '0 auto',
              backgroundColor: stack?.accentColor || '#00d25b',
              borderRadius: `${borderRadiusVal}px`,
              opacity: opacityVal / 100,
              boxShadow: `0 ${shadowVal}px 32px rgba(0,0,0,0.5)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '13px',
              transition: 'all 0.15s ease'
            }}
          >
            {borderRadiusVal}px Radius
          </div>
        </div>
      );
    }

    // 14. Web Storage (localStorage, sessionStorage)
    if (itemName.includes('localstorage') || itemName.includes('sessionstorage') || itemName.includes('storage')) {
      return (
        <div style={{ padding: '16px 12px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <input 
              type="text" 
              placeholder="Key" 
              value={storageKeyInput}
              onChange={(e) => setStorageKeyInput(e.target.value)}
              style={{ flex: 1, padding: '6px 10px', borderRadius: '4px', border: '1px solid #444', background: isDarkMode ? '#13151b' : '#fff', color: isDarkMode ? '#fff' : '#000', fontSize: '12px' }}
            />
            <input 
              type="text" 
              placeholder="Value" 
              value={storageValInput}
              onChange={(e) => setStorageValInput(e.target.value)}
              style={{ flex: 1, padding: '6px 10px', borderRadius: '4px', border: '1px solid #444', background: isDarkMode ? '#13151b' : '#fff', color: isDarkMode ? '#fff' : '#000', fontSize: '12px' }}
            />
            <button
              onClick={() => {
                if (storageKeyInput.trim()) {
                  setStorageItems(prev => [...prev.filter(i => i.key !== storageKeyInput), { key: storageKeyInput, value: storageValInput }]);
                  setStorageKeyInput('');
                  setStorageValInput('');
                  showToast('Storage entry committed');
                }
              }}
              style={{ padding: '6px 12px', background: stack?.accentColor || '#00d25b', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}
            >
              SetItem
            </button>
          </div>

          <div style={{ backgroundColor: isDarkMode ? '#191c24' : '#f9fafb', borderRadius: '6px', border: '1px solid #333', overflow: 'hidden' }}>
            <div style={{ padding: '8px 12px', background: isDarkMode ? '#13151b' : '#eee', fontSize: '11px', fontWeight: 'bold', color: isDarkMode ? '#aaa' : '#555', display: 'flex', justifyContent: 'space-between' }}>
              <span>Stored Key</span>
              <span>Stored Value</span>
            </div>
            {storageItems.map((st, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '12px' }}>
                <span style={{ fontFamily: 'monospace', color: stack?.accentColor || '#00d25b' }}>{st.key}</span>
                <span style={{ fontFamily: 'monospace', color: isDarkMode ? '#ddd' : '#333' }}>"{st.value}"</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 15. Fetch & Network Requests (fetch, Promise)
    if (itemName.includes('fetch') || itemName.includes('promise')) {
      return (
        <div style={{ padding: '16px 12px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <select 
              value={fetchMethod}
              onChange={(e) => setFetchMethod(e.target.value)}
              style={{ padding: '6px', borderRadius: '4px', background: '#333', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 'bold' }}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
            </select>
            <input 
              type="text" 
              readOnly 
              value="https://api.mydocustack.dev/v1/telemetry"
              style={{ flex: 1, padding: '6px 10px', borderRadius: '4px', border: '1px solid #444', background: isDarkMode ? '#13151b' : '#fff', color: isDarkMode ? '#aaa' : '#555', fontSize: '12px', fontFamily: 'monospace' }}
            />
            <button
              onClick={() => {
                setFetchLoading(true);
                setTimeout(() => {
                  setFetchLoading(false);
                  setFetchStatus({ code: 200, statusText: 'OK', latency: '16.4ms', payload: { ok: true, version: '2.4.0', status: 'ACTIVE' } });
                  showToast('HTTP 200 Response Received');
                }, 400);
              }}
              disabled={fetchLoading}
              style={{ padding: '6px 14px', background: stack?.accentColor || '#00d25b', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '4px', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              {fetchLoading ? <RefreshCw size={12} className="spin-animate" /> : <Send size={12} />}
              <span>Send</span>
            </button>
          </div>

          <div style={{ backgroundColor: '#0a0c10', borderRadius: '6px', padding: '12px', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: '12px' }}>
            {fetchStatus ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#00d25b' }}>
                  <span>Status: {fetchStatus.code} {fetchStatus.statusText}</span>
                  <span>Latency: {fetchStatus.latency}</span>
                </div>
                <pre style={{ margin: 0, color: '#aaa', fontSize: '11px' }}>
                  {JSON.stringify(fetchStatus.payload, null, 2)}
                </pre>
              </div>
            ) : (
              <span style={{ color: '#666' }}>Click "Send" to trigger asynchronous fetch() request...</span>
            )}
          </div>
        </div>
      );
    }

    // 16. Timers & Intervals (setTimeout, setInterval)
    if (itemName.includes('timeout') || itemName.includes('interval') || itemName.includes('timer')) {
      return (
        <div style={{ padding: '24px 14px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: isDarkMode ? '#888' : '#666', marginBottom: '8px' }}>
            High-Precision Event Loop Timer:
          </div>
          <div style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'monospace', color: stack?.accentColor || '#00d25b', marginBottom: '16px' }}>
            {Math.floor(timerSeconds / 60).toString().padStart(2, '0')}:{(timerSeconds % 60).toString().padStart(2, '0')}
          </div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              style={{ padding: '8px 18px', borderRadius: '4px', border: 'none', background: isTimerRunning ? '#ef4444' : (stack?.accentColor || '#00d25b'), color: isTimerRunning ? '#fff' : '#000', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}
            >
              {isTimerRunning ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={() => { setIsTimerRunning(false); setTimerSeconds(0); showToast('Timer reset'); }}
              style={{ padding: '8px 14px', borderRadius: '4px', border: 'none', background: '#333', color: '#fff', fontSize: '12px', cursor: 'pointer' }}
            >
              Reset
            </button>
          </div>
        </div>
      );
    }

    // 17. Universal Interactive Component Sandbox (Clean fallback for any remaining item)
    return (
      <div style={{ padding: '16px 12px' }}>
        <div 
          style={{
            backgroundColor: isDarkMode ? '#191c24' : '#ffffff',
            borderRadius: '8px',
            padding: '16px',
            border: `1px solid ${isDarkMode ? '#2c2e33' : '#e5e7eb'}`,
            boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: stack?.accentColor || '#00d25b' }} />
              <strong style={{ fontSize: '13.5px', color: isDarkMode ? '#fff' : '#111' }}>{item?.name} Component Sandbox</strong>
            </div>
            <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: 'rgba(0, 210, 91, 0.15)', color: '#00d25b', fontWeight: 'bold' }}>
              Verified Specification
            </span>
          </div>

          <div style={{ fontSize: '12.5px', color: isDarkMode ? '#bbb' : '#555', marginBottom: '14px', lineHeight: '1.5' }}>
            {item?.tagline || `Live production environment sandbox for ${item?.name}.`}
          </div>

          <div style={{ backgroundColor: '#0a0c10', padding: '10px 14px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: '12px', color: '#00d25b' }}>
            <code>{item?.syntax || `// ${stack?.name}: ${item?.name}`}</code>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginTop: '6px' }}>
      
      {/* Top Device Mode Toolbar */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '12px'
        }}
      >
        {/* Device Switcher (Desktop Web vs Mobile Phone) */}
        <div 
          style={{
            display: 'inline-flex',
            backgroundColor: '#13151b',
            border: '1px solid var(--color-corona-border)',
            borderRadius: '8px',
            padding: '3px'
          }}
        >
          <button
            type="button"
            onClick={() => setDeviceMode('desktop')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: isDesktop ? (stack?.accentColor || 'var(--color-corona-green)') : 'transparent',
              color: isDesktop ? '#000000' : '#888888',
              fontWeight: '700',
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Monitor size={14} />
            <span>Desktop Web Browser</span>
          </button>

          <button
            type="button"
            onClick={() => setDeviceMode('mobile')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: !isDesktop ? (stack?.accentColor || 'var(--color-corona-green)') : 'transparent',
              color: !isDesktop ? '#000000' : '#888888',
              fontWeight: '700',
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Smartphone size={14} />
            <span>Mobile Screen</span>
          </button>
        </div>

        {/* Toolbar Utility Actions (Theme & Reset) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '6px',
              backgroundColor: '#191c24',
              border: '1px solid var(--color-corona-border)',
              color: isDarkMode ? '#ffab00' : '#ffffff',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Toggle Light / Dark Preview Canvas"
          >
            {isDarkMode ? <Sun size={13} /> : <Moon size={13} />}
            <span>{isDarkMode ? 'Light Canvas' : 'Dark Canvas'}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '6px',
              backgroundColor: '#191c24',
              border: '1px solid var(--color-corona-border)',
              color: 'var(--color-corona-muted)',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Reset Simulator Values"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Preview Frame Container */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isDesktop ? '14px' : '20px 10px',
          backgroundColor: '#0a0c10',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.5)',
          overflow: 'hidden'
        }}
      >
        {/* DESKTOP WEB BROWSER FRAME */}
        {isDesktop ? (
          <div 
            style={{
              width: '100%',
              maxWidth: '820px',
              backgroundColor: isDarkMode ? '#13151b' : '#ffffff',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.7)',
              border: `1px solid ${isDarkMode ? '#232733' : '#dcdfe6'}`,
              transition: 'all 0.3s ease'
            }}
          >
            {/* Browser Window Chrome / Titlebar */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 16px',
                backgroundColor: isDarkMode ? '#191c24' : '#f0f2f5',
                borderBottom: `1px solid ${isDarkMode ? '#232733' : '#e4e7ed'}`
              }}
            >
              {/* Traffic Light Window Buttons */}
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block' }} />
              </div>

              {/* Simulated Browser URL Address Bar */}
              <div 
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: isDarkMode ? '#13151b' : '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  border: `1px solid ${isDarkMode ? '#282b35' : '#dcdfe6'}`,
                  fontSize: '11.5px',
                  fontFamily: 'var(--font-mono)',
                  color: isDarkMode ? '#888888' : '#555555'
                }}
              >
                <span style={{ color: stack?.accentColor || 'var(--color-corona-green)', fontWeight: 'bold' }}>https://</span>
                <span style={{ color: isDarkMode ? '#ffffff' : '#111111' }}>mydocustack.dev/{stack?.id}/{item?.id}</span>
              </div>

              <span style={{ fontSize: '11px', color: isDarkMode ? '#6c7293' : '#999', fontWeight: 'bold' }}>
                Desktop Web
              </span>
            </div>

            {/* Browser Viewport Content Canvas */}
            <div 
              style={{
                minHeight: '260px',
                position: 'relative',
                backgroundColor: isDarkMode ? '#13151b' : '#f9fafb',
                color: isDarkMode ? '#ffffff' : '#000000'
              }}
            >
              {renderInteractiveContent()}
            </div>
          </div>
        ) : (
          /* MOBILE PHONE SCREEN FRAME */
          <div 
            style={{
              width: '320px',
              backgroundColor: isDarkMode ? '#13151b' : '#ffffff',
              borderRadius: '36px',
              border: '10px solid #1f232e',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255,255,255,0.08)',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}
          >
            {/* Mobile Top Status Bar & Camera Island Notch */}
            <div 
              style={{
                backgroundColor: isDarkMode ? '#13151b' : '#ffffff',
                padding: '8px 16px 4px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11px',
                fontWeight: 'bold',
                color: isDarkMode ? '#ffffff' : '#000000'
              }}
            >
              <span>9:41</span>
              <div 
                style={{
                  width: '74px',
                  height: '16px',
                  backgroundColor: '#000000',
                  borderRadius: '10px'
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Signal size={10} />
                <Wifi size={10} />
                <Battery size={11} />
              </div>
            </div>

            {/* Mobile App Header Bar */}
            <div 
              style={{
                padding: '10px 14px',
                borderBottom: `1px solid ${isDarkMode ? '#232733' : '#e4e7ed'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: isDarkMode ? '#191c24' : '#f8f9fa'
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: '700', color: isDarkMode ? '#ffffff' : '#000000' }}>
                {stack?.name} Mobile
              </span>
              <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '4px', backgroundColor: stack?.accentColor || 'var(--color-corona-green)', color: '#000', fontWeight: '700' }}>
                LIVE
              </span>
            </div>

            {/* Mobile Screen Viewport Content */}
            <div 
              style={{
                minHeight: '340px',
                maxHeight: '460px',
                overflowY: 'auto',
                position: 'relative',
                backgroundColor: isDarkMode ? '#13151b' : '#ffffff',
                color: isDarkMode ? '#ffffff' : '#000000'
              }}
            >
              {renderInteractiveContent()}
            </div>

            {/* Mobile Bottom Home Indicator Bar */}
            <div 
              style={{
                padding: '8px 0 6px 0',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: isDarkMode ? '#13151b' : '#ffffff'
              }}
            >
              <div 
                style={{
                  width: '100px',
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: isDarkMode ? '#555555' : '#cccccc'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div 
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#191c24',
            color: '#ffffff',
            padding: '10px 18px',
            borderRadius: '8px',
            border: `1px solid ${stack?.accentColor || 'var(--color-corona-green)'}`,
            boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
            fontSize: '12.5px',
            fontWeight: '600',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: stack?.accentColor || '#00d25b' }} />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
