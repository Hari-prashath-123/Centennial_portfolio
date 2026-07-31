import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookiesAccepted', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        We use cookies to improve your experience, analyze traffic, and support
        analytics. You can accept or reject non-essential cookies.
      </p>
      <div className="cookie-btns">
        <button className="btn-cookie-reject" onClick={reject}>
          Reject All
        </button>
        <button className="btn-cookie-accept" onClick={accept}>
          Accept All
        </button>
      </div>
    </div>
  );
}
