import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 50,
    label: "Projects",
    suffix: "+",
  },
  {
    value: 30,
    label: "Clients",
    suffix: "+",
  },
  {
    value: 99,
    label: "Satisfaction",
    suffix: "%",
  },
  {
    value: 3,
    label: "Years",
    suffix: "+",
  },
];

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const counters = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      counters.current.forEach((counter, index) => {
        const targetValue = stats[index].value;
        
        gsap.fromTo(
          counter,
          { innerText: "0" },
          {
            innerText: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counterRef.current,
              start: "top bottom-=100",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, counterRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={counterRef} id="ac" className=" w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center group p-4 hover:bg-gray-1000 rounded-lg transition-all duration-300">
            <div className="flex items-baseline mb-2">
              <span
                ref={(el) => {
                  if (el) counters.current[index] = el;
                }}
                className="text-3xl md:text-4xl font-bold text-white"
              >
                0
              </span>
              <span className="text-3xl md:text-4xl font-bold text-white ml-1">
                {stat.suffix}
              </span>
            </div>
            <span className="text-sm md:text-base font-medium text-gradient-blue tracking-wide uppercase">
              {stat.label}
            </span>
            
            {/* Underline animation on hover */}
<div className="h-0.5 w-0 bg-gradient-to-r from-white to-gray-400 mt-1 group-hover:w-full transition-all duration-300"></div>          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;