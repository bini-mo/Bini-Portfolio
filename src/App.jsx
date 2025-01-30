import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-0"> {/* Ensures content starts below the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
