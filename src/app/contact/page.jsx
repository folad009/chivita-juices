"use client";

// import {useState, useEffect} from 'react';
// import LoadingScreen from "@/components/LoadingScreen";

import StoreLocator from "@/components/common/StoreLocator";

const ContactPage = () => {
  return (
    <>
      <section className="min-h-screen">
        <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-gray-800 lg:w-1/2 lg:mx-6 pl-10">
              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 h-9 mx-2 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span
                    className="mx-2 text-gray-800 truncate w-72 font-bold"
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    CHI Limited -  No 14, Chivita Avenue <br /> Ajao Estate, Lagos, Nigeria.
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 mx-2 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span
                    className="mx-2 text-gray-800 truncate font-bold text-[18px]"
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    +234 903 387 2113 | +234 809 761 2000
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span
                    className="mx-2 text-gray-800 truncate w-72 font-bold text-[18px]"
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    +234 800 244 2273 (TOLL FREE)
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 mx-2 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span
                    className="mx-2 text-gray-800 truncate w-72 font-bold text-[18px]"
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    <a href="mailto:chicares@chilimited.com" className="hover:text-[#e30417]">
                      chicares@chilimited.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-800 text-[18px] font-bold">
                  Follow us on our social media channels to know about upcoming
                  events, promotions, & news as they happen
                </h3>
                {/* Social Brands */}
                <div className="space-x-3">
                  <a
                    className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                    href="https://www.instagram.com/chivitajuices/"
                    target="_blank"
                  >
                     <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" width="40" height="40" alt="in" />
                  </a>
                  <a
                    className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                    href="https://www.youtube.com/user/chivitajuices/featured"
                    target="_blank"
                  >
                    <img src="https://www.svgrepo.com/show/448261/youtube.svg" width="40" height="40" alt="yb" />
                  </a>
                  <a
                    className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                    href="https://www.facebook.com/ChivitaJuices/"
                    target="_blank"
                  >
                    <img src="https://www.svgrepo.com/download/475647/facebook-color.svg" width="40" height="40" alt="fb" />

                  </a>
                </div>
                {/* End Social Brands */}
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1
                  className="text-4xl font-bold text-[#e20417] dark:text-gray-200"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  Let's hear from you
                </h1>

                <form className="mt-4">
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      style={{ fontFamily: "Azo Sans, sans-serif" }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                     
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      style={{ fontFamily: "Azo Sans, sans-serif" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      style={{ fontFamily: "Azo Sans, sans-serif" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      style={{ fontFamily: "Azo Sans, sans-serif" }}
                    >
                      Message
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    ></textarea>
                  </div>

                  <button
                    className="w-full px-6 py-3 mt-6 text-xl font-medium tracking-wide text-white uppercase transition-colors duration-300 transform bg-[#e20417] rounded-md hover:bg-[#0c8241] focus:outline-none focus:ring focus:ring-[#0c8241] focus:ring-opacity-50"
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <StoreLocator />
    </>
  );
};

export default ContactPage;
