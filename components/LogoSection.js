"use client";

import React from "react";
import Image from "next/image";
import "../styles/logosection.css";

// 🖼️ Import all 14 logo images
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.png";
import logo8 from "../assets/images/logo8.png";
import logo9 from "../assets/images/logo9.png";
import logo10 from "../assets/images/logo10.png";
import logo11 from "../assets/images/logo11.png";
import logo12 from "../assets/images/logo12.png";
import logo13 from "../assets/images/logo13.png";
import logo14 from "../assets/images/logo14.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7,
  logo8, logo9, logo10, logo11, logo12, logo13, logo14,
];

export default function LogoSection() {

  return (
    <section className="logoSection relative overflow-hidden">
      {/* Foreground content */}
      <div className="logoContainer relative z-10">
        <h2 className="logoTitle">Our Trusted Partners</h2>
        <p className="logoSubtitle">
          Collaborating with leading brands to deliver innovation and excellence
        </p>

        <div className="logoGrid">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logoCard floatingLogo"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="logoImage"
                width={140}
                height={80}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
