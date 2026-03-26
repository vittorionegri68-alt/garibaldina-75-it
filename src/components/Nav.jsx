import { useState, useEffect } from 'react';
import { config } from '../config/site_config';
import t from '../locales/it.json';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.appartamento, href: '#appartamento' },
    { label: t.nav.esperienza, href: '#esperienza' },
    { label: t.nav.comeFunziona, href: '#come-funziona' },
    { label: t.nav.recensioni, href: '#recensioni' },
    { label: t.nav.posizione, href: '#posizione' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
    borderBottom: scrolled ? '1px solid #E5E7EB' : 'none',
  };

  const innerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    height: '68px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: '1.1rem',
    color: scrolled ? 'var(--color-dark)' : '#FFFFFF',
    letterSpacing: '-0.02em',
  };

  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: '0.875rem',
    color: scrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.9)',
    transition: 'color 0.2s',
    padding: '4px 0',
  };

  const ctaStyle = {
    background: 'var(--color-accent)',
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: '0.875rem',
    padding: '9px 20px',
    borderRadius: 'var(--radius-sm)',
    transition: 'background 0.2s, transform 0.1s',
    whiteSpace: 'nowrap',
  };

  const switcherStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginLeft: '12px',
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <span style={logoStyle}>{config.propertyName}</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={linkStyle}>{link.label}</a>
          ))}
          <a
            href={config.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={ctaStyle}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
          >
            {t.nav.prenota}
          </a>
          <div style={switcherStyle}>
            <span style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--color-accent)' }}>IT</span>
            <span style={{ color: scrolled ? 'var(--color-muted)' : 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>|</span>
            <a
              href={config.langEN}
              style={{ fontWeight: 500, fontSize: '0.8rem', color: scrolled ? 'var(--color-muted)' : 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
            >EN</a>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', color: scrolled ? 'var(--color-dark)' : '#FFF', fontSize: '1.5rem' }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: '#FFFFFF',
          padding: '16px 24px 24px',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontWeight: 500, color: 'var(--color-text)', fontSize: '1rem' }}
            >{link.label}</a>
          ))}
          <a
            href={config.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...ctaStyle, textAlign: 'center' }}
          >{t.nav.prenota}</a>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-accent)' }}>IT</span>
            <span style={{ color: 'var(--color-muted)' }}>|</span>
            <a href={config.langEN} style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--color-muted)' }}>EN</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
