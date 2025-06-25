import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '../components/Button';
import AnimatedCounter from '../components/AnimatedCounter';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' }
];

const Hero = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
    );
    
    gsap.fromTo(
      '.hero-image',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    );
    
  }, { scope: sectionRef });

  return (
    <>
      <section 
        ref={sectionRef}
        id='hero' 
        className='bg-black text-white relative'
      >
        <div className='relative z-10 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 
                      pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32'>
          <div className="max-w-7xl mx-auto">


            {/* home  */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
              
              {/* LEFT: Hero content */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-left lg:text-left">
                <div className='flex flex-col gap-5 sm:gap-6 md:gap-7'>
                  {/* hilighted text */}
                  <div className='hero-text flex flex-col justify-center text-[30px] sm:text-[36px] md:text-[46px]  lg:text-[54px] xl:text-[60px] font-semibold relative z-10 pointer-events-none'>
                    <h1>
                      Making
                      <span className='absolute pt-0 px-2 sm:px-3 md:px-4 lg:px-5 py-[30px] h-[48px] sm:h-[58px] md:h-[68px] lg:h-[78px] translate-y-0 overflow-hidden'>
                        <span className='wrapper'>
                          {words.map((word, index) => (
                            <span
                              key={index}
                              className='flex items-center gap-1 sm:gap-2 md:gap-2.5 lg:gap-3 pb-2'
                            >
                              <img
                                src={word.imgPath}
                                alt='icon'
                                className='size-7 sm:size-8 md:size-10 lg:size-11 xl:size-12 p-1 sm:p-1.5 md:p-2 rounded-full bg-zinc-100'
                              />
                              <span>{word.text}</span>
                            </span>
                          ))}
                        </span>
                      </span>
                    </h1>
                    <h1>into Real Projects</h1>
                    <h1>that Deliver Results</h1>
                  </div>

                  {/* less hifhlighted title */}
                  <p className='text-gray-300 text-base sm:text-lg md:text-xl relative z-10 max-w-[540px] mx-auto lg:mx-0'>
                    Hi, We're Lafleur Tech, a problem solving company based in Delhi
                    {' '}<span className="hidden sm:inline">with a passion for making people's life easier.</span>
                    <span className="inline sm:hidden">with a passion for innovation.</span>
                  </p>

                  {/*about us Button */}
                  <div className="mt-3 sm:mt-5 md:mt-6">
                    <Button
                      text='About Us'
                      className='w-60 sm:w-64 md:w-72 lg:w-80 h-12 sm:h-14 md:h-16 bg-white text-black hover:bg-gray-100 transition-colors border-0 rounded-full font-medium'
                      id='about'
                    />
                  </div>
                </div>
              </div>
              
              {/* RIGHT: Hero Image */}
              <div className="hero-image w-full sm:w-[90%] md:w-[80%] lg:w-1/2 mt-4 lg:mt-0">
                <div className='relative w-full h-full flex items-center justify-center lg:justify-end'>
                  <div className='w-full lg:w-[90%] xl:w-[85%] rounded-2xl overflow-hidden'>
                    <div className='relative aspect-[16/10] rounded-2xl'>
                      <img
                        src='/images/LFT.png'
                        alt='LafleurTech team working together'
                        className="w-full h-full object-contain rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Important: Bottom padding to make room for stats */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28"></div>
      </section>

      {/* Animated counter component */}
      <AnimatedCounter />
    </>
  );
};

export default Hero;