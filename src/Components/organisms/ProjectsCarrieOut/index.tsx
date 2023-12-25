import { projectsCarriedOutData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';

import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProjectsCarousel = dynamic(() => import('./ProjectsCarousel'), {
  ssr: false,
  loading: () => (
    <div>
      <Skeleton height={270} />
      <div className='rounded-b-2xl bg-secondary p-5'>
        <Skeleton count={3} baseColor='#fff' highlightColor='#fff' />
      </div>
    </div>
  ),
});

const ProjectsCarriedOut = () => {
  return (
    <Section className='block h-fit'>
      <Container gap='xl' className='mx-auto'>
        <Presentation
          subtitle={projectsCarriedOutData.subtitle}
          title={projectsCarriedOutData.title}
          titleColor='secondary'
        />
        <ProjectsCarousel />
      </Container>
    </Section>
  );
};

export default ProjectsCarriedOut;
