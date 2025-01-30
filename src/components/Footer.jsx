import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-lg">© 2025 Biniyam Moges. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
