import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import { plansAndStrategyData } from './data';

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
