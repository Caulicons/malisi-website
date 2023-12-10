import Main from '@/components/atoms/Main';
import Banner from '@/components/molecules/Banner';
import Contact from '@/components/organisms/Contact';
import { contactDPageData } from './data';
import Location from '@/components/atoms/Location';

const ContactPage = () => {
  return (
    <Main>
      <Banner
        title={contactDPageData.title}
        subtitle={contactDPageData.subtitle}
        variant='small'
      />
      <Location />
      <Contact />
    </Main>
  );
};

export default ContactPage;
