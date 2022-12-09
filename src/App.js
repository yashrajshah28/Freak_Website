import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
    </main>
    </div>
  )
}

export default App;
