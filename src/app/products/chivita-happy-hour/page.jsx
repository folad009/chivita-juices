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

      <div className="max-w-2xl mx-auto my-5 rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <div className="flex items-start sm:gap-8">
          <div>
            <img src="/assets/images/product-image-dp/HappyHour.png" />
          </div>
          <div>
            <h1
              className="mt-4 text-lg font-medium sm:text-xl"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Chivita Happy Hour Orange Safari
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Azo Sans, sans-serif" }}
            >
              Chivita Happy Hour Orange Safari is a range of refreshing still
              drinks. Give your mood a boost with the ever refreshing Happy
              Hour. Every sip bursts into flavors that guarantee to keep you
              smiling.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
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
            <a
              href="#"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
              className="inline-flex items-center justify-center whitespace-nowrap text-[20px] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e30417] text-white hover:bg-[#007d26]/90 h-11 rounded-md px-8"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto my-5 rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <div className="flex items-start sm:gap-8">
          <div>
            <img src="/assets/images/product-image-dp/Happyhour-tasty-tango.png" />
          </div>
          <div>
            <h1
              className="mt-4 text-lg font-medium sm:text-xl"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Chivita Happy Hour Tasty Tango
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Azo Sans, sans-serif" }}
            >
              Chivita Happy Hour Tasty Tango is a range of refreshing still
              drinks. Give your mood a boost with the ever-refreshing Happy
              Hour. Every sip bursts into flavors that guarantee to keep you
              smiling.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
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
            <a
              href="#"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
              className="inline-flex items-center justify-center whitespace-nowrap text-[20px] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e30417] text-white hover:bg-[#007d26]/90 h-11 rounded-md px-8"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChivitaHappyHour;
