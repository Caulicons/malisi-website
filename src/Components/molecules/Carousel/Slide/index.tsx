'use client';
import { SwiperSlide, SwiperSlideProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
type SlideProps = {} & React.PropsWithChildren & SwiperSlideProps;

const Slide = ({ children, ...props }: SlideProps) => {
  return (
    <SwiperSlide {...props}>
      <div className='grid h-full w-full justify-center'>{children}</div>
    </SwiperSlide>
  );
};

export default Slide;
