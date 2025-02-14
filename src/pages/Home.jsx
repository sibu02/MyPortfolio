import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home">
    <div className="bg-gray-900 text-white h-[40rem] flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Hi, I'm Sibu Sundar Das
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Java Developer | Spring Boot | Microservices | Full Stack Developer | Data Structures & Algorithms
        </motion.p>
        
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="/resume.pdf"
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition"
            download
          >
            Download Resume
          </a>
          <a
            href="contact"
            className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Home;
