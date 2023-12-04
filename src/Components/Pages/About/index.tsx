import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import OurPurpose from '@/components/organisms/OurPurpose';

const About = () => {
  return (
    <Main>
      <Banner
        title='Aqui você certamente encontrará os melhores serviços de Engenharia de Segurança do Trabalho e Meio Ambiente. '
        subtitle='segurança do trabalho'
        height={50}
      />
      <OurPurpose />
    </Main>
  );
};

export default About;
