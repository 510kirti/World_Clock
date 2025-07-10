
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AlarmPage from './pages/AlarmPage';
import AddClockPage from './pages/AddClockPage';
import ZoneDetailPage from './pages/ZoneDetailPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top shadow">
          <Link className="navbar-brand fw-bold" to="/">
            World Clock
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alarm">Alarm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-clock">Add Clock</Link>
              </li>
            </ul>

            <div className="form-check form-switch me-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeSwitch"
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="form-check-label" htmlFor="darkModeSwitch">
                {darkMode ? 'Dark' : 'Light'} Mode
              </label>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home time={time} />} />
          <Route path="/alarm" element={<AlarmPage time={time} />} />
          <Route path="/add-clock" element={<AddClockPage time={time} />} />
          <Route path="/zone/:zone" element={<ZoneDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
