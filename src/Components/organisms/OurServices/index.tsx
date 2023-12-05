import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardService from '@/components/molecules/Card/CardService';
import { sectionOurServices } from '@data/infos';

const OurServices = () => {
  return (
    <Section className='rounded-t-section bg-secondary'>
      <Container>
        <Presentation
          title={sectionOurServices.title}
          subtitle={sectionOurServices.subtitle}
          titleColor='white'
          subtitleColor='white'
        />
        <div className='flex flex-row flex-wrap justify-center gap-4 p-4'>
          {sectionOurServices.cards.map((service) => (
            <CardService key={service.name} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurServices;
