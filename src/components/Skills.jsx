import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaC } from "react-icons/fa6";

const Skills = () => {
  return (
    <section
      id="skills-section"
      className="min-h-[20vh] flex justify-center pt-20 pb-20"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-6 md:mb-12 text-2xl items-center flex justify-center gap-2">
          <span>/ </span>
          <h2 className="relative inline-block">skills</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-4xl sm:text-5xl md:text-6xl text-green-700">
          <span className="hover:text-yellow-400 transition-colors cursor-pointer">
            <IoLogoJavascript />
          </span>
          <span className="hover:text-blue-500 hover:scale-125 transition-all cursor-pointer">
            <FaCss />
          </span>
          <span className="hover:text-gray-400 hover:scale-125  transition-all cursor-pointer">
            <FaGithub />
          </span>
          <span className="hover:text-orange-500 hover:scale-125    transition-all cursor-pointer">
            <FaHtml5 />
          </span>
          <span className="hover:text-blue-400 hover:scale-125  transition-all cursor-pointer">
            <FaPython />
          </span>
          <span className="hover:text-blue-600 hover:scale-125  transition-all cursor-pointer">
            <TbSql />
          </span>
          <span className="hover:text-pink-500 hover:scale-125 transition-all cursor-pointer">
            <FaFigma />
          </span>
          <span className="hover:text-blue-300 hover:scale-125 transition-all cursor-pointer">
            <FaC />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
