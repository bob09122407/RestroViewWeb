import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./foodslide.css";
import { EffectCoverflow, Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules'; // Import modules from swiper/core

const slides = [
  // Your slides data
  {
    name: 'Grilled steak with vegetables',
    img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
  },
  {
    name: 'Pizza',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80',
  },
  {
    name: 'Sandwich with boiled egg',
    img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80',
  },
  {
    name: 'Toast bread with blueberry',
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80',
  },
  {
    name: 'Chicken burger',
    img: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
  },
  {
    name: 'Chicken burger',
    img: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
  },
  {
    name: 'Chicken burger',
    img: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
  },
 
];

const FoodSlide = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
     
      // slidesPerView={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 4,
        slideShadows: false,
      }}
      keyboard={{ enabled: true }}
      mousewheel={{ thresholdDelta: 70 }}
      initialSlide={0}
      onClick={(swiper, event) => { swiper.slideTo(swiper.clickedIndex); }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Keyboard, Autoplay]} // Include Autoplay in the modules array
      autoplay={{ delay: 3000 }} // Auto play with a 3-second delay
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.img} alt={`Slide ${index}`} />
          <div>
            <h2 className='vendor-name'>{slide.name}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FoodSlide;
