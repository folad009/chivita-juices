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
        stagger: 0.5, // Straggler effect
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
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>The <span className="text-[#007d26] hover:text-[#e30417]/90">Chivita</span> Brand</h1>
          <p className="text-balance text-zinc-600 lg:text-lg" style={{ fontFamily: "Azo Sans, sans-serif"}}>
            Our brands make every day a juicy delight. Check out our exciting range of products.
            There’s a tempting option for everyone, with exciting flavours and family favourites too.
          </p>
        </div>
        <button
          ref={buttonRef}
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          className="inline-flex items-center justify-center whitespace-nowrap text-[20px] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#007d26] text-white hover:bg-[#e30417]/90 h-11 rounded-md px-8 mt-10"
        >
          Discover all our products
        </button>
      </div>

      {/* Floating SVG elements */}
      <img ref={(el) => (floatingVectorRefs.current[0] = el)} src="/assets/images/chivita-fruit-apple.png" className="absolute top-10 left-10 w-32 h-32 opacity-90" />

      <img ref={(el) => (floatingVectorRefs.current[1] = el)} src="/assets/images/water-melon-fruit.png" className="absolute top-20 right-10 w-32 h-32 opacity-90" />
     
      <img ref={(el) => (floatingVectorRefs.current[2] = el)} src="/assets/images/banana-fruit.png" className="absolute bottom-10 left-16 w-32 h-32 opacity-90" />
     
      <img ref={(el) => (floatingVectorRefs.current[3] = el)} src="/assets/images/strawberry-fruit.png" className="absolute bottom-20 right-40 w-20 h-20 opacity-90" />

      <img ref={(el) => (floatingVectorRefs.current[4] = el)} src="/assets/images/orange-fruit.png" className="absolute  bottom-15 right-12 w-20 h-20 opacity-90" />

      <img ref={(el) => (floatingVectorRefs.current[5] = el)} src="/assets/images/mango-fruit.png" className="absolute  bottom-15 left-48 w-20 h-20 opacity-90" />
    </section>

      <ul ref={productRef} className="grid grid-cols-1 gap-6 px-8 md:grid-cols-2 lg:flex">
        {[
          { img: "Product-DPs-Chivita-Fruit-Juice-xxl.png", name: "Chivita 100%", link: "/products/chivita-100"},
          { img: "Product-DPs-Chivita-Active-xxl.png", name: "Chivita Active", link: "/products/chivita-active" },
          { img: "Product-DPs-Chivita-Exotic-xxl.png", name: "Chivita Exotic", link: "/products/chivita-exotic" },
          { img: "Product-DPs-Chivita-Happy-Hour-xxl.png", name: "Chivita Happy Hour", link: "/products/chivita-happy-hour" },
          { img: "Product-DPs-Chivita-Ice-Tea-xxl.png", name: "Chivita Ice Tea", link: "/products/chivita-ice-tea" },
          { img: "chivita-smart.png", name: "Chivita Smart Malt Drink", link: "/product-6" },
        ].map((product, index) => (
          <li
            key={index}
            ref={(el) => (productItemsRef.current[index] = el)}
            className="group relative overflow-hidden rounded-[10px] transition-all duration-500 hover:flex-grow-[5] lg:flex lg:flex-shrink-0 lg:flex-grow lg:basis-0"
          >
            <img
              src={`/assets/images/products-packs/${product.img}`}
              alt={product.name}
              width="700px"
              height="450"
              className="h-[450px] w-full object-cover object-center"
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
      </ul>
    </>
  );
};

export default HomeProducts;