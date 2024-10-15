import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDatabase } from 'react-icons/fa';

const skillsData = [
  { name: 'Python (Django)', icon: FaPython },
  { name: 'JavaScript (React)', icon: FaReact },
  { name: 'AI/ML (Hugging Face models, scikit-learn, NLTK, Pandas)', icon: FaPython },
  { name: 'Databases (SQLite, MongoDB)', icon: FaDatabase },
  { name: 'Version Control (Git, GitHub)', icon: FaPython },
  { name: 'Frontend (React, HTML, CSS, Tailwind CSS)', icon: FaReact },
];

function Skills() {
  return (
    <div className="skills py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <skill.icon className="text-4xl text-blue-500 mr-4" />
            <span className="text-lg text-gray-800 dark:text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;