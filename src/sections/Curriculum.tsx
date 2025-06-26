import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Code, Database, Globe, Brain, Wrench, Briefcase, Trophy } from 'lucide-react';

const Curriculum = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const modules = [
    {
      icon: Wrench,
      title: "Session 1: The Foundations (First 60 Days)",
      topics: [
        "Module 1: Programming Foundations (Git, CLI, Dev Environment)",
        "Module 2: Python Fundamentals (Data Structures, Algorithms)",
        "Module 3: AI & Prompt Engineering (LLMs, AI-Assisted Development)",
        "Module 4: Intro to Web Concepts (HTTP, APIs)",
      ]
    },
    {
      icon: Code,
      title: "Session 2: Advanced Development (Final 60 Days)",
      topics: [
        "Module 5: Advanced Python & APIs (OOP, Flask, SQL)",
        "Module 6: Frontend Development (HTML, CSS, JavaScript, DOM)",
        "Module 7: Professional Skills (Portfolio, Freelancing, Interviews)",
        "Module 8: Capstone Project (Full-Stack AI Application)",
      ]
    }
  ];

  const allTopics = [
    // Session 1
    { title: "Programming Foundations", duration: "Weeks 1-2", icon: Wrench, color: "#FF6B00", topics: ["Command Line Mastery", "Git & GitHub Workflows", "Development Environment Setup", "VS Code & Codespaces"] },
    { title: "Python Fundamentals", duration: "Weeks 3-6", icon: Code, color: "#4A90E2", topics: ["Variables, Operators, Functions", "Loops & Conditionals", "Data Structures & Algorithms", "File I/O & Exception Handling"] },
    { title: "AI and Prompt Engineering", duration: "Weeks 7-8", icon: Brain, color: "#FF6B00", topics: ["AI Fundamentals & LLMs", "Effective Prompt Crafting", "AI-Assisted Development", "Ethical AI Practices"] },
    // Session 2
    { title: "Advanced Python & APIs", duration: "Weeks 9-12", icon: Database, color: "#4A90E2", topics: ["Object-Oriented Programming", "Database Integration (SQL)", "REST APIs with Flask", "Web Scraping & Automation"] },
    { title: "Frontend Development", duration: "Weeks 13-15", icon: Globe, color: "#FF6B00", topics: ["HTML & CSS Mastery", "JavaScript Fundamentals", "DOM Manipulation", "Responsive Design Principles"] },
    { title: "Professional Skills", duration: "Week 16", icon: Briefcase, color: "#4A90E2", topics: ["LinkedIn Profile Optimization", "Resume Writing & Portfolio", "Freelancing on Upwork", "Interview Preparation"] },
    { title: "Capstone Project", duration: "Week 17", icon: Trophy, color: "#FF6B00", topics: ["Full-Stack Application", "AI Integration", "Code Review & Optimization", "Project Presentation"] },
  ];

  return (
    <section id="curriculum" className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
            A Structured 120-Day Journey to <span className="text-[#FF6B00]">Mastery</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#BDBDBD] max-w-3xl mx-auto leading-relaxed">
            Our curriculum is divided into two 60-day sessions, taking you from foundational principles to advanced, job-ready skills.
          </p>
        </motion.div>

        <div className="space-y-4">
          {allTopics.map((module, index) => {
            const ModuleIcon = module.icon;
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleModule(index)}
                  className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: isOpen ? module.color : '#333' }}
                    >
                      <ModuleIcon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-[#FF6B00]' : 'text-[#F5F5F5] group-hover:text-[#FF6B00]'}`}>
                        {module.title}
                      </h3>
                      <p className="text-sm text-[#BDBDBD]">{module.duration}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown
                      size={24}
                      className={`transition-colors duration-300 ${isOpen ? 'text-[#FF6B00]' : 'text-[#BDBDBD] group-hover:text-[#FF6B00]'}`}
                    />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-6 pt-2">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent mb-4"></div>
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 pl-16">
                          {module.topics.map((topic, topicIndex) => (
                             <div key={topicIndex} className="flex items-center">
                                <div className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: module.color }}></div>
                                <span className="text-[#BDBDBD]">{topic}</span>
                             </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;