import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='details' className="bg-black text-white w-full">
      <div className="w-full">

        <div className="w-full px-8 sm:px-12 lg:px-20 pb-16 lg:pb-20">
          <div className="max-w-none">
            

            <div className="mb-16 text-center">
              <h2 className="text-6xl lg:text-8xl font-light mb-6 tracking-tight">
                LafleurTech
              </h2>
              <div className="w-32 h-px bg-white mx-auto mb-8"></div>
              <p className="text-xl lg:text-2xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We craft digital experiences that transcend ordinary. 
                Every pixel, every interaction, every moment—designed with intention.
              </p>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
              

              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">
                  Services
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Web Development', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
                    { name: 'Digital Strategy', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                    { name: 'Brand Design', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2v-4a2 2 0 00-2-2H7' },
                    { name: 'User Experience', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
                    { name: 'Technical Consulting', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                  ].map((service, index) => (
                    <div key={index} className="group cursor-pointer flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                      <div className="text-lg font-light text-white group-hover:text-gray-300 group-hover:translate-x-2 transition-all duration-300">
                        {service.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>



              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">
                  Company
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'About', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { name: 'Work', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
                    { name: 'Services', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
                    { name: 'Contact', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                    { name: 'Details', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
                  ].map((link, index) => (
                    <div key={index} className="group cursor-pointer flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                      </svg>
                      <div className="text-lg font-light text-white group-hover:text-gray-300 group-hover:translate-x-2 transition-all duration-300">
                        {link.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>



              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">
                  Connect
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'LinkedIn', handle: '@lafleur', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                    { name: 'Twitter', handle: '@lafleur_', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                    { name: 'Discord', handle: '@lafleur', icon: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z' },
                    { name: 'GitHub', handle: '@lafleur', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
                  ].map((social, index) => (
                    <div key={index} className="group cursor-pointer flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" 
                           fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                      <div className="group-hover:translate-x-2 transition-all duration-300">
                        <div className="text-lg font-light text-white group-hover:text-gray-300">
                          {social.name}
                        </div>
                        <div className="text-sm text-gray-500 font-light">{social.handle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>



              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">
                  Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Email</p>
                      <a href="mailto:lafleurtech@gmail.com" className="text-lg font-light text-white hover:text-gray-300 transition-colors duration-500">
                        lafleurtech@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Location</p>
                      <p className="text-lg font-light text-white">
                        55,Lane-2,Saidullajab,
                        <br />
                        New Delhi - 110030, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Phone</p>
                      <p className="text-lg font-light text-white">
                        +91 9650461197
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
                <div className="text-gray-500 text-sm font-light">
                  © {currentYear} LafleurTech. All rights reserved.
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-12 text-sm">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                    <a key={index} href="#" className="text-gray-500 hover:text-white transition-colors duration-300 font-light group relative">
                      {item}
                      <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500 ease-out"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;