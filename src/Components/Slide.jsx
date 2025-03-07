import React from "react";
import Slidecard from "./Slidecard";
import "./Slide.css";
import rec1 from "../assets/rec1.png";
import rec2 from "../assets/rec2.png";
import rec3 from "../assets/rec3.png";
import rec4 from "../assets/rec4.png";
import rec5 from "../assets/rec5.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// Import required modules
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

const Slide = () => {
  return (
    <div className="slide">
      <h1 className="title text-center">Popular this week</h1>
      <div className="swiper-container">
        <Swiper
          loop={true} // Enables infinite loop
          spaceBetween={50} // Increase space between slides
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Auto-slide every 3 sec
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true} // Enable next/prev buttons
          effect="coverflow" // Enable the Coverflow effect
          coverflowEffect={{
            rotate: 0, // No rotation
            stretch: 0, // No stretching
            depth: 50, // Less depth to prevent overlap
            modifier: 1.3, // Scale effect (1.3x for center slide)
            slideShadows: false, // Optional: Remove shadow effect
          }}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          breakpoints={{
            320: {
              slidesPerView: 1, // Show 1 slide on small screens
              centeredSlides: true,
              autoplay: false, // Disable auto-slide on mobile
            },
            768: {
              slidesPerView: 2, // Show 2 slides on tablets
            },
            1024: {
              slidesPerView: 4, // Show 4 slides on large screens
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slidecard
              img={rec1}
              anc="245ETH"
              text="Consta"
              text2="By Lupita Gomez"
              text3="39K"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slidecard
              img={rec2}
              anc="245ETH"
              text="Vercase"
              text2="By Joe Damon"
              text3="48K"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slidecard
              img={rec3}
              anc="245ETH"
              text="Digital Decade"
              text2="By Anthony Gargasz"
              text3="50K"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slidecard
              img={rec4}
              anc="22ETH"
              text="Winter Jamz"
              text2="By James Gargasz"
              text3="47K"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slidecard
              img={rec5}
              anc="22ETH"
              text="Postel Wifey"
              text2="By Blake Montez"
              text3=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
