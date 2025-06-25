import React from 'react';

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const Logos = () => (
  <section className="bg-white pt-5 md:pt-6 overflow-hidden">
    <div className="container mx-auto px-4 mb-0 md:mb-0">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">They Trust Us</h2>
        <div className="h-1 w-20 bg-black mx-auto md:mb-0"></div>
        <p className="text-gray-600 max-w-3xl mx-auto mb-0 md:mb-0">
          We're proud to collaborate with innovative brands across various industries.
        </p>
      </div>
    </div>
    
    <div className="md:mt-0 mt-0 relative">
      {/* Left gradient edge */}
      <div className="absolute left-0 top-0 bottom-20 w-32 md:w-48 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      
      <div className="marquee mb-0 pb-12 pt-0 h-60">
        <div className="marquee-box    md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`first-${index}`} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`second-${index}`} icon={icon} />
          ))}
        </div>
      </div>
      {/* Right gradient edge */}
      <div className="absolute right-0 top-0 bottom-20 w-32 md:w-48 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  </section>
);

export default Logos;