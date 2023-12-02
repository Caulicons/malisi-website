import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import WhatIsJobSecurity from '@/components/organisms/WhatIsJobSecurity';

const Home = () => {
  return (
    <Main>
      <Banner
        title='Aqui você certamente encontrará os melhores serviços de Engenharia de Segurança do Trabalho e Meio Ambiente. '
        subtitle='segurança do trabalho'
      />
      <WhatIsJobSecurity />
    </Main>
  );
};

export default Home;
