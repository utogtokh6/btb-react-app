import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper styles
import Image1 from "../../assets/images/Swiper Gallery/1.png"
import Image2 from "../../assets/images/Swiper Gallery/2.png"
import Image3 from "../../assets/images/Swiper Gallery/3.png"
import Image4 from "../../assets/images/Swiper Gallery/4.png"

const ImageAlbum  = () => {
  return (
    <div>
      <Swiper spaceBetween={10} slidesPerView={1}>
        <SwiperSlide className={CSS.SwiperSlide}>
          <img src={Image1} alt='Image1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt='Image2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt='Image3'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt='Image4'/>
        </SwiperSlide>
      </Swiper >
    </div>
  );
};

export default ImageAlbum ;
