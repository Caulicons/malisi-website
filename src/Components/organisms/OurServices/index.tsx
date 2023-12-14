import { ourServicesData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardContainer from '@/components/molecules/Cards/CardContainer';
import CardServices from '@/components/molecules/Cards/CardServices';

const OurServices = () => {
  return (
    <Section className='rounded-t-section bg-secondary'>
      <Container>
        <Presentation
          title={ourServicesData.title}
          subtitle={ourServicesData.subtitle}
          titleColor='white'
          subtitleColor='white'
        />
        <CardContainer grid='tablet:grid-cols-2 desktop:grid-cols-3'>
          {ourServicesData.cards.map((service) => (
            <CardServices key={service.name} {...service} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default OurServices;
