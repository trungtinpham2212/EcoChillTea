import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FallingCoffee from './components/FallingCoffee';

function App() {
  return (
    <div className="App relative">
      <FallingCoffee />
      <Header />
      <Hero />
      <About />
      <Workshop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
