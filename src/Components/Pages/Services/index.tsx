import Carousel from '@/components/Carousel';
import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
import OurConsultancies from '@/components/organisms/OurConsultancies';
import OurServices from '@/components/organisms/OurServices';
import PlansAndStrategy from '@/components/organisms/PlansAndStraterg';
import { slidesConsultancies, slidesTrainings } from './data';

const Services = () => {
  return (
    <Main>
      <Banner
        title='Aqui você certamente encontrará os melhores serviços de Engenharia de Segurança do Trabalho e Meio Ambiente. '
        subtitle='serviços'
        variant='small'
      />
      <PlansAndStrategy />
      <OurServices />
      <Carousel
        title='Projetos'
        subtitle='Treinamentos'
        slides={slidesTrainings}
      />
      <OurConsultancies />
      <Carousel
        title='Consultoria'
        subtitle='Consultoria'
        slides={slidesConsultancies}
      />
      <Contact />
    </Main>
  );
};

export default Services;
