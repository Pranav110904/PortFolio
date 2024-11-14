import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work from './pages/Work';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import gsap from 'gsap';
import Home from './pages/Home';
import MoveToLaptopPage from './components/MoveToLaptopPage';
function App() {
    // Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create a custom cursor element
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  // Update the cursor position on mousemove
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth / 2}px, ${e.clientY - cursor.offsetHeight / 2}px)`;
  });

  // Find all divs with the class 'animate-div' to add hover listeners
  const animateDivs = document.querySelectorAll('.animate-div');

  animateDivs.forEach((div) => {
    // When mouse enters the div, increase cursor size
    div.addEventListener('mouseenter', () => {
      cursor.style.width = '50px';
      cursor.style.height = '50px';
    });

    // When mouse leaves the div, reset cursor size
    div.addEventListener('mouseleave', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
    });
  });
});

  return (
    <div className="custom-scroll-container ">
      <div className="absolute w-full  h-full flex justify-center items-center bg-[#0C1112] z-20 rounded-2xl page1">
        <h1 className="text-5xl font-gilroy flex flex-col font-semibold text-white">
          <div className="text-th1 split-text">HELLO</div>
          <p className='text-th2 split-text'>
            THIS IS
            </p> 
            <span className='text-th3 font-mazius text-6xl text-[#00FFAB] '>PRANAV</span>
          
          <p className="text-th4 split-text">& I AM A</p>
        </h1>
      </div>

      <div className="absolute w-full h-full bg-[#00FFAB] z-10 rounded-2xl page2"></div>

      
      <Router>
       
          
          <Navbar  /> 
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/projects" element={<Project />} />
            </Routes>

      </Router>
      <MoveToLaptopPage></MoveToLaptopPage>
    </div>
  );
}

export default App;
