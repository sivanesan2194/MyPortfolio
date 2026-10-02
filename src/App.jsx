import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-[#080C14] text-[#F3F4F6] relative selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Skip to Content for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-gray-950 focus:rounded-md focus:font-mono focus:text-xs focus:font-bold focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Atmospheric Background Lighting */}
      <div className="fixed inset-0 bg-radial-grid pointer-events-none -z-10" />
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
