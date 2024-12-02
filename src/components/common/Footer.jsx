import React from "react";
import Image from "next/image";
import Link from "next/link";

 {/* TO DO: Put it correct format */}
const products = [
  "Chivita 100%",
  "Chivita Active", 
  "Chivita Exotic",
  "Chivita Happy Hour",
  "Chivita Ice Tea",
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
      className="px-4 py-12 mx-auto max-w-7xl border-t border-[#CA9920]"
      style={{
        backgroundImage: `url('/assets/images/chivita-green-golden-hill.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
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

        <nav className="col-span-3 md:col-span-3 lg:col-span-3">
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

        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-[#e20417] uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Use Links
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

        <nav className="col-span-2 md:col-span-1 lg:col-span-2">
          <p
            className="mb-3 text-xl font-semibold tracking-wider text-[#e20417] uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Other Links
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
              <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" width="25" height="25" alt="in" />
            </a>
            <a
              className="size-10 inline-flex  items-center disabled:pointer-events-none"
              href="https://www.youtube.com/user/chivitajuices/featured"
              target="_blank"
            >
              <img src="https://www.svgrepo.com/show/448261/youtube.svg" width="25" height="25" alt="yb" />

            </a>
            <a
              className="size-10 inline-flex  items-center "
              href="https://www.facebook.com/ChivitaJuices/"
              target="_blank"
            >
              <img src="https://www.svgrepo.com/download/475647/facebook-color.svg" width="25" height="25" alt="fb" />
            </a>
          </div>
          {/* End Social Brands */}
        </nav>

        <div className="col-span-3">
  <p
    className="mb-3 text-xl font-semibold tracking-wider text-[#e20417] uppercase"
    style={{ fontFamily: "Bebas Neue, sans-serif" }}
  >
    Subscribe to Our Newsletter
  </p>
  <form>
        <label htmlFor="hero-input" className="sr-only">
          Subscribe
        </label>
        <input
          type="text"
          id="hero-input"
          name="hero-input"
          className="py-3 px-4 bg-gray-100 border border-gray-200 rounded block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-[90%] text-[12px]"
          placeholder="Share your email address"
        />
      <a
        className="mt-2 w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#e30417] text-white hover:bg-[#e30417] focus:outline-none focus:bg-[#e30417] disabled:opacity-50 disabled:pointer-events-none"
        href="#"
      >
        Subscribe Now
      </a>
   
  </form>
</div>

      </div>

      <div className="flex flex-col items-center justify-center pt-10 mt-10 md:flex-row md:justify-center md:items-center">
        <p
          className="mb-6 text-sm text-center text-white md:mb-0"
          style={{ fontFamily: "Azo Sans, sans-serif" }}
        >
          © Copyright 2024 - Chivita Juices. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
