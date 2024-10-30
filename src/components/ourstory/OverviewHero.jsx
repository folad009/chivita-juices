"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const OverviewHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial opacity 0, animate to opacity 1
    tl.fromTo(heroRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.5 }
    );

    // Cleanup function to reverse the animation on unmount
    return () => {
      tl.reverse();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden before:absolute before:top-0 before:opacity-10 before:start-1/2 before:bg-[url('/assets/images/pattern-cut-fruit-berries.png')] dark:before:bg-[url('/assets/images/pattern-cut-fruit-berries.png')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-x-2 bg-white border border-[#e30417] text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600">
            COMPANY OVERVIEW
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-5 max-w-4xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Providing the Goodness of{' '}<br/>
            <span className="bg-clip-text bg-gradient-to-tl from-[#007d26] to-[#007d26]/40 text-transparent">
              Fruits from Nature
            </span>
          </h1>
        </div>
        {/* End Title */}
      </div>
    </div>
  );
};

export default OverviewHero;
