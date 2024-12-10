import React from "react";

const ChivitaHappyHour = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1
              className="block text-4xl font-bold text-[#e30417] dark:text-white"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Chivita Happy Hour
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Azo Sans, sans-serif" }}
            >
             Chivita Happy Hour is made for those who seek refreshment with a sweet fruity taste experience.  Our Chivita Happy Hour products provide an enjoyable drinking experience for those who prefer a less intense, yet hydrating fruity beverage. Chivita Happy Hour is your best choice to turn ordinary everyday moments into exceptionally happy times. So, whenever you want to get groovy and have fun, rock and enjoy the refreshing taste of Chivita Happy Hour. 
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
              src="/assets/images/product-image-dp/HappyHour.png"
              alt="Chivita Happy Hour"
              className="object-contain"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4 pl-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Happy Hour Orange Safari
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Chivita Happy Hour Orange Safari is a refreshing Orange fruit flavoured drink that creates a vibrant, sensory experience which engages your senses and excites your taste buds. Travel to safari land and give your mood a boost with the tasty Chivita Happy Hour Orange Safari. Every sip you take of our Chivita Happy Hour Orange Safari fruit flavoured drink bursts into a thrilling flavor that is guaranteed to make you happy, keep you smiling, and get you excited all day, every day!
          </p>

          <div className="flex items-center">
            <span
              className="mr-3 font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Sizes
            </span>
            <div
              className="relative"
              style={{
                fontFamily: "Azo Sans, sans-serif",
                fontWeight: "bold",
              }}
            >
              1 Litre | 125ml | 90ml
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
            Chivita Happy Hour Tasty Tango
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Want a happy, tasty experience fruit flavoured experience in a variety of flavours? We got you covered with our Chivita Happy Hour Tasty Tango mixed fruit flavoured drink. The delicious mix of tropical fruit flavours – Mango, Apple, Pineapple, Orange, and Passion Fruit – is guaranteed to get you stepping on the dance floor once the drink hits your taste buds. Let’s take you to an exciting tropical location as you tango with our Chivita Happy Hour Tasty Tango fruit flavoured drink. 
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
               125ml 
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/product-image-dp/Happyhour-tasty-tango.png"
              alt="Chivita Happy Hour"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChivitaHappyHour;
