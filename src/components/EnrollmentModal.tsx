// File: src/components/EnrollmentModal.tsx
// Purpose: Updated the styling of payment details to have uppercase labels on their own line, followed by the value, as requested.
// Dependencies: None
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, MessageCircle, CheckCircle, ClipboardCopy, Check } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=2348118058228&text&type=phone_number&app_absent=0', '_blank');
  };

  const handleCopy = () => {
    const accountNumber = '8118058228';
    navigator.clipboard.writeText(accountNumber).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2500); // Revert the text back after 2.5 seconds
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-[#020202] to-[#1A1A1A] rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
          >
            {/* Close Button - Now sticky */}
            <button
              onClick={onClose}
              className="sticky top-0 float-right -mr-2 text-[#BDBDBD] hover:text-white transition-colors duration-200 z-10"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#F5F5F5] mb-4">
                Complete Your <span className="text-[#FF6B00]">Enrollment</span>
              </h2>
              <p className="text-[#BDBDBD]">
                Follow these two simple steps to secure your spot for the first session.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-gradient-to-br from-white/10 to-transparent rounded-2xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="text-[#FF6B00] mr-2" size={24} />
                    <h3 className="text-xl font-semibold text-[#F5F5F5]">Make Payment</h3>
                  </div>
                </div>
                <p className="text-[#BDBDBD] mb-4">
                  Transfer the first installment of <span className="text-[#FF6B00] font-semibold">₦100,000</span> to the account below to begin Session 1.
                </p>
                <div className="bg-black/40 rounded-xl p-4 border border-white/10 space-y-4">
                  {/* Bank Name */}
                  <div>
                    <p className="text-xs text-[#BDBDBD] uppercase tracking-wider">Bank Name</p>
                    <p className="text-lg font-semibold text-[#F5F5F5]">OPAY</p>
                  </div>
                  
                  {/* Account Number */}
                  <div>
                    <p className="text-xs text-[#BDBDBD] uppercase tracking-wider">Account Number</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold text-[#F5F5F5]">8118058228</p>
                      <button
                        onClick={handleCopy}
                        className={`flex items-center gap-1.5 px-2 py-1 text-xs rounded-md transition-all duration-300 ${
                          isCopied 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-white/10 hover:bg-white/20 text-[#BDBDBD]'
                        }`}
                      >
                        {isCopied ? (
                          <Check size={14} />
                        ) : (
                          <ClipboardCopy size={14} />
                        )}
                        {isCopied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  {/* Account Name */}
                  <div>
                    <p className="text-xs text-[#BDBDBD] uppercase tracking-wider">Account Name</p>
                    <p className="text-lg font-semibold text-[#F5F5F5]">IBEAGHA BETHEL EMMANUEL</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-br from-white/10 to-transparent rounded-2xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#4A90E2] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="text-[#4A90E2] mr-2" size={24} />
                    <h3 className="text-xl font-semibold text-[#F5F5F5]">Verify & Register</h3>
                  </div>
                </div>
                <p className="text-[#BDBDBD] mb-4">
                  Send your payment screenshot to our team on WhatsApp. We'll verify it and provide you with the final registration link.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Verify on WhatsApp
                </motion.button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 p-4 bg-gradient-to-r from-[#FF6B00]/10 to-[#4A90E2]/10 rounded-xl border border-[#FF6B00]/20">
              <div className="flex items-center justify-center">
                <CheckCircle className="text-[#FF6B00] mr-2" size={20} />
                <p className="text-sm text-[#BDBDBD]">
                  Secure payment process • Limited spots available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal;