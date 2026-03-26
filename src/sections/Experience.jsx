import { useEffect, useRef } from 'react';
import t from '../locales/it.json';

const EXP_IMAGES = [
  'https://images.unsplash.com/photo-1718024111530-b88cc1c9f108?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1589307717665-53ff418be9f5?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1677048148083-99e9f8eb12a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const EXP_ICONS = ['🏰', '🍝', '🚗'];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    el.querySelectorAll('.reveal').forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const s = {
    section: {
      background: 'var(--color-bg)',
      padding: '100px 24px',
    },
    inner: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    label: {
      fontSize: '0.78rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-green)',
      marginBottom: '12px',
    },
    h2: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      fontWeight: 800,
      color: 'var(--color-dark)',
      marginBottom: '8px',
      letterSpacing: '-0.02em',
    },
    sub: {
      color: 'var(--color-muted)',
      fontSize: '1.05rem',
      marginBottom: '56px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '28px',
    },
    card: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      border: '1px solid var(--color-border)',
    },
    cardImg: {
      width: '100%',
      aspectRatio: '16/9',
      objectFit: 'cover',
    },
    cardBody: {
      padding: '28px',
    },
    cardIcon: {
      fontSize: '1.8rem',
      marginBottom: '12px',
    },
    cardTitle: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.15rem',
      color: 'var(--color-dark)',
      marginBottom: '10px',
    },
    cardText: {
      color: 'var(--color-muted)',
      fontSize: '0.9rem',
      lineHeight: '1.7',
    },
  };

  return (
    <section id="esperienza" style={s.section} ref={ref}>
      <div style={s.inner}>
        <div className="reveal">
          <div style={s.label}>Scopri Cesena</div>
          <h2 style={s.h2}>{t.esperienza.titolo}</h2>
          <p style={s.sub}>{t.esperienza.sottotitolo}</p>
        </div>
        <div style={s.grid}>
          {t.esperienza.cards.map((card, i) => (
            <div
              key={i}
              className="reveal"
              style={{ ...s.card, transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
            >
              <img src={EXP_IMAGES[i]} alt={card.titolo} style={s.cardImg} loading="lazy" />
              <div style={s.cardBody}>
                <div style={s.cardIcon}>{EXP_ICONS[i]}</div>
                <div style={s.cardTitle}>{card.titolo}</div>
                <p style={s.cardText}>{card.testo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
