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
          <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="Mohamed Yasir" className="w-full h-full object-cover rounded-full" />
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
        AI Software Engineer Intern
      </motion.h2>
      <motion.p
        className="text-xl max-w-3xl mx-auto mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
      >
        Software engineer specializing in building intelligent applications by integrating
        state-of-the-art AI models and APIs. Experienced in developing web-based AI solutions
        using Hugging Face transformers and other pre-trained models. Proficient in creating
        user-friendly applications that leverage natural language processing, computer vision,
        and other AI capabilities. Skilled in Python, React, and modern web technologies with a
        focus on seamless AI integration and optimal user experience.
      </motion.p>
      <motion.div
        className="flex justify-center space-x-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
      >
        <a href="https://github.com/DevYasa" className="text-4xl text-gray-700 hover:text-gray-900">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/mhdyasir2001" className="text-4xl text-blue-700 hover:text-blue-900">
          <FaLinkedin />
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Home;
