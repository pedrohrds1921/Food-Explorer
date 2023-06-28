import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import "./styles.css"
import 'swiper/css/navigation';

export default function Slider({settings,children}){


    return(

        <Swiper 
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        centeredSlides={true}
        {...settings}>{children}</Swiper>
   

    )
}
