import React, { useState } from "react";
import { motion } from "framer-motion";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { div } from "framer-motion/client";

const project = [
  {
    title: "Rule Engine with AST Visualization",
    description:
      "A powerful Rule Engine application that leverages Abstract Syntax Tree (AST) structures for creating, modifying, combining, and evaluating rules. This app is designed to process complex rule conditions and provide a user-friendly UI for managing and visualizing these rules.",
    techStack: ["Java", "Spring Boot", "Data Structures and Algorithms","React","Tailwind Css"],
    previews: ["https://github.com/sibu02/RULE-ENGINE-WITH-AST-UI/raw/main/public/projectDemo/1.png", "https://github.com/sibu02/RULE-ENGINE-WITH-AST-UI/raw/main/public/projectDemo/5.png","https://github.com/sibu02/RULE-ENGINE-WITH-AST-UI/raw/main/public/projectDemo/2.png","https://github.com/sibu02/RULE-ENGINE-WITH-AST-UI/raw/main/public/projectDemo/4.png"],
    liveDemo: "#",
    github: "https://github.com/sibu02/RULE-ENGINE-WITH-AST-UI",
  },
  {
    title: "Weather Monitoring App",
    description:
      "A real-time Weather Monitoring application designed for tracking, processing, and visualizing weather data from multiple cities. This app offers configurable data retrieval, dynamic visualizations, alerts for extreme weather conditions, and a streamlined user interface for exploring weather trends.",
    techStack: ["React", "Node.js", "Redis", "OpenWeatherMap API"],
    previews: ["https://github.com/sibu02/Weather-Monitoring/raw/main/src/assets/Projectdemo/1.png", "https://github.com/sibu02/Weather-Monitoring/raw/main/src/assets/Projectdemo/2.png"],
    liveDemo: "#",
    github: "https://github.com/sibu02/Weather-Monitoring",
  },
  {
    title: "Offer-Zone",
    description:
      "OfferZone is a full-stack e-commerce platform developed using Java, Spring Boot, MySQL, React, and Docker. The application includes robust features such as advanced product filtering, user authentication, order tracking, payment gateway integration, and an admin panel to manage categories and orders. Despite my attempts to deploy the Dockerized version, the large image size exceeded platform limitations, so I’m showcasing the project through GitHub.",
    techStack: ["React", "Spring Boot", "MongoDB", "Tailwind CSS"],
    liveDemo: "#",
    previews: ["https://github.com/sibu02/offerZoneUi/raw/main/public/projectDemo/s1.png", "https://github.com/sibu02/offerZoneUi/raw/main/public/projectDemo/s8.png","https://github.com/sibu02/offerZoneUi/raw/main/public/projectDemo/s15.png","https://github.com/sibu02/offerZoneUi/raw/main/public/projectDemo/s5.png","https://github.com/sibu02/offerZoneUi/raw/main/public/projectDemo/s2.png","https://github.com/sibu02/offerZoneUi/raw/main/public/projectDemo/s7.png"],
    github: "https://github.com/sibu02/offerZoneUi",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);

  const previewImage = selectedProject?.previews?.map((preview, idx) => {
    return <div className="p-2 m-2">
      <img
        key={idx}
        src={preview}
        alt={`Screenshot ${idx + 1}`}
        className="h-[14rem] w-[20rem] rounded-lg object-cover"
      />
    </div>
  })
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold mb-8 text-center"
          data-aos="fade-down"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description.substring(0,200)}</p>
              <h4 className="font-semibold mb-2">Tech Stack:</h4>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 m-5">
            <motion.div
              className="bg-white p-6 rounded-lg max-w-lg w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <h2 className="text-gray-900 font-bold">{selectedProject.title}</h2>
              <p className="text-gray-600 mt-2">{selectedProject.description}</p>

              <div className="mt-4">
                <h4 className="text-gray-700 font-semibold">Tech Stack:</h4>
                <ul className="ml-6 mt-1 flex flex-wrap">
                  {selectedProject.techStack.map((tech, index) => (
                    <li className="text-gray-500" key={index}>{tech}{index == selectedProject?.techStack.length-1?'.':',\u00A0'}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-gray-700 font-semibold">Previews:</h4>
                {/* Alice Carousel */}
                <div>
                  <AliceCarousel
                    items={previewImage}
                    autoPlay
                    autoPlayInterval={1000}
                    disableButtonsControls
                    disableDotsControls
                    responsive={{
                      0: { items: 2 },
                      768: { items: 3 },
                      1024: { items: 4 },
                    }}
                  />
                </div>
              </div>

              {selectedProject.github && (
                <div className="mt-4"><a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-500"
                >
                  View Project on GitHub
                </a></div>
              )}
               <button
                onClick={closeModal}
                className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
