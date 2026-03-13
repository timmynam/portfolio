import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
