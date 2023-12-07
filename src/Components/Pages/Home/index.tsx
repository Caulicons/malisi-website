import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
import HighQualityService from '@/components/organisms/HighQualityServices';
import MeetOurTeam from '@/components/organisms/MeetOurTeam';
import OurClients from '@/components/organisms/OurClients';
import TheBetterChoiceInWorkSafety from '@/components/organisms/TheBetterChoiceInWorkSafety';
import WhatIsJobSecurity from '@/components/organisms/WhatIsJobSecurity';
import { slidesTrainings } from './data';
import Carousel from '@/components/molecules/Carousel';
const Home = () => {
  return (
    <Main>
      <Banner
        title='Aqui você certamente encontrará os melhores serviços de Engenharia de Segurança do Trabalho e Meio Ambiente. '
        subtitle='segurança do trabalho'
      />
      <WhatIsJobSecurity />
      <HighQualityService />
      <TheBetterChoiceInWorkSafety />
      <Carousel
        title='Treinamentos'
        subtitle='Projetos'
        slides={slidesTrainings}
      />
      <OurClients />
      <MeetOurTeam />
      <Contact />
    </Main>
  );
};

export default Home;
