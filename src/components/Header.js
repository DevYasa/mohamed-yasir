// Header.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#home" className="text-xl font-bold">Mohamed Yasir</a>
          </motion.div>
          <motion.ul
            className="flex space-x-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            <li>
              <button onClick={() => setDarkMode(!darkMode)} className="focus:outline-none">
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
              </button>
            </li>
          </motion.ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
