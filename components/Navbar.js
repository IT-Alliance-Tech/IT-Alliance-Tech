"use client";

import React from "react";
import Image from "next/image";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

// ✅ Import your logo image
import logoImg from "../assets/images/itallianceLogo.png"; // <-- replace with your actual path
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/`} className="flex-shrink-0">
            <Image
              src={logoImg}
              alt="IT Alliance Logo"
              width={80} // adjust width
              height={50} // adjust height
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/aboutUs"
                className="text-gray-700 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#001a33")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                About Us
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#001a33")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                Services
              </a>
              <a
                href="/contactUs"
                className="text-gray-700 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#001a33")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? (
                <RiCloseLine size={24} />
              ) : (
                <RiMenuLine size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="/aboutUs"
              className="text-gray-700 hover:text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={toggleMenu}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#001a33")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={toggleMenu}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#001a33")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Services
            </a>
            <a
              href="/contactUs"
              className="text-gray-700 hover:text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={toggleMenu}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#001a33")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
