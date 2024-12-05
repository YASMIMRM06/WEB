import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './páginas/Home';
import História from './páginas/História';
import Contato from './páginas/Contato';

function App() {
  return (
    <Router>
      <Menu />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<História />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
