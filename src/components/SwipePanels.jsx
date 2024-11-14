import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SwipePanels = () => {
  useGSAP(() => {
    gsap.utils.toArray('.section').forEach((container) => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });
      gsap.from(container.children, {
        y: 50,
        
        scrollTrigger: {
          trigger: container,
          start: 'top center',
          end: 'top top',
          toggleActions: 'play none reverse reset',
        },
      });
    });
  }, []);

  return (
    <div className="scroll-animation overflow-hidden  ">
      <div className="flex flex-col items-center justify-center w-full bg-[#09090B]">
        <div
          className="section section-1 flex items-end  justify-start px-20 h-screen w-full bg-cover bg-center relative"
        >
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{ 
              backgroundImage: "url('../assets/singing.jpg')",
              filter: 'grayscale(100%)'
              
            }}
          />
          <h1 className="text-[calc(100vw/7)] font-gilroy text-left font-semibold uppercase text-[#00FFAB]   relative">
            sin<span className='font-mazius text-white'>G</span>ing
          </h1>
        </div>
        <div
          className="section section-2 flex items-end justify-end px-20 h-screen w-full bg-cover bg-center relative"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('../assets/art.jpg')",
              filter: 'grayscale(100%)'
            }}
          />
          <h1 className="text-[calc(100vw/7)] font-mazius font-bold uppercase text-[#2d2d2d] relative">
            AR<span className='font-gilroy  font-semibold ' >T</span>
          </h1>
        </div>
        <div
          className="section section-3 flex items-end justify-center px-20 h-screen w-full bg-cover bg-center relative"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('../assets/guitar.jpg')",
              filter: 'grayscale(100%)'
            }}
          />
            <h1 className="text-[calc(100vw/7)] font-gilroy font-semibold uppercase text-white relative">
            GUIT<span className='font-mazius text-[#00FFAB]'>A</span>RIST
          </h1>
        </div>
        <div
          className="section section-4 flex items-end justify-center h-screen w-full bg-cover bg-center relative"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('../assets/photography.jpg')",
              filter: 'grayscale(100%)'
            }}
          />
          <h1 className="text-[calc(100vw/8)] font-gilroy font-semibold uppercase text-white relative">
            photog<span className='font-mazius font-semibold text-[#00FFAB]'>ra</span>phy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SwipePanels;
