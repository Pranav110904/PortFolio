import {React,useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import gsap from 'gsap'
const Navbar = () => {
  function splitTextIntoWords() {
    const elements = document.querySelectorAll('.split-text'); // Select elements with class 'split-text'

    elements.forEach(element => {
      const text = element.textContent;
      const words = text.split(/\s+/); // Split text by whitespace to get words
      const wrappedWords = words.map(word => `<span>${word}</span>`).join(' '); // Wrap each word in <span> and join them with space
      element.innerHTML = wrappedWords; // Update the element's HTML
    });
  }
  function getMaxHeightYValue() {
    // Fetch the height of the viewport
    const screenHeight = window.innerHeight;
  
    // Determine and return the appropriate y value based on the screen height
    if (screenHeight >= 1800) {
      return -2000; // For very large screens
    } else if (screenHeight >= 1600) {
      return -1800; // For large screens
    } else if (screenHeight >= 1400) {
      return -1600; // For medium-large screens
    } else if (screenHeight >= 1200) {
      return -1400; // For large screens
    } else if (screenHeight >= 1000) {
      return -1200; // For medium-large screens
    } else if (screenHeight >= 800) {
      return -1000; // For medium screens
    } else if (screenHeight >= 600) {
      return -800;  // For small screens
    } else {
      return -600;  // For very small screens
    }
  }
  
  useEffect(() => {
    // Function to split text into words
    splitTextIntoWords();
  
    // Initialize GSAP timeline
    const tl = gsap.timeline();
    const yValue = getMaxHeightYValue();
  
    // Animate split text
    tl.from('.split-text span', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
    })
    // Animate .page1 element
    .to('.page1', {
      y: yValue, // Adjust the final position as needed
      duration: 3,
      ease: "power4.out",

    })
    // Animate .page2 element with a delay after .page1 starts moving
    .to('.page2', {
      
      y: yValue, // Same final position as .page1
      duration: 3,
      ease: "power4.out",
      delay: 0.07, // Delay to make it follow after .page1 starts
    }, '-=3'); // Overlap with the end of .page1 animation
  }, []); // Run GSAP animation once on load
  return (
    <>
      <div className='w-full h-full  bg-[#09090B] '>
      
        {/* Color gradient background */}
        <div className='absolute z-0 left-[35%] top-[-400px] w-96 h-96 bg-[linear-gradient(90deg,#05AFEC_0%,#01BBEC_14.45%,#01C8E7_30.44%,#01D5E0_45.05%,#30DFD2_60.21%,#61E7C6_74.55%,#61E7C6_89.71%,#00FFAB_100%)] rounded-full blur-[150px]'></div>
        <div className='absolute z-0 left-[35%] top-[-400px] w-96 h-96 bg-[linear-gradient(90deg,#05AFEC_0%,#01BBEC_14.45%,#01C8E7_30.44%,#01D5E0_45.05%,#30DFD2_60.21%,#61E7C6_74.55%,#61E7C6_89.71%,#00FFAB_100%)] rounded-full blur-[150px]'></div>
        
        
        <nav className='relative z-10 flex flex-row justify-between  items-center px-20 2xl:px-72 py-16'>
          <NavLink to='/'>
            <img src={logo} className='min-w-20 min-h-20 max-w-24 max-h-24' alt='Logo' />
          </NavLink>
          <div className='w-[58%] h-[4px] bg-white rounded-2xl'></div>
          <section className='text-white font-poppins flex gap-2 items-center justify-center text-md'>
            <span>✦</span>
            <span className='flex justify-center cursor-pointer rounded-lg hover:bg-[#00FFAB]  hover:text-[#09090B] hover:text-xl px-3 items-center py-1 transition-all duration-300'>
                <Link to="/">HOME</Link>
              </span>

              <span>✦</span>

              <span className='flex justify-center cursor-pointer rounded-lg hover:bg-[#00FFAB] hover:text-xl hover:text-[#09090B] px-3 items-center py-1 transition-all duration-300'>
                <Link to="/aboutme">ABOUT ME</Link>
              </span>

              <span>✦</span>

              <span className='flex justify-center cursor-pointer rounded-lg hover:bg-[#00FFAB] hover:text-xl hover:text-[#09090B] px-3 items-center py-1 transition-all duration-300'>
                <Link to="/projects">PROJECT</Link>
              </span>

          </section>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
