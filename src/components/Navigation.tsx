import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onEnrollClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onEnrollClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (id: string, label: string) => {
    if (label === 'Enroll Now') {
      onEnrollClick();
      setIsMobileMenuOpen(false);
    } else {
      scrollToSection(id);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Curriculum', id: 'curriculum' },
    { label: 'Instructor', id: 'instructor' },
    { label: 'Enroll Now', id: 'pricing' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/70 backdrop-blur-lg py-4' // Updated for new theme
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-[#FF6B00] cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            120-Day Bootcamp
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.id, item.label)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#FF6B00] ${
                  item.label === 'Enroll Now' 
                    ? 'bg-[#FF6B00] text-white px-6 py-2 rounded-full hover:bg-[#FF6B00]/90 hover:text-white' // FIX: Added hover:text-white
                    : 'text-[#BDBDBD]'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-black/70 backdrop-blur-lg rounded-lg p-4" // Updated for new theme
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.id, item.label)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                  item.label === 'Enroll Now'
                    ? 'bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 mt-2'
                    : 'text-[#BDBDBD] hover:text-[#FF6B00] hover:bg-white/5'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;