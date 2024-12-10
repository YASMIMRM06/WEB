// Importa React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa el archivo principal de la aplicación
import App from './App';

// Establece el punto de entrada en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
