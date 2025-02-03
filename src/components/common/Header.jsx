"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import styles from "@/css/CustomButton.module.css";

function ChivitaNavi() {
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const productItems = useMemo(
    () => [
      {
        name: "Chivita Fruit Juice",
        image:
          "/assets/images/products-navs-thumbnails/chivita-navigation-thumbnails-1ii.png",
        link: "/products/chivita-100",
      },
      {
        name: "Chivita Active",
        image:
          "/assets/images/products-navs-thumbnails/chivita-navigation-thumbnails-2.png",
        link: "/products/chivita-active",
      },
      {
        name: "Chivita Exotic",
        image:
          "/assets/images/products-navs-thumbnails/chivita-navigation-thumbnails-3.png",
        link: "/products/chivita-exotic",
      },
      {
        name: "Chivita Ice Tea",
        image:
          "/assets/images/products-navs-thumbnails/chivita-navigation-thumbnails-5.png",
        link: "/products/chivita-ice-tea",
      },
      {
        name: "Chivita Happy Hour",
        image:
          "/assets/images/products-navs-thumbnails/chivita-navigation-thumbnails-4.png",
        link: "/products/chivita-happy-hour",
      },
      {
        name: "Chivita Smart Malt Drink",
        image:
          "/assets/images/products-navs-thumbnails/chivita-navigation-thumbnails-6.png",
        link: "/products/chivita-smart-malt-drink",
      },
    ],
    []
  );

  const isCurrentPage = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-30 min-w-full px-2 py-3 bg-[#e30417] sm:px-4 border-b border-[#007D26] min-h-[5rem]">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <a href="/" title="Home Page" className="flex items-center">
          <Image
            src="/assets/images/chivita-logo-white.png"
            width={100}
            height={50}
            alt="chivita juices"
            className="w-auto h-9 mx-6"
            priority
          />
        </a>

        <div className="flex items-center space-x-1">
         {/* <a
            href="/storelocator"
            className={styles.CustomButton}
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            <span className={styles.span}>Find our stores</span>
          </a>*/}

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="inline-flex md:hidden px-2 btn btn-sm"
            aria-label="Open Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6h16M8 12h8M6 18h12" />
            </svg>
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 m-2 space-y-1 bg-white rounded shadow">
              <button
                onClick={toggleMobileMenu}
                className="self-end flex-none btn btn-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[#e30417]"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              {/* Mobile Links */}
              {["Our Story", "Recipes", "Journal", "Contact"].map(
                (link, idx) => (
                  <a
                    key={idx}
                    href={`/${link.replace(/\s+/g, "-").toLowerCase()}`}
                    className="px-3 py-2 text-[15px] transition rounded hover:bg-gray-200 hover:text-[#e30417]"
                  >
                    {link}
                  </a>
                )
              )}
              <p className="pl-3 text-xs font-semibold text-gray-500 uppercase">
                Products
              </p>
              <div className="grid grid-cols-2 gap-1">
                {productItems.map(({ name, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    className="px-3 py-2 text-[15px] transition rounded hover:bg-gray-200"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

          {/* Navigation Bar */}
          <nav
          className="relative flex space-x-9 font-bold py-4 justify-end"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          {/* Static Links */}
          <a
            href="https://chivitahollandia.com/our-profile"
            target="blank"
            className="rounded-md p-2 text-white text-[17px] border-none shadow-none hover:bg-[#0c8241] hover:text-white focus:bg-[#0c8241]"
          >
            Our Company
          </a>
          <a
            href="/our-story"
            className={`rounded-md p-2 text-white text-[17px] border-none shadow-none hover:bg-[#0c8241] hover:text-white ${
              isCurrentPage("/our-story") ? "bg-[#0c8241]" : ""
            }`}
          >
            Our Story
          </a>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsHovered(true)}
            onMouseLeave={() => setIsProductsHovered(false)}
          >
            <button
              className={`flex items-center rounded-md p-2 text-white text-[17px] border-none shadow-none hover:bg-[#0c8241] hover:text-white ${
                productItems.some(({ link }) => isCurrentPage(link))
                  ? "bg-[#0c8241]"
                  : ""
              }`}
            >
              Products
            </button>

            {isProductsHovered && (
              <div className="absolute z-50 w-screen max-w-4xl p-2 mt-1 -left-48 bg-white rounded shadow">
                <div className="grid grid-cols-6 gap-2">
                  {productItems.map(({ name, image, link }, idx) => (
                    <a
                      key={idx}
                      href={link}
                      className="flex flex-col items-center justify-center transition"
                    >
                      <Image src={image} alt={name} width={50} height={50} />
                      <span
                        className="mt-2 text-center text-[12px]"
                        style={{ fontFamily: "Azo Sans, sans-serif" }}
                      >
                        {name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other Static Links */}
          <a
            href="/recipes"
            className={`rounded-md p-2 text-white text-[17px] border-none shadow-none hover:bg-[#0c8241] hover:text-white ${
              isCurrentPage("/recipes") ? "bg-[#0c8241]" : ""
            }`}
          >
            Recipes
          </a>
          <a
            href="/journal"
            className={`rounded-md p-2 text-white text-[17px] border-none shadow-none hover:bg-[#0c8241] hover:text-white ${
              isCurrentPage("/journal") ? "bg-[#0c8241]" : ""
            }`}
          >
            Journal
          </a>
          <a
            href="/contact"
            className={`rounded-md p-2 text-white text-[17px] border-none shadow-none hover:bg-[#0c8241] hover:text-white ${
              isCurrentPage("/contact") ? "bg-[#0c8241]" : ""
            }`}
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default ChivitaNavi;
