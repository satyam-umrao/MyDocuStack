import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ title, code, language = 'javascript' }) {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(code);
    }
    setCopied(true);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-box-apple">
      <div className="code-header-apple">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
          </div>
          <span>{title || language}</span>
        </div>

        <button className="copy-btn-apple" onClick={handleCopy}>
          {copied ? (
            <>
              <Check size={14} style={{ color: '#27c93f' }} />
              <span style={{ color: '#27c93f' }}>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>
      <pre className="code-text-apple">
        <code>{code}</code>
      </pre>
    </div>
  );
}
