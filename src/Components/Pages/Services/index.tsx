import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
import OurConsultancies from '@/components/organisms/OurConsultancies';
import OurServices from '@/components/organisms/OurServices';
import PlansAndStrategy from '@/components/organisms/PlansAndStraterg';

const Services = () => {
  return (
    <Main>
      <Banner
        title='Aqui você certamente encontrará os melhores serviços de Engenharia de Segurança do Trabalho e Meio Ambiente. '
        subtitle='segurança do trabalho'
        variant='small'
      />
      <PlansAndStrategy />
      <OurServices />
      <OurConsultancies />
      <Contact />
    </Main>
  );
};

export default Services;
