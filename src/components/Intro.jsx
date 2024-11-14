import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Intro = () => {
  const aboutTextRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline for sequential animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 60%',
        end: 'top 20%',
        scrub: true,
      },
    });

    // About Me Text Animation
    tl.from(aboutTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 3,
    });

    // Word-by-word animation for paragraph
    const words = paragraphRef.current.querySelectorAll('span');
    tl.from(words, {
      opacity: 0,
      y: 50,
      stagger: 0.1, // Delay between each word animation
      duration: 1.2,
    });
  }, []);

  // Helper function to split the paragraph into words and wrap them in spans
  const wrapWordsInSpan = (text) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="inline-block mr-1">
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <div>
      <section className="w-full h-[700px] bg-[#09090B] px-20 flex pt-36 relative">
        <div className="w-[50%] text-left h-full">
          <div className="flex flex-col gap-10">
            <div ref={aboutTextRef} className="text-9xl text-[#00FFAB] font-gilroy font-semibold">
              ABOUT <span className="font-mazius text-white">ME</span>
            </div>
          </div>
        </div>
        <div
          ref={paragraphRef}
          className="w-[50%] h-full font-gilroy text-white font-regular text-3xl text-justify"
        >
          <p>
            {wrapWordsInSpan(
              "Driven by a deep passion for innovation and creativity, I thrive on transforming unique ideas into reality. With a strong focus on precision and a relentless drive for perfection, I am dedicated to pushing boundaries and exploring new ways to bring my vision to life. My work reflects not just attention to detail but a commitment to excellence, making every project a true reflection of my passion and dedication."
            )}
          </p>
        </div>

        {/* Neon Line */}
        <div className="absolute w-[6px] h-[400px] bg-[#00FFAB] top-[50px] right-[25%] rotate-[130deg] blur-3xl shadow-[0_0_10px_#00FFAB,0_0_20px_#00FFAB,0_0_30px_#00FFAB]"></div>
        <div className="absolute w-[6px] h-[400px] bg-[#00FFAB] top-[150px] left-[25%] rotate-[130deg] blur-3xl shadow-[0_0_10px_#00FFAB,0_0_20px_#00FFAB,0_0_30px_#00FFAB]"></div>
      </section>
    </div>
  );
};

export default Intro;
