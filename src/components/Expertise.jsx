import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  useGSAP(() => {
    gsap.to('#main h1',{
      transform : 'translateX(-560%)',
      scrollTrigger  : {
          trigger : "#main",
          scroller : "body",
          scrub : 2,
          pin : true,
          start : 'top 0%',
          end : "top -100%"
      }
    })
    
  }, []);

  return (
    <div>
      <section className="   overflow-x-hidden"></section>
      <section id="main" className="w-full h-screen bg-[#09090B]  ">
        <h1 className="text-[30vw] text-white font-poppins font-semibold  whitespace-nowrap">
        Coding <span className='inline-block px-4 font-mazius water-effect'>creativity</span> into every corner of the <span className='text-[#00FFAB] font-mazius'>screen.</span> 
        </h1>
      </section>
      <section className=" "></section>
    </div>
  );
};

export default Expertise;
