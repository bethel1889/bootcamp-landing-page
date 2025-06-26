import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, Trophy } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
            Learn from the <span className="text-[#FF6B00]">Best</span>.{' '}
            Stand Out from the <span className="text-[#4A90E2]">Rest</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="flex items-center mb-6">
                <Trophy className="text-[#FF6B00] mr-3" size={32} />
                <h3 className="text-2xl font-bold text-[#F5F5F5]">The Harvard Advantage</h3>
              </div>
              
              <p className="text-lg text-[#BDBDBD] leading-relaxed mb-8">
                This is more than just a bootcamp. We heavily incorporate learning resources, 
                problem sets, and project frameworks from prestigious universities like{' '}
                <span className="text-[#FF6B00] font-semibold">Harvard</span> and the{' '}
                <span className="text-[#4A90E2] font-semibold">University of Michigan</span>.
              </p>

              <div className="bg-gradient-to-r from-[#FF6B00]/10 to-[#4A90E2]/10 rounded-2xl p-6 border border-[#FF6B00]/20">
                <div className="flex items-center mb-4">
                  <Award className="text-[#FF6B00] mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-[#F5F5F5]">Official Harvard Certificate</h4>
                </div>
                <p className="text-[#BDBDBD]">
                  Successful graduates will stand a chance to earn an official{' '}
                  <span className="text-[#FF6B00] font-semibold">Harvard certificate</span> in Python, 
                  giving you a globally recognized credential that opens doors worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-8 lg:space-x-12">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#8B0000] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <p className="text-sm text-[#BDBDBD] font-medium">Harvard</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00274C] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <p className="text-sm text-[#BDBDBD] font-medium">Michigan</p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B00] mb-2">100+</div>
                <p className="text-[#BDBDBD]">Problem Sets</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4A90E2] mb-2">15+</div>
                <p className="text-[#BDBDBD]">Real Projects</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B00] mb-2">1:1</div>
                <p className="text-[#BDBDBD]">Mentorship</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4A90E2] mb-2">24/7</div>
                <p className="text-[#BDBDBD]">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;