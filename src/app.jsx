// App.jsx (o cualquier otro archivo principal de tu aplicación)
import React, { useState } from 'react';
import Nav from './nav.jsx';
import Header from './Header.jsx';
import Section from './section.jsx';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <Section />
    </div>
  );
}

export default App;
