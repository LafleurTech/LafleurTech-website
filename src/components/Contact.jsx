import React from 'react'

const Contact = () => {
  return (
    <section className="relative bg-black mb-0 min-h-screen w-full py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[40rem] xl:h-[40rem] bg-white/3 rounded-full blur-3xl sm:blur-[60px] lg:blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 xl:w-[35rem] xl:h-[35rem] bg-white/2 rounded-full blur-2xl sm:blur-[50px] lg:blur-[80px]"></div>
        <div className="absolute top-1/2 left-0 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-[25rem] lg:h-[25rem] bg-white/1 rounded-full blur-xl sm:blur-[40px] lg:blur-[60px]"></div>
      </div>
      

      <div className="relative w-full h-full flex items-center justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="w-full max-w-7xl">
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32">
            
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <div>
                <h3 className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider uppercase mb-4 sm:mb-6">
                  MAIN OFFICE
                </h3>
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight">
                  55,Lane-2,Saidullajab,
                </h2>
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-2 sm:mt-3 md:mt-4 tracking-tight">
                   New Delhi - 110030, India
                </p>
              </div>
              

              <div>
                <a 
                  href="mailto:LafleurTech.com"
                  className="inline-block group"
                >
                  <div className="border border-white/30 rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 hover:border-white/60 transition-all duration-300 hover:scale-105 transform">
                    <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide uppercase group-hover:text-white/90 transition-colors">
                      LafleurTech.com
                    </span>
                  </div>
                </a>
              </div>
            </div>


            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <div>
                <h3 className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider uppercase mb-4 sm:mb-6">
                  SECOND OFFICE
                </h3>
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight">
                  PU Incubation center
                </h2>
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-2 sm:mt-3 md:mt-4 tracking-tight">
                  Chandigarh- 160036, India
                </p>
              </div>
              

              <div>
                <a 
                  href="tel:+919650461197"
                  className="inline-block group"
                >
                  <div className="border border-white/30 rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 hover:border-white/60 transition-all duration-300 hover:scale-105 transform">
                    <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide group-hover:text-white/90 transition-colors">
                      +91 9650461197
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>
          
          <div className="text-center mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-40">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 sm:mb-10 md:mb-12"></div>
            <p className="text-white/40 text-sm sm:text-base md:text-lg font-light tracking-wide">
              Ready to start your next project? Let's connect.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact