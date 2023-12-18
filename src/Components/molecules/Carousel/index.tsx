import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Swiper, SwiperProps } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

type CarouselProps = {} & React.HTMLAttributes<HTMLDivElement> & SwiperProps;

const Carousel = ({ children, ...props }: CarouselProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={20}
      grabCursor={true}
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
