import { ourTrainingsData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardContainer from '@/components/molecules/Cards/CardContainer';
import CardTrainings from '@/components/molecules/Cards/CardTrainings';

const OurTrainings = () => {
  return (
    <Section
      id='treinamentos'
      className='rounded-b-section bg-secondary transition-all duration-1000'
    >
      <Container>
        <Presentation
          title={ourTrainingsData.title}
          subtitle={ourTrainingsData.subtitle}
          titleColor='white'
          subtitleColor='white'
        />
        <CardContainer grid='laptop:grid-cols-2'>
          {ourTrainingsData.cards.map((consultancy) => (
            <CardTrainings key={consultancy.id} {...consultancy} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default OurTrainings;
