import { useEffect, useRef } from 'react';
import { config } from '../config/site_config';
import t from '../locales/it.json';

const HERO_BG = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80';

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add('visible');
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const s = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    },
    bg: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url('${HERO_BG}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.45)',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(31,41,55,0.7) 0%, rgba(59,130,246,0.2) 100%)',
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '120px 24px 80px',
      width: '100%',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255,255,255,0.15)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.25)',
      color: '#FFFFFF',
      fontSize: '0.8rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '6px 16px',
      borderRadius: '100px',
      marginBottom: '24px',
    },
    dot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--color-green)',
    },
    h1: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
      fontWeight: 800,
      color: '#FFFFFF',
      lineHeight: 1.1,
      maxWidth: '700px',
      marginBottom: '20px',
      letterSpacing: '-0.03em',
    },
    sub: {
      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
      color: 'rgba(255,255,255,0.82)',
      maxWidth: '560px',
      lineHeight: 1.7,
      marginBottom: '40px',
    },
    ctas: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      marginBottom: '64px',
    },
    ctaPrimary: {
      background: 'var(--color-accent)',
      color: '#FFFFFF',
      fontWeight: 700,
      fontSize: '1rem',
      padding: '14px 32px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-accent)',
      transition: 'background 0.2s, transform 0.1s',
      display: 'inline-block',
    },
    ctaSecondary: {
      background: 'rgba(255,255,255,0.12)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: '#FFFFFF',
      fontWeight: 600,
      fontSize: '1rem',
      padding: '14px 32px',
      borderRadius: 'var(--radius-md)',
      transition: 'background 0.2s',
      display: 'inline-block',
    },
    statsBar: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0',
      background: 'rgba(255,255,255,0.08)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      maxWidth: '560px',
    },
    statItem: {
      flex: '1 1 120px',
      padding: '20px 24px',
      borderRight: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center',
    },
    statValue: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '1.8rem',
      color: '#FFFFFF',
      lineHeight: 1,
    },
    statLabel: {
      fontSize: '0.75rem',
      color: 'rgba(255,255,255,0.6)',
      marginTop: '4px',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
    },
    star: {
      color: '#F59E0B',
      fontSize: '0.9rem',
    },
  };

  return (
    <section style={s.section} id="hero">
      <div style={s.bg} />
      <div style={s.overlay} />
      <div style={s.content}>
        <div style={s.badge}>
          <span style={s.dot} />
          {t.hero.badge}
        </div>
        <h1 style={s.h1}>{t.hero.titolo}</h1>
        <p style={s.sub}>{t.hero.sottotitolo}</p>
        <div style={s.ctas}>
          <a
            href={config.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={s.ctaPrimary}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {t.hero.ctaPrimario}
          </a>
          <a
            href="#appartamento"
            style={s.ctaSecondary}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
          >
            {t.hero.ctaSecondario} ↓
          </a>
        </div>
        <div ref={statsRef} style={s.statsBar} className="reveal">
          <div style={s.statItem}>
            <div style={s.statValue}>4</div>
            <div style={s.statLabel}>{t.hero.stats.ospiti}</div>
          </div>
          <div style={s.statItem}>
            <div style={s.statValue}>1</div>
            <div style={s.statLabel}>{t.hero.stats.camere}</div>
          </div>
          <div style={s.statItem}>
            <div style={s.statValue}>1</div>
            <div style={s.statLabel}>{t.hero.stats.bagni}</div>
          </div>
          <div style={{ ...s.statItem, borderRight: 'none' }}>
            <div style={{ ...s.statValue, color: '#F59E0B' }}>5.0 ★</div>
            <div style={s.statLabel}>{t.hero.stats.rating}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
