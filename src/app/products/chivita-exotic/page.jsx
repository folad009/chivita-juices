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
              Chivita Exotic is our range of distinctive blends of tropical fruits. Every sip of our Chivita Exotic fruit juices lures you into a state of sensory indulgence which offers a memorable experience of guiltless pleasure. Enjoy a secret escape to your definition of tropical paradise… relish the taste of sun-kissed fruits bursting with natural sweetness, hear the gentle waves of the sea, feel the soft sand beneath your feet. A glass of any of the Chivita Exotic variants is your definition of tropical paradise in your hands. 
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
            Chivita Exotic Pineapple & Coconut fruit nectar is a perfect blend of sun-ripened Pineapple and Coconut water to give you that irresistible taste you love. The first sip is pure indulgence like a bright, exciting splash of sunshine on your taste buds. Our rich combination of tangy pineapple with the milky coconut transports you to a moment of tranquility and warm comfort. Slow down, indulge yourself, and savour the smooth, velvety taste of our unique creation. 
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
            In our quest to develop unique tropical fruit juice experiences, we created a taste like no other in our Chivita Exotic Multifruita. Chivita Exotic Multifruita is a rare and distinct blend of 10 tropical fruits which deliver a distinctive taste and indulgent drinking pleasure. Yes, we bring you the unique blend of Apple, Pineapple, Orange, Guava, Apricot, Banana, Mango, Passion Fruit, Lemon, and Black Carrot exotic fruits into a unique mix that screams “paradise redefined”. Escape into our world of pure pleasure and relish the blend of vibrant tang, sharp sweetness, smooth velvet, creamy texture come together into an experience to treasure!
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
