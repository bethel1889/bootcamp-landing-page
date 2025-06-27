// File: src/sections/Hero.tsx
// Purpose: Optimized performance and UI. Animations are now faster ("snappier"). The canvas particle count is reduced on mobile devices to improve performance. The main CTA button size is now responsive, using a smaller size for mobile and a larger one for desktops.
// Dependencies: None
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onEnrollClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnrollClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Optimize particle count for mobile
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 0, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(74, 144, 226, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('opportunity');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.3, ease: "easeOut" }}
              className="text-[#FF6B00] block"
            >
              120-Day
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.4, ease: "easeOut" }}
              className="text-[#F5F5F5] block"
            >
              Web Development
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.5, ease: "easeOut" }}
              className="text-[#4A90E2] block"
            >
              and AI Bootcamp
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl lg:text-2xl text-[#BDBDBD] mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Master the essentials of full-stack web development and Artificial Intelligence to launch your career in tech.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.7, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(255, 107, 0, 0.5)" // Enhanced glow
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnrollClick}
            className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Enroll Now - Limited Spots!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8533] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 1, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#BDBDBD] hover:text-[#FF6B00] transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;