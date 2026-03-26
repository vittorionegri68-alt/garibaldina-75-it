import { config } from '../config/site_config';
import { contactInfo } from '../config/contact_info';
import t from '../locales/it.json';

export default function Footer() {
  const style = {
    wrap: {
      background: 'var(--color-dark)',
      color: 'rgba(255,255,255,0.7)',
      padding: '56px 24px 32px',
    },
    inner: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      marginBottom: '48px',
    },
    heading: {
      color: '#FFFFFF',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1rem',
      marginBottom: '16px',
    },
    link: {
      display: 'block',
      color: 'rgba(255,255,255,0.6)',
      fontSize: '0.875rem',
      marginBottom: '10px',
      transition: 'color 0.2s',
    },
    divider: {
      borderColor: 'rgba(255,255,255,0.1)',
      margin: '0 0 24px',
    },
    bottom: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
      fontSize: '0.8rem',
      color: 'rgba(255,255,255,0.4)',
    },
    switcher: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
    },
  };

  return (
    <footer style={style.wrap}>
      <div style={style.inner}>
        <div style={style.grid}>
          <div>
            <div style={style.heading}>{config.propertyName}</div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.7', maxWidth: '240px' }}>
              Un appartamento moderno nel centro di Cesena. Lucea Collection.
            </p>
          </div>
          <div>
            <div style={style.heading}>Navigazione</div>
            <a href="#appartamento" style={style.link}>{t.nav.appartamento}</a>
            <a href="#esperienza" style={style.link}>{t.nav.esperienza}</a>
            <a href="#come-funziona" style={style.link}>{t.nav.comeFunziona}</a>
            <a href="#recensioni" style={style.link}>{t.nav.recensioni}</a>
            <a href="#posizione" style={style.link}>{t.nav.posizione}</a>
          </div>
          <div>
            <div style={style.heading}>Contatti</div>
            <a href={`tel:${contactInfo.phone}`} style={style.link}>{contactInfo.phone}</a>
            <a href={`mailto:${contactInfo.email}`} style={style.link}>{contactInfo.email}</a>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" style={style.link}>Instagram</a>
          </div>
          <div>
            <div style={style.heading}>Romagna Affitti Brevi</div>
            <a href={contactInfo.web_it} target="_blank" rel="noopener noreferrer" style={style.link}>romagna-affitti-brevi.it</a>
            <a href={contactInfo.web_en} target="_blank" rel="noopener noreferrer" style={style.link}>romagna-short-stay.com</a>
            <a href={config.airbnbUrl} target="_blank" rel="noopener noreferrer" style={style.link}>Airbnb</a>
          </div>
        </div>
        <hr style={style.divider} />
        <div style={style.bottom}>
          <span>&copy; {new Date().getFullYear()} {t.footer.copyright}</span>
          <div style={style.switcher}>
            <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>IT</span>
            <span>|</span>
            <a href={config.langEN} style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>EN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
