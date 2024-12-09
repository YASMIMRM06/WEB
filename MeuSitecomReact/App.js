import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Historia from './components/Historia';
import FaleConosco from './components/FaleConosco';
import './css/styles.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/faleconosco" element={<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
