import Section from '@/components/atoms/Section';
import CarouselSwiper from './Swiper';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';

type CarouselProps = {
  title: string;
  subtitle?: string;
  description?: string;
  titleColor?: 'secondary' | 'black' | 'white';
  heading?: 'h1' | 'h2' | 'h3';
  subtitleColor?: 'secondary' | 'white';
  position?: 'start' | 'end' | 'center';
  slides: {
    id: number;
    href: string;
    alt: string;
  }[];
};

const Carousel = ({ title, subtitle, slides, ...props }: CarouselProps) => {
  return (
    <Section className=' block'>
      <Container className='mx-auto block tablet:my-10'>
        <Presentation title={title} subtitle={subtitle} {...props} />
        <CarouselSwiper slides={slides} />
      </Container>
    </Section>
  );
};

export default Carousel;
