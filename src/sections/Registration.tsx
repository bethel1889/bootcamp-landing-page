import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { QrCode, ExternalLink } from 'lucide-react';

const Registration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleFormClick = () => {
    // Replace with your actual form URL
    window.open('[YOUR_FORM_URL]', '_blank');
  };

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
            Final <span className="text-[#FF6B00]">Registration</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#BDBDBD] mb-12 max-w-2xl mx-auto">
            Scan the code or click the button to fill the registration form
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <div className="w-64 h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <QrCode size={120} className="text-gray-600" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                      QR Code Here
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">
                Complete Your Registration
              </h3>
              <p className="text-[#BDBDBD] mb-8 leading-relaxed">
                After completing your payment verification, use this form to finalize your 
                enrollment and join our exclusive student community.
              </p>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(74, 144, 226, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFormClick}
                className="bg-gradient-to-r from-[#4A90E2] to-[#6BA3E8] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center group"
              >
                <span className="mr-3">Register Here</span>
                <ExternalLink 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;