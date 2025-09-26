import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"; // ✅ Next.js Image component
import aboutImg from "../../assets/images/aboutUs2.png"; // ✅ local import

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="max-w-4xl mx-auto">
            <Image
              src={aboutImg}           // ✅ imported image
              alt="IT Alliance Team"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover mb-8"
              priority                 // ✅ ensures it loads fast
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            <span style={{ color: "#004aad" }}>About Us</span>
            <div className="text-xl font-normal my-lg-3">
              At IT Alliance Tech, we believe technology should empower
              businesses to grow smarter, faster, and stronger. Our mission is
              simple to deliver reliable, customized IT and digital solutions
              that help companies stand out in today’s competitive world. From
              web development and applications to digital marketing and
              consulting, we combine creativity with technical expertise to
              build solutions that drive measurable results. <br />
              <br />
              What makes us different is our people-first approach. We don’t
              just deliver projects — we build partnerships. By understanding
              your goals and challenges, we craft strategies tailored to your
              business needs, ensuring long-term growth and success. With a team
              that values innovation, trust, and collaboration, IT Alliance Tech
              is your partner in turning digital opportunities into real
              business impact.
            </div>
          </h2>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              <span style={{ color: "#004aad" }}>What Drives Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#004aad" }}
              >
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that are
                reliable, scalable, and user-friendly. By combining creativity,
                technology, and strategy, we simplify processes, enhance
                visibility, and deliver measurable results while building
                lasting partnerships that drive meaningful growth and success.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#004aad" }}
              >
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a trusted global technology partner, recognized for
                transforming ideas into impactful digital solutions. We strive
                to create a future where businesses of all sizes harness
                technology to achieve sustainable growth, long-term success, and
                meaningful connections with their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
