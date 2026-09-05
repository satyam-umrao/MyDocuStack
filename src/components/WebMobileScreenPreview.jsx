import React, { useState, useMemo } from 'react';
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
  Play
} from 'lucide-react';

export default function WebMobileScreenPreview({ item, stack }) {
  // Device mode: 'desktop' (Web Browser) or 'mobile' (Phone Screen)
  const [deviceMode, setDeviceMode] = useState('desktop');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Interactive mini-states for live demo testing
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Production');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flexDir, setFlexDir] = useState('row');
  const [justify, setJustify] = useState('space-between');
  const [align, setAlign] = useState('center');
  const [borderRadiusVal, setBorderRadiusVal] = useState(12);
  const [toastMessage, setToastMessage] = useState('');

  const isDesktop = deviceMode === 'desktop';
  const itemName = item?.name || '';
  const itemId = item?.id || '';

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
    setBorderRadiusVal(12);
    setToastMessage('Simulator reset to defaults');
    setTimeout(() => setToastMessage(''), 2000);
  };

  // Render tailored interactive element content based on item identity
  const renderInteractiveContent = () => {
    // 1. Buttons & Clickable Elements
    if (itemName.includes('button') || itemName.includes('Action') || itemName.includes('Click')) {
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

    // 2. Input Fields & Textareas & Forms
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
              Interactive Input ({itemName})
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

    // 3. Dialogs & Modals
    if (itemName.includes('dialog') || itemName.includes('modal') || itemName.includes('Portal')) {
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
                backdropFilter: 'blur(3px)',
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

    // 4. Flexbox & Grid Layouts
    if (itemName.includes('flex') || itemName.includes('grid') || itemName.includes('gap') || itemName.includes('justify') || itemName.includes('align')) {
      return (
        <div style={{ padding: '16px 12px' }}>
          {/* Interactive Controls Toolbar */}
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

          {/* Rendered Flex/Grid Surface */}
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
              Box 1
            </div>
            <div style={{ background: '#8f5fe8', color: '#fff', padding: '12px 18px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>
              Box 2
            </div>
            <div style={{ background: '#0090e7', color: '#fff', padding: '12px 18px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>
              Box 3
            </div>
          </div>
        </div>
      );
    }

    // 5. Select & Dropdown Options
    if (itemName.includes('select') || itemName.includes('option')) {
      return (
        <div style={{ padding: '20px 14px', maxWidth: '360px', margin: '0 auto' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: isDarkMode ? '#ccc' : '#333' }}>
            Choose Target Environment ({itemName}):
          </label>
          <select
            value={dropdownValue}
            onChange={(e) => {
              setDropdownValue(e.target.value);
              showToast(`Selected option: ${e.target.value}`);
            }}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              backgroundColor: isDarkMode ? '#13151b' : '#ffffff',
              border: `1px solid ${stack?.accentColor || 'var(--color-corona-green)'}`,
              color: isDarkMode ? '#ffffff' : '#000000',
              fontSize: '13.5px',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="Production">Production Cluster (v2026.1 - Active)</option>
            <option value="Staging">Staging Verification Environment</option>
            <option value="Development">Local Development Node</option>
          </select>
          <div style={{ marginTop: '14px', fontSize: '12px', color: isDarkMode ? '#aaa' : '#666' }}>
            Active Choice: <strong style={{ color: stack?.accentColor || '#00d25b' }}>{dropdownValue}</strong>
          </div>
        </div>
      );
    }

    // 6. React / Next.js State Hooks (useState, useReducer, counter)
    if (itemName.includes('useState') || itemName.includes('useReducer') || itemName.includes('State')) {
      return (
        <div style={{ textAlign: 'center', padding: '24px 14px' }}>
          <div style={{ fontSize: '12px', color: isDarkMode ? '#888' : '#666', marginBottom: '8px' }}>
            React Fiber Local State Counter:
          </div>
          <div style={{ fontSize: '36px', fontWeight: '800', color: stack?.accentColor || '#00d25b', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
            {clickCount}
          </div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              onClick={() => setClickCount(prev => prev - 1)}
              style={{ backgroundColor: '#2a2d3a', color: '#fff', border: 'none', padding: '8px 18px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              - 1
            </button>
            <button
              onClick={() => setClickCount(0)}
              style={{ backgroundColor: '#2a2d3a', color: '#aaa', border: 'none', padding: '8px 14px', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}
            >
              Reset
            </button>
            <button
              onClick={() => setClickCount(prev => prev + 1)}
              style={{ backgroundColor: stack?.accentColor || '#00d25b', color: '#000', border: 'none', padding: '8px 18px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              + 1
            </button>
          </div>
        </div>
      );
    }

    // 7. Styling & Border Radius / Shadow / Colors
    if (itemName.includes('border') || itemName.includes('shadow') || itemName.includes('color') || itemName.includes('radius')) {
      return (
        <div style={{ padding: '20px 14px', textAlign: 'center' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span style={{ fontSize: '12px', color: isDarkMode ? '#aaa' : '#666' }}>Border Radius: {borderRadiusVal}px</span>
            <input 
              type="range" 
              min="0" 
              max="32" 
              value={borderRadiusVal} 
              onChange={(e) => setBorderRadiusVal(Number(e.target.value))}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div 
            style={{
              width: '180px',
              height: '90px',
              margin: '0 auto',
              backgroundColor: stack?.accentColor || '#00d25b',
              borderRadius: `${borderRadiusVal}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '13px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              transition: 'border-radius 0.1s ease'
            }}
          >
            {borderRadiusVal}px Radius
          </div>
        </div>
      );
    }

    // 8. General HTML/CSS/UI Preview fallback using item.demo.preview
    if (item.demo?.preview) {
      return (
        <div 
          style={{ padding: '16px' }}
          dangerouslySetInnerHTML={{ __html: item.demo.preview }}
        />
      );
    }

    return (
      <div style={{ padding: '24px', textAlign: 'center', color: isDarkMode ? '#aaa' : '#666', fontSize: '13px' }}>
        Interactive live preview initialized for <strong>{itemName}</strong>.
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

        {/* Viewport Specs & Theme Toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          
          {/* Dimensions Badge */}
          <span 
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-corona-muted)',
              backgroundColor: '#13151b',
              padding: '4px 10px',
              borderRadius: '4px',
              border: '1px solid rgba(255,255,255,0.06)'
            }}
          >
            {isDesktop ? '1024 × 580 px' : '375 × 667 px (iOS)'}
          </span>

          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              background: '#13151b',
              border: '1px solid var(--color-corona-border)',
              borderRadius: '6px',
              padding: '6px 10px',
              color: isDarkMode ? '#ffab00' : '#00d25b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px'
            }}
            title="Toggle Light / Dark Preview Canvas"
          >
            {isDarkMode ? <Sun size={13} /> : <Moon size={13} />}
            <span>{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>

          {/* Reset Demo Button */}
          <button
            type="button"
            onClick={handleReset}
            style={{
              background: '#13151b',
              border: '1px solid var(--color-corona-border)',
              borderRadius: '6px',
              padding: '6px 10px',
              color: 'var(--color-corona-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px'
            }}
            title="Reset Simulator"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>

        </div>
      </div>

      {/* Toast Notification Overlay */}
      {toastMessage && (
        <div 
          style={{
            backgroundColor: 'rgba(0, 210, 91, 0.95)',
            color: '#000000',
            fontWeight: '700',
            fontSize: '12px',
            padding: '6px 16px',
            borderRadius: '20px',
            marginBottom: '10px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          {toastMessage}
        </div>
      )}

      {/* ===================================================================== */}
      {/* 1. DESKTOP WEB BROWSER SCREEN FRAME                                    */}
      {/* ===================================================================== */}
      {isDesktop ? (
        <div 
          style={{
            backgroundColor: '#191c24',
            border: '1px solid var(--color-corona-border)',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)'
          }}
        >
          {/* Browser Chrome Bar */}
          <div 
            style={{
              backgroundColor: '#0f1117',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            {/* Traffic Light Dots */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block' }} />
            </div>

            {/* URL Omnibox Bar */}
            <div 
              style={{
                flex: 1,
                backgroundColor: '#191c24',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11.5px',
                color: 'var(--color-corona-muted)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span style={{ color: '#00d25b', fontSize: '12px' }}>🔒</span>
              <span style={{ color: '#ffffff' }}>https://mydocustack.dev/</span>
              <span style={{ color: stack?.accentColor || 'var(--color-corona-blue)' }}>{stack?.id}/</span>
              <span style={{ color: '#aaa' }}>{itemId}</span>
            </div>

            <div style={{ display: 'flex', gap: '8px', color: 'var(--color-corona-muted)' }}>
              <ExternalLink size={13} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          {/* Browser Viewport Content Area */}
          <div 
            style={{
              backgroundColor: isDarkMode ? '#0a0c10' : '#ffffff',
              color: isDarkMode ? '#ffffff' : '#111111',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
              overflow: 'hidden'
            }}
          >
            {renderInteractiveContent()}
          </div>
        </div>
      ) : (

        /* ===================================================================== */
        /* 2. MOBILE PHONE SCREEN FRAME                                          */
        /* ===================================================================== */
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
          <div 
            style={{
              width: '100%',
              maxWidth: '340px',
              backgroundColor: '#000000',
              border: '10px solid #232733',
              borderRadius: '38px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            {/* Top Speaker Notch / Dynamic Island */}
            <div 
              style={{
                height: '24px',
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '6px'
              }}
            >
              <div 
                style={{
                  width: '90px',
                  height: '14px',
                  backgroundColor: '#191c24',
                  borderRadius: '10px'
                }}
              />
            </div>

            {/* Mobile Status Bar */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '4px 18px',
                fontSize: '11px',
                fontWeight: '600',
                color: '#ffffff',
                backgroundColor: '#000000'
              }}
            >
              <span>9:41</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Signal size={12} />
                <Wifi size={12} />
                <Battery size={13} />
              </div>
            </div>

            {/* Mobile Viewport Body */}
            <div 
              style={{
                backgroundColor: isDarkMode ? '#0e1017' : '#f8f9fa',
                color: isDarkMode ? '#ffffff' : '#111111',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {renderInteractiveContent()}
            </div>

            {/* Bottom Home Indicator Bar */}
            <div 
              style={{
                height: '20px',
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div 
                style={{
                  width: '100px',
                  height: '4px',
                  backgroundColor: '#555555',
                  borderRadius: '2px'
                }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
