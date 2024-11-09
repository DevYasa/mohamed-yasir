// Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "Machine Learning", level: "Intermediate" },
  { name: "Django", level: "Intermediate" },
  { name: "CSS / Tailwind CSS", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "SQL & NoSQL Databases", level: "Intermediate" }
];

function Skills() {
  return (
    <div className="skills py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
            <p className="text-gray-500 dark:text-gray-300">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;