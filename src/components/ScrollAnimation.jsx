import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ScrollAnimation.css';
import { useGSAP } from "@gsap/react";
import emailjs from '@emailjs/browser';
import reach from '../assets/reach.svg';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import telegram from '../assets/telegram.png';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const mainRef = useRef(null);
  const topRef = useRef(null);
  const centerRef = useRef(null);
  const bottomRef = useRef(null);
  const topH1Ref = useRef(null);
  const bottomH1Ref = useRef(null);
  const contentRef = useRef(null);
  
  // State for page view count
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Get the current view count from localStorage (or initialize it to 0)
    const storedViewCount = localStorage.getItem('pageViewCount') || 0;
    const newViewCount = parseInt(storedViewCount, 10) + 1;

    // Save the updated view count back to localStorage
    localStorage.setItem('pageViewCount', newViewCount);

    // Update state to re-render component with the new view count
    setViewCount(newViewCount);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(centerRef.current, { height: "100vh", duration: 1 }, "0")
      .to(topRef.current, { top: "-50%", duration: 1 }, "0")
      .to(bottomRef.current, { bottom: "-50%", duration: 1 }, "0")
      .to(topH1Ref.current, { top: "60%", duration: 1 }, "0")
      .to(bottomH1Ref.current, { bottom: "-30%", duration: 1 }, "0")
      .to(contentRef.current, { marginTop: "0%", duration: 1 }, "<-0.2");
  }, []);

  const form = useRef();
  const emailRef = useRef(); // Reference for email input
  const messageRef = useRef(); // Reference for message input

  const sendEmail = (e) => {
    e.preventDefault();

    const email = emailRef.current.value; // Get email value
    const message = messageRef.current.value; // Get message value

    // Validate inputs
    if (!email || !message) {
      alert("Please fill in both fields!"); // Alert if either field is empty
      return; // Exit the function if inputs are invalid
    }

    emailjs
      .sendForm(
        'service_8zbhj3e',
        'template_tdhm0pr',
        form.current,
        'pQhUV-_PyHAnRxrwC'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          // Clear input fields
          emailRef.current.value = '';
          messageRef.current.value = '';
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div id="main1" className="mt-24" ref={mainRef}>
        <div id="top" ref={topRef}>
          <h1 id="top-h1" className="font-gilroy text-[#00FFAB] font-bold" ref={topH1Ref}>
            INGENIOUS
          </h1>
        </div>
        <div id="center" ref={centerRef}>
          <div className="w-screen p-12 h-[90vh] mx-12 rounded-3xl inline bg-white items-center justify-center">
            <div className="text-[15vh] font-semibold font-gilroy flex items-center">
              REACH ME OUT
              <img src={reach} alt="Reach Logo" className="ml-4 h-[18vh]" />
            </div>
            
            {/* Page View Count Section */}
            


            <div className="mt-[20vh] text-[5vh]">Here are my links...</div>
  
            <div className="flex space-x-6 mt-6">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/pranav-311450262/" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 border-2 border-black rounded-full py-2 px-6">
                  <img src={linkedin} alt="LinkedIn Logo" className="h-6" />
                  <span className="text-black">LinkedIn</span>
                </button>
              </a>
  
              {/* Instagram */}
              <a href="https://www.instagram.com/prnv_1109/" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 border-2 border-black rounded-full py-2 px-6">
                  <img src={instagram} alt="Instagram Logo" className="h-6" />
                  <span className="text-black">Instagram</span>
                </button>
              </a>
  
              {/* Telegram */}
              <a href="https://t.me/prnv_1109" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 border-2 border-black rounded-full py-2 px-6">
                  <img src={telegram} alt="Telegram Logo" className="h-6" />
                  <span className="text-black">Telegram</span>
                </button>
              </a>
            </div>
  
            {/* Form section */}
            <form ref={form} onSubmit={sendEmail} className="flex items-center mt-6 space-x-4">
              <input
                type="email" // Changed type to email
                ref={emailRef}
                className="border-black border-2 p-5 rounded-full w-[25%] h-12"
                placeholder="Enter your email"
                name="user_email"
                required
              />
              <input
                type="text"
                ref={messageRef}
                className="border-black border-2 p-5 rounded-full w-[46%] h-12"
                placeholder="Message"
                required
                name="message"
              />
              <button type="submit" className="group relative inline-block w-[150px] h-12 overflow-hidden rounded-full text-lg text-black">
                <div className="h-[inherit] w-[inherit] overflow-hidden rounded-full bg-[#00FFAB] [transition:_transform_1.5s_cubic-bezier(.19,1,.22,1)] group-hover:scale-[.94]">
                  <span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#ffffff] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_200ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_270ms]" />
                  <span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#000000] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_300ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_470ms]" />
                  <span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#00FFAB] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_380ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_670ms]" />
                </div>
                <span className="absolute inset-0 z-0 m-auto flex w-4/5 items-center justify-center font-gilroy  font-semibold">
                  Send
                </span>
              </button>
            </form>
          </div>
        </div>
        <div id="bottom" ref={bottomRef}>
          <h1 id="bottom-h1" className="font-gilroy text-[#00FFAB] font-bold" ref={bottomH1Ref}>
            INGENIOUS
          </h1>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimation;
