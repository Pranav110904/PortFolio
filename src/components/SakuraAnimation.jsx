import React, { useEffect } from 'react';
import gsap from 'gsap';

const SakuraAnimation = () => {
  useEffect(() => {
    // Animation timeline using GSAP
    const timeline = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.5 },
    });

    timeline
      .to([".color1", ".color2", ".color3"], {
        scaleY: 1,
        stagger: 0.2,
      })
      .to(
        "h1",
        {
          x: 0,
          duration: 2,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5"
      )
      .to(".color1", {
        scaleY: 0,
      })
      .to(".color3", {
        scaleY: 0,
        transformOrigin: "bottom",
      })
      .to(
        ".color2",
        {
          height: "100vh",
        },
        "-=.5"
      )
      .to(
        "h1",
        {
          scale: 0.6,
        },
        "-=.5"
      );
  }, []);

  return (
    <div className="sakura-container">
      <div className="colors-container">
        <div className="color1"></div>
        <div className="color2"></div>
        <div className="color3"></div>
      </div>
      <div className="text">
        <h1>Sakura.</h1>
      </div>
    </div>
  );
};

export default SakuraAnimation;
