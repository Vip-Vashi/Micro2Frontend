import React from "react";
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
 import img1 from './corosel1.jpg';
 import img2 from './corosel2.png';
 import img3 from './coresel3.png';
function Banners() {
  useEffect(() => {
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    const totalItems = carouselItems.length;
    let currentIndex = 0;
 
    function showSlide(index) {
      carouselItems.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
      });
    }
 
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      showSlide(currentIndex);
    }
 
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showSlide(currentIndex);
    }
 
    // Show the initial slide
    showSlide(currentIndex);
 
    // Set up automatic slide transition
    const intervalId = setInterval(nextSlide, 3000);
 
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
 
    // Optional: Add event listeners for manual controls
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');
 
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);
 
    return () => {
      if (prevButton) prevButton.removeEventListener('click', prevSlide);
      if (nextButton) nextButton.removeEventListener('click', nextSlide);
    };
  }, []);
 
  return (
    <div id="default-carousel" className="relative w-full h-full mt-4" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-200 ease-in-out" data-carousel-item>
          <img src={img1} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"alt="Slide 1" />
        </div>
        <div className="hidden duration-200 ease-in-out" data-carousel-item>
          <img src='https://i0.wp.com/calgaryappliances.ca/wp-content/uploads/2023/04/Handymen-820x31-logo2.jpg' className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"alt="Slide 2" />
        </div>
        <div className="hidden duration-200 ease-in-out" data-carousel-item>
          <img src='https://www.shutterstock.com/image-vector/expert-repairman-fixing-broken-oven-600nw-1813128448.jpg' className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3" />
        </div>
        {/* <div className="hidden duration-200 ease-in-out" data-carousel-item>
          <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=400,quality=75/pageimg/lg-Banner-1900X42200.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 4" />
        </div>
        <div className="hidden duration-200 ease-in-out" data-carousel-item>
          <img src="https://img-prd-pim.poorvika.com/pageimg/aadi-web-banner-1900x400-66a503acb9fa1.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 5" />
        </div> */}
      </div>
 
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
 
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            {/* <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" /> */}
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
 
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            {/* <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> */}
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
 
export default Banners;