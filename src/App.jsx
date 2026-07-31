import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LiveDemo from './pages/LiveDemo';
import CookieBanner from './components/CookieBanner';
import GoToTop from './components/GoToTop';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/demo" element={<LiveDemo />} />
        </Routes>
        <CookieBanner />
        <GoToTop />
      </div>
    </Router>
  );
}

export default App;
