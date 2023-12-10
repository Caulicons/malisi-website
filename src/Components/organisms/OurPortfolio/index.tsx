'use client';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import { ourPortfolioData } from './data';
import { SwiperSlide } from 'swiper/react';
import Image from '@/components/atoms/Image';
import Carousel from '@/components/molecules/Carousel';
import Text from '@/components/atoms/Text';
import Anchor from '@/components/atoms/Anchor';

const OurPortfolio = () => {
  return (
    <Section className='block'>
      <Container gap='xl'>
        <Presentation
          subtitle={ourPortfolioData.subtitle}
          title={ourPortfolioData.title}
          titleColor='secondary'
        />
        <Carousel>
          {ourPortfolioData.slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className='mx-auto mt-7 grid h-full w-full max-w-[400px] select-none '>
                <Image
                  src={slide.href}
                  alt={slide.alt}
                  key={slide.id}
                  width={400}
                  height={400}
                  className=' w-full tablet:max-h-[500px] tablet:max-w-[500px]'
                />
                <Anchor
                  href={slide.moreInfo}
                  className=' flex h-full w-full  justify-center rounded-b-3xl bg-secondary px-2 py-4'
                >
                  <Text variant='cardBody' className='font-semibold text-white'>
                    {slide.description}
                  </Text>
                </Anchor>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default OurPortfolio;
