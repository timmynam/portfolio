import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";



const Contacts = () => {
  return (
    <section
      id="contact-section"
      className="min-h-[30vh] flex justify-center pt-20 pb-20 bg-[#C1E1C1]"
    >
      <div className="w-full max-w-7xl px-4 flex flex-col items-center">
        <div className="mb-6 md:mb-12 text-2xl items-center flex justify-center gap-2">
          <span>/ </span>
          <h2 className="relative inline-block">contacts</h2>
        </div>
        <p className="text-center text-lg md:text-xl text-gray-700">
          want to get to know me? let's connect!
        </p>
        <div id='contact-icons' className="flex justify-center gap-6 mt-8">
          <a href="https://instagram.com/timmyqthai" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#d62976] transition-colors">
            <FaInstagram size={40} />
          </a>
          <a href="https://github.com/timmynam" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
            <FaGithubAlt size={40} />
          </a>
          <a href="mailto:timmynamthai@gmail.com" className="text-gray-800 hover:text-gray-600 transition-colors">
            <IoMail size={40} />
          </a>
        </div>

</div>
    </section>
  );
};

export default Contacts;
