import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './nav.jsx';
import Header from './Header.jsx';
import Section from './section.jsx';
import ScriptLoader from './scriptLoader.jsx'; // Importa el nuevo componente
import './App.css';

const handleScriptLoad = () => {
  // Esta función se ejecutará cuando los scripts se hayan cargado
  // Puedes agregar aquí tu lógica adicional si es necesario
  console.log('Scripts cargados');
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Section />
    {/* Carga de scripts */}
    <ScriptLoader src="src/dark.js" onLoad={handleScriptLoad} />
    <ScriptLoader src="src/menu.js" onLoad={handleScriptLoad} />
  </React.StrictMode>,
);
