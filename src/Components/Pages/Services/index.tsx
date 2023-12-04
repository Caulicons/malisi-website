import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
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
      <Contact />
    </Main>
  );
};

export default Services;
