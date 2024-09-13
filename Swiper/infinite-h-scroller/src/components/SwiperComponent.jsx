import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const SwiperComponent = () => {
  return (
    <Swiper modules={[EffectFade]} effect="fade" className='border-2 border-red-500'>
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide key={el}>Slide {i}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default SwiperComponent