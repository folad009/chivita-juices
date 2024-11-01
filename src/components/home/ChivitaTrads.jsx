"use client"
import React, { useState } from 'react';

const ChivitaTrads = () => {
  const [activeTab, setActiveTab] = useState(1); // Track which tab is active

  const images = [
    {
      id: 1,
      src: "/assets/images/chivita-family-image.webp",
      title: "Nutritious Goodness of Fruit at its Purest",
      description: "Welcome to a world of the purest of juices, the freshest of fruits, and the greatest of pleasures.",
    },
    {
      id: 2,
      src: "/assets/images/chivita-web-image-2.webp",
      title: "The Chivita Tradition",
      description: "Our purpose and values underline our ambition to create products that enable people to live happy, healthy, and fulfilled lives.",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">

            {/* Tab Navs */}
            <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
              {images.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-white focus:outline-none focus:bg-white p-4 md:p-5 rounded-xl ${
                    activeTab === image.id ? 'active' : ''
                  }`}
                  aria-selected={activeTab === image.id}
                  onClick={() => setActiveTab(image.id)}
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <span className="grow">
                      <span style={{ fontFamily: "Bebas Neue, sans-serif"}} className="block text-4xl font-semibold hs-tab-active:text-blue-600 text-[#e30417] dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        {image.title}
                      </span>
                      <span style={{fontFamily: "Azo Sans, sans-serif"}} className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        {image.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
            {/* End Tab Navs */}
          </div>
          {/* End Col */}

          <div className="lg:col-span-6">
            <div className="relative">
              {/* Tab Content */}
              <div role="tabpanel" aria-labelledby={`tabs-with-card-item-${activeTab}`}>
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src={images.find((img) => img.id === activeTab)?.src}
                  alt="Features Image"
                />
              </div>
              {/* End Tab Content */}

              {/* SVG Element */}
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}

            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        {/* Background Color */}
        <div className="absolute inset-0 grid grid-cols-12 size-full">
        <div
  className="relative col-span-full lg:col-span-7 lg:col-start-6 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800 overflow-hidden"
  style={{
    backgroundColor: 'rgba(0, 125, 38, 0.2)', // Sets overlay background color
  }}
>
  <div
    className="absolute inset-0 bg-cover bg-center opacity-60 blur-sm"
    style={{
      backgroundImage: `url('/assets/images/pattern-cut-fruit-berries.png')`,
    }}
  ></div>
  
</div>
        </div>
        {/* End Background Color */}
      </div>
    </div>
  );
};

export default ChivitaTrads;
