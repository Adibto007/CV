import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './nav.jsx';
import Header from './Header.jsx';
import Section from './section.jsx';
import './App.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Section />
  </React.StrictMode>,
);
