import React from 'react';
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react';
const projects = [
  {
    id: 1,
    title: 'Hostel Suvidha',
    description:
      '"Hostel Suvidha" is an innovative digital solution designed to streamline hostel life and improve campus operations. This project transforms manual processes by enabling an online complaint system for easy reporting and tracking of issues related to facilities such as furniture, washrooms, WiFi, and electronics. In addition, it modernizes the campus laundry system with digital requests, updates, and delivery tracking. The platform also includes features for gate in-out tracking and an online leave application system, simplifying the management of resident movements. Hostel Suvidha aims to create a seamless, user-friendly experience for students and staff, helping our campus embrace a fully digital future.',
    image: '../assets/image.png', // Replace with your actual image source
  },
  {
    id: 2,
    title: 'TripNest',
    description:
      'TripNest is a dynamic flight booking platform built using the MERN stack (MongoDB, Express.js, React, Node.js), designed to make travel planning effortless and intuitive. With a user-friendly interface, TripNest provides real-time feedback at every step of the booking process, ensuring users stay informed and confident in their choices. From browsing flights to booking and final confirmation, each stage is optimized for ease of use, making TripNest an ideal solution for hassle-free travel planning.',
    image: '../assets/TripNest.png', // Replace with your actual image source
  },
  {
    id: 3,
    title: 'GigglioAi',
    description:
      'Gigglio AI is an interactive, gamified learning platform crafted to make language learning delightful for kindergarten students. Using Azure services for robust performance and scalability, Gigglio AI enables young learners to explore letters, words, and sentences in an engaging, child-friendly environment. Built with a React.js frontend, the platform is responsive and smooth, offering leveled challenges that make learning feel like play. Teachers can monitor each student’s progress and performance in real time, allowing for tailored guidance and support. With Gigglio AI, early education is transformed into a fun, technology-driven experience.',
    image: '../assets/GiglioAi.png', // Replace with your actual image source
  },
  {
    id: 4,
    title: 'Online CSD',
    description:
      'The Online CSD (Canteen Stores Department) project is a digital platform designed to streamline shopping for defense personnel, providing easy online access to essential goods and services. Built using HTML, CSS, and JavaScript, this platform offers a simple and user-friendly interface for browsing, ordering, and managing purchases, reducing the need for in-store visits. With secure payment integration, real-time inventory updates, and features like order tracking and purchase history, Online CSD ensures a seamless shopping experience tailored to meet the needs of the defense community.',
    image: '../assets/onlinecsd.png', // Replace with your actual image source
  },
  {
    id: 5,
    title: 'TravelTalks',
    description:
      'TravelTalks is a vibrant social platform designed exclusively for travelers, offering an Instagram-like experience tailored to wanderers and adventurers. Users can create profiles, share travel moments through blogs, photos, and videos, and connect with a community that shares their passion for exploration. With features like seamless post-sharing, commenting, and following, TravelTalks creates a dedicated space where travel enthusiasts can exchange stories, discover new destinations, and inspire others. Whether sharing captivating blog posts or videos, TravelTalks is the go-to digital hub for anyone eager to share their journey with like-minded travelers.',
    image: '../assets/traveltalks.png', // Replace with your actual image source
  },
];

const Project = () => {
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
      <h1 className="text-white text-8xl mb-10 font-semibold font-gilroy">PROJECTS</h1>
      <section>
        {projects.map((project) => (
          <div key={project.id} className="w-full box h-auto bg-gray-200 rounded-2xl p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="bg-black h-52 md:h-48 rounded-xl flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 text-sm sm:text-base">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>


      <h1 className="text-white text-8xl mt-20 mb-10 font-semibold font-gilroy">& DESIGNS</h1>
      <p className='text-white text-3xl mb-7'>I MAKE UI/UX DESIGNS </p>
        

      <div class=" py-16">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

    <div class="col-span-1 row-span-2 group relative overflow-hidden rounded-lg shadow-lg w-full min-h-[400px]">
      <img src="../assets/portf.png" alt="Design 1" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-white text-2xl font-semibold">Design 1</span>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-lg shadow-lg w-full min-h-[400px]">
      <img src="../assets/sf.png" alt="Design 2" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-white text-2xl font-semibold">Design 2</span>
      </div>
    </div>

    <div class="col-span-2 group relative overflow-hidden rounded-lg shadow-lg w-full min-h-[400px]">
      <img src="../assets/log.png" alt="Design 3" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-white text-2xl font-semibold">Design 3</span>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-lg shadow-lg w-full min-h-[400px]">
      <img src="../assets/pace.png" alt="Design 4" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-white text-2xl font-semibold">Design 4</span>
      </div>
    </div>

    <div class="col-span-1 row-span-2 group relative overflow-hidden rounded-lg shadow-lg w-full min-h-[400px]">
      <img src="../assets/landpag.png" alt="Design 5" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-white text-2xl font-semibold">Design 5</span>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-lg shadow-lg w-full min-h-[400px]">
      <img src="../assets/first.png" alt="Design 6" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-white text-2xl font-semibold">Design 6</span>
      </div>
    </div>

    <div class="col-span-2 group relative overflow-hidden rounded-lg shadow-lg w-full min-h-[400px]">
      <img src="../assets/instachotu.jpg" alt="Design 7" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-white text-2xl font-semibold">Design 7</span>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-lg shadow-lg w-full min-h-[400px]">
      <img src="../assets/chotu.png" alt="Design 8" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-white text-2xl font-semibold">Design 8</span>
      </div>
    </div>

  </div>
</div>
  <div class="mt-28  items-center justify-between">
    <div className='w-full mb-3 h-[2px] rounded-full bg-gray-500'></div>
    <div class="text-white text-sm font-medium">
      © 2023 PRANAV
    </div>
    </div>


      
    </div>
    
  );
};

export default Project;
