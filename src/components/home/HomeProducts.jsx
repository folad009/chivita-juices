"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HomeProducts = () => {
  const productRef = useRef(null);
  const buttonRef = useRef(null);
  const productItemsRef = useRef([]);
  const floatingVectorRefs = useRef([]);

  useEffect(() => {
    // Scroll-triggered animations with straggler effect for products
    gsap.fromTo(
      productItemsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.9, // Straggler effect
        ease: "power3.out",
        scrollTrigger: {
          trigger: productRef.current,
          start: "top 75%", // Start animation when products are 75% into the viewport
          toggleActions: "play none none none",
        },
      }
    );

    // Smooth scroll to products section on button click
    buttonRef.current.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: productRef.current,
        ease: "power2.out",
      });
    });

    floatingVectorRefs.current.forEach((el, i) => {
      gsap.to(el, {
        y: 20,
        duration: 3 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    // Cleanup listener on component unmount
    return () => {
      buttonRef.current?.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
     <section className="py-20 relative overflow-hidden">
      <div className="text-center">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-6">
          <img src="/assets/images/the-chivita-brand.png" className="w-[300px] items-center" />
          <p className="text-balance text-zinc-600 lg:text-lg" style={{ fontFamily: "Azo Sans, sans-serif"}}>
            Our brands make every day a juicy delight. Check out our exciting range of products.
            There’s a tempting option for everyone, with exciting flavours and family favourites too.
          </p>
        </div>
        <a
          href="/storelocator"
          ref={buttonRef}
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          className="inline-flex items-center justify-center whitespace-nowrap text-[20px] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e30417]  text-white hover:bg-[#007d26] h-11 rounded-md px-8 mt-10"
        >
          Find our stores
        </a>
      </div>

      {/* Floating SVG elements */}
      <img
  ref={(el) => (floatingVectorRefs.current[0] = el)}
  src="/assets/images/chivita-orange-fruit.png"
  className="
    absolute top-10 left-10 w-14 h-14 opacity-80
    sm:top-5 sm:left-5 sm:w-14 sm:h-14 sm:opacity-80
    md:top-8 md:left-8 md:w-32 md:h-32 md:opacity-85
  "
/>

<img
  ref={(el) => (floatingVectorRefs.current[1] = el)}
  src="/assets/images/chivita-pineapple-juices.png"
  className="
    absolute top-4 right-10 w-14 h-14 opacity-90
    sm:top-10 sm:right-5 sm:w-20 sm:h-20 sm:opacity-80
    md:top-15 md:right-8 md:w-32 md:h-32 md:opacity-85
  "
/>

<img
  ref={(el) => (floatingVectorRefs.current[2] = el)}
  src="/assets/images/chivita-banana-fruit.png"
  className="
    absolute bottom-28 left-16 w-14 h-14 opacity-90
    sm:bottom-10 sm:left-5 sm:w-20 sm:h-20 sm:opacity-80
    md:bottom-32 md:left-14 md:w-32 md:h-32 md:opacity-85
  "
/>

<img
  ref={(el) => (floatingVectorRefs.current[3] = el)}
  src="/assets/images/chivita-apple-fruit.png"
  className="
    absolute bottom-24 right-10 w-14 h-14 opacity-90
    sm:bottom-15 sm:right-9 sm:w-20 sm:h-20 sm:opacity-80
    md:bottom-20 md:right-36 md:w-32 md:h-32 md:opacity-99
  "
/>

<img
  ref={(el) => (floatingVectorRefs.current[4] = el)}
  src="/assets/images/chivita-strawberry-fruit.png"
  className="
    absolute bottom-15 right-12 w-14 h-14 opacity-90
    sm:bottom-8 sm:right-6 sm:w-14 sm:h-14 sm:opacity-80
    md:bottom-10 md:right-8 md:w-20 md:h-20 md:opacity-85
  "
/>

      <img
  ref={(el) => (floatingVectorRefs.current[5] = el)}
  src="/assets/images/chivita-mango-fruit.png"
  className="
    absolute bottom-15 left-48 w-14 h-14 opacity-90 
    sm:bottom-10 sm:left-32 sm:w-16 sm:h-16 sm:opacity-80
    md:bottom-12 md:left-40 md:w-20 md:h-20 md:opacity-85
  "
/>
    </section>

   {/*<ul ref={productRef} className="grid grid-cols-1 gap-6 px-8 md:grid-cols-2 lg:flex">
        {[
          { img: "Product-DPs-Chivita-Fruit-Juice-xxl.png", name: "Chivita 100% Juice", link: "/products/chivita-100"},
          { img: "Product-DPs-Chivita-Active-xxl.png", name: "Chivita Active", link: "/products/chivita-active" },
          { img: "Product-DPs-Chivita-Exotic-xxl.png", name: "Chivita Exotic", link: "/products/chivita-exotic" },
          { img: "Product-DPs-Chivita-Happy-Hour-xxl.png", name: "Chivita Happy Hour", link: "/products/chivita-happy-hour" },
          { img: "Product-DPs-Chivita-Ice-Tea-xxl.png", name: "Chivita Ice Tea", link: "/products/chivita-ice-tea" },
          
        ].map((product, index) => (
          <li
            key={index}
            ref={(el) => (productItemsRef.current[index] = el)}
            className="group relative overflow-hidden rounded-[2px] transition-all duration-500 hover:flex-grow-[5] lg:flex lg:flex-shrink-0 lg:flex-grow lg:basis-0"
          >
            <img
              src={`/assets/images/products-packs/${product.img}`}
              alt={product.name}
              width="700px"
              height="450"
              className="h-[450px] w-full object-cover object-center border-green-100 border-2"
            />
            <div className="invisible absolute inset-0 flex items-end bg-gradient-to-t from-[#007d26] to-[#007d26]/10 p-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 xl:p-10">
              <div className="translate-x-10 text-[#F8FCDD] transition-all delay-150 duration-500 group-hover:translate-x-0">
                <span style={{ fontFamily: 'Bebas Neue, sans-serif' }} className=" block text-wrap font-bricolageGrotesque text-3xl font-bold leading-[1.26] xl:text-[38px]">
                  {product.name}
                </span>
                <a href={product.link} style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          className="inline-flex items-center justify-center whitespace-nowrap text-[20px] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e30417] text-white hover:bg-[#007d26]/90 h-11 rounded-md px-8">Learn More</a>
              </div>
            </div>
          </li>
        ))}
      </ul>*/}
    </>
  );
};

export default HomeProducts;
