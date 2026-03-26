import { useEffect, useRef } from 'react';
import { config } from '../config/site_config';
import t from '../locales/it.json';

const CTA_BG = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80';

export default function FinalCTA() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.2 });
    el.querySelectorAll('.reveal').forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const s = {
    section: {
      position: 'relative',
      padding: '120px 24px',
      overflow: 'hidden',
    },
    bg: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url('${CTA_BG}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.35)',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(31,41,55,0.8) 0%, rgba(59,130,246,0.3) 100%)',
    },
    inner: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'center',
    },
    h2: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 800,
      color: '#FFFFFF',
      marginBottom: '16px',
      letterSpacing: '-0.03em',
    },
    sub: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      marginBottom: '40px',
    },
    btn: {
      display: 'inline-block',
      background: 'var(--color-accent)',
      color: '#FFFFFF',
      fontWeight: 700,
      fontSize: '1.1rem',
      padding: '18px 48px',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-accent)',
      transition: 'background 0.2s, transform 0.15s',
    },
  };

  return (
    <section style={s.section} ref={ref}>
      <div style={s.bg} />
      <div style={s.overlay} />
      <div style={s.inner}>
        <div className="reveal">
          <h2 style={s.h2}>{t.finalCta.titolo}</h2>
          <p style={s.sub}>{t.finalCta.sottotitolo}</p>
          <a
            href={config.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={s.btn}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {t.finalCta.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
