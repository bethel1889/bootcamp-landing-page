import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Code, Database, Globe, Brain, Wrench, Briefcase, Trophy, Users } from 'lucide-react';

const Curriculum = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      icon: Wrench,
      title: "Programming Foundations",
      duration: "Weeks 1-2",
      color: "#FF6B00",
      topics: [
        "Command Line Mastery",
        "Git & GitHub Workflows",
        "Development Environment Setup",
        "VS Code & Codespaces"
      ]
    },
    {
      icon: Code,
      title: "Python Fundamentals",
      duration: "Weeks 3-6",
      color: "#4A90E2",
      topics: [
        "Variables, Operators, Functions",
        "Loops & Conditionals",
        "Data Structures & Algorithms",
        "File I/O & Exception Handling"
      ]
    },
    {
      icon: Brain,
      title: "AI and Prompt Engineering",
      duration: "Weeks 7-8",
      color: "#FF6B00",
      topics: [
        "AI Fundamentals & LLMs",
        "Effective Prompt Crafting",
        "AI-Assisted Development",
        "Ethical AI Practices"
      ]
    },
    {
      icon: Database,
      title: "Advanced Python & APIs",
      duration: "Weeks 9-12",
      color: "#4A90E2",
      topics: [
        "Object-Oriented Programming",
        "Database Integration (SQL)",
        "REST APIs with Flask",
        "Web Scraping & Automation"
      ]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      duration: "Weeks 13-15",
      color: "#FF6B00",
      topics: [
        "HTML & CSS Mastery",
        "JavaScript Fundamentals",
        "DOM Manipulation",
        "Responsive Design Principles"
      ]
    },
    {
      icon: Briefcase,
      title: "Professional Skills",
      duration: "Week 16",
      color: "#4A90E2",
      topics: [
        "LinkedIn Profile Optimization",
        "Resume Writing & Portfolio",
        "Freelancing on Upwork",
        "Interview Preparation"
      ]
    },
    {
      icon: Trophy,
      title: "Capstone Project",
      duration: "Week 17",
      color: "#FF6B00",
      topics: [
        "Full-Stack Application",
        "AI Integration",
        "Code Review & Optimization",
        "Project Presentation"
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
            A Comprehensive Curriculum for{' '}
            <span className="text-[#FF6B00]">Real-World</span> Mastery
          </h2>
          <p className="text-lg sm:text-xl text-[#BDBDBD] max-w-4xl mx-auto leading-relaxed">
            Our carefully crafted 17-week journey takes you from complete beginner to job-ready developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Module Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {modules.map((module, index) => {
                const ModuleIcon = module.icon;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setActiveModule(index)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 group ${
                      activeModule === index
                        ? 'bg-gradient-to-r from-white/10 to-white/5 border-[#FF6B00]/50'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                          activeModule === index ? 'scale-110' : 'group-hover:scale-105'
                        }`}
                        style={{ backgroundColor: module.color }}
                      >
                        <ModuleIcon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          activeModule === index ? 'text-[#FF6B00]' : 'text-[#F5F5F5] group-hover:text-[#FF6B00]'
                        }`}>
                          {module.title}
                        </h3>
                        <p className="text-sm text-[#BDBDBD]">{module.duration}</p>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={`transition-all duration-300 ${
                          activeModule === index 
                            ? 'text-[#FF6B00] rotate-90' 
                            : 'text-[#BDBDBD] group-hover:text-[#FF6B00]'
                        }`} 
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Module Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10"
              >
                {(() => {
                  const ActiveIcon = modules[activeModule].icon;
                  return (
                    <div className="flex items-center mb-8">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6"
                        style={{ backgroundColor: modules[activeModule].color }}
                      >
                        <ActiveIcon size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#F5F5F5] mb-2">
                          {modules[activeModule].title}
                        </h3>
                        <p className="text-[#BDBDBD]">{modules[activeModule].duration}</p>
                      </div>
                    </div>
                  );
                })()}

                <div className="grid sm:grid-cols-2 gap-4">
                  {modules[activeModule].topics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div 
                        className="w-2 h-2 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"
                        style={{ backgroundColor: modules[activeModule].color }}
                      ></div>
                      <span className="text-[#BDBDBD] group-hover:text-[#F5F5F5] transition-colors duration-300">
                        {topic}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;