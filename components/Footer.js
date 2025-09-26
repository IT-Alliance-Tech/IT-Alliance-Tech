import React from 'react';
import { RiMailLine, RiPhoneLine, RiWhatsappLine } from '@remixicon/react';
import Image from 'next/image';

// ✅ Import your logo (place logo.png in assets/images folder)
import logoImg from "../assets/images/it1.png";

const Footer = () => {
  const services = [
    'MSP Solutions',
    'AI Chatbot Marketing',
    'Digital Growth Packages',
    'Digital Marketing',
    'Graphics & Media Pricing',
    'Hosting & Cloud',
    'Payment Gateway',
    'Small Combo Growth Packages',
    'Website and Web App Pricing',
    'Youtube Marketing'
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Logo and Contact Info */}
          <div className="col-span-1">
            <div className="mb-4">
              <Image
                src={logoImg}
                alt="IT Alliance Logo"
                className="h-16 w-auto object-contain"
                priority
              />
            </div>
            <div className="space-y-3">
              <a
                href="mailto:contact@italliance.tech"
                className="flex flex-wrap items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <RiMailLine size={18} />
                <span>contact@italliance.tech</span>
              </a>
              <a
                href="tel:9663265984"
                className="flex flex-wrap items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <RiPhoneLine size={18} />
                <span>9663265984</span>
              </a>
              <a
                href="https://wa.me/919663265984"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-wrap items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <RiWhatsappLine size={18} />
                <span>+91 96632 65984</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-400 transition-colors duration-200">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service, index) => (
                <div key={index} className="hover:text-blue-400 transition-colors duration-200">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © IT Alliance 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
