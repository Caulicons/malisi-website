'use client';
import { projectsCarriedOutData } from '../data';
import Carousel from '@/components/molecules/Carousel';
import Slide from '@/components/molecules/Carousel/Slide';
import CardProject from '@/components/molecules/Cards/CardProject';

function ProjectsCarousel() {
  return (
    <Carousel
      autoplay={{
        delay: 4800,
        disableOnInteraction: true,
      }}
    >
      {projectsCarriedOutData.slides.map((slide) => (
        <Slide key={slide.id}>
          <CardProject {...slide} />
        </Slide>
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;
