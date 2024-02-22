import React from "react";

/*-------------------COMPONENTS--------------------*/
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import NavBar from "./components/NavBAr.jsx";
import Contact from "./components/Contact.jsx";
import FooterElement from "./components/FooterElement.jsx";


const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]" >
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Contact />
      </div>
      <FooterElement />
    </main>
  );
}
export default Home;