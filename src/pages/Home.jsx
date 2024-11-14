import React from 'react';
import gsap from 'gsap';
import Intro from '../components/Intro';
import blacllogo from '../assets/black.png';
import PlayingCard from '../components/PlayingCard';
import AnimatedPath from '../components/AnimatedPath';
import Scroll from '../components/Expertise';
import Zoom from '../components/Zoom';
import Expertise from '../components/Expertise';
import ScrollProgressBar from '../components/ScrollProgressBar'; // Import the progress bar component
import EyeComponent from '../components/EyeComponent';
import Pages from '../components/Pages';
import SwipePanels from '../components/SwipePanels';
import Scroller1 from '../components/Scroller1';
import TextEffect from '../components/TextEffect';
import ScrollAnimation from '../components/ScrollAnimation';
import { ContactUs } from '../components/ContactUs';




const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <ScrollProgressBar /> 

      <div className='flex flex-col justify-center items-center mt-10 gap-12 fixed left-1 rounded-md top-[30%] w-10 h-36 pb-8 bg-[#00FFAB] z-50 pointer-events-none shadow-lg'>
        <img src={blacllogo} className='w-6 h-6 md:w-8 md:h-8' alt="Logo" />
        <div className='flex justify-center items-center'>
          <p className='transform text-xs md:text-md font-gilroy font-semibold rotate-[-90deg] whitespace-nowrap'>
            Keep It Chill.
          </p>
        </div>
      </div>

      <section className='bg-[#09090B] px-8 md:px-20 pt-16 md:pt-[10%] pb-16 md:pb-32'>
        <p className='text-white font-gilroy text-[8vw] md:text-[6vw] text-right font-semibold space-x-2 responsive-text'>
          <span className='water-effect text-white px-4 py-2 rounded-md'>
            UI/UX
          </span>
          <span className='water-effect font-mazius px-4 py-2 font-extrabold rounded-md'>
            Designer
          </span> <br />
          <span className='text-white px-4 py-2 rounded-md'>
            & Frontend Developer
          </span> <br />
          <span className='text-right text-[4vw]  font-mazius text-[#00FFAB]'>
            -------- being creative
          </span>
        </p>
      </section>
      
      <AnimatedPath />
      <TextEffect />
      <Intro />
      <Expertise />
      <EyeComponent />
      <SwipePanels />
      <Scroller1 />
      <ScrollAnimation />
    </div>
  );
};

export default Home;
