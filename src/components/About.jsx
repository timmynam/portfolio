import React from "react";
import headshot from "../assets/IMG_8923.jpg";

const About = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center bg-[#f8f8f8] py-12 md:py-20"
      id="about-section"
    >
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="mb-6 md:mb-12 text-2xl items-center flex justify-center gap-2">
          <span>/ </span>
          <h2 className="relative inline-block">about me</h2>
          <span className="block h-[3px] w-3/4 bg-[#a8c5a0] rounded-full mt-1 mx-auto"></span>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-base sm:text-lg text-center md:text-left leading-relaxed">
              Hello! My name is Timmy Thai, and I am currently a senior studying
              at the{" "}
              <span className="text-[#04720D]">
                University of Central Florida
              </span>
              , pursuing a Bachelor's Degree in{" "}
              <span className="text-[#04720D]">Information Technology</span>. I
              have a strong passion for technology and cybersecurity, and I am
              hoping to gain experience to better my skillset and better myself
              as a person. I also have received my
              <span className="text-[#04720D]">
                {" "}
                Security+ CompTIA certificate
              </span>
              , along with other certifications such as{" "}
              <span className="text-[#04720D]"> TestOut IT Fundamentals </span>
              and <span>CyberDefense Pro.</span>
            </p>
            <p className="mt-4 text-base sm:text-lg text-center md:text-left leading-relaxed">
              In my free time, I enjoy photography, dancing, spending quality
              time with friends, and being a foodie.
            </p>
          </div>
          <div>
            <img
              src={headshot}
              alt="Headshot"
              className="w-48 h-56 sm:w-56 sm:h-64 md:w-72 md:h-80 object-cover rounded-xl border-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
