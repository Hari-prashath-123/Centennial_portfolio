import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const badges = [
    { emoji: '⚡', text: 'No Hidden Charges' },
    { emoji: '💰', text: 'No VAT / GST' },
    { emoji: '🚀', text: '3-Day Free Trial' },
    { emoji: '🌐', text: 'Free Hosting' },
    { emoji: '🛠', text: '24/7 Support' },
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Get Your
            <span className="dream">Dream</span>
            <span className="portfolio-word">Portfolio</span>
          </h1>
          <p className="hero-subtitle">Starting Less Than a Burger 🍔</p>
          <p className="hero-desc">
            Create a stunning portfolio website with modern recruiter-focused
            design and powerful personal branding.
          </p>

          <div className="hero-badges">
            {badges.map((b) => (
              <span key={b.text} className="badge">
                {b.emoji} {b.text}
              </span>
            ))}
          </div>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => navigate('/register')}>
              Create My Portfolio
            </button>
            <button className="btn-secondary" onClick={() => navigate('/login')}>
              Login
            </button>
            <button className="btn-secondary" onClick={() => navigate('/demo')}>
              View Demo
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Portfolios</div>
            </div>
            <div>
              <div className="hero-stat-value">99.9%</div>
              <div className="hero-stat-label">Uptime</div>
            </div>
            <div>
              <div className="hero-stat-value">24/7</div>
              <div className="hero-stat-label">Support</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Portfolio Preview Card */}
        <div className="hero-right">
          <div className="portfolio-card">
            <div className="pcard-top">
              <div>
                <div className="pcard-name">Emma Johnson</div>
                <div className="pcard-role">Senior UI/UX Designer</div>
                <span className="pcard-status">
                  <span className="pcard-status-dot" />
                  Available for work
                </span>
              </div>
              <div className="pcard-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>

            <div className="pcard-section">
              <div className="pcard-section-title">About</div>
              <div className="pcard-section-text">
                I design modern, user-centric digital experiences focused on
                usability, performance and conversion.
              </div>
            </div>

            <div className="pcard-section">
              <div className="pcard-section-title">Skills</div>
              <div className="pcard-skills">
                {['UI Design', 'UX Research', 'User Testing'].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="pcard-stats-row">
              <div className="pcard-stat">
                <div className="pcard-stat-label">Projects</div>
                <div className="pcard-stat-value">48+</div>
                <div className="pcard-stat-sub">Completed successfully</div>
              </div>
              <div className="pcard-stat">
                <div className="pcard-stat-label">Experience</div>
                <div className="pcard-stat-value">5+ Yrs</div>
                <div className="pcard-stat-sub">Industry experience</div>
              </div>
            </div>

            <div className="pcard-exp">
              <div className="pcard-exp-title">Experience</div>
              <ul className="pcard-exp-list">
                <li>Designed SaaS dashboards for startup clients</li>
                <li>Improved user conversion rates by 35%</li>
                <li>Built scalable design systems for web &amp; mobile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
