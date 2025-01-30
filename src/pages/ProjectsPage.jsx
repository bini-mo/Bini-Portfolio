import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
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
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
