import React from "react";

import styles from "@/css/GeneralStyle.module.css"
const ChivitaActive = () => {
  return (
    <>
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div className="absolute inset-0">
        <img className="object-cover w-full h-full lg:object-right md:scale-100 md:origin-top-right" src="/assets/images/chivita-active-background-new.jpg" alt="" />
    </div>

    <div className="absolute inset-0 hidden bg-gradient-to-l md:block from-black to-transparent"></div>

    <div className="absolute inset-0 block bg-black/70 md:hidden"></div>

    <div className="relative px-2 mx-8 sm:px-4 lg:px-2 max-w-7xl h-[300px]">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/2 md:text-right ml-auto mt-10">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Chivita Active</h2>
            <p className="mt-4 text-base text-gray-200">Chivita Active is our innovative masterstroke, launched in 2010 as a
            unique fruit juice blend of six citrus fruits. We extended the brand
            in 2016 with the launch of a Fruit + Vegetable combo, Carrot &
            Orange. Enriched with Vitamin C, Chivita Active has no
            preservatives, no artificial colours, and no artificial flavours. It
            is the perfect partner on your journey to an active, healthy life.</p>
        </div>
    </div>
</section>
      {/*<section className="bg-center bg-no-repeat bg-cover bg-[url('/assets/images/chivita-active-bg-pg.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 ml-auto max-w-lg text-left py-24 lg:py-24">
          <h1
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Active
          </h1>
          <p
            className="mb-8 text-[16px] font-normal text-gray-300 lg:text-[16px] leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Chivita Active is our innovative masterstroke, launched in 2010 as a
            unique fruit juice blend of six citrus fruits. We extended the brand
            in 2016 with the launch of a Fruit + Vegetable combo, Carrot &
            Orange. Enriched with Vitamin C, Chivita Active has no
            preservatives, no artificial colours, and no artificial flavours. It
            is the perfect partner on your journey to an active, healthy life.
          </p>
        </div>
      </section>*/}

      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/product-image-dp/chivita-active-citrus-packs.png"
              alt="Chivita Citrus Mix"
              className="object-contain"
            />
              <div className={styles.btnContainer}>
              <button className={styles.btn}>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4 pl-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Active Citrus Mix
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Chivita Active is a unique blend of six citrus fruits of Orange,
            Lemon, Grapefruit, Mandarin, Tangerine, and Lime. Chivita Active is
            enriched with Vitamin C, a key requirement for tissue growth and
            repair. It’s the perfect partner on your journey to living a
            healthy, active, and productive life.
          </p>

          <div className="flex items-center">
            <span
              className="mr-3 font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Sizes:
            </span>
            <div
              className="relative"
              style={{
                fontFamily: "Azo Sans, sans-serif",
                fontWeight: "bold",
              }}
            >
              1 Litre | 315ml
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex flex-col space-y-4 pr-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Active Carrot & Orange
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Chivita Active Carrot & Orange is made from a selection of fine
            fruits and vegetables which have been perfectly blended to retain
            nature’s goodness and the health benefits of the vitamins and
            nutrients contained therein. Our unique Carrot & Orange blend pairs
            together the carrot’s earthy sweetness with the orange’s tangy
            brightness in a perfect symphony of flavors, colours, and juicy
            delight. Fulfil your goal of an active, healthy life with our unique
            fruit and vegetable blend which has been further enriched with
            Vitamin C.
          </p>

          <div className="flex items-center">
            <span
              className="mr-3 font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Size:
            </span>
            <div
              className="relative"
              style={{
                fontFamily: "Azo Sans, sans-serif",
                fontWeight: "bold",
              }}
            >
              1 Litre
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/product-image-dp/chivita-active-carrot-packs.png"
              alt="Chivita Orange Carrot"
              className="object-contain"
            />
             <div className={styles.btnContainer}>
              <button className={styles.btn}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/product-image-dp/chivita-active-zests-packs.png"
              alt="Chivita Zest"
              className="object-contain"
            />
             <div className={styles.btnContainer}>
              <button className={styles.btn}>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4 pl-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Active Zest
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Chivita Active Zest is a blend of Orange, Lemon, Pink Grapefruit,
            Mandarin, and Lime carefully crafted into a refreshing burst of
            citrus flavor and enriched with vitamin C. The intense flavor is
            light and refreshing, with a balanced touch of sweetness, just
            enough to lift your spirits without overwhelming your senses.
            Indulge in a sip of sunshine in a bottle… a pleasant reminder that
            sometimes, less is more.
          </p>

          <div className="flex items-center">
            <span
              className="mr-3 font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Sizes:
            </span>
            <div
              className="relative"
              style={{
                fontFamily: "Azo Sans, sans-serif",
                fontWeight: "bold",
              }}
            >
              1 Litre | 330ml | 125ml | 45ml
            </div>
          </div>

          {/*<a
              href="#"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
              className="inline-flex items-center justify-center whitespace-nowrap text-[20px] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e30417] text-white hover:bg-[#007d26]/90 h-11 rounded-md px-8"
            >
              Buy Now
            </a>*/}
        </div>
      </div>
    </>
  );
};

export default ChivitaActive;
