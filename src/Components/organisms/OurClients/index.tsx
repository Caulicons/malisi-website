'use client';
import ourClientData from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardClientReview from '@/components/molecules/Cards/CardClientReview';
import Carousel from '@/components/molecules/Carousel';
import Slide from '@/components/molecules/Carousel/Slide';
import Animation from '@/components/atoms/Animation';
import { useRef } from 'react';

const OurClients = () => {
  const ref = useRef(null);
  return (
    <Section sectionRef={ref} className='block rounded-t-section bg-secondary'>
      <Container gap='xl' className='mx-auto'>
        <Presentation
          subtitle={ourClientData.subtitle}
          title={ourClientData.title}
          titleColor='white'
          subtitleColor='white'
        />
        {/* <Animation reference={ref}> */}
        <Carousel
          autoplay={{}}
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
        {/* </Animation> */}
      </Container>
    </Section>
  );
};

export default OurClients;
