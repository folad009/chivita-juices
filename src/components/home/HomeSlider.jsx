"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import styles from '@/css/Carousel.module.css';

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectCube, Pagination]}
        effect="cube" // 3D cube effect
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay delay
        pagination={{ clickable: true }} // Dots for navigation
        slidesPerView={1}
        loop={true}
        className={styles.mainCarousel}
      >
        <SwiperSlide>
          <img src="/assets/images/Chivita-slider-1.png" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/Chivita-slider-2.png" alt="Slide 2" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
