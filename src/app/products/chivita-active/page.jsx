import React from "react";

const ChivitaActive = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-4xl font-bold text-[#e30417] dark:text-white" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              Chivita Active
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Azo Sans, sans-serif" }}
            >
              Chivita Active is our innovative masterstroke, launched in 2010 as
              a unique blend of six citrus juices. The brand was extended in
              2016 with the launch of Fruit + Vegetable combos. Chivita Active
              is a perfect partner on your journey to a healthy active life.
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
            <img src="/assets/images/product-image-dp/chivita-citrus-mix.png" alt="Chivita Citrus Mix" className="object-contain" />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4 pl-10">
          <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Chivita Active Citrus Mix
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "Azo Sans, sans-serif" }}>
            Chivita Active is a unique blend of six citrus fruits of
            Tangerine, Grapefruit, Lemon, Manderine, Lime and Orange. Chivita
            Active is enrished with Vitamin C to energize you all day – A
            perfect partner on your journey to live a healthy active life.
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
                  1 Litre
                </div>
              </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">

        <div className="md:w-1/2 flex flex-col space-y-4 pr-10">
          <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Chivita Active Carrot & Orange
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "Azo Sans, sans-serif" }}>
            Chivita Active Carrot & Orange is made from the best quality fruits and
            vegetables, perfectly blended with the goodness of Vitamins and
            nutrients. Chivita Active Zest is a healthy and tasty way to get
            the regular dose of antioxidants and stamina for an active healthy
            lifestyle.
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
                 1 Litre
                </div>
              </div>
        </div>

        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img src="/assets/images/product-image-dp/chivita-citrus-mix.png" alt="Chivita Orange Carrot" className="object-contain" />
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img src="/assets/images/product-image-dp/active-zest.png" alt="Chivita Zest" className="object-contain" />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4 pl-10">
          <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Chivita Active Zest
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "Azo Sans, sans-serif" }}>
            Chivita Active Zest is made from the best quality fruits and
            vegetables, perfectly blended with the goodness of Vitamins and
            nutrients. Chivita Active Zest is a healthy and tasty way to get
            the regular dose of antioxidants and stamina for an active healthy
            lifestyle.
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
                  1 Litre | 315ml | 125ml | 45ml 
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
