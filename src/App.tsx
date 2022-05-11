import React from 'react';
import './App.css';
import Home from './Home';
import Career from './Career';
import TechStack from './TechStack';
import Contact from './Contact';

function App() {
  return (
    <div className="app-wrapper">
      <Home />
      <Career />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
