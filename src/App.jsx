import './App.css';

import React from 'react';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import NavBar from './components/NavBar';

import About from './components/About';

import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <About></About>
      <Experience></Experience>

      <Portfolio></Portfolio>

      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
