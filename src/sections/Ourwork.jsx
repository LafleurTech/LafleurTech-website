import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Smart Surveillance System",
    subtitle: "AI-Powered Video Monitoring",
    description: "Advanced CCTV system with remote access capabilities and AI-driven anomaly detection that alerts users in real-time during emergencies like fires or physical altercations.",
    image: "/images/project1.png",
    tags: ["AI", "Computer Vision", "Security"],
    color: "#0EA5E9",
    link:"#"
  },
  {
    id: 2,
    title: "MediLearn VR",
    subtitle: "Immersive Medical Training",
    description: "Revolutionary VR platform capturing surgical procedures in immersive 360° video, allowing medical students to experience operations from multiple perspectives for enhanced learning.",
    image: "/images/project2.png",
    tags: ["VR", "Healthcare", "Education"],
    color: "#8B5CF6",
    link:"#"
  },
  {
    id: 3,
    title: "Impulse Commerce",
    subtitle: "Short-Form Content Marketplace",
    description: "Next-generation e-commerce platform integrating short-form video content with seamless shopping experiences, allowing users to discover and purchase products in an engaging format.",
    image: "/images/project3.png",
    tags: ["E-Commerce", "Video", "Mobile"],
    color: "#EC4899",
    link:"#"
  }
];

const Ourwork = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  
  useGSAP(() => {

    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {


      projectRefs.current.forEach((project) => {
        gsap.fromTo(
          project,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top bottom-=100",
              end: "top center",
              toggleActions: "play none none none"
            }
          }
        );
        


        gsap.fromTo(
          project.querySelectorAll(".project-detail"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
              start: "top bottom-=100",
              toggleActions: "play none none none"
            }
          }
        );
        

        gsap.fromTo(
          project.querySelector(".project-image-container"),
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "expo.out",
            delay: 0.1,
            scrollTrigger: {
              trigger: project,
              start: "top bottom-=50",
              toggleActions: "play none none none"
            }
          }
        );
      });
    });
    

    mm.add("(max-width: 767px)", () => {

      projectRefs.current.forEach((project) => {
        gsap.fromTo(
          project,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
              start: "top bottom-=50",
              toggleActions: "play none none none"
            }
          }
        );
      });
    });
    

    gsap.fromTo(
      ".section-heading",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
    
    return () => mm.revert();
  }, { scope: sectionRef });
  
  return (
<section 
  ref={sectionRef} 
  id="ourwork"
className=" bg-black  text-white py-16 md:py-20 lg:py-24 relative overflow-hidden rounded-t-[60px] md:rounded-t-[60px] lg:rounded-t-[80px] mt-16"  style={{
    marginTop: "-80px", 
    paddingTop: "80px"  
  }}
>   
      {/* <div className="absolute inset-0  bg-black"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 pt-1 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 text-white">
            Our Premium Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-white text-base sm:text-lg md:text-xl px-4">
            Explore our portfolio of cutting-edge projects that combine innovation with practical solutions for real-world challenges.
          </p>
        </div>
        
        {/* projects grid */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              ref={el => projectRefs.current[index] = el}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
            >
              <div className="project-image-container w-full md:w-1/2 relative mb-8 md:mb-0">
                <div className="relative bg-black rounded-2xl md:rounded-3xl p-1 sm:p-2 border border-gray-800 shadow-xl">
                  <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 bg-zinc-900 rounded-t-2xl md:rounded-t-3xl flex items-center px-2 sm:px-4">
                    <div className="flex space-x-1.5 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto bg-black/80 px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-white hidden sm:block">
                      {project.subtitle}
                    </div>
                  </div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl rounded-t-none mt-6 sm:mt-8 object-cover aspect-[16/10]"
                  />
                  
                  {/* Controls overlay - responsive sizing */}
                  <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center">
                    {/* <div className="bg-black/80 rounded-full px-2 sm:px-4 py-1 sm:py-1.5 flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-500"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-500"></div>
                    </div> */}
                  </div>
                </div>
              </div>
              
              {/* Project details - white text for better contrast */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div 
                  className="project-detail inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium mb-3 sm:mb-4 text-white"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  Project {project.id}
                </div>
                
                <h3 className="project-detail text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">
                  {project.title}
                </h3>
                
                <p className="project-detail text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6">
                  {project.description}
                </p>
                
                <div className="project-detail flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/5 border border-white/20 rounded-full text-xs sm:text-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                
                  <a 
  href={project.link}
  target="_blank" 
  rel="noopener noreferrer"
  className="project-detail group relative px-4 sm:px-6 py-2 sm:py-3 bg-black border border-white/30 rounded-lg flex items-center gap-2 hover:border-white/60 transition-colors text-sm sm:text-base text-white"
>

                  
                  <span>View Project</span>
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  </a>

              </div>
            </div>
          ))}
        </div>
      </div>
<div className="text-center mt-16 md:mt-24 lg:mt-32 relative z-10">
  <p className="text-gray-300 text-lg md:text-xl mb-6">
    More projects are on GitHub
  </p>
  
  <a 
    href="https://github.com/LafleurTech" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 bg-black border border-white/30 rounded-lg hover:border-white/60 transition-colors text-white"
  >
    <svg 
      className="w-5 h-5" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
    >
      <path 
        fillRule="evenodd" 
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
        clipRule="evenodd" 
      />
    </svg>
    Visit GitHub
  </a>
</div>
    </section>
  );
};

export default Ourwork;