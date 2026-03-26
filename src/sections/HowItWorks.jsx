import { useEffect, useRef } from 'react';
import t from '../locales/it.json';

export default function HowItWorks() {
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

  const STEP_ICONS = ['🔍', '✅', '📲', '🏠'];

  const s = {
    section: {
      background: 'var(--color-dark)',
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
      color: 'var(--color-accent)',
      marginBottom: '12px',
    },
    h2: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      fontWeight: 800,
      color: '#FFFFFF',
      marginBottom: '8px',
      letterSpacing: '-0.02em',
    },
    sub: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: '1.05rem',
      marginBottom: '56px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '24px',
    },
    card: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-xl)',
      padding: '36px 28px',
      transition: 'background 0.2s',
    },
    num: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '3rem',
      color: 'rgba(59,130,246,0.3)',
      lineHeight: 1,
      marginBottom: '8px',
      letterSpacing: '-0.04em',
    },
    icon: {
      fontSize: '1.8rem',
      marginBottom: '16px',
    },
    title: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.1rem',
      color: '#FFFFFF',
      marginBottom: '10px',
    },
    text: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: '0.875rem',
      lineHeight: '1.7',
    },
  };

  return (
    <section id="come-funziona" style={s.section} ref={ref}>
      <div style={s.inner}>
        <div className="reveal">
          <div style={s.label}>Processo</div>
          <h2 style={s.h2}>{t.comeFunziona.titolo}</h2>
          <p style={s.sub}>{t.comeFunziona.sottotitolo}</p>
        </div>
        <div style={s.grid}>
          {t.comeFunziona.steps.map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{ ...s.card, transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <div style={s.num}>{step.numero}</div>
              <div style={s.icon}>{STEP_ICONS[i]}</div>
              <div style={s.title}>{step.titolo}</div>
              <p style={s.text}>{step.testo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
