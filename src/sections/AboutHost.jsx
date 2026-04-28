import { useEffect, useRef } from 'react';
import { contactInfo } from '../config/contact_info';
import t from '../locales/it.json';

export default function AboutHost() {
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
      background: 'var(--color-surface)',
      padding: '100px 24px',
    },
    inner: {
      maxWidth: '800px',
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
      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
      fontWeight: 800,
      color: 'var(--color-dark)',
      marginBottom: '20px',
      letterSpacing: '-0.02em',
    },
    bio: {
      color: 'var(--color-text)',
      fontSize: '0.95rem',
      lineHeight: '1.8',
      marginBottom: '40px',
    },
    statsRow: {
      display: 'flex',
      gap: '32px',
      marginBottom: '40px',
      flexWrap: 'wrap',
    },
    stat: {
      textAlign: 'center',
    },
    statVal: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '1.8rem',
      color: 'var(--color-accent)',
    },
    statLabel: {
      fontSize: '0.78rem',
      color: 'var(--color-muted)',
      marginTop: '4px',
    },
    contactRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
    },
    contactBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 20px',
      borderRadius: 'var(--radius-sm)',
      fontWeight: 600,
      fontSize: '0.875rem',
      transition: 'all 0.2s',
      border: '1px solid var(--color-border)',
      color: 'var(--color-dark)',
      background: 'var(--color-bg)',
    },
  };

  return (
    <section id="host" style={s.section} ref={ref}>
      <div style={s.inner}>
        <div className="reveal">
          <div style={s.label}>{t.host.titolo}</div>
          <h2 style={s.h2}>{t.host.nome}</h2>
          <p style={s.bio}>{t.host.bio}</p>
          <div style={s.statsRow}>
            {t.host.stats.map((stat, i) => (
              <div key={i} style={s.stat}>
                <div style={s.statVal}>{stat.valore}</div>
                <div style={s.statLabel}>{stat.etichetta}</div>
              </div>
            ))}
          </div>
          <div style={s.contactRow}>
            <a
              href={`mailto:${contactInfo.email}`}
              style={s.contactBtn}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-bg)'}
            >
              ✉️ {contactInfo.email}
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={s.contactBtn}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-bg)'}
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
