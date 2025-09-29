import Link from 'next/link';
import React from 'react';
import aboutImg from '../assets/images/aboutUs.png';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: 50 }} // ✅ slide from right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={aboutImg}
              alt="IT Alliance Team"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Right - Title and Description */}
          <div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: -50 }} // text can slide from left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span style={{ color: '#004aad' }}>Us</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At IT Alliance Tech, we believe technology should empower businesses to grow 
              smarter, faster, and stronger. Our mission is simple - to deliver reliable, 
              customized IT and digital solutions that help companies stand out in today's 
              competitive world. From web development and applications to digital marketing 
              and consulting, we combine creativity with technical expertise to build 
              solutions that drive measurable results.
            </p>
            <Link
              href="/aboutUs"
              className="px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: '#004aad' }}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
