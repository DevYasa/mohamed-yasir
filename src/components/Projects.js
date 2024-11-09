import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: "CodeLumina - AI-Powered Code Explainer",
    description: "Full-stack web application using React and Django to provide AI-driven code explanations.",
    techStack: "React, Redux, Django REST API, CodeBERT, Tailwind CSS, Git, GitHub Actions",
    url: "https://github.com/DevYasa/codeLumina",
    image: `${process.env.PUBLIC_URL}/images/code-lumina.JPG`,
    videoId: "f_8lprMBpew"
  },
  {
    title: "TalentSphere - AI-Driven Resume Analyzer",
    description: "Web application using React and Django to analyze resumes and match them with job positions.",
    techStack: "React, Django, Hugging Face Transformers, Git",
    url: "https://github.com/DevYasa/TalentSphere-Resume-Analyzer",
    image: `${process.env.PUBLIC_URL}/images/talent-sphere.JPG`,
    videoId: "825WpmARETM"
  },
  {
    title: "TaskMaster - Task Management App",
    description: "A task management app built with React and Firebase for real-time data synchronization.",
    techStack: "React, Firebase, Tailwind CSS, JavaScript",
    url: "https://github.com/DevYasa/TaskMaster",
    image: `${process.env.PUBLIC_URL}/images/task-master.JPG`,
    videoId: "A2-Bndv0ihQ"
  },
  {
    title: "ChatBotX - AI-powered Chatbot",
    description: "A chatbot application using React and TensorFlow.js for natural language processing.",
    techStack: "React, TensorFlow.js, Node.js, Express",
    url: "https://github.com/DevYasa/ChatBotX",
    image: `${process.env.PUBLIC_URL}/images/chat-bot.JPG`,
    videoId: "C3y9APOQj1I"
  },
  {
    title: "DevConnect - Developer Community",
    description: "A platform for developers to connect and share ideas, built with React and Node.js.",
    techStack: "React, Node.js, Express, MongoDB, Socket.io",
    url: "https://github.com/DevYasa/DevConnect",
    image: `${process.env.PUBLIC_URL}/images/dev-connect.JPG`,
    videoId: "m5jwfbhrgU8"
  },
  {
    title: "BudgetTrack - Personal Finance Tracker",
    description: "An app to help users track their personal finances and set budgets.",
    techStack: "React, Firebase, Tailwind CSS",
    url: "https://github.com/DevYasa/BudgetTrack",
    image: `${process.env.PUBLIC_URL}/images/budget-track.JPG`,
    videoId: "M6x3xz4ATYI"
  }
];

function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideoModal = (videoId) => {
    setSelectedVideo(videoId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="projects py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tech Stack: {project.techStack}</p>
              <div className="flex space-x-4">
                <a
                  href={project.url}
                  className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  View on GitHub
                </a>
                <button
                  onClick={() => openVideoModal(project.videoId)}
                  className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
                >
                  Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeVideoModal}
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Project Demo"
              className="w-full h-80"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeVideoModal}
              className="block w-full py-3 text-center text-gray-500 hover:text-gray-700 dark:text-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;