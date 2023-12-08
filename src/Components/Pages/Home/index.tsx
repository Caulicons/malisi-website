import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
import HighQualityService from '@/components/organisms/HighQualityServices';
import MeetOurTeam from '@/components/organisms/MeetOurTeam';
import OurClients from '@/components/organisms/OurClients';
import TheBetterChoiceInWorkSafety from '@/components/organisms/TheBetterChoiceInWorkSafety';
import WhatIsJobSecurity from '@/components/organisms/WhatIsJobSecurity';
import CarouselTrainings from '@/components/organisms/Carrousels/CarouselTrainings';

import { homePageData } from './data';

const Home = () => {
  return (
    <Main>
      <Banner title={homePageData.title} subtitle={homePageData.subtitle} />
      <WhatIsJobSecurity />
      <HighQualityService />
      <TheBetterChoiceInWorkSafety />
      <CarouselTrainings />
      <OurClients />
      <MeetOurTeam />
      <Contact />
    </Main>
  );
};

export default Home;
