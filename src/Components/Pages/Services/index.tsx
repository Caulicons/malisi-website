import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
import OurConsultancies from '@/components/organisms/OurConsultancies';
import OurServices from '@/components/organisms/OurServices';
import PlansAndStrategy from '@/components/organisms/PlansAndStrategy';
import { servicePageData } from './data';
import CarouselTrainings from '@/components/organisms/Carrousels/CarouselTrainings';
import CarouselConsultancies from '@/components/organisms/Carrousels/CarouselConsultancies';

const Services = () => {
  return (
    <Main>
      <Banner
        title={servicePageData.title}
        subtitle={servicePageData.subtitle}
        variant='small'
      />
      <PlansAndStrategy />
      <OurServices />
      <CarouselTrainings />
      <OurConsultancies />
      <CarouselConsultancies />
      <Contact />
    </Main>
  );
};

export default Services;
