import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LiveDemo from './pages/LiveDemo';
import CookieBanner from './components/CookieBanner';
import GoToTop from './components/GoToTop';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {location.pathname !== '/demo' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demo" element={<LiveDemo />} />
      </Routes>
      <CookieBanner />
      {location.pathname !== '/demo' && <GoToTop />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
