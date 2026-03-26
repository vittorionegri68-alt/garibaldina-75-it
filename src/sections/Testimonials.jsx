import { useEffect, useRef } from 'react';
import t from '../locales/it.json';

const REVIEWS = [
  {
    testo: "L appartamento ha un ottima posizione. Tutto e come descritto. Grazie mille per l ospitalita",
    nome: 'Nataliya',
    provenienza: 'Novosibirsk, Russia',
    stelle: 5,
  },
  {
    testo: 'Ottima posizione facilmente accessibile in un ambiente molto pulito',
    nome: 'Darling',
    provenienza: 'Cesena, Italia',
    stelle: 5,
  },
];

function Stars({ n }) {
  return (
    <span style={{ color: '#F59E0B', fontSize: '1rem', letterSpacing: '2px' }}>
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </span>
  );
}

export default function Testimonials() {
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
      color: 'var(--color-dark)',
      marginBottom: '8px',
      letterSpacing: '-0.02em',
    },
    ratingBar: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '56px',
      flexWrap: 'wrap',
    },
    ratingNum: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '3.5rem',
      color: 'var(--color-dark)',
      lineHeight: 1,
    },
    ratingInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    basedOn: {
      color: 'var(--color-muted)',
      fontSize: '0.875rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '24px',
    },
    card: {
      background: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)',
      padding: '32px',
      position: 'relative',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    quote: {
      fontSize: '3rem',
      color: 'var(--color-accent)',
      lineHeight: 0.8,
      marginBottom: '16px',
      fontFamily: 'Georgia, serif',
      opacity: 0.4,
    },
    text: {
      color: 'var(--color-text)',
      fontSize: '0.95rem',
      lineHeight: '1.75',
      marginBottom: '24px',
      fontStyle: 'italic',
    },
    author: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderTop: '1px solid var(--color-border)',
      paddingTop: '16px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, var(--color-accent), var(--color-green))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFF',
      fontWeight: 700,
      fontSize: '1rem',
      flexShrink: 0,
    },
    authorName: {
      fontWeight: 700,
      fontSize: '0.9rem',
      color: 'var(--color-dark)',
    },
    authorFrom: {
      fontSize: '0.8rem',
      color: 'var(--color-muted)',
    },
  };

  return (
    <section id="recensioni" style={s.section} ref={ref}>
      <div style={s.inner}>
        <div className="reveal">
          <div style={s.label}>Recensioni Airbnb</div>
          <h2 style={s.h2}>{t.recensioni.titolo}</h2>
          <div style={s.ratingBar}>
            <div style={s.ratingNum}>5.0</div>
            <div style={s.ratingInfo}>
              <Stars n={5} />
              <span style={s.basedOn}>{t.recensioni.sottotitolo} 5.0 {t.recensioni.di} 5 &middot; 2 {t.recensioni.basataSu}</span>
            </div>
          </div>
        </div>
        <div style={s.grid}>
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="reveal"
              style={{ ...s.card, transitionDelay: `${i * 0.12}s` }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={s.quote}>"</div>
              <Stars n={r.stelle} />
              <p style={s.text}>{r.testo}</p>
              <div style={s.author}>
                <div style={s.avatar}>{r.nome[0]}</div>
                <div>
                  <div style={s.authorName}>{r.nome}</div>
                  <div style={s.authorFrom}>{r.provenienza}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
