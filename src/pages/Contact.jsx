import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-green-500">Contact Me</h2>
        <p className="text-gray-700">Feel free to reach out for collaborations or inquiries!</p>
        <form className="max-w-xl mx-auto mt-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
