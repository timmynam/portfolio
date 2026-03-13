import React from "react";
import { ReactTyped } from "react-typed";
import { GoSmiley } from "react-icons/go";

const Home = () => {
  return (
    <section
      id="home-section"
      className="h-screen flex items-center justify-center bg-[#39670F]"
    >
      <div className="text-center">
        <div className="text-6xl md:text-7xl lg:text-8xl font-medium mb-6 text-[#F8F6F0]">
          <ReactTyped strings={["hey, it's timmy!"]} typeSpeed={90}  />
        </div>
        <div className="mb-8 max-w-2xl mx-auto text-2xl text-white">
          <p className='text-decoration-underline'><a href='https://timmynamthai.myportfolio.com/home' className="hover:text-yellow-400 transition-colors">photography</a> | technology | dance </p>
        </div>
        <GoSmiley size={48} className="text-[#F8F6F0] block mx-auto float" />
      </div>
    </section>
  );
};

export default Home;
