"use client";
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FloatingIcon = () => {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/919663265984",
      color: "bg-green-500",
    },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/ITalliancetechbnglr/",
      color: "bg-blue-600",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/italliancetech/",
      color: "bg-pink-500",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/italliance-tech/",
      color: "bg-blue-700",
    },
    // { icon: <FaXTwitter />, href: "https://x.com/yourpage", color: "bg-gray-800" },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
      {/* Social Icons */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-500 ease-in-out ${
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white w-12 h-12  rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${link.color}`}
            style={{
              transform: open
                ? `translateY(-${(index + 1) * 5}px)`
                : "translateY(0)",
              opacity: open ? 1 : 0,
              transition: "all 0.4s ease",
            }}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{ backgroundColor: "#001a33" }}
        className="w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300"
      >
        {open ? <IoIosArrowDown size={28} /> : <IoIosArrowUp size={28} />}
      </button>
    </div>
  );
};

export default FloatingIcon;
