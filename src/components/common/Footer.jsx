import React from "react";
import Image from "next/image";
import Link from "next/link";


const products = [
  "Chivita Fruit Juice",
  "Chivita Active",
  "Chivita Exotic",
  "Chivita Ice Tea",
  "Chivita Happy Hour",
  "Chivita Smart Malt Drink",
];

const aboutLinks = [
  { name: "Our Story", href: "/our-story" },
  { name: "Contact Us", href: "/contact" },
];

const policyLinks = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookies", href: "/cookies" },
];

const MainFooter = () => {
  return (
    <footer
    className="px-4 py-12 mx-auto max-w-full border-t border-[#CA9920]"
    style={{
      backgroundImage: `url('/assets/images/chivita-green-golden-hill.svg')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    >
      <div className="grid grid-cols-1 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-8">
        <div className="col-span-2">
          <Link href="/">
            <Image
              src="/assets/images/chivita-logo-red.svg"
              width={200}
              height={150}
              alt="chivita logo red"
              className="w-auto h-32"
            />
          </Link>
        </div>

        <nav className="col-span-2">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-[#e20417] uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Products
          </p>
          <ul className="list-none">
            {products.map((product, index) => (
              <li key={index}>
                <a
                  href={`/products/${product
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-[#0c8241]"
                  style={{ fontFamily: "Azo Sans, sans-serif" }}
                >
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="col-span-2">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-[#e20417] uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Useful Links
          </p>
          <ul className="list-none">
            {aboutLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-[#0c8241]"
                  style={{ fontFamily: "Azo Sans, sans-serif" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="col-span-2">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-[#e20417] uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Legal
          </p>
          {policyLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-[#0c8241]"
              style={{ fontFamily: "Azo Sans, sans-serif" }}
            >
              {link.name}
            </a>
          ))}

          {/* Social Brands */}
          <div>
            <a
              className="size-10 inline-flex items-center disabled:pointer-events-none"
              href="https://www.instagram.com/chivitajuices/"
              target="_blank"
            >
              <svg
                fill="#D1397A"
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
              className="size-10 inline-flex  items-center disabled:pointer-events-none"
              href="https://www.youtube.com/user/chivitajuices/featured"
              target="_blank"
            >
              <svg
                fill="#ff2600"
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
              className="size-10 inline-flex  items-center "
              href="https://www.facebook.com/ChivitaJuices/"
              target="_blank"
            >
              <svg
                fill="#4460A0"
                height="30px"
                width="30px"
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
        </nav>

        <div className="col-span-3">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-[#e20417] uppercase" style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Subscribe to Our Newsletter
          </p>
          <form className="flex flex-col md:flex-row gap-3">
            <label htmlFor="subscribe-email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="subscribe-email"
              name="subscribe-email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#e20417] focus:border-[#e20417] text-sm"
              placeholder="Share your email address"
            />
           <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-[#e20417] rounded-lg hover:bg-[#c90315] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-10 mt-10 md:flex-row md:justify-center md:items-center">
        <p
          className="mb-6 text-sm text-center text-white md:mb-0"
          style={{ fontFamily: "Azo Sans, sans-serif", fontWeight: "bold" }}
        >
          © Copyright 2024 - Chivita Juices. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
