import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#6BA3E8] rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">TT</span>
                </div>
                <p className="text-xs text-[#BDBDBD]">TT Consulting</p>
              </div>
              
              <Heart className="text-[#FF6B00]" size={20} />
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">KL</span>
                </div>
                <p className="text-xs text-[#BDBDBD]">Kaizen Labs</p>
              </div>
            </div>
          </div>
          
          <p className="text-[#BDBDBD] mb-4">
            A collaboration between TT Consulting Service LTD and Kaizen Labs
          </p>
          
          <p className="text-sm text-[#BDBDBD]/60">
            © 2025. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;