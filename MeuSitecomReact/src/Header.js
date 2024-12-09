import React from 'react';
import './css/styles.css';

function Header() {
  return (
    <header className="header">
      <img src="./img/logo.png" alt="Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/historia">História</a></li>
          <li><a href="/faleconosco">Fale Conosco</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
