"use client";

import React from 'react';
import "..//styles/homePage.css"

const HeroSection = () => {

    const sectionStyle = {
    backgroundImage: `url(${"../assets/images/heroImg.jpg"})`,
    backgroundSize: 'cover', // Optional: Adjust as needed
    backgroundPosition: 'center', // Optional: Adjust as needed
    backgroundRepeat: 'no-repeat', // Optional: Adjust as needed
    minHeight: '400px', // Example height
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: 'white',
    fontSize: '2em',
  };

  const handleGetStarted = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConnectWithUs = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-16 heroSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* Tagline/Value Prop */}

          <div className='my-5'>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Empowering Your Business in the{' '}
            <span style={{ color: '#004aad' }}>Digital Era</span>
          </h1>

          {/* Short Description */}
          <p className="text-xl text-warning-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions. We deliver 
            innovative IT services, digital marketing strategies, and custom web applications 
            that drive growth and success in today's competitive landscape.
          </p>


           <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: '#004aad' }}
            >
              Get Started
            </button>
            <button
              onClick={handleConnectWithUs}
              className="px-8 py-4 border-2 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              style={{ borderColor: '#004aad', color: '#004aad' }}
            >
              Connect With Us
            </button>
          </div>

          </div>

          {/* Hero Image */}
          {/* <div className="mb-10">
            <Image
              src={heroImage}
              alt="Digital transformation and technology"
              className="mx-auto rounded-lg shadow-2xl  w-full"
              height={250}
              width={250}
            />
          </div> */}

          {/* CTA Buttons */}
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;