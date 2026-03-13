import React from "react";
import Capture from "../assets/Capture.png";
import Matcha from "../assets/matcha.png";
import Philanthropy from "../assets/vasaphilanthropy.png";


const Projects = () => {
  const projects = [
    {
      image: Capture,
      title: "UCF Parking App",
      tech: "Figma",
      link: "https://www.figma.com/design/Tkn89e54MlWNc5dL8SsaI8/Digital-Prototype?node-id=0-1&t=r94GDCutvg5LJooL-1",
      description:
        "A mobile application designed to assist UCF students in finding available parking spaces on campus, providing real-time updates and navigation features.",
    },
    {
      image: Matcha,
      title: "Match-a Matcha!",
      tech: "HTML, CSS, JavaScript",
      link: "https://strawbina.github.io/matchaa/",
      description: "A fun and interactive personality quiz that matches users with a type of matcha based on their answers.",
    },
    {
      image: Philanthropy,
      title: "VASA Philanthropy Website",
      tech: "Figma",
      link: "https://www.vasaphilanthropy.org/",
      description:
        "Designed a modern and accessible website for VASA Philanthropy.",
    },
  ];

  return (
    <section
      id="projects-section"
      className="min-h-screen flex items-center justify-center bg-[#C1E1C1] py-12"
    >
      <div className="w-full max-w-7xl px-4">
        <div className="mb-6 md:mb-12 text-2xl items-center flex justify-center gap-2">
          <span>/ </span>
          <h2 className="relative inline-block">projects</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, idx) => (
            /* Anchor tag so the card is clickable */
            <a 
              key={idx} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block no-underline group"
            >
              <div
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-72 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full border border-transparent hover:border-green-200"
                style={{ minHeight: 420 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md mb-4 object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                  style={{ width: "100%", height: 160, objectFit: "cover" }}
                />
                
                <h3 className="font-bold text-xl mb-1 text-gray-800 group-hover:text-green-800 transition-colors">
                  {project.title}
                </h3>
                
                <div
                  className="italic text-gray-500 mb-2"
                  style={{ fontSize: "1rem" }}
                >
                  {project.tech}
                </div>
                
                <p
                  className="text-center text-gray-700"
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;