import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

type WrapperProps = {} & React.HTMLAttributes<HTMLDivElement> & SwiperProps;

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className='mySwiper min-h-0  w-full min-w-0 max-w-full'
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default Wrapper;
