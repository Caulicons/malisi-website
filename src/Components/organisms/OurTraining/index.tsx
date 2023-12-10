import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardServices from '@/components/molecules/Cards/CardServices';
import { ourTrainingsData } from './data';
import CardContainer from '@/components/molecules/Cards/CardContainer';
import CardTrainings from '@/components/molecules/Cards/CardTrainings';

const OurTrainings = () => {
  return (
    <Section className='rounded-b-section bg-secondary transition-all duration-1000'>
      <Container>
        <Presentation
          title={ourTrainingsData.title}
          subtitle={ourTrainingsData.subtitle}
          titleColor='white'
          subtitleColor='white'
        />
        <CardContainer grid='laptop:grid-cols-2'>
          {ourTrainingsData.cards.map((consultancy) => (
            <CardTrainings key={consultancy.name} {...consultancy} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default OurTrainings;
