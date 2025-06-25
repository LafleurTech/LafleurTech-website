import React, { useState, useEffect } from 'react';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('black');

  const [isVisible, setIsVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const checkBackgroundColor = () => {
      const element = document.elementFromPoint(window.innerWidth / 2, 100);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const backgroundColor = computedStyle.backgroundColor;
        const rgb = backgroundColor.match(/\d+/g);
        
        if (rgb) {
          const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
          setHeaderColor(brightness > 128 ? 'black' : 'white');
        }
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide header based on scroll direction
      if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header (after 100px scroll)
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
      checkBackgroundColor();
    };

    checkBackgroundColor();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkBackgroundColor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkBackgroundColor);
    };
  }, [lastScrollY]);

  const textColor = headerColor === 'black' ? 'text-black' : 'text-white';

  const hoverColor = headerColor === 'black' ? 'hover:text-gray-600' : 'hover:text-gray-300';

  const lineColor = headerColor === 'black' ? 'bg-black' : 'bg-white';
  const lineHoverColor = headerColor === 'black' ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-300';

  return (
    <>
    {/* NAV bar yaha se */}
      
      <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ease-in-out ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}>
        <div className="w-full px-8 sm:px-12 lg:px-16">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
  <a href="/" className={`flex items-center gap-2 md:gap-3 ${textColor} ${hoverColor} transition-colors duration-300`}>
    {/* <img 
      src="/images/logo.png" 
      alt="LafleurTech Logo" 
      className="w-8 h-8 md:w-10 md:h-10 object-contain"
    /> */}
    <span className="text-2xl md:text-3xl font-bold">
      LafleurTech
    </span>
  </a>
</div>           {/* Menu btn navigation ke liye */}
            <button
              onClick={toggleMenu}
               className={`menu-button flex items-center space-x-2 ${textColor} ${hoverColor} transition-colors duration-300 group`}
            >
              <span className="text-lg font-medium">menu</span>
                <div className="flex flex-col space-y-1">
                <div className={`menu-line w-6 h-0.5 ${lineColor} ${lineHoverColor} transition-colors duration-300`}></div>
                <div className={`menu-line w-6 h-0.5 ${lineColor} ${lineHoverColor} transition-colors duration-300`}></div>
                  <div className={`menu-line w-6 h-0.5 ${lineColor} ${lineHoverColor} transition-colors duration-300`}></div>
              </div>
            </button>
            </div>
        </div>
      </header>    
        {/* Desktop navigation inside menu */}
      {isMenuOpen && (
        <div 
          className="backdrop-enter hidden md:block fixed inset-0 z-40 backdrop-blur-xs backdrop-brightness-90 backdrop-contrast-125 bg-white/5 transition-all duration-700 ease-out"
          onClick={closeMenu}
        />
      )}      {/* Menu Overlay - Responsive Width */}
      <div className={`menu-overlay fixed top-0 right-0 w-full md:w-1/2 h-full z-50 bg-white bg-opacity-95 backdrop-blur-sm transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}>
        {/* Desktop view me social media and navigation alag row me */}
        <div className="hidden md:flex h-full">
          {/* Left Column - Social Media */}
          <div className="w-1/2 p-8 pt-20 border-r border-gray-200">            <div className="mb-8">
              <h3 className="section-header text-gray-400 text-xs font-medium mb-6 uppercase tracking-wider">Social media</h3>
              <nav className="space-y-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-item social-item-1 block text-lg text-black hover:text-black transition-colors duration-300">
                  LinkedIn
                </a>
                
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-item social-item-2 block text-lg text-black hover:text-black transition-colors duration-300">
                  Discord
                </a>
              
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-item social-item-3 block text-lg text-black hover:text-black transition-colors duration-300">
                  Twitter
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-item social-item-4 block text-lg text-black hover:text-black transition-colors duration-300">
                  GitHub
                </a>
              </nav>
            </div>            
            
            {/* contact Get in touch */}
            <div>

              <h3 className="section-header text-gray-400 text-xs font-medium mb-4 uppercase tracking-wider">Get in touch</h3>
              <a href="mailto:lafleurtech@gmail.com" className="email-link text-lg text-black hover:text-black transition-colors duration-300">
                lafleurtech@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column - Menu */}
          <div className="w-1/2 p-8 pt-20">            {/* Close Button */}
            <button
              onClick={closeMenu}

              className="close-button absolute top-6 right-6 text-black hover:text-gray-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-8"> 
              <h3 className="section-header text-gray-400 text-xs font-medium mb-6 uppercase tracking-wider">Menu</h3>
              <nav className="space-y-6">
                <a href="#" onClick={closeMenu} className="menu-item menu-item-1 block text-3xl font-light text-black hover:text-black transition-colors duration-300">
                Home
                </a>
                <a href="#about" onClick={closeMenu} className="menu-item menu-item-2 block text-3xl font-light text-black hover:text-black transition-colors duration-300">
                  What we do
                </a>
                <a href="#ourwork" onClick={closeMenu} className="menu-item menu-item-3 block text-3xl font-light text-black hover:text-black transition-colors duration-300">
                  Projects
                </a>

                <a href="#services" onClick={closeMenu} className="menu-item menu-item-4 block text-3xl font-light text-black hover:text-black transition-colors duration-300">
                  Services
                </a>

                <a href="#contact" onClick={closeMenu} className="menu-item menu-item-5 block text-3xl font-light text-black hover:text-black transition-colors duration-300">
                  Contacts
                </a>

                <a href="#details" onClick={closeMenu} className="menu-item menu-item-6 block text-3xl font-light text-black hover:text-black transition-colors duration-300">
                  Details
                </a>
              </nav>
            </div>

            {/* Our workflow */}
            <div>
              <a href="#will think" onClick={closeMenu} className="workflow-link text-lg text-black hover:text-black transition-colors duration-300">
                Our workflow
              </a>
            </div>
          </div>

          {/* Logo in menu - mobile view */}
          <div className="absolute top-6 left-8">
            <div className="text-xl font-bold text-black">
              LafleurTech
            </div>
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden flex flex-col h-full">      
              {/* Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <div className="text-2xl font-bold text-black">
              LafleurTech
            </div>

            <button
              onClick={closeMenu}
              className="close-button text-black hover:text-gray-600 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>



          {/* Mobile Menu Content */}


          <div className="flex-1 p-6 overflow-y-auto">

            {/* Menu Section */}
            <div className="mb-8">


              <h3 className="section-header text-gray-400 text-xs font-medium mb-6 uppercase tracking-wider">Menu</h3>

              <nav className="space-y-4">

                <a href="#" onClick={closeMenu} className="menu-item menu-item-1 block text-2xl font-light text-black hover:text-black transition-colors duration-300">
                  Home
                </a>

                <a href="#about" onClick={closeMenu} className="menu-item menu-item-2 block text-2xl font-light text-black hover:text-black transition-colors duration-300">
                  What we do
                </a>

                <a href="#ourwork" onClick={closeMenu} className="menu-item menu-item-3 block text-2xl font-light text-black hover:text-black transition-colors duration-300">
                  Projects
                </a>


                <a href="#services" onClick={closeMenu} className="menu-item menu-item-4 block text-2xl font-light text-black hover:text-black transition-colors duration-300">
                  Services
                </a>
                <a href="#contact" onClick={closeMenu} className="menu-item menu-item-5 block text-2xl font-light text-black hover:text-black transition-colors duration-300">
                  Contacts
                </a>
                <a href="#details" onClick={closeMenu} className="menu-item menu-item-6 block text-2xl font-light text-black hover:text-black transition-colors duration-300">
                  Details
                </a>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <h3 className="section-header text-gray-400 text-xs font-medium mb-4 uppercase tracking-wider">Get in touch</h3>
              <a href="mailto:lafleurtech@gmail.com" className="email-link text-lg text-black hover:text-black transition-colors duration-300">
                lafleurtech@gmail.com
              </a>
            </div>
enu

            {/* Workflow Section */}
            <div className="mb-8">
              <a href="#process" onClick={closeMenu} className="workflow-link text-lg text-black hover:text-black transition-colors duration-300">
                Our workflow
              </a>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="section-header text-gray-400 text-xs font-medium mb-6 uppercase tracking-wider">Social media</h3>
              <nav className="grid grid-cols-2 gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-item social-item-1 block text-base text-black hover:text-black transition-colors duration-300">
                  LinkedIn
                </a>
                
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-item social-item-2 block text-base text-black hover:text-black transition-colors duration-300">
                  Discord
                </a>
                
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-item social-item-3 block text-base text-black hover:text-black transition-colors duration-300">
                  Twitter
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-item social-item-4 block text-base text-black hover:text-black transition-colors duration-300">
                  GitHub
                </a>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;