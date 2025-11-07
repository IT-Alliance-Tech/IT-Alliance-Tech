"use client";

import React from "react";
import { RiMailLine, RiPhoneLine, RiWhatsappLine } from "@remixicon/react";
import Image from "next/image";
import logoImg from "../assets/images/it1.png";
import Link from "next/link";

const Footer = () => {
  const services = [
    { name: "WebCraft", id: "webcraft" },
    { name: "CodeCore", id: "codecore" },
    { name: "ShopSphere", id: "shopsphere" },
    { name: "SyncSuite", id: "syncsuite" },
    { name: "BrandPulse", id: "brandpulse" },
    { name: "CloudAxis", id: "cloudaxis" },
    { name: "Payment Gateway", id: "payment-gateway" },
    { name: "Small Combo Growth Packages", id: "small-combo" },
    { name: "Website and Web App Pricing", id: "website-webapp" },
    { name: "Youtube Marketing", id: "youtube-marketing" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Logo & Contact Info */}
          <div className="col-span-1">
            <Link href={`/`} className="flex-shrink-0">
              <Image
                src={logoImg}
                alt="IT Alliance Logo"
                className="h-20 w-auto object-contain rounded-2xl"
                priority
              />
            </Link>
            <div className="space-y-3 mt-4">
              <a
                href="mailto:contact@italliance.tech"
                className="flex flex-wrap items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <RiMailLine size={18} />
                <span>contact@italliance.tech</span>
              </a>
              <a
                href="tel:9108463663"
                className="flex flex-wrap items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <RiPhoneLine size={18} />
                <span>9108463663</span>
              </a>
              <a
                href="https://wa.me/919164500849"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-wrap items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <RiWhatsappLine size={18} />
                <span>+91 91645 00849</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/whyUs" className="hover:text-blue-400 transition-colors duration-200">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/websitebuilder" className="hover:text-blue-400 transition-colors duration-200">
                  Website Templates
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors duration-200">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={`/services#${service.id}`}
                  className="hover:text-blue-400 transition-colors duration-200 block"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© IT Alliance 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
