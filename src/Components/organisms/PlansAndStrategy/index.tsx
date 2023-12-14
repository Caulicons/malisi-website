import { plansAndStrategyData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';

const PlansAndStrategy = () => {
  return (
    <Section>
      <Container>
        <Presentation
          title={plansAndStrategyData.title}
          subtitle={plansAndStrategyData.subtitle}
          description={plansAndStrategyData.description}
          position='start'
          titleColor='secondary'
        />
      </Container>
    </Section>
  );
};

export default PlansAndStrategy;
