'use client';
import Carousel from '@/components/molecules/Carousel';
import ourClientData from '../data';
import CardClientReview from '@/components/molecules/Cards/CardClientReview';
import Slide from '@/components/molecules/Carousel/Slide';

const ClientsCarousel = () => {
  return (
    <Carousel
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }}
    >
      {ourClientData.reviews.map((review) => (
        <Slide key={review.id}>
          <CardClientReview {...review} />
        </Slide>
      ))}
    </Carousel>
  );
};

export default ClientsCarousel;
