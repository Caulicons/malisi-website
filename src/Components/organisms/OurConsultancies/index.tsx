import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardConsultancies from '@/components/molecules/Card/CardConsultancies';
import { sectionOurConsultancies } from '@data/infos';

const OurConsultancies = () => {
  return (
    <Section className='rounded-b-section bg-secondary'>
      <Container>
        <Presentation
          title={sectionOurConsultancies.title}
          subtitle={sectionOurConsultancies.subtitle}
          titleColor='white'
          subtitleColor='white'
        />
        <div className='flex flex-row flex-wrap justify-center gap-4'>
          {sectionOurConsultancies.cards.map((consultancy) => (
            <CardConsultancies key={consultancy.name} {...consultancy} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurConsultancies;
