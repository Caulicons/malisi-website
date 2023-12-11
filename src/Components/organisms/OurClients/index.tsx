'use client';
import ourClientData from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardClientReview from '@/components/molecules/Cards/CardClientReview';
import { SwiperSlide } from 'swiper/react';
import Carousel from '@/components/molecules/Carousel';

const OurClients = () => {
  return (
    <Section className='block rounded-t-section bg-secondary'>
      <Container gap='xl' className='mx-auto'>
        <Presentation
          subtitle={ourClientData.subtitle}
          title={ourClientData.title}
          titleColor='white'
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
