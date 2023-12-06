import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardCallToAction from '@/components/molecules/Cards/CardCallToAction';
import theBetterChoiceInWorkSafetyData from './data';
import CardContainer from '@/components/molecules/Cards/CardContainer';

const TheBetterChoiceInWorkSafety = () => {
  return (
    <Section>
      <Container gap='xl'>
        <Presentation
          title={theBetterChoiceInWorkSafetyData.title}
          subtitle={theBetterChoiceInWorkSafetyData.subtitle}
        />
        <CardContainer grid='tablet:grid-cols-3'>
          {theBetterChoiceInWorkSafetyData.cards.map((card) => (
            <CardCallToAction key={card.title} {...card} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default TheBetterChoiceInWorkSafety;
