import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  "Chivita Active",
  "Chivita 100% Juices",
  "Chivita Exotic",
  "Chivita Happy Hour",
  "Chivita Ice Tea",
  "Chivita Smart",
];

const aboutLinks = [
  { name: "Our Story", href: "/our-story" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
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
        <div className="col-span-3">
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

        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
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
            About
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
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
              href="https://www.instagram.com/chivitajuices/"
              target="_blank"
            >
              <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="#E4405F" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
              </svg>
              
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
              href="https://www.youtube.com/user/chivitajuices/featured"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 333333 333333" width="20" height="20" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                <path d="M329930 100020s-3254-22976-13269-33065c-12691-13269-26901-13354-33397-14124-46609-3396-116614-3396-116614-3396h-122s-69973 0-116608 3396c-6522 793-20712 848-33397 14124C6501 77044 3316 100020 3316 100020S-1 126982-1 154001v25265c0 26962 3315 53979 3315 53979s3254 22976 13207 33082c12685 13269 29356 12838 36798 14254 26685 2547 113354 3315 113354 3315s70065-124 116675-3457c6522-770 20706-848 33397-14124 10021-10089 13269-33090 13269-33090s3319-26962 3319-53979v-25263c-67-26962-3384-53979-3384-53979l-18 18-2-2zM132123 209917v-93681l90046 46997-90046 46684z" fill="red"/>
              </svg>
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
              href="https://www.facebook.com/ChivitaJuices/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                width="20"
                height="20"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 509 509"
              >
                <g fillRule="nonzero">
                  <path
                    fill="#0866FF"
                    d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"
                  />
                  <path
                    fill="#fff"
                    d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z"
                  />
                </g>
              </svg>
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
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
              <div className="w-full">
                <label htmlFor="hero-input" className="sr-only">
                  Subscribe
                </label>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-3 px-4 block w-full border-solid border-[#e30417] rounded-lg text-sm focus:border-[#e30417] focus:ring-[#e30417] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter your email"
                />
              </div>
              <a
                className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#e30417] text-white hover:bg-[#e30417] focus:outline-none focus:bg-[#e30417] disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Subscribe
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-10 mt-10 md:flex-row md:justify-center md:items-center">
        <p
          className="mb-6 text-sm text-center text-white md:mb-0"
          style={{ fontFamily: "Azo Sans, sans-serif" }}
        >
          © Copyright 2024 CHI Limited - Chivita Juices. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
