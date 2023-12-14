'use client';
import { ourPortfolioData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import Image from '@/components/atoms/Image';
import Carousel from '@/components/molecules/Carousel';
import Text from '@/components/atoms/Text';
import Anchor from '@/components/atoms/Anchor';
import Slide from '@/components/molecules/Carousel/Slide';
import Animation from '@/components/atoms/Animation';
import { useRef } from 'react';

const OurPortfolio = () => {
  const ref = useRef(null);
  return (
    <Section sectionRef={ref} className='block h-fit'>
      <Container gap='xl' className='mx-auto'>
        <Presentation
          subtitle={ourPortfolioData.subtitle}
          title={ourPortfolioData.title}
          titleColor='secondary'
        />
        <Carousel>
          {ourPortfolioData.slides.map((slide) => (
            <Slide key={slide.id}>
              <Container className='mx-auto grid h-full w-full max-w-[400px] select-none gap-0 overflow-hidden tablet:gap-0'>
                <Image
                  src={slide.href}
                  alt={slide.alt}
                  key={slide.id}
                  width={400}
                  height={400}
                  style={{
                    objectFit: 'cover',
                    maxWidth: '100%',
                    maxHeight: '255px',
                    objectPosition: 'center',
                  }}
                  className=' w-full tablet:max-h-[500px] tablet:max-w-[500px]'
                />
                <Anchor
                  href={slide.moreInfo}
                  className=' flex h-full w-full  justify-center rounded-b-3xl bg-secondary p-2 '
                >
                  <Text variant='cardBody' className='font-semibold text-white'>
                    {slide.description}
                  </Text>
                </Anchor>
              </Container>
            </Slide>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default OurPortfolio;
