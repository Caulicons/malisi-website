import { servicePageData } from './data';
import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
import OurTrainings from '@/components/organisms/OurTraining';
import ProjectsCarriedOut from '@/components/organisms/ProjectsCarrieOut';
import OurServices from '@/components/organisms/OurServices';
import PlansAndStrategy from '@/components/organisms/PlansAndStrategy';

const Services = () => {
  return (
    <Main>
      <Banner
        title={servicePageData.title}
        subtitle={servicePageData.subtitle}
        imageName={servicePageData.imageName}
        variant='small'
      />
      <PlansAndStrategy />
      <OurServices />
      <ProjectsCarriedOut />
      <OurTrainings />
      <Contact />
    </Main>
  );
};

export default Services;
