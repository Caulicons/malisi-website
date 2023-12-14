import React from 'react';
import { SwiperSlide, SwiperSlideProps } from 'swiper/react';
const Slide = ({ children, ...props }: SwiperSlideProps) => {
  return (
    <SwiperSlide {...props}>
      <div className='grid h-full w-full justify-center'>
        {children as React.ReactNode}
      </div>
    </SwiperSlide>
  );
};

export default Slide;
/* 
To create a component that wraps SwiperSlide, we need to change the display name property of the creation component to work. 
https://github.com/nolimits4web/swiper/issues/4413
*/
Slide.displayName = 'SwiperSlide';
