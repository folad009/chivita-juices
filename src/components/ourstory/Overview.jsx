"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
    useEffect(() => {
        const cardsElements = document.querySelectorAll('.card');
        gsap.from(cardsElements, {
          opacity: 0,
          y: 50,
          stagger: 0.7,
          scrollTrigger: {
            trigger: cardsElements,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
    }, []);

    return (
        <>
        <div className='relative pt-16 pb-32 flex content-center items-center justify-center' style={{ minHeight: "85vh" }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
    style={{
      backgroundImage: "url(/assets/images/chivita-story-background.jpg)"
    }}>
    <span id="blackOverlay" className="w-full h-full absolute opacity-45 bg-black"></span>
  </div>
  <div className="container relative mx-auto">
    <div className="items-center flex flex-wrap">
      <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto">
        <div className="pr-12">
          <h1 className="text-white font-semibold text-5xl text-center" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Chivita Juices Story
              </h1>
        </div>
      </div>

    </div>
  </div>
  
        </div>
        <section className="pb-5 bg-white -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-stretch">
      {/* Box 1 */}
      <div className="card  w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg h-full">
          <div className="px-4 py-5 flex-auto">
            <h6 className="text-4xl font-semibold text-[#e30417]" style={{ fontFamily: "Bebas Neue, sans-serif" }}>Our Brand Promise</h6>
            <p className="mt-2 mb-4 text-gray-800" style={{ fontFamily: "Azo Sans, sans-serif" }}>
              We meet the needs of everyone looking for a piece of undiluted fruit juice nourishment to empower them for Healthy Living.
            </p>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="card w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded-lg h-full">
          <div className="px-4 py-5 flex-auto">
            <h6 className="text-4xl font-semibold text-[#e30417]" style={{ fontFamily: "Bebas Neue, sans-serif" }}>Our Consumers</h6>
            <p className="mt-2 mb-4 text-gray-800" style={{ fontFamily: "Azo Sans, sans-serif" }}>
              We offer the goodness of fruits, healthy nutrition, and uncompromising quality, to everyone who seeks a connection to nature from a trusted partner.
            </p>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="card w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg h-full">
          <div className="px-4 py-5 flex-auto">
            <h6 className="text-4xl font-semibold text-[#e30417]" style={{ fontFamily: "Bebas Neue, sans-serif" }}>Our Category</h6>
            <p className="mt-2 mb-4 text-gray-800" style={{ fontFamily: "Azo Sans, sans-serif" }}>
              We are leaders of the fruit juice category in Nigeria. We lead the market in innovation, product quality, product range, transparency, honesty, and care for our consumers. We are trailblazers and continually demonstrate excellence in all we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
        
    );
};

export default Overview;
