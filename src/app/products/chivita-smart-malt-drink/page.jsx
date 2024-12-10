import React from 'react'

const ChivitaSmartMalt = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-4xl font-bold text-[#e30417] dark:text-white" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              Chivita Smart Malt Drink
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Azo Sans, sans-serif" }}
            >
              Chivita Smart Malt Drink is our new innovation and newest addition to the Chivita range. Packed with Vitamins A, E and the B-Vitamins from Malted Sorghum, Chivita Smart Malt is designed to help young ones unlock the energy they need for their daily activities. It is the perfect blend of high-quality ingredients which have been carefully selected from natural, healthy sources to help kids be their smartest and achieve optimal physical, mental, emotional, and psychological growth and development. So be sure to get your pack of Energy to learn, work, and play.  
            </p>
          </div>

          <div className="mt-10 relative max-w-5xl mx-auto">
            <img
              className="w-full object-cover h-96 sm:h-[480px] rounded-xl"
              src="/assets/images/CHivita-Range.png"
              alt=""
            />
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/products-packs/smart-malt-drink.png"
              alt="Chivita Smart Malt"
              className="object-contain"
            />
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
            Chivita Smart Malt Drink is our new innovation and newest addition to the Chivita range. Packed with Vitamins A, E and the B-Vitamins from Malted Sorghum, Chivita Smart Malt is designed to help young ones unlock the energy they need for their daily activities. It is the perfect blend of high-quality ingredients which have been carefully selected from natural, healthy sources to help kids be their smartest and achieve optimal physical, mental, emotional, and psychological growth and development. So be sure to get your pack of Energy to learn, work, and play.  
          </p>

          <div className="flex items-center">
            <span
              className="mr-3 font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Size
            </span>
            <div
              className="relative"
              style={{
                fontFamily: "Azo Sans, sans-serif",
                fontWeight: "bold",
              }}
            >
             315ml
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ChivitaSmartMalt;