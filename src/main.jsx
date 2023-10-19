import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import './main.css';
import MobileHome from './pages/MobileHome';
import MobileProject from './pages/MobileProject';
import MobileSponsors from './pages/MobileSponsors';
import MobileTeam from './pages/MobileTeam.jsx';
import './main.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          {isMobile ? (
            <>
              <Route path="/" element={<MobileHome />} />
              <Route path="/project" element={<MobileProject />} />
              <Route path="/sponsors" element={<MobileSponsors />} />
              <Route path="/team" element={<MobileTeam />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/team" element={<Team />} />
            </>
          )}
        </Routes>
      </Router>
    </React.StrictMode>
  );
};


// Wrap the render method with a function
const renderApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

// Call renderApp initially
renderApp();

// Handle window resize events to re-render the app
window.addEventListener('resize', renderApp);
