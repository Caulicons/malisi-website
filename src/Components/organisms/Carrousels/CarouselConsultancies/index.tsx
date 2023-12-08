import Carousel from '../Carousel';
import { carouselConsultancies } from '../data';

const CarouselConsultancies = () => {
  return (
    <Carousel
      title={carouselConsultancies.title}
      subtitle={carouselConsultancies.subtitle}
      slides={carouselConsultancies.slides}
    />
  );
};

export default CarouselConsultancies;
