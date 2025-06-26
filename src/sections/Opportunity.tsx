import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Zap } from 'lucide-react';

const Opportunity = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cards = [
    {
      icon: TrendingUp,
      title: "High-Demand Skills",
      description: "The AI market is projected to grow by 37.3% annually, creating millions of new opportunities."
    },
    {
      icon: Users,
      title: "Career Growth",
      description: "Web developers with AI skills earn 40% more than traditional developers on average."
    },
    {
      icon: Zap,
      title: "Future-Proof Your Career",
      description: "Master the technologies that will define the next decade of digital innovation."
    }
  ];

  return (
    <section id="opportunity" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
            Your Gateway to the{' '}
            <span className="text-[#FF6B00]">Future</span> of Technology
          </h2>
          <p className="text-lg sm:text-xl text-[#BDBDBD] max-w-4xl mx-auto leading-relaxed">
            The convergence of web development and artificial intelligence is creating unprecedented opportunities. 
            Position yourself at the forefront of this technological revolution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FF6B00]/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <card.icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-4 group-hover:text-[#FF6B00] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-[#BDBDBD] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunity;