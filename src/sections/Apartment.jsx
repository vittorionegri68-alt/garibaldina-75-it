import { useState, useEffect, useRef } from 'react';
import { config } from '../config/site_config';
import t from '../locales/it.json';

const ROOM_IMAGES = [
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/2fde88ff-f39e-454c-b2be-9e19ccf6aa7f.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/4371a374-2000-470a-b413-ffb15eaeb2a2.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/607b9565-fff6-4760-8c56-39b2823c9c3f.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/172b7e79-8a81-4fd0-9386-137cb55efbdd.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/041c3b4b-4a31-41a6-b3a1-b5a30bb29e4c.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/b78441be-4bf0-4ace-a65c-e95e5fc7482a.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/a9ddc2f8-218d-4a4a-822d-5c89836366a4.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/03d016b8-1493-4dc8-a40d-67fd1ef68b6d.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/f145f74e-499d-4829-b854-48a141e6d78c.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/48e273f6-a68c-42f5-bb5f-1112c04e4e6a.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/78cdb469-97d4-4971-9e9e-2057220942ba.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1558562623962692060/original/7849654a-3acb-478a-81f3-0d8bceb559a8.jpeg?im_w=720',
];

const AMENITY_ICONS = {
  wifi: '📶',
  kitchen: '🍳',
  washer: '🫧',
  ac: '❄️',
  heating: '🌡️',
  checkin: '🔑',
  tv: '📺',
  elevator: '🛗',
};

export default function Apartment() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
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
    sub: {
      color: 'var(--color-muted)',
      fontSize: '1.05rem',
      marginBottom: '48px',
    },
    galleryWrap: {
      display: 'grid',
      gridTemplateColumns: '1fr 220px',
      gap: '16px',
      marginBottom: '64px',
    },
    mainImg: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '16/10',
      background: '#E5E7EB',
    },
    mainImgEl: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'opacity 0.3s',
    },
    thumbsCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      overflowY: 'auto',
      maxHeight: '420px',
    },
    thumb: (isActive) => ({
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      aspectRatio: '4/3',
      cursor: 'pointer',
      border: isActive ? '3px solid var(--color-accent)' : '3px solid transparent',
      transition: 'border-color 0.2s, transform 0.2s',
      flexShrink: 0,
      transform: isActive ? 'scale(1.02)' : 'scale(1)',
    }),
    thumbImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    amenitiesTitle: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.2rem',
      color: 'var(--color-dark)',
      marginBottom: '24px',
    },
    amenitiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '16px',
    },
    amenityCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      background: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      transition: 'box-shadow 0.2s, transform 0.2s',
    },
    amenityIcon: {
      fontSize: '1.4rem',
      minWidth: '28px',
      textAlign: 'center',
    },
    amenityText: {
      fontWeight: 500,
      fontSize: '0.9rem',
      color: 'var(--color-dark)',
    },
  };

  return (
    <section id="appartamento" style={s.section} ref={sectionRef}>
      <div style={s.inner}>
        <div className="reveal">
          <div style={s.label}>{t.appartamento.galleriaLabel}</div>
          <h2 style={s.h2}>{t.appartamento.titolo}</h2>
          <p style={s.sub}>{t.appartamento.sottotitolo}</p>
        </div>

        <div className="reveal" style={s.galleryWrap}>
          <div style={s.mainImg}>
            <img
              src={ROOM_IMAGES[active]}
              alt={`Garibaldina 75 - foto ${active + 1}`}
              style={s.mainImgEl}
              loading="lazy"
            />
          </div>
          <div style={s.thumbsCol}>
            {ROOM_IMAGES.map((img, i) => (
              <div
                key={i}
                style={s.thumb(i === active)}
                onClick={() => setActive(i)}
              >
                <img src={img} alt={`Vista ${i + 1}`} style={s.thumbImg} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div style={s.amenitiesTitle}>{t.appartamento.dotazioni}</div>
          <div style={s.amenitiesGrid}>
            {t.appartamento.amenities.map((item, i) => (
              <div
                key={i}
                style={s.amenityCard}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span style={s.amenityIcon}>{AMENITY_ICONS[item.icona]}</span>
                <span style={s.amenityText}>{item.testo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #appartamento .gallery-wrap { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
