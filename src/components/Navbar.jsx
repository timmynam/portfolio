import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-24 w-full items-center justify-between bg-[#39670F] px-12">
      {/* Left Side of Navigation Bar */}
      <div>
        <a href="#home-section" className="font-bold text-2xl text-white">
          timmy thai
        </a>
      </div>
      {/* Right Side of Navigation Bar */}
      <div className="right flex">
        <a
          href="#about-section"
          className="ml-8 font-medium text-white no-underline transition-colors duration-300 ease-in-out hover:text-[blanchedalmond]"
        >
          about
        </a>
        <a
          href="#projects-section"
          className="ml-8 font-medium text-white no-underline transition-colors duration-300 ease-in-out hover:text-[blanchedalmond]"
        >
          projects
        </a>
        <a
          href="#skills-section"
          className="ml-8 font-medium text-white no-underline transition-colors duration-300 ease-in-out hover:text-[blanchedalmond]"
        >
          skills
        </a>
        <a
          href="#contact-section"
          className="ml-8 font-medium text-white no-underline transition-colors duration-300 ease-in-out hover:text-[blanchedalmond]"
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
