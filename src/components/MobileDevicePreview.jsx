import React, { useState } from 'react';
import { 
  Smartphone, 
  Moon, 
  Sun, 
  RefreshCw, 
  AlertCircle, 
  ChevronLeft, 
  ArrowLeft, 
  MoreVertical, 
  Wifi, 
  Battery, 
  Signal,
  ExternalLink,
  Share2
} from 'lucide-react';

export default function MobileDevicePreview({ component = { id: 'view', name: 'View' } }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [platform, setPlatform] = useState('ios'); // 'ios' | 'android'
  
  // Component Specific Interactive States
  const [inputValue, setInputValue] = useState('');
  const [switchValue, setSwitchValue] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [pressCount, setPressCount] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [alertText, setAlertText] = useState('');
  
  // Custom Demo Controls
  const [flexDirection, setFlexDirection] = useState('column'); // for View
  const [imageResizeMode, setImageResizeMode] = useState('cover'); // for Image
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false); // for Keyboard / KeyboardAvoidingView
  const [statusBarStyle, setStatusBarStyle] = useState('dark-content'); // for StatusBar
  const [showSafeAreaGuides, setShowSafeAreaGuides] = useState(true); // for SafeAreaView
  const [spinnerSize, setSpinnerSize] = useState('large'); // for ActivityIndicator
  const [spinnerColor, setSpinnerColor] = useState('#0066cc'); // for ActivityIndicator
  const [animOpacity, setAnimOpacity] = useState(1); // for Animated
  const [animScale, setAnimScale] = useState(1); // for Animated
  const [textNumLines, setTextNumLines] = useState(0); // for Text
  const [isLandscape, setIsLandscape] = useState(false); // for Dimensions

  const isIOS = platform === 'ios';
  const compId = component?.id || 'view';
  const compName = component?.name || 'View';

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1200);
  };

  const triggerAlert = (msg) => {
    setAlertText(msg || 'Action triggered');
    setTimeout(() => setAlertText(''), 3200);
  };

  // Helper button styles
  const getFilterChipStyle = (isActive) => ({
    padding: '5px 12px',
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '16px',
    border: '1px solid ' + (isActive ? '#0066cc' : isDarkMode ? '#444' : '#444'),
    backgroundColor: isActive ? '#0066cc' :'#2c2c2e',
    color: isActive ? '#ffffff' : isDarkMode ? '#ffffff' : '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
      {/* Inject Keyframe Animations for Spinners */}
      <style>{`
        @keyframes mobilePreviewSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spin-anim {
          animation: mobilePreviewSpin 0.8s linear infinite;
        }
      `}</style>
      
      {/* Platform Switcher & Theme Selector Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justify: 'space-between', 
        width: '100%',
        maxWidth: '380px',
        flexWrap: 'wrap', 
        gap: '12px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color:'#fff' , fontWeight: '600', fontSize: '15px' }}>
          <Smartphone size={18} style={{ color: '#0066cc' }} />
          <span>{isIOS ? 'iOS (iPhone)' : 'Android'} Preview</span>
        </div>

        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <button
            style={getFilterChipStyle(isIOS)}
            onClick={() => setPlatform('ios')}
          >
            iOS
          </button>
          <button
            style={getFilterChipStyle(!isIOS)}
            onClick={() => setPlatform('android')}
          >
            Android
          </button>
          <button
            style={getFilterChipStyle(false)}
            onClick={() => setIsDarkMode(!isDarkMode)}
            title="Toggle Device Theme"
          >
            {isDarkMode ? <Sun size={13} /> : <Moon size={13} />}
          </button>
        </div>
      </div>

      {/* Real Mobile Device Frame */}
      <div style={{ 
        width: '100%', 
        maxWidth: isLandscape ? '560px' : '360px', 
        height: isLandscape ? '360px' : '640px',
        borderRadius: isIOS ? '48px' : '28px',
        border: isIOS ? '12px solid #2c2c2e' : '10px solid #1a1a1a',
        backgroundColor: '#000000',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        fontFamily: isIOS ? '-apple-system, SF Pro Text, sans-serif' : 'Roboto, sans-serif'
      }}>
        
        {/* iOS Dynamic Island VS Android Camera Punch Hole */}
       

        {/* Device Screen Viewport */}
        <div style={{
          flex: 1,
          backgroundColor: isDarkMode 
            ? (isIOS ? '#000000' : '#121212') 
            : (isIOS ? '#f2f2f7' : '#f8f9fa'),
          color: isDarkMode ? '#ffffff' : '#000000',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative'
        }}>
          
          {/* Status Bar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: isIOS ? '10px 20px 8px' : '8px 14px 6px',
            fontSize: '12px',
            fontWeight: '600',
            flexShrink: 0,
            backgroundColor: isIOS 
              ? 'transparent' 
              : (isDarkMode ? '#1f1f1f' : '#1a73e8'),
            color: isIOS 
              ? (statusBarStyle === 'light-content' || isDarkMode ? '#ffffff' : '#000000') 
              : '#ffffff'
          }}>
            <span>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
              <Signal size={12} />
              <Wifi size={12} />
              <Battery size={13} />
            </div>
          </div>

          {/* iOS Navigation Header vs Android Material App Bar */}
          {isIOS ? (
            <div style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 16px 12px',
              borderBottom: isDarkMode ? '1px solid #1c1c1e' : '1px solid #e5e5ea',
              backgroundColor: isDarkMode ? 'rgba(28,28,30,0.85)' : 'rgba(249,249,249,0.85)',
              backdropFilter: 'blur(20px)',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', color: '#007aff', fontSize: '15px', cursor: 'pointer' }}>
                <ChevronLeft size={20} />
                <span>Back</span>
              </div>
              <span style={{ fontSize: '16px', fontWeight: '600' }}>{compName}</span>
              <span style={{ color: '#007aff', fontSize: '15px', fontWeight: '600' }}>Done</span>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              padding: '12px 16px',
              backgroundColor: isDarkMode ? '#1f1f1f' : '#1a73e8',
              color: '#ffffff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <ArrowLeft size={20} style={{ cursor: 'pointer' }} />
                <span style={{ fontSize: '18px', fontWeight: '500' }}>{compName}</span>
              </div>
              <MoreVertical size={18} style={{ cursor: 'pointer' }} />
            </div>
          )}

          {/* Toast / Alert Notification Popup */}
          {alertText && (
            <div style={{
              position: 'absolute',
              top: '60px',
              left: '14px',
              right: '14px',
              zIndex: 50,
              padding: '10px 14px',
              borderRadius: isIOS ? '14px' : '4px',
              backgroundColor: isIOS ? (isDarkMode ? '#1c1c1e' : '#ffffff') : '#323232',
              color: isIOS ? (isDarkMode ? '#ffffff' : '#000000') : '#ffffff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: isIOS && !isDarkMode ? '1px solid #e5e5ea' : 'none'
            }}>
              <AlertCircle size={16} style={{ color: isIOS ? '#007aff' : '#ffb74d' }} />
              <span>{alertText}</span>
            </div>
          )}

          {/* Safe Area View Outer Guides */}
          {compId === 'safeareaview' && showSafeAreaGuides && (
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              borderTop: '32px solid rgba(239, 68, 68, 0.25)',
              borderBottom: '24px solid rgba(239, 68, 68, 0.25)',
              pointerEvents: 'none',
              zIndex: 25,
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              alignItems: 'center',
              padding: '4px'
            }}>
              <span style={{ fontSize: '10px', color: '#ef4444', fontWeight: 'bold' }}>UNSAFE NOTCH AREA</span>
              <span style={{ fontSize: '10px', color: '#ef4444', fontWeight: 'bold' }}>UNSAFE HOME BAR AREA</span>
            </div>
          )}

          {/* Screen Body Content Container */}
          <div style={{ 
            flex: 1, 
            padding: '16px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '14px', 
            justify: 'center',
            overflowY: 'auto',
            transform: isKeyboardOpen && (compId === 'keyboardavoidingview' || compId === 'keyboard') ? 'translateY(-40px)' : 'none',
            transition: 'transform 0.3s ease'
          }}>

            {/* 1. View */}
            {compId === 'view' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button 
                    onClick={() => setFlexDirection('column')} 
                    style={{ padding: '4px 10px', fontSize: '11px', borderRadius: '4px', background: flexDirection === 'column' ? '#0066cc' : '#e0e0e0', color: flexDirection === 'column' ? '#fff' : '#000', border: 'none', cursor: 'pointer' }}
                  >
                    Column
                  </button>
                  <button 
                    onClick={() => setFlexDirection('row')} 
                    style={{ padding: '4px 10px', fontSize: '11px', borderRadius: '4px', background: flexDirection === 'row' ? '#0066cc' : '#e0e0e0', color: flexDirection === 'row' ? '#fff' : '#000', border: 'none', cursor: 'pointer' }}
                  >
                    Row
                  </button>
                </div>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: flexDirection, 
                  gap: '10px', 
                  padding: '16px', 
                  backgroundColor: isIOS ? (isDarkMode ? '#1c1c1e' : '#ffffff') : (isDarkMode ? '#1e1e1e' : '#ffffff'), 
                  borderRadius: isIOS ? '12px' : '4px',
                  border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0'
                }}>
                  <div style={{ padding: '12px', background: '#0066cc', color: '#fff', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>Box A</div>
                  <div style={{ padding: '12px', background: '#34c759', color: '#fff', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>Box B</div>
                  <div style={{ padding: '12px', background: '#ff9500', color: '#fff', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>Box C</div>
                </div>
              </div>
            )}

            {/* 2. Text */}
            {compId === 'text' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button 
                  onClick={() => setTextNumLines(textNumLines === 0 ? 1 : 0)} 
                  style={{ padding: '4px 10px', fontSize: '11px', borderRadius: '4px', background: '#0066cc', color: '#fff', border: 'none', alignSelf: 'flex-start', cursor: 'pointer' }}
                >
                  Toggle Truncation ({textNumLines === 1 ? '1 Line' : 'Unlimited'})
                </button>
                <p style={{ fontSize: '20px', fontWeight: isIOS ? '700' : '500', color: isDarkMode ? '#ffffff' : '#000000', margin: 0 }}>
                  Headline <span style={{ color: isIOS ? '#007aff' : '#1a73e8' }}>Inline Text</span>
                </p>
                <p 
                  style={{ 
                    fontSize: '14px', 
                    color: isDarkMode ? '#8e8e93' : '#666666', 
                    lineHeight: '1.45',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: textNumLines === 1 ? 'nowrap' : 'normal',
                    margin: 0
                  }}
                >
                  Text components support nesting, custom font weights, line clamping, and inline touch handling.
                </p>
              </div>
            )}

            {/* 3. Image */}
            {compId === 'image' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['cover', 'contain', 'stretch'].map((mode) => (
                    <button 
                      key={mode} 
                      onClick={() => setImageResizeMode(mode)} 
                      style={{ padding: '4px 8px', fontSize: '11px', borderRadius: '4px', background: imageResizeMode === mode ? '#0066cc' : '#e0e0e0', color: imageResizeMode === mode ? '#fff' : '#000', border: 'none', cursor: 'pointer' }}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
                <img 
                  src="https://picsum.photos/400/250" 
                  alt="RN Mobile Preview"
                  style={{ 
                    width: '100%', 
                    height: '180px', 
                    objectFit: imageResizeMode, 
                    borderRadius: isIOS ? '14px' : '4px',
                    boxShadow: isIOS ? '0 4px 12px rgba(0,0,0,0.1)' : '0 2px 6px rgba(0,0,0,0.2)'
                  }}
                />
              </div>
            )}

            {/* 4. TextInput */}
            {compId === 'textinput' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: isDarkMode ? '#8e8e93' : '#666666' }}>EMAIL ADDRESS</label>
                <input
                  type="email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="alex@example.com"
                  style={{
                    padding: '12px 14px',
                    borderRadius: isIOS ? '10px' : '4px',
                    border: isIOS ? (isDarkMode ? '1px solid #38383a' : '1px solid #c7c7cc') : 'none',
                    borderBottom: isIOS ? 'none' : `2px solid ${isDarkMode ? '#bb86fc' : '#1a73e8'}`,
                    backgroundColor: isIOS ? (isDarkMode ? '#1c1c1e' : '#ffffff') : (isDarkMode ? '#2c2c2c' : '#f1f3f4'),
                    color: isDarkMode ? '#ffffff' : '#000000',
                    outline: 'none',
                    fontSize: '15px'
                  }}
                />
                <span style={{ fontSize: '12px', color: isIOS ? '#007aff' : '#1a73e8' }}>Typed: "{inputValue}"</span>
              </div>
            )}

            {/* 5. Button */}
            {compId === 'button' && (
              <div>
                <button
                  onClick={() => setPressCount(pressCount + 1)}
                  style={{
                    backgroundColor: isIOS ? '#007aff' : '#1a73e8',
                    color: '#ffffff',
                    padding: isIOS ? '12px 20px' : '10px 16px',
                    borderRadius: isIOS ? '10px' : '4px',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: isIOS ? '600' : '500',
                    cursor: 'pointer',
                    width: '100%',
                    textTransform: isIOS ? 'none' : 'uppercase'
                  }}
                >
                  Submit Order ({pressCount})
                </button>
              </div>
            )}

            {/* 6. Pressable */}
            {compId === 'pressable' && (
              <div>
                <button
                  onClick={() => setPressCount(pressCount + 1)}
                  style={{
                    backgroundColor: isIOS ? '#007aff' : '#6200ee',
                    color: '#ffffff',
                    padding: '14px',
                    borderRadius: isIOS ? '12px' : '24px',
                    border: 'none',
                    width: '100%',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Pressable Custom Button (Taps: {pressCount})
                </button>
              </div>
            )}

            {/* 7. TouchableOpacity */}
            {compId === 'touchableopacity' && (
              <button
                onClick={() => setPressCount(pressCount + 1)}
                style={{
                  backgroundColor: isDarkMode ? '#2c2c2e' : '#1c1c1e',
                  color: '#ffffff',
                  padding: '14px',
                  borderRadius: isIOS ? '10px' : '4px',
                  border: 'none',
                  width: '100%',
                  fontSize: '15px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  opacity: 0.85
                }}
              >
                TouchableOpacity (Opacity dim: {pressCount})
              </button>
            )}

            {/* 8. TouchableHighlight */}
            {compId === 'touchablehighlight' && (
              <div 
                style={{
                  padding: '14px 16px',
                  backgroundColor: isIOS ? (isDarkMode ? '#1c1c1e' : '#ffffff') : (isDarkMode ? '#1e1e1e' : '#ffffff'),
                  borderRadius: isIOS ? '10px' : '4px',
                  borderLeft: `4px solid ${isIOS ? '#007aff' : '#1a73e8'}`,
                  cursor: 'pointer'
                }}
                onClick={() => triggerAlert('TouchableHighlight underlay active!')}
              >
                <div style={{ fontWeight: '600', fontSize: '15px' }}>TouchableHighlight Row</div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>Tap to see underlay color</div>
              </div>
            )}

            {/* 9. TouchableWithoutFeedback */}
            {compId === 'touchablewithoutfeedback' && (
              <div 
                style={{ 
                  padding: '20px', 
                  border: `2px dashed ${isDarkMode ? '#38383a' : '#d1d1d6'}`, 
                  borderRadius: isIOS ? '12px' : '4px', 
                  textAlign: 'center', 
                  cursor: 'pointer' 
                }}
                onClick={() => triggerAlert('Captured touch without visual change!')}
              >
                <span style={{ fontSize: '13px', opacity: 0.7 }}>Touch Area (Dismiss Keyboard)</span>
              </div>
            )}

            {/* 10. ScrollView */}
            {compId === 'scrollview' && (
              <div style={{ height: '240px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} style={{ 
                    padding: '12px', 
                    background: isIOS ? (isDarkMode ? '#1c1c1e' : '#ffffff') : (isDarkMode ? '#1e1e1e' : '#ffffff'), 
                    borderRadius: isIOS ? '10px' : '4px', 
                    fontSize: '14px'
                  }}>
                    ScrollView Row Item #{i + 1}
                  </div>
                ))}
              </div>
            )}

            {/* 11. FlatList */}
            {compId === 'flatlist' && (
              <div style={{ height: '240px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: isIOS ? '#007aff' : '#1a73e8', textTransform: 'uppercase' }}>Virtualized Feed</div>
                {[
                  { name: 'Sarah Connor', role: 'Lead Architect' },
                  { name: 'John Doe', role: 'Product Designer' },
                  { name: 'Alice Smith', role: 'Mobile Developer' },
                  { name: 'Bob Johnson', role: 'QA Lead' }
                ].map((user, i) => (
                  <div key={i} style={{ 
                    padding: '10px 14px', 
                    background: isIOS ? (isDarkMode ? '#1c1c1e' : '#ffffff') : (isDarkMode ? '#1e1e1e' : '#ffffff'), 
                    borderRadius: isIOS ? '10px' : '4px', 
                    fontSize: '14px'
                  }}>
                    <div style={{ fontWeight: '600' }}>{user.name}</div>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>{user.role}</div>
                  </div>
                ))}
              </div>
            )}

            {/* 12. SectionList */}
            {compId === 'sectionlist' && (
              <div style={{ height: '240px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ background: isIOS ? '#007aff' : '#1a73e8', color: '#fff', padding: '6px 12px', fontSize: '12px', fontWeight: '600' }}>FRUITS</div>
                <div style={{ padding: '8px 12px', fontSize: '14px' }}>Apple</div>
                <div style={{ padding: '8px 12px', fontSize: '14px' }}>Banana</div>
                <div style={{ background: isIOS ? '#007aff' : '#1a73e8', color: '#fff', padding: '6px 12px', fontSize: '12px', fontWeight: '600', marginTop: '6px' }}>VEGETABLES</div>
                <div style={{ padding: '8px 12px', fontSize: '14px' }}>Carrot</div>
                <div style={{ padding: '8px 12px', fontSize: '14px' }}>Potato</div>
              </div>
            )}

            {/* 13. Modal */}
            {compId === 'modal' && (
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => setModalVisible(true)}
                  style={{
                    backgroundColor: isIOS ? '#007aff' : '#1a73e8',
                    color: '#ffffff',
                    padding: '12px',
                    borderRadius: isIOS ? '10px' : '4px',
                    border: 'none',
                    width: '100%',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Open {isIOS ? 'iOS Dialog' : 'Android Dialog'}
                </button>

                {modalVisible && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',
                    zIndex: 40
                  }}>
                    <div style={{ 
                      background: isIOS ? (isDarkMode ? '#2c2c2e' : '#ffffff') : (isDarkMode ? '#212121' : '#ffffff'), 
                      color: isDarkMode ? '#ffffff' : '#000000', 
                      padding: '20px', 
                      borderRadius: isIOS ? '14px' : '4px', 
                      textAlign: 'center', 
                      gap: '12px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      width: '100%'
                    }}>
                      <h4 style={{ fontWeight: '600', fontSize: '17px', margin: 0 }}>{isIOS ? 'iOS Modal View' : 'Material Dialog'}</h4>
                      <p style={{ fontSize: '13px', opacity: 0.8, margin: 0 }}>Renders overlay above screen.</p>
                      <button 
                        onClick={() => setModalVisible(false)} 
                        style={{ 
                          background: isIOS ? '#007aff' : 'transparent', 
                          color: isIOS ? '#ffffff' : '#1a73e8', 
                          border: 'none', 
                          padding: '10px', 
                          borderRadius: isIOS ? '8px' : '4px', 
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 14. ActivityIndicator */}
            {compId === 'activityindicator' && (
              <div style={{ textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['#0066cc', '#34c759', '#ff9500', '#ff3b30'].map((col) => (
                    <button 
                      key={col} 
                      onClick={() => setSpinnerColor(col)} 
                      style={{ width: '20px', height: '20px', borderRadius: '50%', background: col, border: 'none', cursor: 'pointer' }}
                    />
                  ))}
                </div>
                <div className="spin-anim" style={{
                  width: spinnerSize === 'large' ? '36px' : '24px', 
                  height: spinnerSize === 'large' ? '36px' : '24px', 
                  border: '3px solid #e0e0e0', 
                  borderTop: `3px solid ${spinnerColor}`,
                  borderRadius: '50%'
                }} />
                <span style={{ fontSize: '13px', opacity: 0.8 }}>
                  ActivityIndicator (size="{spinnerSize}")
                </span>
              </div>
            )}

            {/* 15. Switch */}
            {compId === 'switch' && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justify: 'space-between', 
                padding: '12px 16px', 
                background: isIOS ? (isDarkMode ? '#1c1c1e' : '#ffffff') : (isDarkMode ? '#1e1e1e' : '#ffffff'), 
                borderRadius: isIOS ? '10px' : '4px' 
              }}>
                <span style={{ fontWeight: '500', fontSize: '15px' }}>Enable Notifications</span>
                <input
                  type="checkbox"
                  checked={switchValue}
                  onChange={(e) => setSwitchValue(e.target.checked)}
                  style={{ width: '24px', height: '24px', accentColor: isIOS ? '#34c759' : '#1a73e8', cursor: 'pointer' }}
                />
              </div>
            )}

            {/* 16. RefreshControl */}
            {compId === 'refreshcontrol' && (
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={triggerRefresh}
                  style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%',
                    background: isIOS ? '#007aff' : '#1a73e8', color: '#fff', padding: '10px',
                    borderRadius: isIOS ? '10px' : '4px', border: 'none', fontWeight: '500', cursor: 'pointer'
                  }}
                >
                  <RefreshCw size={14} className={isRefreshing ? 'spin-anim' : ''} />
                  <span>{isRefreshing ? 'Refreshing...' : 'Pull Down to Refresh'}</span>
                </button>
                <div style={{ padding: '12px', marginTop: '10px', background: isDarkMode ? '#1c1c1e' : '#ffffff', borderRadius: '8px', fontSize: '13px' }}>
                  {isRefreshing ? 'Fetching latest feed items...' : 'Content up to date.'}
                </div>
              </div>
            )}

            {/* 17. KeyboardAvoidingView */}
            {compId === 'keyboardavoidingview' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button 
                  onClick={() => setIsKeyboardOpen(!isKeyboardOpen)} 
                  style={{ padding: '6px 12px', fontSize: '12px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  {isKeyboardOpen ? 'Close Soft Keyboard' : 'Simulate Open Keyboard'}
                </button>
                <input
                  type="text"
                  placeholder="Focus input field..."
                  onFocus={() => setIsKeyboardOpen(true)}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    border: isDarkMode ? '1px solid #333' : '1px solid #ccc',
                    background: isDarkMode ? '#1c1c1e' : '#ffffff',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    outline: 'none',
                    fontSize: '14px'
                  }}
                />
              </div>
            )}

            {/* 18. StatusBar */}
            {compId === 'statusbar' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => setStatusBarStyle('dark-content')} 
                    style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '4px', background: statusBarStyle === 'dark-content' ? '#0066cc' : '#e0e0e0', color: statusBarStyle === 'dark-content' ? '#fff' : '#000', border: 'none', cursor: 'pointer' }}
                  >
                    Dark Icons
                  </button>
                  <button 
                    onClick={() => setStatusBarStyle('light-content')} 
                    style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '4px', background: statusBarStyle === 'light-content' ? '#0066cc' : '#e0e0e0', color: statusBarStyle === 'light-content' ? '#fff' : '#000', border: 'none', cursor: 'pointer' }}
                  >
                    Light Icons
                  </button>
                </div>
                <span style={{ fontSize: '13px', opacity: 0.8 }}>Top Status Bar style: {statusBarStyle}</span>
              </div>
            )}

            {/* 19. SafeAreaView */}
            {compId === 'safeareaview' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <button 
                  onClick={() => setShowSafeAreaGuides(!showSafeAreaGuides)} 
                  style={{ padding: '6px 12px', fontSize: '12px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  {showSafeAreaGuides ? 'Hide Notch Guides' : 'Show Notch Guides'}
                </button>
                <div style={{ border: '2px dashed #0066cc', padding: '16px', borderRadius: '12px', textAlign: 'center', width: '100%' }}>
                  <span style={{ fontSize: '14px', color: '#0066cc', fontWeight: '600' }}>Safe Area Content Bounds</span>
                </div>
              </div>
            )}

            {/* 20. ImageBackground */}
            {compId === 'imagebackground' && (
              <div style={{
                backgroundImage: 'url(https://picsum.photos/400/250)',
                backgroundSize: 'cover',
                height: '180px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '16px',
                color: '#ffffff'
              }}>
                <span style={{ fontSize: '18px', fontWeight: '600', background: 'rgba(0,0,0,0.6)', padding: '6px 14px', borderRadius: '6px' }}>
                  ImageBackground Hero
                </span>
              </div>
            )}

            {/* 21. Keyboard */}
            {compId === 'keyboard' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input 
                  placeholder="Focus input to trigger keyboard..." 
                  onFocus={() => setIsKeyboardOpen(true)}
                  style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
                <button 
                  onClick={() => { setIsKeyboardOpen(false); triggerAlert('Keyboard.dismiss() executed'); }} 
                  style={{ background: '#0066cc', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
                >
                  Keyboard.dismiss()
                </button>
                <span style={{ fontSize: '12px', textAlign: 'center' }}>State: {isKeyboardOpen ? 'Soft Keyboard Visible' : 'Keyboard Hidden'}</span>
              </div>
            )}

            {/* 22. Alert */}
            {compId === 'alert' && (
              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={() => triggerAlert('Alert.alert("Confirm Delete", "This action cannot be undone.", [{ text: "Cancel" }, { text: "Delete" }])')} 
                  style={{ background: '#dc2626', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', width: '100%', fontWeight: '600', cursor: 'pointer' }}
                >
                  Alert.alert(...) Dialog
                </button>
              </div>
            )}

            {/* 23. Linking */}
            {compId === 'linking' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button 
                  onClick={() => triggerAlert('Linking.openURL("https://reactnative.dev")')} 
                  style={{ background: '#0066cc', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', cursor: 'pointer' }}
                >
                  <ExternalLink size={14} />
                  <span>Linking.openURL(Web)</span>
                </button>
                <button 
                  onClick={() => triggerAlert('Linking.openURL("tel:1234567890")')} 
                  style={{ background: '#34c759', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', cursor: 'pointer' }}
                >
                  <Smartphone size={14} />
                  <span>Linking.openURL(Phone)</span>
                </button>
              </div>
            )}

            {/* 24. Share */}
            {compId === 'share' && (
              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={() => triggerAlert('Share.share({ message: "Check out React Native Docs" })')} 
                  style={{ background: '#0066cc', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', width: '100%', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
                >
                  <Share2 size={16} />
                  <span>Share.share(...) Sheet</span>
                </button>
              </div>
            )}

            {/* 25. Dimensions */}
            {compId === 'dimensions' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <button 
                  onClick={() => setIsLandscape(!isLandscape)} 
                  style={{ padding: '6px 12px', fontSize: '12px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Rotate Orientation ({isLandscape ? 'Landscape' : 'Portrait'})
                </button>
                <div style={{ padding: '14px', background: isDarkMode ? '#1c1c1e' : '#f5f5f7', borderRadius: '8px', width: '100%', fontSize: '13px' }}>
                  <div><strong>Width:</strong> {isLandscape ? '560px' : '360px'}</div>
                  <div><strong>Height:</strong> {isLandscape ? '360px' : '640px'}</div>
                  <div><strong>Font Scale:</strong> 1.0</div>
                </div>
              </div>
            )}

            {/* 26. Platform */}
            {compId === 'platform' && (
              <div style={{ padding: '16px', background: isDarkMode ? '#1c1c1e' : '#f5f5f7', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: isIOS ? '#007aff' : '#1a73e8' }}>
                  Platform.OS = '{platform}'
                </div>
                <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '4px' }}>
                  Platform.select(&#123; ios: 'iOS Shadow', android: 'Elevation' &#125;)
                </div>
              </div>
            )}

            {/* 27. Animated */}
            {compId === 'animated' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button 
                    onClick={() => setAnimOpacity(animOpacity === 1 ? 0.2 : 1)} 
                    style={{ padding: '6px 12px', fontSize: '12px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Fade ({animOpacity})
                  </button>
                  <button 
                    onClick={() => setAnimScale(animScale === 1 ? 1.25 : 1)} 
                    style={{ padding: '6px 12px', fontSize: '12px', background: '#34c759', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Scale ({animScale}x)
                  </button>
                </div>
                <div style={{
                  width: '64px', height: '64px', background: isIOS ? '#007aff' : '#1a73e8', borderRadius: '12px',
                  opacity: animOpacity,
                  transform: `scale(${animScale})`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }} />
              </div>
            )}

            {/* 28. useState */}
            {compId === 'usestate' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: isIOS ? '#007aff' : '#00d25b' }}>
                  Count: {pressCount}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    onClick={() => setPressCount(c => c - 1)}
                    style={{ padding: '8px 14px', background: '#fc424a', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
                  >
                    - Decrement
                  </button>
                  <button 
                    onClick={() => setPressCount(c => c + 1)}
                    style={{ padding: '8px 14px', background: '#00d25b', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
                  >
                    + Increment
                  </button>
                </div>
              </div>
            )}

            {/* 29. useEffect */}
            {compId === 'useeffect' && (
              <div style={{ padding: '16px', background: isDarkMode ? '#1c1c1e' : '#f5f5f7', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: isDarkMode ? '#aaa' : '#666', marginBottom: '6px' }}>Effect Timer Running...</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#0066cc' }}>
                  Active Render Effect ({pressCount}s)
                </div>
                <button 
                  onClick={triggerRefresh}
                  style={{ marginTop: '10px', padding: '6px 12px', fontSize: '12px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Trigger Effect Re-run
                </button>
              </div>
            )}

            {/* 30. useContext */}
            {compId === 'usecontext' && (
              <div style={{ padding: '16px', background: isDarkMode ? '#2c2c2e' : '#e5e5ea', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>ThemeContext Consumer</div>
                <div style={{ fontSize: '16px', fontWeight: '600', margin: '8px 0', color: isDarkMode ? '#34c759' : '#007aff' }}>
                  Provided Mode: {isDarkMode ? 'Dark Theme 🌙' : 'Light Theme ☀️'}
                </div>
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  style={{ padding: '6px 12px', fontSize: '12px', background: isDarkMode ? '#34c759' : '#007aff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Toggle Global Context
                </button>
              </div>
            )}

            {/* 31. useMemo */}
            {compId === 'usememo' && (
              <div style={{ padding: '14px', background: isDarkMode ? '#1c1c1e' : '#f5f5f7', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '600' }}>Memoized Calculation</div>
                <div style={{ fontSize: '15px', color: '#8f5fe8', margin: '6px 0' }}>
                  Factorial({pressCount || 4}): {(pressCount || 4) <= 1 ? 1 : Array.from({length: pressCount || 4}).reduce((acc, _, i) => acc * (i + 1), 1)}
                </div>
                <button 
                  onClick={() => setPressCount((pressCount + 1) % 8)}
                  style={{ padding: '6px 12px', fontSize: '12px', background: '#8f5fe8', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Recompute Memoized Result
                </button>
              </div>
            )}

            {/* 32. useCallback */}
            {compId === 'usecallback' && (
              <div style={{ padding: '14px', background: isDarkMode ? '#1c1c1e' : '#f5f5f7', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '600' }}>Memoized Callback Reference</div>
                <div style={{ fontSize: '12px', color: '#00d25b', margin: '6px 0' }}>
                  fnRef: useCallback(handleClick, [deps])
                </div>
                <button 
                  onClick={() => triggerAlert('Callback executed!')}
                  style={{ padding: '8px 14px', fontSize: '12px', background: '#00d25b', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Execute Memoized Callback
                </button>
              </div>
            )}

            {/* 33. useRef */}
            {compId === 'useref' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <input 
                  type="text" 
                  placeholder="inputRef.current..." 
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
                <button 
                  onClick={() => triggerAlert(`Ref current: "${inputValue || 'Focused!'}"`)}
                  style={{ padding: '6px 12px', fontSize: '12px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Access inputRef.current
                </button>
              </div>
            )}

            {/* 34. createContext */}
            {compId === 'createcontext' && (
              <div style={{ padding: '14px', background: isDarkMode ? '#1c1c1e' : '#f5f5f7', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#007aff' }}>createContext Factory</div>
                <div style={{ fontSize: '12px', margin: '6px 0', opacity: 0.8 }}>
                  UserContext = createContext(&#123; user: 'Satyam' &#125;)
                </div>
              </div>
            )}

            {/* 35. memo */}
            {compId === 'memo' && (
              <div style={{ padding: '14px', background: isDarkMode ? '#1c1c1e' : '#f5f5f7', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#00d25b' }}>React.memo Component</div>
                <div style={{ fontSize: '12px', opacity: 0.8, margin: '6px 0' }}>
                  Props Unchanged: Render Skipped!
                </div>
                <button 
                  onClick={() => triggerAlert('Parent re-rendered. Child memoized!')}
                  style={{ padding: '6px 12px', fontSize: '12px', background: '#00d25b', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Trigger Parent Re-render
                </button>
              </div>
            )}

            {/* 36. lazy */}
            {compId === 'lazy' && (
              <div style={{ padding: '14px', background: isDarkMode ? '#1c1c1e' : '#f5f5f7', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#a855f7' }}>React.lazy Component</div>
                <div style={{ fontSize: '12px', margin: '6px 0', opacity: 0.8 }}>
                  Code Bundle Loaded On Demand!
                </div>
              </div>
            )}

            {/* 37. Suspense */}
            {compId === 'suspense' && (
              <div style={{ padding: '14px', background: isDarkMode ? '#1c1c1e' : '#f5f5f7', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#8f5fe8' }}>&lt;Suspense fallback=&#123;&lt;Spinner/&gt;&#125;&gt;</div>
                <div style={{ fontSize: '12px', margin: '6px 0', color: '#8f5fe8' }}>
                  Fallback UI Ready
                </div>
              </div>
            )}

          </div>

          {/* Simulated On-Screen Virtual Keyboard */}
          {isKeyboardOpen && (
            <div 
              style={{
                backgroundColor: isDarkMode ? '#222' : '#d1d5db',
                padding: '8px 4px',
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gap: '4px',
                borderTop: '1px solid #ccc',
                zIndex: 35,
                flexShrink: 0
              }}
              onClick={() => setIsKeyboardOpen(false)}
            >
              {['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'].map((key) => (
                <div 
                  key={key} 
                  style={{
                    backgroundColor: isDarkMode ? '#444' : '#fff',
                    color: isDarkMode ? '#fff' : '#000',
                    borderRadius: '4px',
                    padding: '6px 0',
                    textAlign: 'center',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    boxShadow: '0 1px 1px rgba(0,0,0,0.2)'
                  }}
                >
                  {key}
                </div>
              ))}
            </div>
          )}

          {/* Bottom iOS Home Indicator Bar VS Android Navigation Bar */}
          {isIOS ? (
            <div style={{
              width: '134px',
              height: '5px',
              backgroundColor: isDarkMode ? '#ffffff' : '#000000',
              borderRadius: '3px',
              margin: '8px auto 6px',
              flexShrink: 0
            }} />
          ) : (
            <div style={{
              height: '36px',
              backgroundColor: isDarkMode ? '#000000' : '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              color: isDarkMode ? '#ffffff' : '#000000',
              fontSize: '16px',
              flexShrink: 0
            }}>
              <span style={{ cursor: 'pointer', fontWeight: 'bold' }}>◀</span>
              <span style={{ cursor: 'pointer', fontWeight: 'bold' ,fontSize: '30px'}}>●</span>
              <span style={{ cursor: 'pointer', fontWeight: 'bold' ,fontSize: '24px'}}>■</span>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
