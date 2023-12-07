import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
import MeetOurTeam from '@/components/organisms/MeetOurTeam';
import OurHistory from '@/components/organisms/OurHistory';
import OurPurpose from '@/components/organisms/OurPurpose';
import OurValues from '@/components/organisms/OurValues';

const About = () => {
  return (
    <Main>
      <Banner
        title='Aqui você certamente encontrará os melhores serviços de Engenharia de Segurança do Trabalho e Meio Ambiente. '
        subtitle='sobre nós'
        variant='small'
      />
      <OurPurpose />
      <OurValues />
      <OurHistory />
      <MeetOurTeam />
      <Contact />
    </Main>
  );
};

export default About;
