import React from 'react';
import { motion } from 'framer-motion';

const BannerSection = () => {
  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#004aad' }}>
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
        >
          Transform your business with our expert digital marketing, <br />
          flexible staffing services, and custom web solutions.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-white/80"
        >
          Take your business to the next level with our tailored solutions and creative strategies.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
