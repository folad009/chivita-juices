"use client";

// import {useState, useEffect} from 'react';
// import LoadingScreen from "@/components/LoadingScreen";

// import BreadcrumbRoundedElevatedTextIconPreview from "@/components/common/BreadCrumb";

const ContactPage = () => {
  return (
    <>
      <section className="min-h-screen">
        <div
          className="container flex flex-col min-h-screen px-6 py-12 mx-auto relative"
          style={{ backgroundImage: "url(/assets/images/chivita-web-background.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative z-10 flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className=" lg:w-1/2 lg:mx-6 pl-10">
              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 h-9 mx-2"
                    fill="#f9f9f9"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
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
                    className="mx-2 text-[#f9f9f9] truncate w-72 text-[18px]"
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    CHI Limited (Chivita|Hollandia)<br/>
                    14, Chivita Avenue, <br /> Ajao Estate, Lagos
                    Nigeria.
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 mx-2"
                    fill="#f9f9f9"
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
                    className="mx-2 text-[#f9f9f9] truncate  text-[18px]"
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    <a href="tel:+2349033872113">+234 903 387 2113</a>  
                  </span>
                </p>


                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 mx-2"
                    fill="#f9f9f9"
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
                    className="mx-2 text-[#f9f9f9] truncate  text-[18px]"
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                     <a href="tel:+2348097612000">+234 809 761 2000</a>
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2"
                    fill="#f9f9f9"
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
                    className="mx-2 text-[#f9f9f9] truncate w-72  text-[18px]"
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    <a href="tel:+2348002442273">+234 800 244 2273</a> (Toll Free)
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 mx-2 "
                    fill="#f9f9f9"
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
                    className="mx-2 text-[#f9f9f9] truncate w-72  text-[18px]"
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    <a
                      href="mailto:chicares@chilimited.com"
                      className="hover:text-[#e30417]"
                    >
                      chicares@chilimited.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-[#f9f9f9] text-[18px] mb-5">
                  Follow us on our social media channels to know about upcoming
                  events, promotions, & news as they happen
                </h3>
                {/* Social Brands */}
                <div className="space-x-5">
                  <a
                    className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                    href="https://www.instagram.com/chivitajuices/"
                    target="_blank"
                  >
                    <svg
                      fill="#f9f9f9"
                      height="64px"
                      width="64px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="-143 145 512 512"
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"></path>
                          <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346"></polygon>
                          <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"></path>
                          <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157c27.3,0,49.5,22.2,49.5,49.5V374.7z"></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a
                    className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                    href="https://www.youtube.com/user/chivitajuices/featured"
                    target="_blank"
                  >
                    <svg
                      fill="#f9f9f9"
                      height="64px"
                      width="64px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-143 145 512 512"
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <polygon points="78.9,450.3 162.7,401.1 78.9,351.9"></polygon>
                          <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8 c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1 V446.8z"></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a
                    className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                    href="https://www.facebook.com/ChivitaJuices/"
                    target="_blank"
                  >
                    <svg
                      fill="#f9f9f9"
                      height="64px"
                      width="64px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="-143 145 512 512"
                      xmlSpace="preserve"
                      stroke="#4460A0"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3 v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2 c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"></path>
                      </g>
                    </svg>
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
                    <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
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
      {/*<StoreLocator />*/}
    </>
  );
};

export default ContactPage;
