import React from 'react';
import './css/styles.css';

function FaleConosco() {
  return (
    <div className="fale-conosco">
      <h1>Fale Conosco</h1>
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" placeholder="Seu nome" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Seu email" />
        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FaleConosco;
