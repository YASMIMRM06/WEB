import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/historia">História</Link></li>
        <li><Link to="/contato">Fale Conosco</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
