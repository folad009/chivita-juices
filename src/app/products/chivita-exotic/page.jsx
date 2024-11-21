import React from "react";

const ChivitaExotic = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1
              className="block text-4xl font-bold text-[#e30417] dark:text-white"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Chivita Exotic
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Azo Sans, sans-serif" }}
            >
              Chi Exotic is a range distinctive blend of tropical fruits. It is
              a tasty mix of fruits ranging from tropical to traditional local
              mixes. A taste of Chi Exotic is all it takes to lure you to a
              state of indulgence which offers a memorable experience of
              guiltless pleasure.
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
              src="/assets/images/product-image-dp/chivita-exotic.png"
              alt="Chivita Exotic Pineapple Coconut"
              className="object-contain"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4 pl-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Exotic Pineapple & Coconut
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            A perfect blend of Sun-ripened Pineapple and Coconut water to give
            you that irresistible Taste you love. Whether its drunk alone or
            mixed with other drinks, what you get is a delicious pleasure of
            exotic indulgence and an irresistible Taste.So delicious that you
            cannot but enjoy every moment of life with it!
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
              1 Litre | 500ml | 330 ml | 315ml | 125ml 
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
            Chivita Exotic Multifruita
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            In our quest to deliver a taste like no other, we find Chivita
            Exotic Multifruita. Chivita Exotic Multifruita is a rare and unique
            blend of 10 rich tropical fruits to deliver a distinctive taste
            that’s too good not to share
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
              1 Litre | 500ml | 330 ml | 315ml  | 125ml 
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/product-image-dp/chivita-exotic-multifruita.png"
              alt="Chivita Exotic"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChivitaExotic;
