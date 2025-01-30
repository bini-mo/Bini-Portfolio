import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
