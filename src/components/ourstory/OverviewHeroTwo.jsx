"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from '@/css/GeneralStyle.module.css';

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
          <h1 className="block text-5xl font-bold text-gray-800 dark:text-white text-center" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Quality has {" "}
            <span className="bg-clip-text bg-gradient-to-tl from-[#e30417] to-[#e30417]/60 text-transparent">another name</span>
          </h1>
          <p className="mt-3 mb-5 text-[16px]  text-gray-800 dark:text-neutral-400 text-center" style={{ fontFamily: "Azo Sans, sans-serif", lineHeight: "1.8" }}>
            Incorporated in 1980, Chivita|Hollandia (CHI Limited) has grown to become a market
            leader in the food & beverage sector in Nigeria. Each of our product
            offerings within the fruit juices, value added-dairy, and snacks
            categories are leaders in the categories in which they operate. Our
            products are loved for their great taste, wide variety, and high
            quality.
          </p>

          <p className="mt-3 text-[16px] text-gray-800 dark:text-neutral-400 text-center" style={{ fontFamily: "Azo Sans, sans-serif", lineHeight: "1.8" }}>
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
        <div ref={imageRef} className={`flex justify-center md:justify-end ${styles.ImageCard}`}>
          <Image
            src="/assets/images/new-chivita-range.png"
            alt="Hero Image"
            width={900}
            height={900}
           
          />
        </div>
      </div>
      {/* End Grid */}
    </div>
  );
};

export default OverviewHeroTwo;
