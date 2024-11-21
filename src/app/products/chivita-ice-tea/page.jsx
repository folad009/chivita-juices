import React from 'react'

const ChivitaIceTea = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-4xl font-bold text-[#e30417] dark:text-white" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              Chivita Ice Tea
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Azo Sans, sans-serif" }}
            >
              Chivita Ice Tea Lemon is a blend of natural tea extracts with fruity flavours. 
              Launched originally as Chi Ice Tea in 2009, its the first RTD Ice Tea to be introduced 
              into the Nigerian market. Chivita Ice Tea Lemon is your go to drink for natural refreshment 
              and rejuvenation.
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
              src="/assets/images/product-image-dp/chivita-ice-tea-neww.png"
              alt="Chivita Ice Tea"
              className="object-contain"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4 pl-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Ice Tea Lemon 
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
           Chivita Ice Tea Lemon  is a blend of natural tea extracts with fruity flavours. 
              Launched originally as Chi Ice Tea in 2009, its the first RTD Ice Tea to be introduced into 
              the Nigerian market. Chivita Ice Tea Lemon is your go to drink for natural refreshment and rejuvenation.
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
             1 Litre | 330 ml | 315ml | 125ml  
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ChivitaIceTea;