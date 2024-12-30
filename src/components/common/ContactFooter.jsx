import React from "react";
import Image from "next/image";
import Link from "next/link";

const aboutLinks = [
  { name: "www.chivitahollandia.com", href: "#" },
  { name: "www.hollandiadairyng.com", href: "#" },
];

const policyLinks = [
  { name: "FAQ", href: "/faqs" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookies", href: "/cookies" },
];

const ContactFooter = () => {
  return (
    <footer
      className="px-4 py-8 mx-auto max-w-full border-t border-[#CA9920] bg-[#E30417]"
      style={{
        backgroundImage: `url('/assets/images/chivita-green-golden-hill.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Footer Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch space-y-3 lg:space-y-5">
        {/* Logo Section */}
       <div className="flex flex-col items-center lg:items-start">
          <Link href="/">
            <Image
              src="/assets/images/chivita-logo-white.png"
              width={150}
              height={80}
              alt="Chivita Logo"
              className="mb-3 mt-10 mx-10 lg:mx-10"
            />
          </Link>
        </div>

        {/* Contact Section */}
        {/*<div className="flex flex-col items-center lg:items-start">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-white uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Corporate Office
          </p>
          <div className="space-y-2">
            <div
              className="text-sm text-white font-bold flex items-center space-x-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                  fill="currentColor"
                />
                <path
                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                  fill="currentColor"
                />
              </svg>
              <span style={{ fontFamily: "Azo Sans, sans-serif" }}>CHI Limited <br /> No 14, Chivita Avenue <br /> Ajao
              Estate, Lagos, Nigeria.</span>
            </div>
            <div
              className="text-sm text-white font-bold flex items-center space-x-2"
              
            >
              <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                        fill="currentColor"
                      />
                    </svg>
              <a href="mailto:chicares@chilimited.com" style={{ fontFamily: "Azo Sans, sans-serif" }}>
                chicares@chilimited.com
              </a>
            </div>
            <div className="text-sm text-white font-bold flex items-center space-x-2">
              
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                    fill="currentColor"
                  />
                </svg>
                <a href="tel:+2349033872113" style={{ fontFamily: "Azo Sans, sans-serif" }}>
                  +234 903 387 2113
                </a>
            </div>
            <div className="text-sm text-white font-bold flex items-center space-x-2">
            
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                    fill="currentColor"
                  />
                </svg>
                <a href="tel:+2348097612000" style={{ fontFamily: "Azo Sans, sans-serif" }}>
                  +234 809 761 2000
                </a>
            </div>
            <div className="text-sm text-white font-bold flex items-cente space-x-2">
           
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                    fill="currentColor"
                  />
                </svg> 
                <a href="tel:+2348002442273" style={{ fontFamily: "Azo Sans, sans-serif" }}>
                  +234 800 244 2273 (Toll Free)
                </a>
              
            </div>
          </div>
        </div>*/}

        {/* Useful Links Section */}
        <div className="flex flex-col items-center lg:items-start">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-white uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
           Our Websites
          </p>
          <ul className="space-y-2">
            {aboutLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm font-bold text-white hover:text-[#f9f9f9] transition"
                  style={{ fontFamily: "Azo Sans, sans-serif", fontSize: "15px" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center lg:items-start">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-white uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Quick Links
          </p>
          <ul className="space-y-2">
            {policyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm font-bold text-white hover:text-[#f9f9f9] transition"
                  style={{ fontFamily: "Azo Sans, sans-serif", fontSize: "15px" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
         
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-white uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Get the Juices
          </p>
          <form className="flex flex-col md:flex-row gap-3 w-full max-w-lg">
            <label htmlFor="subscribe-email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="subscribe-email"
              name="subscribe-email"
              className="flex-grow px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-[#e20417] focus:border-[#e20417] text-sm"
              placeholder="Share your email address"
            />
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-[#007D26] rounded-lg hover:bg-[#299248] transition-all"
            >
              Subscribe
            </button>
          </form>

           {/* Social Brands */}
           <div className="mt-5">
            <a
              className="size-10 inline-flex items-center disabled:pointer-events-none"
              href="https://www.instagram.com/chivitajuices/"
              target="_blank"
            >
              <svg
                fill="#fff"
                height="30px"
                width="30px"
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
              className="size-10 inline-flex items-center disabled:pointer-events-none"
              href="https://www.youtube.com/user/chivitajuices/featured"
              target="_blank"
            >
              <svg
                fill="#fff"
                height="30px"
                width="30px"
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
              className="size-10 inline-flex items-center disabled:pointer-events-none"
              href="https://www.facebook.com/ChivitaJuices/"
              target="_blank"
            >
              <svg
                fill="#fff"
                height="30px"
                width="30px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-143 145 512 512"
                xmlSpace="preserve"
                stroke="#fff"
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

      {/* Footer Bottom Section */}
      <div className="flex flex-col items-center justify-center space-x-2  mt-20 md:flex-row md:justify-center md:items-center">
        <Image
          src="/assets/images/chivita-logo-white.png"
          width={70}
          height={70}
          alt="chivita juices logo"
          className="mt-3"
        />

        <p
          className="text-sm text-center text-white mt-6"
          style={{ fontFamily: "Azo Sans, sans-serif", fontWeight: "bold" }}
        >
          {" "}
          © Copyright 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;
