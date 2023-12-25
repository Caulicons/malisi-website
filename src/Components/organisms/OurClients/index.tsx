import ourClientData from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import ClientsCarousel from './ClientsCarousel';

const OurClients = () => {
  return (
    <Section className='block rounded-t-section bg-primary'>
      <Container gap='xl' className='mx-auto'>
        <Presentation
          subtitle={ourClientData.subtitle}
          title={ourClientData.title}
          titleColor='white'
          subtitleColor='white'
        />
        <ClientsCarousel />
      </Container>
    </Section>
  );
};

export default OurClients;
