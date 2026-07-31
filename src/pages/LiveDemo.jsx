import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LiveDemo() {
  const [showDemo, setShowDemo] = useState(false);
  const navigate = useNavigate();

  if (showDemo) {
    return (
      <div className="demo-portfolio">
        <nav className="dp-nav">
          <div className="dp-logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Portfolio</div>
          <div className="dp-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
            <span className="dp-settings">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </span>
            <button className="btn-go-premium" style={{marginLeft: '10px'}} onClick={() => navigate('/')}>Go Premium</button>
          </div>
        </nav>
        <div className="dp-hero">
          <div className="dp-hero-left">
            <h1 className="dp-title">Hi, I'm <span className="dp-underline">Ashwani</span><br/>Kumar Chauhan</h1>
            <h2 className="dp-subtitle">MERN Stack Developer</h2>
            <p className="dp-desc">Passionate about creating responsive applications.</p>
            <div className="dp-actions">
              <button className="dp-btn-primary">DOWNLOAD CV</button>
              <span className="dp-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.53-4.47-10-10-10z"/></svg>
              </span>
              <span className="dp-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z"/></svg>
              </span>
            </div>
          </div>
          <div className="dp-hero-right">
            <div className="dp-image-placeholder"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="register-container">
      <div className="auth-card">
        <h2 className="auth-title">Start Instant Demo</h2>
        <p className="auth-subtitle">Preview your interactive portfolio dashboard immediately.</p>
        
        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setShowDemo(true); }}>
          <input type="text" placeholder="Enter your name" className="auth-input" />
          
          <button type="submit" className="btn-auth-primary" style={{marginTop: '24px'}}>Start Demo</button>
        </form>
      </div>
    </section>
  );
}
