import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperProps } from 'swiper/react';

type CarouselProps = {} & React.HTMLAttributes<HTMLDivElement> & SwiperProps;

const Carousel = ({ children, ...props }: CarouselProps) => {
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
      className='mySwiper min-h-0 w-full min-w-0 max-w-full overflow-hidden'
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
