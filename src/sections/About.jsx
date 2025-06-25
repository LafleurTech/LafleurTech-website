import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  
  useGSAP(() => {
    const boxes = gsap.utils.toArray('.bento-box');
    
    boxes.forEach((box) => {
      gsap.fromTo(
        box,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="relative py-16 md:py-24 bg-white rounded-t-[50px] md:rounded-t-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 inline-block relative">
            About <span className="text-black font-light">LafleurTech</span>
            <div className="h-1 w-24 md:w-32 bg-black absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
          <p className="text-gray-600 md:text-xl max-w-3xl mx-auto mt-6">
            We transform innovative ideas into powerful digital solutions that deliver exceptional results.
          </p>
        </div>
        
        {/* box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Overview Box */}
          <div className="bento-box bg-black text-white rounded-3xl p-8 md:p-10 lg:p-12 col-span-1 md:col-span-4 lg:col-span-6 row-span-1 md:row-span-2 h-auto md:h-[550px] lg:h-[575px] flex flex-col justify-between group transition-all duration-500 overflow-hidden relative hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-800 rounded-full blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative flex flex-col h-full">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-7 group-hover:text-gray-100 transition-colors duration-300">We're LafleurTech</h3>
                <p className="text-gray-300 text-lg mb-5 max-w-xl leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  A problem-solving tech company based in Delhi, focused on bridging the gap between innovative ideas and functional digital solutions.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Founded in 2022, we combine technical expertise with creative thinking to craft digital experiences that simplify complex problems and enhance user engagement.
                </p>
                
                <p className="text-gray-300 mb-6 hidden md:block group-hover:text-gray-200 transition-colors duration-300">
                  Our team delivers cutting-edge solutions that help businesses thrive in today's digital landscape.
                  From web and mobile applications to UI/UX design and tech consulting, we are committed to excellence and innovation in every project we undertake.
                </p>
              </div>
              
              <div className="mt-auto">
                <button className="mt-4 px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              
                  Learn More
                </button>
                
              </div>
            </div>
          </div>
          
        
          {/*Vision Box */}
          <div className="bento-box bg-white text-black rounded-3xl p-8 border-2 border-black col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden relative group transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer hover:border-gray-600">
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-black opacity-5 rounded-full group-hover:opacity-10 group-hover:scale-125 transition-all duration-500"></div>
            <div className="relative">
              <div className="flex items-center mb-4">

                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black mr-4 group-hover:scale-110 group-hover:bg-gray-800 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    
                    
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-gray-800 transition-colors duration-300">Our Vision</h3>
              </div>
              <p className="text-gray-700 group-hover:text-gray-600 transition-colors duration-300">
               
                A world where technology simplifies rather than complicates, where digital experiences are intuitive, accessible, and impactful for everyone.
              </p>
            </div>
          </div>
          
         
         
         
          {/* Mission Box */}
          <div className="bento-box bg-white text-black rounded-3xl p-8 border-2 border-black col-span-1 md:col-span-2 lg:col-span-3 relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer hover:border-gray-600">
            <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-black opacity-5 rounded-full group-hover:opacity-10 group-hover:scale-125 transition-all duration-500"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black mr-4 group-hover:scale-110 group-hover:bg-gray-800 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-gray-800 transition-colors duration-300">Our Mission</h3>
              </div>
              <p className="text-gray-700 group-hover:text-gray-600 transition-colors duration-300">
                To transform ideas into functional digital solutions that solve real problems, enhance user experiences, and drive meaningful results for our clients.
              </p>
            </div>
          </div>
          
          {/* Stats Box */}
          <div className="bento-box bg-white text-black rounded-3xl p-8 border-2 border-black col-span-1 md:col-span-3 lg:col-span-6 relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer hover:border-gray-600">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50 transform translate-x-1/4 -translate-y-1/4 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 group-hover:text-gray-800 transition-colors duration-300">Our Impact</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center group/stat">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4 group-hover/stat:scale-110 group-hover/stat:bg-gray-800 transition-all duration-300">
                    <span className="text-2xl font-bold">20+</span>
                  </div>
                  <p className="text-gray-800 font-medium group-hover/stat:text-gray-600 transition-colors duration-300">Projects Delivered</p>
                </div>
                <div className="text-center group/stat">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4 group-hover/stat:scale-110 group-hover/stat:bg-gray-800 transition-all duration-300">
                    <span className="text-2xl font-bold">15+</span>
                  </div>
                  <p className="text-gray-800 font-medium group-hover/stat:text-gray-600 transition-colors duration-300">Happy Clients</p>
                </div>
                <div className="text-center group/stat">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4 group-hover/stat:scale-110 group-hover/stat:bg-gray-800 transition-all duration-300">
                    <span className="text-2xl font-bold">98%</span>
                  </div>
                  <p className="text-gray-800 font-medium group-hover/stat:text-gray-600 transition-colors duration-300">Client Satisfaction</p>
                </div>
                <div className="text-center group/stat">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4 group-hover/stat:scale-110 group-hover/stat:bg-gray-800 transition-all duration-300">
                    <span className="text-2xl font-bold">3+</span>
                  </div>
                  <p className="text-gray-800 font-medium group-hover/stat:text-gray-600 transition-colors duration-300">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services Box */}
          <div className="bento-box bg-black text-white rounded-3xl p-8 md:p-10 col-span-1 md:col-span-3 lg:col-span-4 row-span-1 relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-20 transform translate-x-1/3 translate-y-1/3 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-gray-100 transition-colors duration-300">What We Do</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-700 p-4 rounded-xl group/service hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                  <h4 className="font-bold mb-2 group-hover/service:text-white transition-colors duration-300">Web Development</h4>
                  <p className="text-gray-400 text-sm group-hover/service:text-gray-300 transition-colors duration-300">Custom web applications with cutting-edge technologies</p>
                </div>
                <div className="border border-gray-700 p-4 rounded-xl group/service hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                  <h4 className="font-bold mb-2 group-hover/service:text-white transition-colors duration-300">Mobile Apps</h4>
                  <p className="text-gray-400 text-sm group-hover/service:text-gray-300 transition-colors duration-300">Native and cross-platform mobile solutions</p>
                </div>
                <div className="border border-gray-700 p-4 rounded-xl group/service hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                  <h4 className="font-bold mb-2 group-hover/service:text-white transition-colors duration-300">UI/UX Design</h4>
                  <p className="text-gray-400 text-sm group-hover/service:text-gray-300 transition-colors duration-300">Intuitive interfaces with premium user experiences</p>
                </div>
                <div className="border border-gray-700 p-4 rounded-xl group/service hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                  <h4 className="font-bold mb-2 group-hover/service:text-white transition-colors duration-300">Tech Consulting</h4>
                  <p className="text-gray-400 text-sm group-hover/service:text-gray-300 transition-colors duration-300">Strategic guidance for digital transformation</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Process Box */}
          <div id="" className="bento-box bg-white text-black rounded-3xl p-8 border-2 border-black col-span-1 md:col-span-3 lg:col-span-4 relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer hover:border-gray-600">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black mr-4 group-hover:scale-110 group-hover:bg-gray-800 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-gray-800 transition-colors duration-300">Our Process</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center group/step hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center mr-3 flex-shrink-0 group-hover/step:scale-110 transition-transform duration-300">1</div>
                  <div>
                    <h4 className="font-bold group-hover/step:text-gray-800 transition-colors duration-300">Discovery</h4>
                    <p className="text-gray-600 text-sm group-hover/step:text-gray-500 transition-colors duration-300">Understanding your business needs</p>
                  </div>
                </div>
                <div className="flex items-center group/step hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center mr-3 flex-shrink-0 group-hover/step:scale-110 transition-transform duration-300">2</div>
                  <div>
                    <h4 className="font-bold group-hover/step:text-gray-800 transition-colors duration-300">Strategy</h4>
                    <p className="text-gray-600 text-sm group-hover/step:text-gray-500 transition-colors duration-300">Planning the optimal solution</p>
                  </div>
                </div>
                <div className="flex items-center group/step hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center mr-3 flex-shrink-0 group-hover/step:scale-110 transition-transform duration-300">3</div>
                  <div>
                    <h4 className="font-bold group-hover/step:text-gray-800 transition-colors duration-300">Design & Development</h4>
                    <p className="text-gray-600 text-sm group-hover/step:text-gray-500 transition-colors duration-300">Creating with precision</p>
                  </div>
                </div>
                <div className="flex items-center group/step hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center mr-3 flex-shrink-0 group-hover/step:scale-110 transition-transform duration-300">4</div>
                  <div>
                    <h4 className="font-bold group-hover/step:text-gray-800 transition-colors duration-300">Launch & Support</h4>
                    <p className="text-gray-600 text-sm group-hover/step:text-gray-500 transition-colors duration-300">Delivering with ongoing excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Box */}
          <div className="bento-box bg-black text-white rounded-3xl p-8 md:p-10 col-span-1 md:col-span-3 lg:col-span-4 relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-20 transform -translate-x-1/3 -translate-y-1/3 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-gray-100 transition-colors duration-300">Our Team</h3>
              </div>
              
              <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                A diverse group of designers, developers, and strategists with a shared passion for creating exceptional digital experiences.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer">UI/UX Designers</div>
                <div className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer">Project Managers</div>
                <div className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer">AI/ML Engineer</div>
                <div className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer">QA Specialists</div>
                <div className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer">Full-Stack Developers</div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Box */}
          <div className="bento-box bg-white text-black rounded-3xl p-8 md:p-10 border-2 border-black col-span-1 md:col-span-6 lg:col-span-12 relative overflow-hidden group transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer hover:border-gray-600">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50 transform translate-x-1/4 translate-y-1/4 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black mr-4 group-hover:scale-110 group-hover:bg-gray-800 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-gray-800 transition-colors duration-300">What Clients Say</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl group/testimonial hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <svg className="h-10 w-10 text-gray-300 mb-4 group-hover/testimonial:text-gray-400 group-hover/testimonial:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S15.5 8 10 8zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm19-18c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S24.5 8 19 8zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"></path>
                  </svg>
                  <p className="text-gray-700 mb-4 group-hover/testimonial:text-gray-600 transition-colors duration-300">
                    "LafleurTech delivered a platform that completely transformed our customer engagement. Their attention to detail and technical expertise is unmatched."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-3 group-hover/testimonial:scale-110 transition-transform duration-300">RS</div>
                    <div>
                      <p className="font-bold group-hover/testimonial:text-gray-800 transition-colors duration-300">Rahul Sharma</p>
                      <p className="text-gray-600 text-sm group-hover/testimonial:text-gray-500 transition-colors duration-300">CEO, Innovate Solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl group/testimonial hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <svg className="h-10 w-10 text-gray-300 mb-4 group-hover/testimonial:text-gray-400 group-hover/testimonial:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S15.5 8 10 8zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm19-18c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S24.5 8 19 8zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"></path>
                  </svg>
                  <p className="text-gray-700 mb-4 group-hover/testimonial:text-gray-600 transition-colors duration-300">
                    "The team at LafleurTech truly understands how to blend design with functionality. Our app has received phenomenal user feedback since launch."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-3 group-hover/testimonial:scale-110 transition-transform duration-300">AP</div>
                    <div>
                      <p className="font-bold group-hover/testimonial:text-gray-800 transition-colors duration-300">Ananya Patel</p>
                      <p className="text-gray-600 text-sm group-hover/testimonial:text-gray-500 transition-colors duration-300">Product Head, TechStart</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl group/testimonial hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <svg className="h-10 w-10 text-gray-300 mb-4 group-hover/testimonial:text-gray-400 group-hover/testimonial:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S15.5 8 10 8zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm19-18c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S24.5 8 19 8zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"></path>
                  </svg>
                  <p className="text-gray-700 mb-4 group-hover/testimonial:text-gray-600 transition-colors duration-300">
                    "Working with LafleurTech has been a game-changer for our business. Their creative solutions have helped us achieve results we never thought possible."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-3 group-hover/testimonial:scale-110 transition-transform duration-300">VK</div>
                    <div>
                      <p className="font-bold group-hover/testimonial:text-gray-800 transition-colors duration-300">Vikram Kumar</p>
                      <p className="text-gray-600 text-sm group-hover/testimonial:text-gray-500 transition-colors duration-300">Founder, NextGen Commerce</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Box */}
          <div className="bento-box bg-black text-white rounded-3xl p-8 md:p-10 col-span-1 md:col-span-6 lg:col-span-12 relative overflow-hidden group transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-gray-100 transition-colors duration-300">Ready to bring your ideas to life?</h3>
                <p className="text-gray-300 text-lg mb-6 lg:mb-0 group-hover:text-gray-200 transition-colors duration-300">
                  Let's start a conversation about how we can help transform your vision into reality.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-end gap-4">
                <button 
                  onClick={() => {
                    const ourworkSection = document.getElementById("ourwork");
                    if (ourworkSection) {
                      window.scrollTo({
                        top: ourworkSection.offsetTop - 80,
                        behavior: "smooth"
                      });
                    }
                  }}
                  className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:border-gray-200"
                >
                  View Projects
                </button>
                <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;