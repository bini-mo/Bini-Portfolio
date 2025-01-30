import React from "react";
import heroImage from "../assets/hero-image.jpg"; // Import the image

const ContactPage = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-6 py-12">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={heroImage}
          alt="Contact"
          className="w-72 h-72 md:w-96 md:h-96 rounded-lg shadow-xl object-cover"
        />
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 max-w-lg bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">Contact Me</h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 w-full transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-green-600">My Contacts</h2>
          <p className="text-gray-700 mt-2">
            📞 Phone:{" "}
            <a href="tel:+251979075400" className="text-blue-500 hover:underline">
              0979075400
            </a>
          </p>
          <p className="text-gray-700">
            ✉️ Email:{" "}
            <a href="mailto:biniyammoges1@hotmail.com" className="text-blue-500 hover:underline">
              biniyammoges1@hotmail.com
            </a>
          </p>
          <p className="text-gray-700">
            📩 Telegram:{" "}
            <a href="https://t.me/somethg" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              @somethg
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
