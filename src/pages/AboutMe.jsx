import React, { useEffect } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';



const AboutMe = () => {
  useGSAP(() => {
    gsap.from('.box', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);
  

  return (
    <div className="px-20 2xl:px-72 py-16"> 
      <section>
        <h1 className="text-white text-8xl mb-10 font-semibold font-gilroy">Pranav</h1>
        <p className='text-white text-3xl mb-7'>A passionate web developer with a knack for crafting captivating digital experiences.</p>
        <p></p>
        <div className="my-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white col-span-2 p-6 shadow-md rounded-xl box">
              <h2 className="text-2xl mb-2 font-semibold">SKILLS</h2>
              <div className="w-full h-[2px] mb-5 bg-gray-200"></div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-xl font-medium mb-4">Languages & Libraries</h2>
                  <ul className="space-y-2">
                    <li className="text-black">HTML</li>
                    <li className="text-black">CSS</li>
                    <li className="text-black">JavaScript</li>
                    <li className="text-black">ReactJS</li>
                    <li className="text-black">GSAP</li>
                    <li className="text-black">Express</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-medium mb-4">Applications</h2>
                  <ul className="space-y-2">
                    <li className="text-black">Figma</li>
                    <li className="text-black">Capcut</li>
                    <li className="text-black">After Effects</li>
                    <li className="text-black">Photoshop</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-medium mb-4">Databases</h2>
                  <ul className="space-y-2">
                    <li className="text-black">MySQL</li>
                    <li className="text-black">MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" p-6 shadow-md bg-[#00FFAB] rounded-xl row-span-2 box">
              <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
              <div className="w-full h-[2px] mb-5 bg-black"></div>
              <p className="text-3xl mb-5 font-semibold text-[]">ARMY INSTITUTE OF TECHNOLOGY</p>
              <p className='text-xl mb-5'>Bachelor of Engineering</p>
              <p className='text-lg text-black p-2 rounded-lg bg-slate-200 hover:bg-[#00FFAB]'>2022-Present</p>
            </div>

            <div className="bg-white p-6 col-span-2 row-span-3 shadow-md rounded-xl box">
              <h2 className="text-2xl font-bold mb-2">LINKS</h2>
              <div className="w-full h-[2px] mb-5 "></div>
              <ul className="space-y-2 flex flex-col gap-4 mt-8 mb-5">
                <li>
                  <a href="https://www.linkedin.com/in/pranav-311450262/"  target="_blank" className="text-2xl p-2 rounded-lg bg-slate-200 hover:bg-[#00FFAB]">linkedin.com/pranav-311450262</a>
                </li>
                <li>
                  <a href="https://github.com/Pranav110904" target='_blank' className="text-2xl p-2 rounded-lg bg-slate-200 hover:bg-[#00FFAB]">github.com/Pranav110904</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/prnv_1109/" target = '_blank' className="text-2xl p-2 rounded-lg bg-slate-200 hover:bg-[#00FFAB]">instagram.com/prnv_1109</a>
                </li>
              </ul>
            </div>

            <div className="bg-white text-3xl font-bold flex justify-center items-center col-span-1 row-span-2 rounded-xl shadow-md box relative overflow-hidden">
            <div className="absolute inset-0 bg-[#2bff55] "></div>

              <div className="absolute inset-0 flex justify-center items-center">
              
                <svg
                  className="w-84 h-84 animate-spin text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M6 6l2 2" />
                  <path d="M16 16l2 2" />
                </svg>
              </div>
              

          </div>
        </div>
        </div>
      </section>


      
      
      <div class="mt-40  items-center justify-between">
    <div className='w-full mb-3 h-[2px] rounded-full bg-gray-500'></div>
    <div class="text-white text-sm font-medium">
      © 2023 PRANAV
    </div>
    </div>
    </div>
  );
};

export default AboutMe;
