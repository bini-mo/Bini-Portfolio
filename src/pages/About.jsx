import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-green-500">About Me</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          I am a 3rd-year Information Science student with a passion for developing web and mobile applications. 
          I specialize in creating user-friendly, modern, and responsive designs.
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-500">1+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-500">10+</h3>
            <p className="text-gray-600">Completed Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
