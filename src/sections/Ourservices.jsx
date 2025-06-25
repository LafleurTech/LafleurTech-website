import React from 'react'

const Ourservices = () => {
  return (
    <section id="services" className="relative bg-black min-h-screen pt-5 sm:pt-7 md:pt-8 lg:pt-11 xl:pt-13 w-full pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 sm:left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[40rem] xl:h-[40rem] bg-white/3 rounded-full blur-3xl sm:blur-[60px] lg:blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 sm:right-1/3 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 xl:w-[35rem] xl:h-[35rem] bg-white/2 rounded-full blur-2xl sm:blur-[50px] lg:blur-[80px]"></div>
        <div className="absolute top-1/2 left-0 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-[25rem] lg:h-[25rem] bg-white/1 rounded-full blur-xl sm:blur-[40px] lg:blur-[60px]"></div>
      </div>
      
      {/* Full width container - no horizontal margins */}
      <div className="relative w-full h-full flex items-center justify-center px-0">
        <div className="bg-white rounded-t-2xl sm:rounded-t-3xl md:rounded-t-[3rem] lg:rounded-t-[4rem] xl:rounded-t-[5rem] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-28 shadow-xl sm:shadow-2xl shadow-black/10 sm:shadow-black/20 w-full max-w-none">
          
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black mb-4 sm:mb-6 md:mb-8 tracking-tighter leading-[0.9] px-2">
              Excellence in
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                  Every Detail
                </span>
                <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-transparent via-black/20 to-transparent rounded-full"></div>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black/50 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Transforming visions into extraordinary digital masterpieces through 
              <span className="text-black/70 font-medium"> unparalleled craftsmanship</span>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-12">
            
            {/* Service Card 1 */}
            <div className="group relative">
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-black/10 via-black/5 to-transparent rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] transform rotate-1 group-hover:rotate-2 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50/50 border border-black/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 hover:border-black/20 transition-all duration-700 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-[0_32px_64px_rgba(0,0,0,0.12)] hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row md:gap-8 items-start space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-10 lg:space-x-12">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6 lg:mb-7 group-hover:text-black/80 transition-colors tracking-tight">
                      Digital Architecture
                    </h3>
                    <p className="text-black/60 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light">
                      Masterfully engineered web solutions that seamlessly blend cutting-edge technology with exceptional user experiences.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">React</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Next.js</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">TypeScript</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Angular.js</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Vue.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative">
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-black/10 via-black/5 to-transparent rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] transform -rotate-1 group-hover:-rotate-2 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50/50 border border-black/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 hover:border-black/20 transition-all duration-700 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-[0_32px_64px_rgba(0,0,0,0.12)] hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row md:gap-8 items-start space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-10 lg:space-x-12">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 shadow-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6 lg:mb-7 group-hover:text-black/80 transition-colors tracking-tight">
                      Creative Excellence
                    </h3>
                    <p className="text-black/60 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light">
                      Sophisticated design systems that captivate audiences and elevate brands through meticulous and brings attention to detail.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Design Systems</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Branding</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Motion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative">
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-black/10 via-black/5 to-transparent rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] transform rotate-1 group-hover:rotate-2 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50/50 border border-black/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 hover:border-black/20 transition-all duration-700 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-[0_32px_64px_rgba(0,0,0,0.12)] hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row md:gap-8 items-start space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-10 lg:space-x-12">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6 lg:mb-7 group-hover:text-black/80 transition-colors tracking-tight">
                      Cloud Mastery
                    </h3>
                    <p className="text-black/60 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light">
                      Enterprise-grade infrastructure solutions that scale effortlessly while maintaining peak stability, innovation, performance and security.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">AWS</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Kubernetes</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group relative">
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-black/10 via-black/5 to-transparent rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] transform -rotate-1 group-hover:-rotate-2 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50/50 border border-black/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 hover:border-black/20 transition-all duration-700 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-[0_32px_64px_rgba(0,0,0,0.12)] hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row md:gap-8 items-start space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-10 lg:space-x-12">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 shadow-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6 lg:mb-7 group-hover:text-black/80 transition-colors tracking-tight">
                      Strategic Vision
                    </h3>
                    <p className="text-black/60 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light">
                      Comprehensive consulting that transforms business challenges into competitive advantages through innovative thinking.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Strategy</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Innovation</span>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-black/8 text-black/70 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-36">
            <button className="group inline-flex items-center space-x-3 sm:space-x-4 md:space-x-6 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl sm:rounded-3xl hover:shadow-xl sm:hover:shadow-2xl hover:shadow-black/20 sm:hover:shadow-black/30 transition-all duration-500 hover:scale-105 transform">
              <span className="text-base sm:text-lg md:text-xl font-semibold tracking-wide">Begin Your Journey</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </div>
            </button>
            <p className="text-black/40 mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg font-light tracking-wide px-4">
              Where exceptional ideas meet flawless execution
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Ourservices