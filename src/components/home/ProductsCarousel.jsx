"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Mousewheel, Keyboard } from "swiper/modules";

export default function ProductCarousel() {
  const prdPacks = [
    {
      img: "/assets/images/products-packs/Product-DPs-Chivita-Fruit-Juice-xxl.png",
      name: "Chivita Fruit Juice",
      link: "/products/chivita-100",
    },
    {
      img: "/assets/images/products-packs/Product-DPs-Chivita-Active-xxl-new.png",
      name: "Chivita Active",
      link: "/products/chivita-active",
    },
    {
      img: "/assets/images/products-packs/Product-DPs-Chivita-Exotic-xxl-new.png",
      name: "Chivita Exotic",
      link: "/products/chivita-exotic",
    },
    {
      img: "/assets/images/products-packs/Product-DPs-Chivita-Ice-Tea-xxl.png",
      name: "Chivita Ice Tea",
      link: "/products/chivita-ice-tea",
    },
    {
      img: "/assets/images/products-packs/Product-DPs-Chivita-Happy-Hour-xxl.png",
      name: "Chivita Happy Hour",
      link: "/products/chivita-happy-hour",
    },
    // {
      //       img: "/assets/images/products-packs/Product-DPs-Chivita-Smart-Malt-xxl-new.png",
      //       name: "Chivita Smart Malt",
      //       link: "/products/chivita-smart-malt",
      // },
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        cssMode={true}
        loop={true}
        navigation={{
          clickable: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[FreeMode, Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{
          width: "100%",
          maxWidth: "1700px",
          margin: "0 auto",
          paddingBottom: "40px",
        }}
      >
        <div className="swiper-button-next" style={{ color: "white" }}></div>
        <div className="swiper-button-prev" style={{ color: "white" }}></div>
        {prdPacks.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-slide" style={{ position: "relative" }}>
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
                style={{ width: "100%", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-1%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  color: "white",
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 125, 38, 0.9))",
                  padding: "10px",
                  borderRadius: "1px",
                  width: "100%",
                }}
              >
                <p
                  className="product-name"
                  style={{
                    margin: "0",
                    fontFamily: "Bebas Neue, sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {product.name}
                </p>
                <a
                  href={product.link}
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "8px 16px",
                    backgroundColor: "#e30417",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                    fontFamily: "Bebas Neue, sans-serif",
                    fontSize: "1rem",
                  }}
                  className=" hover:bg-[#007d26]"
                >
                  View Product
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
