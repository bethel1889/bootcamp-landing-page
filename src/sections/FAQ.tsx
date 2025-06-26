import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this for absolute beginners?",
      answer: "Yes! We start from the absolute basics. All you need is a passion for learning and dedication to complete the program. No prior programming experience is required."
    },
    {
      question: "What do I get upon completion?",
      answer: "You receive a bootcamp completion certificate and, upon successfully finishing the required modules, a chance to earn a certificate directly from Harvard for the Python portion of the course."
    },
    {
      question: "What kind of support will I receive?",
      answer: "The program includes personalized coaching, one-on-one mentorship sessions, access to a community of fellow learners, and 24/7 support through our dedicated channels."
    },
    {
      question: "Do I need a powerful computer?",
      answer: "No. We will utilize cloud-based development environments like GitHub Codespaces, so any modern computer with an internet connection is sufficient to complete the entire program."
    },
    {
      question: "How much time should I dedicate daily?",
      answer: "We recommend 2-3 hours of focused study per day. The program is designed to be flexible, allowing you to learn at your own pace while meeting weekly milestones."
    },
    {
      question: "Will I be job-ready after completion?",
      answer: "Absolutely! Our curriculum is designed with industry needs in mind. You'll build a portfolio of real projects and gain the skills that employers are actively seeking in today's market."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="text-[#FF6B00] mr-4" size={40} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5]">
              Have <span className="text-[#FF6B00]">Questions</span>? We Have <span className="text-[#4A90E2]">Answers</span>.
            </h2>
          </div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-semibold text-[#F5F5F5] group-hover:text-[#FF6B00] transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown 
                    size={24} 
                    className={`transition-colors duration-300 ${
                      openIndex === index ? 'text-[#FF6B00]' : 'text-[#BDBDBD] group-hover:text-[#FF6B00]'
                    }`} 
                  />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-[#FF6B00]/20 to-[#4A90E2]/20 mb-4"></div>
                      <p className="text-[#BDBDBD] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;