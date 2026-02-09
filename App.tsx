import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LP from './pages/LP';
import Portal from './pages/Portal';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lp" element={<LP />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </Router>
  );
};

export default App;