import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardConsultancies from '@/components/molecules/Cards/CardConsultancies';
import { ourConsultanciesData } from './data';
import CardContainer from '@/components/molecules/Cards/CardContainer';

const OurConsultancies = () => {
  return (
    <Section className='rounded-b-section bg-secondary transition-all duration-1000'>
      <Container>
        <Presentation
          title={ourConsultanciesData.title}
          subtitle={ourConsultanciesData.subtitle}
          titleColor='white'
          subtitleColor='white'
        />
        <CardContainer grid='laptop:grid-cols-2 '>
          {ourConsultanciesData.cards.map((consultancy) => (
            <CardConsultancies key={consultancy.name} {...consultancy} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default OurConsultancies;
