import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LP from './pages/LP';
import Portal from './pages/Portal';
import Live from './pages/Live';
import LiveThanks from './pages/LiveThanks';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lp" element={<LP />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/live" element={<Live />} />
        <Route path="/live/obrigado" element={<LiveThanks />} />
      </Routes>
    </Router>
  );
};

export default App;