"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OverviewHeroTwo = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    // Apply parallax effect to text section
    gsap.fromTo(
      textElement,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    // Apply parallax effect to image section
    gsap.fromTo(
      imageElement,
      { y: 50, opacity: 0 },
      {
        y: -30,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageElement,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    // Clean up on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        {/* Text Section */}
        <div ref={textRef} className="py-5 px-5">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-none dark:text-white" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Quality has
            <br />
            <span className="bg-clip-text bg-gradient-to-tl from-[#007d26] to-[#007d26]/40 text-transparent">another name.</span>
          </h1>
          <p className="mt-3 text-[17px] text-gray-800 dark:text-neutral-400" style={{ fontFamily: "Azo Sans, sans-serif" }}>
            Incorporated in 1980, Chivita|Hollandia (CHI Limited) is a market
            leader in the food & beverage sector in Nigeria. Each of our product
            offerings within the fruit juice, value added dairy, and snacks
            categories are leaders in the categories in which they operate. Our
            products are loved for their great taste, wide variety, and high
            quality.
          </p>

          <p className="mt-3 text-[17px] text-gray-800 dark:text-neutral-400" style={{ fontFamily: "Azo Sans, sans-serif" }}>
            With our ISO 22000 certified state-of-the-art manufacturing
            facility, Chivita|Hollandia (CHI Limited) deploys advanced
            processing and internationally certified technology that automates
            our production processes to ensure that the goodness and nourishment
            in the ingredients provided by Mother Nature remain intact and
            uncompromised in the packaging until you buy the final product from
            the store.
          </p>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="flex justify-center md:justify-end">
          <Image
            src="/assets/images/Chivita-Range-new.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* End Grid */}
    </div>
  );
};

export default OverviewHeroTwo;
