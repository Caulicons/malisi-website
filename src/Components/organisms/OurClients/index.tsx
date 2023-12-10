'use client';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardClientReview from '@/components/molecules/Cards/CardClientReview';
import ourClientData from './data';
import { SwiperSlide } from 'swiper/react';
import Carousel from '@/components/molecules/Carousel';

const OurClients = () => {
  return (
    <Section className='block rounded-t-section bg-secondary'>
      <Container gap='xl'>
        <Presentation
          subtitle={ourClientData.subtitle}
          title={ourClientData.title}
          subtitleColor='white'
        />
        <Carousel>
          {ourClientData.reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className='grid h-full w-full justify-center'>
                <CardClientReview {...review} />
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default OurClients;
