const fs = require('fs');
const newCss = `
.auth-forgot {
  text-align: left;
  margin-top: -8px;
  margin-bottom: 8px;
}

.auth-forgot a {
  color: #a0a0b8;
  font-size: 13px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.auth-forgot a:hover {
  color: white;
}

/* --- DEMO PORTFOLIO VIEW --- */
.demo-portfolio {
  min-height: calc(100vh - 85px);
  background: #000;
  color: white;
  padding-bottom: 60px;
}

.dp-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
}

.dp-logo {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.dp-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.dp-links a {
  color: #a0a0b8;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s;
}

.dp-links a:hover {
  color: white;
}

.dp-settings {
  color: #a0a0b8;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.dp-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  max-width: 1200px;
  margin: 0 auto;
}

.dp-hero-left {
  flex: 1;
}

.dp-title {
  font-size: 72px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -2px;
}

.dp-underline {
  border-bottom: 6px solid #e2e2e2;
  padding-bottom: 4px;
}

.dp-subtitle {
  font-size: 32px;
  font-weight: 700;
  color: #d1d1e0;
  margin-bottom: 16px;
}

.dp-desc {
  font-size: 18px;
  color: #a0a0b8;
  margin-bottom: 40px;
}

.dp-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.dp-btn-primary {
  background: white;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 16px 28px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: opacity 0.2s;
}

.dp-btn-primary:hover {
  opacity: 0.9;
}

.dp-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
}

.dp-social-icon svg {
  width: 26px;
  height: 26px;
  fill: currentColor;
}

.dp-hero-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.dp-image-placeholder {
  width: 440px;
  height: 440px;
  border-radius: 50%;
  border: 4px solid #222;
  background: #111;
}

@media (max-width: 1024px) {
  .dp-hero {
    flex-direction: column;
    padding: 60px 40px;
    text-align: center;
    gap: 60px;
  }
  .dp-hero-right {
    justify-content: center;
  }
  .dp-actions {
    justify-content: center;
  }
  .dp-nav {
    padding: 24px;
  }
  .dp-links {
    display: none;
  }
}
`;
fs.appendFileSync('src/index.css', newCss, 'utf8');
