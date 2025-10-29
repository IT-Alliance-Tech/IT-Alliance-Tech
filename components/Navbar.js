"use client";

import React from "react";
import Image from "next/image";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import logoImg from "../assets/images/itallianceLogo.png";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/`} className="flex-shrink-0">
            <Image
              src={logoImg}
              alt="IT Alliance Logo"
              width={80}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/aboutUs"
                className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-[#001a33] hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-[#001a33] hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/websitebuilder"
                className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-[#001a33] hover:text-white"
              >
                Website Templates
              </Link>

              <Link
                href="/contactUs"
                className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-[#001a33] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/aboutUs"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-[#001a33] hover:text-white"
              onClick={toggleMenu}
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-[#001a33] hover:text-white"
              onClick={toggleMenu}
            >
              Services
            </Link>

            <Link
              href="/websitebuilder"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-[#001a33] hover:text-white"
              onClick={toggleMenu}
            >
              Website Templates
            </Link>

            <Link
              href="/contactUs"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-[#001a33] hover:text-white"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
