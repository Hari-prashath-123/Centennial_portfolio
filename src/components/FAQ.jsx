import { useState } from 'react';

const faqs = [
  {
    q: 'Can I use my own custom domain?',
    a: 'Yes. You can connect your personal custom domain anytime for professional branding.',
  },
  {
    q: 'Will my portfolio work on mobile devices?',
    a: 'Absolutely. Every portfolio is fully responsive across desktop, tablet and mobile.',
  },
  {
    q: 'Can I update projects and skills later?',
    a: 'Yes. You can easily add or edit projects, skills, resume and other information anytime.',
  },
  {
    q: 'Is hosting included?',
    a: 'Yes. Hosting is included in all plans so your website stays online smoothly.',
  },
  {
    q: 'Do recruiters really prefer portfolio websites?',
    a: 'Yes. A professional portfolio creates stronger first impressions and increases trust with recruiters and clients.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIdx === i ? ' open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                id={`faq-btn-${i}`}
                aria-expanded={openIdx === i}
              >
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-chevron">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              {openIdx === i && (
                <div className="faq-answer">
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
