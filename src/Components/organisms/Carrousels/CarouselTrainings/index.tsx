import Carousel from '../Carousel';
import { carouselTrainings } from '../data';

const CarouselTrainings = () => {
  return (
    <Carousel
      titleColor='secondary'
      title={carouselTrainings.title}
      subtitle={carouselTrainings.subtitle}
      slides={carouselTrainings.slides}
    />
  );
};

export default CarouselTrainings;
