import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CursorAnimation = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.1,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { width: 50, height: 50, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { width: 20, height: 20, duration: 0.3 });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animateDivs = document.querySelectorAll('.animate-div');
    animateDivs.forEach((div) => {
      div.addEventListener('mouseenter', handleMouseEnter);
      div.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      animateDivs.forEach((div) => {
        div.removeEventListener('mouseenter', handleMouseEnter);
        div.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
};

export default CursorAnimation;
