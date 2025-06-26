import React from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Opportunity from './sections/Opportunity';
import About from './sections/About';
import Curriculum from './sections/Curriculum';
import Instructor from './sections/Instructor';
import FAQ from './sections/FAQ';
import Pricing from './sections/Pricing';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#000000] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero onEnrollClick={() => setIsModalOpen(true)} />
        <Opportunity />
        <About />
        <Curriculum />
        <Instructor />
        <FAQ />
        <Pricing onEnrollClick={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <EnrollmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;