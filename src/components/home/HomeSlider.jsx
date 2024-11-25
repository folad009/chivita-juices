"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from '@/css/Carousel.module.css';

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]} 
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Set autoplay delay
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
        <SwiperSlide>
          <img src="/assets/images/chivita-slider1.png" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/chivita-slider2.png" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/chivita-slider3.png" alt="Slide 5" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
