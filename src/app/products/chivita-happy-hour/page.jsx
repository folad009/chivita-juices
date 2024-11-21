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
              Happy Hour by Chivita, Peach Pop is made for those that seek
              healthy refreshment and the tasty Peach fruit drink. Its your best
              choice to turn every ordinary moments into happy times. So
              whenever you want to get groovy, rock and enjoy your fruity
              natural refreshment of Happy Hour by Chivita Peach Pop.
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
           Chivita Happy Hour Orange Safari is a range of refreshing still
              drinks. Give your mood a boost with the ever refreshing Happy
              Hour. Every sip bursts into flavors that guarantee to keep you
              smiling.
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
            Chivita Happy Hour Tasty Tango is a range of refreshing still
              drinks. Give your mood a boost with the ever-refreshing Happy
              Hour. Every sip bursts into flavors that guarantee to keep you
              smiling.
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
