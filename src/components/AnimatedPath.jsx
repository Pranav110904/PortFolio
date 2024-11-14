import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const AnimatedPath = () => {
  const svgPathRef = useRef(null);
  const stringRef = useRef(null);

  useGSAP(() => {
    const pathElement = svgPathRef.current;
    const stringElement = stringRef.current;

    const handleMouseMove = (e) => {
      const rect = stringElement.getBoundingClientRect();
      const x = e.clientX - rect.left;  // Adjust for element's position
      const y = e.clientY - rect.top;   // Adjust for element's position
      const path = `M 10 100 Q ${x} ${y} 990 100`;
      gsap.to(pathElement, {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathElement, {
        attr: { d: "M 10 100 Q 500 100 990 100" },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
      });
    };

    stringElement.addEventListener("mousemove", handleMouseMove);
    stringElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stringElement.removeEventListener("mousemove", handleMouseMove);
      stringElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={stringRef} 
      style={{ 
        paddingBottom:'20px',
        width: '100%', // Increased width of the parent container
        margin: '0 auto',
        backgroundColor: '#09090B', // Background color
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px' // Adjusted height to fit SVG
      }}
    >
      <div 
        style={{ 
          width: '100%', 
          height: '100%',
          padding: '2px', // Padding around the SVG
          boxSizing: 'border-box' // Ensures padding doesn't affect the element's width and height
        }}
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1000 200" // Set viewBox to match the SVG dimensions
          style={{ 
            display: 'block', // Ensure SVG is a block element to center properly
          }}
        >
          <path 
            ref={svgPathRef} 
            d="M 10 100 Q 500 100 990 100" 
            stroke="#88EFB8" // SVG color
            strokeWidth="3" // Thickness of the SVG path
            fill="transparent" 
          />
        </svg>
      </div>
      <div 
        className='text-white font-gilroy text-xl '
        
      >
        <span className='text-[#00FFAB] '>*</span> Don't Mind if The <span className='text-[#00FFAB] font-mazius'>String</span> Moves More Towards the Right Side
      </div>
    </div>
  );
};

export default AnimatedPath;
