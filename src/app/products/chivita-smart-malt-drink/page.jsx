import React from "react";
import styles from "@/css/GeneralStyle.module.css"

const ChivitaSmartMalt = () => {
  return (
    <>
     <section className="bg-center bg-no-repeat bg-cover bg-[url('/assets/images/chivita-smart-malt-pg.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4  max-w-lg text-left py-24 lg:py-24">
          <h1
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Smart Malt Drink
          </h1>
          <p
            className="mb-8 text-[16px] font-normal text-gray-300 lg:text-[16px] leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
           Chivita Smart Malt Drink is our new innovation and newest addition
              to the Chivita range. Packed with Vitamins A, E and the B-Vitamins
              from Malted Sorghum, Chivita Smart Malt is designed to help young
              ones unlock the energy they need for their daily activities. It is
              the perfect blend of high-quality ingredients which have been
              carefully selected from natural, healthy sources to help kids be
              their smartest and achieve optimal physical, mental, emotional,
              and psychological growth and development. So be sure to get your
              pack of Energy to learn, work, and play.
          </p>
        </div>
      </section>


      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/products-packs/smart-malt-drink.png"
              alt="Chivita Smart Malt"
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
            Chivita Smart Malt Drink
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Chivita Smart Malt Drink is our new innovation and newest addition
            to the Chivita range. Packed with Vitamins A, E and the B-Vitamins
            from Malted Sorghum, Chivita Smart Malt is designed to help young
            ones unlock the energy they need for their daily activities. It is
            the perfect blend of high-quality ingredients which have been
            carefully selected from natural, healthy sources to help kids be
            their smartest and achieve optimal physical, mental, emotional, and
            psychological growth and development. So be sure to get your pack of
            Energy to learn, work, and play.
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
              125ml
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChivitaSmartMalt;
