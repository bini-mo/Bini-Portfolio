import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      image: '/assets/images/image1.png',
      title: 'Project 1',
      description: 'An innovative web solution for task management.',
    },
    {
      image: '/assets/images/image2.png',
      title: 'Project 2',
      description: 'A mobile app for fitness enthusiasts.',
    },
    {
      image: '/assets/images/image3.jpg',
      title: 'Project 3',
      description: 'A sleek e-commerce platform for online shopping.',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-500">My Projects</h2>
        <p className="text-gray-700 mt-4">Here are some of the projects I've worked on:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
