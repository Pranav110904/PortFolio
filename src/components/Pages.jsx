import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Pages = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure panels are correctly selected
    const panels = gsap.utils.toArray(".swipe-section .panel");
    console.log("Panels:", panels); // Log panels to ensure they are selected

    if (panels.length === 0) {
      console.warn("No panels found. Ensure that your panels are rendered.");
      return;
    }

    let currentIndex = 0;
    let animating = false;

    // Set initial state for panels
    gsap.set(panels, { yPercent: 100 });

    const updatePanel = (index, scrollingDown) => {
      if (index >= 0 && index < panels.length) {
        animating = true;
        const targetPanel = panels[index];
        gsap.fromTo(targetPanel,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: "power1.inOut",
            duration: 1,
            onComplete: () => {
              animating = false;
              if (index === panels.length - 1) {
                scrollObserver.disable();
              }
            }
          }
        );

        if (scrollingDown) {
          gsap.to(panels[index - 1], {
            yPercent: 100,
            ease: "power1.inOut",
            duration: 1
          });
        } else {
          gsap.to(panels[index + 1], {
            yPercent: 100,
            ease: "power1.inOut",
            duration: 1
          });
        }
      }
    };

    const scrollObserver = ScrollTrigger.create({
      id: "scrollObserver",
      trigger: ".swipe-section",
      pin: true,
      start: "top top",
      end: "+=" + (panels.length * window.innerHeight),
      scrub: true,
      markers: true, // Enable markers to debug
      onUpdate: (self) => {
        if (!animating) {
          const direction = self.direction;
          const scrollPos = self.scroll();
          const index = Math.round(scrollPos / window.innerHeight);
          if (index !== currentIndex) {
            currentIndex = index;
            updatePanel(currentIndex, direction === 1);
          }
        }
      },
      onEnterBack: (self) => {
        if (!animating) {
          self.scroll(self.start);
        }
      }
    });

    // Cleanup observer on component unmount
    return () => {
      scrollObserver.kill();
    };
  }, []);

  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden swipe-section">
        <section className="absolute flex justify-center items-center w-full h-screen font-semibold text-xl text-white p-4 bg-red-500 panel">
          Video 1
        </section>
        <section className="absolute flex justify-center items-center w-full h-screen font-semibold text-xl text-white p-4 bg-purple-500 panel">
          Video 2
        </section>
        <section className="absolute flex justify-center items-center w-full h-screen font-semibold text-xl text-white p-4 bg-blue-500 panel">
          Video 3
        </section>
        <section className="absolute flex justify-center items-center w-full h-screen font-semibold text-xl text-white p-4 bg-orange-500 panel">
          Video 4
        </section>
      </div>
    </div>
  );
};

export default Pages;
