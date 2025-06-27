import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, DollarSign, Star, CheckCircle } from 'lucide-react';

interface PricingProps {
  onEnrollClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onEnrollClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    "120-day (2x 60-day sessions) comprehensive curriculum", // Updated
    "Harvard-level learning resources",
    "1-on-1 mentorship sessions",
    "Real-world project portfolio",
    "Harvard certificate opportunity",
    "Internship opportunities for top-performing students", // Added
    "Career guidance & job placement support",
    "Lifetime access to community & 24/7 support" // Merged
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
            Your Journey Starts Here: A Two-Session Path to Mastery
          </h2>
          <p className="text-lg sm:text-xl text-[#BDBDBD] max-w-3xl mx-auto leading-relaxed">
            Our program is structured in two 60-day sessions to provide a deep, manageable learning experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/20 to-[#4A90E2]/20 rounded-3xl blur-xl -z-10"></div>
          
          <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-2xl mb-6 pulse-glow">
                <Star size={40} className="text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#F5F5F5] mb-4">
                Full-Stack & AI Bootcamp
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 mb-8">
                <div className="flex items-center">
                  <Clock className="text-[#4A90E2] mr-2" size={24} />
                  <span className="text-lg text-[#BDBDBD]">2 x 60 Day-Sessions</span>
                </div>
                <div className="w-px h-8 bg-white/20 hidden sm:block"></div>
                <div className="flex items-center">
                  <DollarSign className="text-[#FF6B00] mr-2" size={24} />
                  <span className="text-3xl font-bold text-[#F5F5F5]">₦100,000</span>
                  <span className="text-lg text-[#BDBDBD] ml-2">/ session</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                  className="flex items-center p-3 bg-white/5 rounded-xl border border-white/10"
                >
                  <CheckCircle className="text-[#FF6B00] mr-3 flex-shrink-0" size={20} />
                  <span className="text-[#BDBDBD]">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(255, 107, 0, 0.5)" // Enhanced glow
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onEnrollClick}
                className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Enroll for First Session</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8533] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              {/* <div className="mt-4 p-2 inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm font-medium text-yellow-400">🔥 Only 8 spots left for this cohort!</p>
              </div> */}

              <p className="text-sm text-[#BDBDBD] mt-4 max-w-md mx-auto">
                The total program cost is ₦200,000, payable in two ₦100,000 installments before each 60-day session.
              </p>
              <p className="text-xs text-[#BDBDBD]/60 mt-1">
                Secure payment process
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;