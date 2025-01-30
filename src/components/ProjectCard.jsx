import React from 'react';

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-500">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
