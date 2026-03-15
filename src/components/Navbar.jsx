import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#39670F] px-6 py-4 md:px-16 md:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#home-section"
          className="font-bold text-xl md:text-2xl text-white"
        >
          timmy thai
        </a>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white mb-1" />
          <span className="block h-0.5 w-6 bg-white mb-1" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>

        <div
          className={`absolute left-0 top-full z-40 w-full bg-[#39670F] md:static md:w-auto md:bg-transparent ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="md:flex md:items-center md:gap-8 p-4 md:p-0">
            <a
              href="#about-section"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-white md:py-0 md:text-white md:hover:text-[blanchedalmond] transition-colors"
            >
              about
            </a>
            <a
              href="#projects-section"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-white md:py-0 md:text-white md:hover:text-[blanchedalmond] transition-colors"
            >
              projects
            </a>
            <a
              href="#skills-section"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-white md:py-0 md:text-white md:hover:text-[blanchedalmond] transition-colors"
            >
              skills
            </a>
            <a
              href="#contact-section"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-white md:py-0 md:text-white md:hover:text-[blanchedalmond] transition-colors"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
