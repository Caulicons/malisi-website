'use client';
import ourClientData from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardClientReview from '@/components/molecules/Cards/CardClientReview';
import Carousel from '@/components/molecules/Carousel';
import Slide from '@/components/molecules/Carousel/Slide';

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
        <Carousel
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
            waitForTransition: true,
          }}
        >
          {ourClientData.reviews.map((review) => (
            <Slide key={review.id}>
              <CardClientReview {...review} />
            </Slide>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default OurClients;
