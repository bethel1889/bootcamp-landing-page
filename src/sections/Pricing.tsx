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
    "17-week comprehensive curriculum",
    "Harvard-level learning resources",
    "1-on-1 mentorship sessions",
    "Real-world project portfolio",
    "Harvard certificate opportunity",
    "Career guidance & job placement support",
    "Lifetime access to community",
    "24/7 technical support"
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
            Transform Your Career in{' '}
            <span className="text-[#FF6B00]">4 Months</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#BDBDBD] max-w-3xl mx-auto leading-relaxed">
            Invest in your future with our comprehensive bootcamp program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/20 to-[#4A90E2]/20 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-2xl mb-6">
                <Star size={40} className="text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#F5F5F5] mb-4">
                Complete Bootcamp Program
              </h3>
              
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="flex items-center">
                  <Clock className="text-[#4A90E2] mr-2" size={24} />
                  <span className="text-lg text-[#BDBDBD]">Four (4) months</span>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="flex items-center">
                  <DollarSign className="text-[#FF6B00] mr-2" size={24} />
                  <span className="text-3xl font-bold text-[#F5F5F5]">₦200,000</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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
                  boxShadow: "0 0 40px rgba(255, 107, 0, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onEnrollClick}
                className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Secure Your Spot Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8533] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <p className="text-sm text-[#BDBDBD] mt-4">
                Limited spots available • Secure payment process
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;