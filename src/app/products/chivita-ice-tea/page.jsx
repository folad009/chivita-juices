import React from 'react'

const ChivitaIceTea = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-6xl font-bold text-[#0c8241] dark:text-white" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              Chivita Ice Tea Overview
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

      <div className="max-w-2xl mx-auto my-5 rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <div className="flex items-start sm:gap-8">
          <div>
            <img src="/assets/images/product-image-dp/chivita-ice-tea-neww.png" />
          </div>
          <div>
            <h1
              className="mt-4 text-lg font-medium sm:text-xl"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Chivita Ice Tea Lemon 
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Azo Sans, sans-serif" }}
            >
              Chivita Ice Tea Lemon  is a blend of natural tea extracts with fruity flavours. 
              Launched originally as Chi Ice Tea in 2009, its the first RTD Ice Tea to be introduced into 
              the Nigerian market. Chivita Ice Tea Lemon is your go to drink for natural refreshment and rejuvenation.
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
                  1 Litre | 315ml
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
  )
}

export default ChivitaIceTea;