import Section from '@/components/atoms/Section';
import CarouselSwiper from './Swiper';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';

type CarouselProps = {
  title: string;
  subtitle?: string;
  slides: {
    id: number;
    href: string;
    alt: string;
  }[];
};

const Carousel = ({ title, subtitle, slides }: CarouselProps) => {
  return (
    <Section className=' block'>
      <Container className='mx-auto block tablet:my-10'>
        <Presentation title={title} subtitle={subtitle} />
        <CarouselSwiper slides={slides} />
      </Container>
    </Section>
  );
};

export default Carousel;
