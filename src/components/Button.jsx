import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 shadow-md"
    >
      {text}
    </button>
  );
};

export default Button;
