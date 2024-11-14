import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/csslogo.png';
import jsLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import tailwindLogo from '../assets/tailwindcss.png';
import figmaLogo from '../assets/figma.png';
import mongodbLogo from '../assets/mongodb.png';
import mysqlLogo from '../assets/mysql.png';
import gsapLogo from '../assets/gsap.png';
import { useGSAP } from "@gsap/react";

const Card = () => {
  const cardRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(() => {
    const carousel = carouselRef.current;
    const logoWidth = carousel.querySelector('img').offsetWidth;
    const totalWidth = logoWidth * imageArray.length;

    // GSAP animation for the horizontal carousel
    gsap.to(carousel, {
      x: `-${totalWidth}px`,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    gsap.to(card, {
      duration: 0.5,
      rotationX: (deltaY / centerY) * 10,
      rotationY: -(deltaX / centerX) * 10,
      transformPerspective: 1000,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      duration: 0.5,
      rotationX: 0,
      rotationY: 0,
      ease: 'power1.out',
    });
  };

  const imageArray = [
    htmlLogo, cssLogo, jsLogo, reactLogo, tailwindLogo, figmaLogo, mongodbLogo, mysqlLogo, gsapLogo,
  ];

  return (
    <div className="bg-[#09090B] flex justify-center items-center px-20 py-20">
      <div
        ref={cardRef}
        className="w-full h-[700px] bg-[#00FFAB] rounded-xl relative flex flex-col items-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-[90%] mt-8 flex px-24 relative z-10">
          <p className="font-gilroy text-9xl w-[50%] font-semibold pt-7 z-0 text-left pl-7">
            TECH <br /><span className="font-mazius text-white">STACK</span>
          </p>
          <div className="font-gilroy text-4xl w-[50%] font-regular text-justify text-[#09090B] pt-7 pl-7">
            GSAP <span className='font-mazius text-5xl text-white'>(GreenSock Animation Platform)</span> is a powerful tool for creating high-performance, smooth animations. It handles everything from simple effects to complex <span className='font-mazius text-5xl text-white'>sequences</span> with precision and control.
          </div>
        </div>

        {/* Horizontal logo carousel inside the box */}
        <div className="relative w-full overflow-hidden mt-20 z-20">
          <div
            ref={carouselRef}
            className="flex whitespace-nowrap"
            style={{ whiteSpace: 'nowrap' }}
          >
            {/* Duplicate logos for infinite scrolling effect */}
            {[...imageArray, ...imageArray].map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index}`} className="h-28 mx-4" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
