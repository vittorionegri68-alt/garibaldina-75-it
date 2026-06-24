// ─────────────────────────────────────────────────────────────────────────────
// sections/FAQ.jsx — Domande Frequenti, Garibaldina 75 (versione italiana)
//
// File unico: dati (array qanda) + componente React.
// Stile: usa le variabili CSS native del sito (index.css) — Inter / Plus
// Jakarta Sans, accent blu, radius generosi. Nessun colore hardcoded.
//
// Coerenza obbligatoria con: FAQPage schema in index.html, blocco noscript,
// workflow N8N analisi GEO/AEO. Le 10 domande sono identiche in tutti i punti.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';

const qanda = [
  {
    id: "centro-storico-cesena",
    domanda: "Garibaldina 75 è una buona base per visitare il centro storico di Cesena?",
    risposta: "Sì, l'appartamento si trova proprio nel cuore di Cesena, davanti ai Giardini Pubblici. Piazze, locali e bellezze storiche come la Rocca Malatestiana sono raggiungibili comodamente a piedi, senza bisogno dell'auto.",
  },
  {
    id: "animali-ammessi",
    domanda: "Garibaldina 75 accetta animali domestici?",
    risposta: "Sì, Garibaldina 75 accetta animali domestici. La posizione al piano terra con ingresso indipendente rende gli spostamenti più semplici anche con il proprio cane o gatto.",
  },
  {
    id: "smart-working",
    domanda: "Garibaldina 75 è adatta per lavorare in smart working?",
    risposta: "Sì. L'appartamento dispone di Wi-Fi gratuito, ambienti silenziosi e una cucina completamente attrezzata per gestire i pasti in autonomia durante la giornata di lavoro. La posizione centrale permette pause comode tra una call e l'altra.",
  },
  {
    id: "fuga-romantica",
    domanda: "Garibaldina 75 è adatta per una fuga romantica di coppia?",
    risposta: "Sì, è pensata anche per questo. Travi a vista storiche, soffitti alti 4 metri, letto matrimoniale king size della linea CocoMat e atmosfera curata nei dettagli rendono l'appartamento ideale per un weekend romantico nel centro di Cesena.",
  },
  {
    id: "appartamento-cucina-cesena",
    domanda: "A Cesena si trova un appartamento con cucina per un affitto breve?",
    risposta: "Garibaldina 75 è esattamente questo: un appartamento nel centro di Cesena con cucina completamente attrezzata (piano a induzione, forno, macchinetta del caffè), ideale per soggiorni brevi che uniscono comodità e autonomia.",
  },
  {
    id: "ingresso-indipendente",
    domanda: "Garibaldina 75 ha un ingresso indipendente?",
    risposta: "Sì, l'appartamento si trova al piano terra con accesso indipendente, senza scale o parti condivise con altri ospiti. Una soluzione comoda per chi viaggia con bagagli, animali o desidera maggiore privacy.",
  },
  {
    id: "viaggio-lavoro-cesena",
    domanda: "Garibaldina 75 è una buona scelta per un viaggio di lavoro a Cesena?",
    risposta: "Sì. La posizione centrale permette di raggiungere a piedi uffici, ristoranti e servizi del centro storico. L'appartamento offre Wi-Fi, ambienti silenziosi e tutti i comfort per un soggiorno di lavoro produttivo.",
  },
  {
    id: "famiglie-coppie-cesena",
    domanda: "Garibaldina 75 è adatta a famiglie o solo a coppie?",
    risposta: "L'appartamento ospita fino a 4 persone grazie al letto matrimoniale e al divano letto trasformabile in soggiorno. È adatto sia a coppie in cerca di una fuga romantica che a piccoli nuclei familiari.",
  },
  {
    id: "soggiorni-lunghi",
    domanda: "Garibaldina 75 è comoda per soggiorni più lunghi?",
    risposta: "Sì. La lavatrice in appartamento, la cucina completamente attrezzata e la biancheria fornita gratuitamente rendono comodi anche i soggiorni di più giorni, senza dover uscire per le necessità quotidiane.",
  },
  {
    id: "dove-dormire-cesena",
    domanda: "Dove dormire a Cesena vicino al centro storico?",
    risposta: "Garibaldina 75 si trova proprio nel cuore di Cesena, davanti ai Giardini Pubblici, a pochi passi da piazze, locali e negozi del centro storico. È la soluzione ideale per chi vuole vivere la città a piedi senza rinunciare alla tranquillità.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      style={{ padding: '5.5rem 1.5rem', background: 'var(--color-bg)' }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
            }}
          >
            Domande Frequenti
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
              fontWeight: 700,
              color: 'var(--color-dark)',
              marginTop: '0.6rem',
            }}
          >
            Tutto quello che vuoi sapere su Garibaldina 75
          </h2>
        </div>

        <div
          style={{
            background: 'var(--color-card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
          }}
        >
          {qanda.map((item, i) => (
            <div
              key={item.id}
              style={{
                borderBottom:
                  i === qanda.length - 1 ? 'none' : '1px solid var(--color-border)',
              }}
            >
              <button
                onClick={() => setOpen(open === item.id ? null : item.id)}
                style={{
                  width: '100%',
                  padding: '1.3rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  textAlign: 'left',
                  transition: 'background var(--transition)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    color: 'var(--color-dark)',
                    lineHeight: 1.35,
                  }}
                >
                  {item.domanda}
                </span>
                <span
                  style={{
                    color: 'var(--color-accent)',
                    fontSize: '1.3rem',
                    fontWeight: 300,
                    flexShrink: 0,
                    transform: open === item.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  +
                </span>
              </button>
              {open === item.id && (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    padding: '0 1.5rem 1.4rem',
                    maxWidth: 640,
                  }}
                >
                  {item.risposta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
