import { useEffect, useRef } from 'react';
import { contactInfo } from '../config/contact_info';
import t from '../locales/it.json';

const LOCATION_IMG = 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Corso+C.B.+Cavour+75+Cesena+FC';

export default function Location() {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'start',
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
      color: 'var(--color-dark)',
      marginBottom: '16px',
      letterSpacing: '-0.02em',
    },
    address: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'var(--color-muted)',
      fontSize: '0.9rem',
      marginBottom: '20px',
    },
    desc: {
      color: 'var(--color-text)',
      fontSize: '0.95rem',
      lineHeight: '1.75',
      marginBottom: '32px',
    },
    mapsBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--color-accent)',
      color: '#FFFFFF',
      fontWeight: 600,
      fontSize: '0.9rem',
      padding: '12px 24px',
      borderRadius: 'var(--radius-sm)',
      transition: 'background 0.2s',
      marginBottom: '40px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tr: {
      borderBottom: '1px solid var(--color-border)',
    },
    tdPlace: {
      padding: '14px 0',
      color: 'var(--color-dark)',
      fontWeight: 500,
      fontSize: '0.9rem',
    },
    tdTime: {
      padding: '14px 0',
      color: 'var(--color-accent)',
      fontWeight: 700,
      fontSize: '0.9rem',
      textAlign: 'right',
    },
    imgWrap: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '4/5',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <section id="posizione" style={s.section} ref={ref}>
      <div style={s.inner}>
        <div style={s.grid} className="loc-grid">
          <div className="reveal">
            <div style={s.label}>Dove siamo</div>
            <h2 style={s.h2}>{t.posizione.titolo}</h2>
            <div style={s.address}>
              <span>📍</span>
              <span>{contactInfo.address}</span>
            </div>
            <p style={s.desc}>{t.posizione.descrizione}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={s.mapsBtn}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
            >
              🗺️ {t.posizione.apriMappa}
            </a>
            <table style={s.table}>
              <tbody>
                {t.posizione.distanze.map((d, i) => (
                  <tr key={i} style={s.tr}>
                    <td style={s.tdPlace}>📍 {d.luogo}</td>
                    <td style={s.tdTime}>{d.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="reveal" style={s.imgWrap}>
            <img src={LOCATION_IMG} alt="Cesena centro storico" style={s.img} loading="lazy" />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .loc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
