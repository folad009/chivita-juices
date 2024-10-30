"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

function ChivitaNavi() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleProducts = () => setIsProductsOpen(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const productItems = useMemo(() => [
    { name: "Chivita 100%", image: "/assets/images/products-dp/chivita-100-fruit-juice.png", link: "/products/chivita-100" },
    { name: "Chivita Active", image: "/assets/images/products-dp/chivita-active-dp-1.png", link: "/products/chivita-active" },
    { name: "Chivita Exotic", image: "/assets/images/products-dp/chivita-exotic.png", link: "/products/chivita-exotic" },
    { name: "Chivita Happy Hour", image: "/assets/images/products-dp/chivita-happy-hour-new.png", link: "/products/chivita-happy-hour" },
    { name: "Chivita Ice Tea", image: "/assets/images/products-dp/chivita-ice-tea-neww.png", link: "/products/chivita-ice-tea" },
    { name: "Chivita Smart Malt Drink", image: "/assets/images/products-dp/chivita-smart.png", link: "#" }
  ], []);

  return (
    <header className="z-30 w-full px-2 py-4 bg-[#e30417] sm:px-4 border-b border-[#007D26]">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <a href="/" title="Home Page" className="flex items-center">
          <Image
            src="/assets/images/chivita-logo-white.png"
            width={100}
            height={50}
            alt="chivita juices"
            className="w-auto h-7"
            priority
          />
        </a>

        {/* Navigation Bar */}
        <nav className="relative hidden md:inline-flex space-x-9 font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProducts}
              className="flex items-center rounded-md p-2  text-white text-[17px] border-none shadow-none hover:bg-[#CA9920] hover:text-white"
              aria-expanded={isProductsOpen}
            >
              Products
             
               <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`w-6 h-6 ml-1 mt-[-4px] transition-transform transform  ${isProductsOpen ? "rotate-180" : ""}`}
              >
                <polyline className="fill-white" points="6 9 12 15 18 9" />
              </svg> 
              
            </button>

            {isProductsOpen && (
              <div className="absolute z-50 w-screen max-w-4xl p-3 mt-1 bg-white rounded shadow">
                <div className="grid grid-cols-6 gap-2">
                  {productItems.map(({ name, image, link }, idx) => (
                    <a key={idx} href={link} className="flex flex-col items-center justify-center transition">
                      <Image src={image} alt={name} width={50} height={50} />
                      <span className="mt-2 text-center text-[12px]" style={{fontFamily: 'Azo Sans, sans-serif'}}>{name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Static Links */}
          {["Our Story", "Recipes", "FAQs", "Journal", "Contact"].map((link, idx) => (
            <a
              key={idx}
              href={`/${link.replace(/\s+/g, '-').toLowerCase()}`}
              className="rounded-md p-2 text-white text-[17px] border-none shadow-none hover:bg-[#CA9920] hover:text-white focus:bg-[#CA9920]"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-1">
          <a href="/contact" className="rounded-md p-3 bg-[#CA9920] text-white font-bold hover:bg-[#0c8241]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Where To Buy</a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="inline-flex md:hidden px-2  btn btn-sm"
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
              <button onClick={toggleMobileMenu} className="self-end flex-none btn btn-link">
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
              {["Our Story", "Recipes", "FAQ", "Blog", "Contact"].map((link, idx) => (
                <a
                  key={idx}
                  href={`/${link.replace(/\s+/g, '-').toLowerCase()}`}
                  className="px-3 py-2 text-[15px] transition rounded hover:bg-gray-200 hover:text-[#e30417]"
                >
                  {link}
                </a>
              ))}
              <p className="pl-3 text-xs font-semibold text-gray-500 uppercase">Products</p>
              <div className="grid grid-cols-2 gap-1">
                {productItems.map(({ name }, idx) => (
                  <a key={idx} href="#" className="px-3 py-2 text-[15px] transition rounded hover:bg-gray-200">
                    {name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default ChivitaNavi;
