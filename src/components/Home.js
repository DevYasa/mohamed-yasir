import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <motion.div
      className="home py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-8 relative inline-block"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <div className="w-52 h-52 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
          <img src="/images/me.jpg" alt="Mohamed Yasir" className="w-full h-full object-cover rounded-full" />
        </div>
      </motion.div>
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
      >
        Mohamed Yasir
      </motion.h1>
      <motion.h2
        className="text-3xl font-semibold text-blue-600 mb-6"
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
      >
        AI/ML Engineer Intern
      </motion.h2>
      <motion.p
        className="text-xl max-w-3xl mx-auto mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
      >
        Software engineering undergraduate with a strong foundation in Python programming
        and a growing expertise in AI model integration. Experienced with Python libraries
        for AI/ML and data analysis. Seeking an AI Software Engineer internship to apply
        my skills in developing intelligent systems and to further my knowledge in cutting-edge
        AI technologies.
      </motion.p>
      <motion.div
        className="flex justify-center space-x-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a href="https://github.com/DevYasa" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500 transition-colors">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mhdyasir2001" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500 transition-colors">
          <FaLinkedin />
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Home;