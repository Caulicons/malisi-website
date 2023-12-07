'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from '@/components/atoms/Image';

type CarouselSwiperProps = {
  slides: {
    id: number;
    href: string;
    alt: string;
  }[];
};

const CarouselSwiper = ({ slides }: CarouselSwiperProps) => {
  return (
    <Swiper
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
      className='mySwiper'
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <div className='mt-7 grid h-full w-full justify-center'>
              <Image
                src={slide.href}
                alt={slide.alt}
                key={slide.id}
                width={400}
                height={400}
                className=' max-h-[400px] w-full max-w-[400px] tablet:max-h-[500px] tablet:max-w-[500px]'
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselSwiper;
