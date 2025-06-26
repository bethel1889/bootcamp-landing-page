import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Code, Trophy } from 'lucide-react';

const Instructor = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="instructor" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
            Guided by <span className="text-[#FF6B00]">Proven</span> Experts
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Code size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">Lead Instructor</h3>
                  <div className="flex items-center">
                    <Trophy className="text-[#FF6B00] mr-2" size={20} />
                    <span className="text-[#4A90E2] font-semibold">2x National Hackathon Winner</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-[#BDBDBD] leading-relaxed">
                Your lead instructor is a seasoned programmer and two-time national hackathon winner, 
                dedicated to mentoring the next generation of tech talent. With years of industry 
                experience and a passion for education, they bring real-world insights to every lesson.
              </p>
              
              {/* Metrics grid removed for simplicity */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Users className="text-[#FF6B00] mr-4" size={32} />
                <h3 className="text-2xl font-bold text-[#F5F5F5]">Team & Collaboration</h3>
              </div>
              <p className="text-[#BDBDBD] leading-relaxed mb-6">
                This bootcamp is a collaboration between <span className="text-[#FF6B00] font-semibold">Kaizen Labs</span>, 
                a team passionate about practical education, and <span className="text-[#4A90E2] font-semibold">TT Consulting Service LTD</span>, 
                an industry leader in technology services.
              </p>
              
              <div className="flex items-center justify-center space-x-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">KL</span>
                  </div>
                  <p className="text-sm text-[#BDBDBD] font-medium">Kaizen Labs</p>
                </motion.div>

                <div className="w-px h-12 bg-white/20"></div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A90E2] to-[#6BA3E8] rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">TT</span>
                  </div>
                  <p className="text-sm text-[#BDBDBD] font-medium">TT Consulting</p>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300">
                <Award className="text-[#FF6B00] mx-auto mb-2" size={24} />
                <p className="text-xs text-[#BDBDBD]">Expert Mentorship</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-300">
                <Users className="text-[#4A90E2] mx-auto mb-2" size={24} />
                <p className="text-xs text-[#BDBDBD]">Community Support</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300">
                <Trophy className="text-[#FF6B00] mx-auto mb-2" size={24} />
                <p className="text-xs text-[#BDBDBD]">Proven Results</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;