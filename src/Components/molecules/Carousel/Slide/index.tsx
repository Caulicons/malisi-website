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
Slide.displayName = 'SwiperSlide';
