import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Code, Database, Globe, Brain, Wrench, Briefcase, Trophy } from 'lucide-react';

const Curriculum = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openSessionIndex, setOpenSessionIndex] = useState<number | null>(0);
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  const toggleSession = (index: number) => {
    setOpenSessionIndex(openSessionIndex === index ? null : index);
    // Optional: Close modules when session is closed
    if (openSessionIndex === index) setOpenModuleIndex(null); 
  };

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  const sessions = [
    {
      sessionTitle: "Session 1: The Foundations (First 60 Days)",
      icon: Wrench,
      modules: [
        { title: "Programming Foundations", duration: "Weeks 1-2", icon: Wrench, color: "#FF6B00", topics: ["Command Line Mastery", "Git & GitHub Workflows", "Development Environment Setup", "VS Code & Codespaces"] },
        { title: "Python Fundamentals", duration: "Weeks 3-6", icon: Code, color: "#4A90E2", topics: ["Variables, Operators, Functions", "Loops & Conditionals", "Data Structures & Algorithms", "File I/O & Exception Handling"] },
        { title: "AI and Prompt Engineering", duration: "Weeks 7-8", icon: Brain, color: "#FF6B00", topics: ["AI Fundamentals & LLMs", "Effective Prompt Crafting", "AI-Assisted Development", "Ethical AI Practices"] },
      ]
    },
    {
      sessionTitle: "Session 2: Advanced Development (Final 60 Days)",
      icon: Code,
      modules: [
        { title: "Advanced Python & APIs", duration: "Weeks 9-12", icon: Database, color: "#4A90E2", topics: ["Object-Oriented Programming", "Database Integration (SQL)", "REST APIs with Flask", "Web Scraping & Automation"] },
        { title: "Frontend Development", duration: "Weeks 13-15", icon: Globe, color: "#FF6B00", topics: ["HTML & CSS Mastery", "JavaScript Fundamentals", "DOM Manipulation", "Responsive Design Principles"] },
        { title: "Professional Skills & Capstone", duration: "Weeks 16-17", icon: Briefcase, color: "#4A90E2", topics: ["LinkedIn & Resume Writing", "Freelancing on Upwork", "Full-Stack AI Capstone Project", "Interview Preparation"] },
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
            A Structured 120-Day Journey to <span className="text-[#FF6B00]">Mastery</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#BDBDBD] max-w-3xl mx-auto leading-relaxed">
            Our curriculum is divided into two 60-day sessions, taking you from foundational principles to advanced, job-ready skills.
          </p>
        </motion.div>

        <div className="space-y-6">
          {sessions.map((session, sessionIndex) => {
            const SessionIcon = session.icon;
            const isSessionOpen = openSessionIndex === sessionIndex;
            return (
              <motion.div
                key={sessionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: sessionIndex * 0.1, ease: "easeOut" }}
                className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
              >
                {/* Session Header */}
                <motion.button
                  onClick={() => toggleSession(sessionIndex)}
                  className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-105 bg-gradient-to-br from-[#FF6B00] to-[#FF8533]">
                      <SessionIcon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF6B00] transition-colors duration-300">{session.sessionTitle}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isSessionOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={28} className={`transition-colors duration-300 ${isSessionOpen ? 'text-[#FF6B00]' : 'text-white/50 group-hover:text-[#FF6B00]'}`} />
                  </motion.div>
                </motion.button>

                {/* Modules within Session */}
                <AnimatePresence>
                  {isSessionOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden px-4 md:px-8 pb-4"
                    >
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent mb-4"></div>
                      <div className="space-y-2">
                        {session.modules.map((module, moduleIndex) => {
                          const ModuleIcon = module.icon;
                          const isModuleOpen = openModuleIndex === (sessionIndex * 10 + moduleIndex); // Unique ID for each module
                          return (
                            <div key={moduleIndex} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                              <button
                                onClick={() => toggleModule(sessionIndex * 10 + moduleIndex)}
                                className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 group"
                              >
                                <div className="flex items-center">
                                  <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-105"
                                    style={{ backgroundColor: isModuleOpen ? module.color : '#333' }}
                                  >
                                    <ModuleIcon size={20} className="text-white" />
                                  </div>
                                  <div>
                                    <h4 className={`font-semibold transition-colors duration-300 ${isModuleOpen ? 'text-[#FF6B00]' : 'text-[#F5F5F5] group-hover:text-white'}`}>
                                      {module.title}
                                    </h4>
                                    <p className="text-xs text-[#BDBDBD]">{module.duration}</p>
                                  </div>
                                </div>
                                <motion.div animate={{ rotate: isModuleOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                  <ChevronDown size={20} className={`transition-colors duration-300 ${isModuleOpen ? 'text-[#FF6B00]' : 'text-[#BDBDBD] group-hover:text-white'}`} />
                                </motion.div>
                              </button>
                              <AnimatePresence>
                                {isModuleOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-4 pb-4 pt-0">
                                      <div className="pl-14 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                                        {module.topics.map((topic, topicIndex) => (
                                          <div key={topicIndex} className="flex items-center">
                                            <div className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: module.color }}></div>
                                            <span className="text-[#BDBDBD] text-sm">{topic}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;