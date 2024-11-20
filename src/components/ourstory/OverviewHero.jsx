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
        {/* Title */}
        <div className="mt-5 max-w-4xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-6xl dark:text-neutral-200" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Providing the Goodness of{' '}<br/>
            <span className="bg-clip-text bg-gradient-to-tl from-[#e30417] to-[#e30417]/60 text-transparent">
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
