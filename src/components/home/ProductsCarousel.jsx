"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, FreeMode } from 'swiper/modules';

export default function ProductCarousel() {
  const prdPacks = [
    { img: "/assets/images/products-packs/Product-DPs-Chivita-Fruit-Juice-xxl.png", name: "Chivita Fruit Juice", link: "/products/chivita-100" },
    { img: "/assets/images/products-packs/Product-DPs-Chivita-Active-xxl.png", name: "Chivita Active", link: "/products/chivita-active" },
    { img: "/assets/images/products-packs/Product-DPs-Chivita-Exotic-xxl.png", name: "Chivita Exotic", link: "/products/chivita-exotic" },
    { img: "/assets/images/products-packs/Product-DPs-Chivita-Ice-Tea-xxl.png", name: "Chivita Ice Tea", link: "/products/chivita-ice-tea" },
    { img: "/assets/images/products-packs/Product-DPs-Chivita-Happy-Hour-xxl.png", name: "Chivita Happy Hour", link: "/products/chivita-happy-hour" },

  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{ clickable: true }}
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
        modules={[Pagination, FreeMode]}
        className="mySwiper"
        style={{ width: '100%', maxWidth: '1700px', margin: '0 auto' }}
      >
        {prdPacks.map((product, index) => (
          <SwiperSlide key={index}>
          <div className="product-slide" style={{ position: 'relative' }}>
            <img src={product.img} alt={product.name} className="product-image" style={{ width: '100%', display: 'block' }} />
            <div style={{
              position: 'absolute',
              bottom: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '10px',
              borderRadius: '8px',
            }}>
              <p className="product-name" style={{ margin: '0', fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>{product.name}</p>
              <a href={product.link} style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#e30417',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1rem',
              }}>Learn More</a>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
