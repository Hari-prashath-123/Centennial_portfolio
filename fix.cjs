const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');
const marker = '  .go-to-top { bottom: 90px; }\r\n}';
let idx = content.indexOf(marker);
if (idx === -1) {
  const marker2 = '  .go-to-top { bottom: 90px; }\n}';
  idx = content.indexOf(marker2);
}
if (idx !== -1) {
  // Find where the marker ends
  const endIdx = content.indexOf('}', idx) + 1;
  const newContent = content.slice(0, endIdx) + '\n\n' + `/* --- AUTH PAGES (Login / Register) --- */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 85px);
  padding: 40px 20px;
}

.auth-card {
  background: #0d0d0f;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 24px;
  padding: 48px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.auth-title {
  color: white;
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: -1px;
}

.auth-subtitle {
  color: #a0a0b8;
  font-size: 16px;
  margin-bottom: 36px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.auth-row {
  display: flex;
  gap: 16px;
}

.auth-row .auth-input {
  flex: 1;
}

.auth-input {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  padding: 18px 20px;
  color: white;
  font-size: 15px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.auth-input:focus {
  border-color: rgba(255,255,255,0.3);
}

.auth-input::placeholder {
  color: #555566;
  font-weight: 500;
}

.btn-auth-primary {
  background: white;
  color: black;
  border: none;
  border-radius: 14px;
  padding: 18px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: opacity 0.2s;
}

.btn-auth-primary:hover {
  opacity: 0.9;
}

.btn-auth-secondary {
  background: #1e1e21;
  color: white;
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 14px;
  padding: 18px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: background 0.2s;
}

.btn-auth-secondary:hover {
  background: #252528;
}

.auth-divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 16px 0;
}

.auth-divider::before,
.auth-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.auth-divider span {
  padding: 0 16px;
  color: #555566;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
}

.btn-auth-google {
  background: white;
  color: black;
  border: none;
  border-radius: 14px;
  padding: 18px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: opacity 0.2s;
}

.btn-auth-google:hover {
  opacity: 0.9;
}
`;
  fs.writeFileSync('src/index.css', newContent);
  console.log('Fixed CSS');
} else {
  console.log('Marker not found');
}
