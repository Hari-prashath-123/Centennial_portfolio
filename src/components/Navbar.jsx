import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const scrollTo = (id) => {
    // If not on home page, navigate to home first, then maybe scroll (or just go home)
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="navbar-logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
          <div>
            <span className="navbar-logo-name">
              Centennial<span className="portfolio-word">Portfolio</span>
            </span>
            <div className="navbar-logo-sub">BUILD YOUR DIGITAL IDENTITY</div>
          </div>
        </a>

        <div className="navbar-links">
          <button onClick={() => navigate('/register')}>Get Started</button>
          <button onClick={() => scrollTo('features')}>Features</button>
          <button onClick={() => scrollTo('pricing')}>Pricing</button>
          <button onClick={() => scrollTo('faq')}>FAQ</button>
          <button className="btn-go-premium" onClick={() => navigate('/register')}>
            Go Premium
          </button>
        </div>
      </div>
    </nav>
  );
}
