import React from 'react';

const PricingSection = () => {
  const packages = [
    {
      name: 'Starter Pack',
      features: '1 - 3 Pages (Home, About, Contact), Mobile Responsive Design, Contact Form → Email/Sheets, Google My Business Setup',
      duration: '15 - 18 Days',
      price: '20,000 - 25,000'
    },
    {
      name: 'Growth Pack',
      features: '5 Pages (Home, About, Services, Blog, Contact), Blog Setup + Basic SEO + Sitemap, GMB Optimization, Google Analytics Integration',
      duration: '20 - 25 Days',
      price: '35,000 - 45,000'
    },
    {
      name: 'Professional Pack',
      features: '5 - 10 Custom Designed Pages, Blog with Categories & Tags, Lead Automation → Google Sheets, On-Page SEO + Analytics + Tag Manager, WhatsApp API Integration',
      duration: '30 - 35 Days',
      price: '60,000 - 80,000'
    },
    {
      name: 'Advanced Pack',
      features: 'Custom Web App (CRM Lite + Attendance System), Workflow Automation (Lead → Auto Follow-up), Admin Panel + Basic Payment Gateway, Employee & Lead Management Dashboard',
      duration: '50 - 60 Days',
      price: '1,00,000 - 1,50,000'
    },
    {
      name: 'Enterprise Pack',
      features: 'Fully Custom Web App, Multi-Role CRM + Product Catalog + Orders, ERP/API Integrations + Payment Gateway, Advanced Reporting & Dashboards, 3 Months Support + SEO Optimization',
      duration: '90 - 110 Days',
      price: '2,50,000 - 4,00,000+'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span style={{ color: '#004aad' }}>WEBSITE & WEB APP PACKAGES</span> (2025 PRICING)
          </h2>
          <p className="text-xl text-gray-600">
            Our packages are designed to align with business size, complexity, and goals
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead style={{ backgroundColor: '#004aad' }}>
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">Package</th>
                <th style={{minWidth: "200px"}} className="px-6 py-4 text-left text-white font-semibold">What's Included</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                {/* <th className="px-6 py-4 text-left text-white font-semibold">Suggested Price (₹)</th> */}
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-semibold text-gray-900">{pkg.name}</td>
                  <td style={{minWidth: "400px"}} className="px-6 py-4 text-gray-700">{pkg.features}</td>
                  <td className="px-6 py-4 text-gray-700">{pkg.duration}</td>
                  {/* <td className="px-6 py-4 font-semibold" style={{ color: '#004aad' }}>
                    {pkg.price}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;