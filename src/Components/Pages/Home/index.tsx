import { homePageData } from './data';
import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
import MeetOurTeam from '@/components/organisms/MeetOurTeam';
import WhatIsJobSecurity from '@/components/organisms/WhatIsJobSecurity';
import HighQualityService from '@/components/organisms/HighQualityServices';
import TheBetterChoiceInWorkSafety from '@/components/organisms/TheBetterChoiceInWorkSafety';
import ProjectsCarriedOut from '@/components/organisms/ProjectsCarrieOut';
import OurClients from '@/components/organisms/OurClients';

const Home = () => {
  return (
    <Main>
      <Banner title={homePageData.title} subtitle={homePageData.subtitle} />
      <WhatIsJobSecurity />
      <HighQualityService />
      <TheBetterChoiceInWorkSafety />
      <ProjectsCarriedOut />
      <OurClients />
      <MeetOurTeam />
      <Contact />
    </Main>
  );
};

export default Home;
