import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import PrizePool from './pages/PrizePool';
import Rules from './pages/Rules';
import Sponsors from './pages/Sponsors';
import NeuralBackground from './components/NeuralBackground';

function App() {
  return (
    <Router>
      <div className="antialiased text-gray-100 selection:bg-neon-green selection:text-black">
        <NeuralBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/prizepool" element={<PrizePool />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
