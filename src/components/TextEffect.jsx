import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './TextEffect.css'

gsap.registerPlugin(ScrollTrigger);

const TextEffect = () => {
    useGSAP(()=>
    {   
        gsap.registerPlugin(ScrollTrigger);

        const textElements = gsap.utils.toArray('.text');

        textElements.forEach(text => {
        gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
            trigger: text,
            start: 'center 80%',
            end: 'center 20%',
            scrub: true,
            },
        });
        });

    },[])

  return (
   <div>
        <div className="container font-gilroy p-20 font-bold mt-72">
            <h1 className="text">IT BEGINS<span className="apl">KEEP GOING</span></h1>
            <h1 className="text">SEE THE UNSEEN<span className="apl">LOOK CLOSER</span></h1>
            <h1 className="text">EVERY PIXEL COUNTS<span className="apl">MAKE IT MATTER</span></h1>
            <h1 className="text">FEEL THE FLOW<span className="apl">GUIDING YOU</span></h1>
            <h1 className="text">CREATE YOUR STORY<span className="apl">MAKE IT EPIC</span></h1>
            <h1 className='text'>CAN BE YOUR NEXT DEVELOPER <a href='https://www.instagram.com/prnv_1109/' className="apl" >CONTACT ME</a></h1>
        </div>


   </div>
  );
};

export default TextEffect;
