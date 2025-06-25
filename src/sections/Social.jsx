import React from 'react'
import FlowingMenu from '../components/FlowingMenu/FlowingMenu.jsx'
import Contact from '../components/Contact.jsx'
const menuItems = [
  {
    link: '#Linkdln',
    text: 'LINKEDIN',
    image:'https://channelkery.weebly.com/blog/linkedin-logo-linkedin-logo-png'
  },
  
  
  {
    link: '#TWITTER/X',
    text: 'TWITTER/X',
    image:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=100&fit=crop'
  },
  {
    link: '#GITHUB',
    text: 'GITHUB',
    image:
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=100&fit=crop'
  },
  {
    link: '#DISCORD',
    text: 'DISCORD',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=100&fit=crop'
  },
  
]
const Social = () => {
  return (
    <section id='contact' className='relative bg-black -mt-40 -py-40 py-8 sm:py-12 md:py-16 overflow-hidden'>
      <div className='relative'>
        <div className='flex whitespace-nowrap animate-scroll-right'>
          <div className='flex items-center space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20'>
          
          
          {/* loop */}
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className='flex items-center space-x-8 pb-7 sm:space-x-12 md:space-x-16 lg:space-x-20'
              >
                {/* circular wheel */}
                <div className='flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative animate-spin-slow'>
                  
                  <div className='absolute inset-0 border-2 border-white rounded-full animate-rotate-reverse'></div>

                  


                  <div className='absolute inset-2 border border-white/60 rounded-full animate-rotate-slow'></div>

                  
                  <div className='absolute inset-4 border border-white/30 rounded-full animate-rotate-fast'></div>

                  
                  <div className='absolute inset-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full animate-pulse'></div>

                  
                  <div className='absolute inset-0 animate-text-rotate'>
                    <div className='relative w-full h-full'>
                  
                      <span className='absolute top-1 left-1/2 -translate-x-1/2 text-white text-[0.5rem] sm:text-xs font-light tracking-[0.2em] whitespace-nowrap'>
                        .
                      </span>

                      
                      <span className='absolute right-1 top-1/2 -translate-y-1/2 transform rotate-90 text-white text-[0.5rem] sm:text-xs font-light tracking-[0.2em] whitespace-nowrap origin-center'>
                        .
                      </span>

                      
                      <span className='absolute bottom-1 left-1/2 -translate-x-1/2 transform rotate-180 text-white text-[0.5rem] sm:text-xs font-light tracking-[0.2em] whitespace-nowrap'>
                        .
                      </span>

                  
                      <span className='absolute left-1 top-1/2 -translate-y-1/2 transform -rotate-90 text-white text-[0.5rem] sm:text-xs font-light tracking-[0.2em] whitespace-nowrap origin-center'>
                        .
                      </span>
                    </div>
                  </div>
                </div>

                {/* text */}
                <h2 className='text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-[7rem] font-light  text-white tracking-tight select-none'>
                  Follow Us
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='h-screen'>
        <FlowingMenu items={menuItems} />
      </div>
      <div className='h-screen'>
        <Contact/>
      </div>

    </section>
  )
}

export default Social
