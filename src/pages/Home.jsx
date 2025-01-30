import React from "react";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import heroImage from "../assets/hero-image.jpg"; // Import the image

const Home = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-green-400 to-green-600 text-white">
      {/* Hero Section */}
      <div className="hero min-h-screen flex items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Hero Text */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Welcome to <span className="text-yellow-300">My Portfolio!</span>
            </h1>
            <p className="text-xl opacity-90">I am Biniyam Moges, a Web & Mobile App Developer.</p>
            <a
              href="#projects"
              className="inline-block bg-white text-green-500 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Hero"
              className="w-80 h-80 md:w-96 md:h-96 rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="mt-20 px-6 space-y-16">
        <About />
        <Projects />
        <Contact />
      </main>
    </section>
  );
};

export default Home;
