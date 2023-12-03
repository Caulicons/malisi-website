import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import HighQualityService from '@/components/organisms/HighQualityServices';
import WhatIsJobSecurity from '@/components/organisms/WhatIsJobSecurity';

const Home = () => {
  return (
    <Main>
      <Banner
        title='Aqui você certamente encontrará os melhores serviços de Engenharia de Segurança do Trabalho e Meio Ambiente. '
        subtitle='segurança do trabalho'
      />
      <WhatIsJobSecurity />
      <HighQualityService />
    </Main>
  );
};

export default Home;
