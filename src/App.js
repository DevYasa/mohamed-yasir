// App.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <motion.main
        className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section id="home"><Home /></section>
        <section id="projects" className="py-20"><Projects /></section>
        <section id="skills" className="py-20"><Skills /></section>
        <section id="contact" className="py-20"><Contact /></section>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;