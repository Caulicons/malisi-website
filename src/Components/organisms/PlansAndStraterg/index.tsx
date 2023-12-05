import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import { sectionPlansAndStrategy } from '@data/infos';

const PlansAndStrategy = () => {
  return (
    <Section>
      <Container>
        <Presentation
          title={sectionPlansAndStrategy.title}
          subtitle={sectionPlansAndStrategy.subtitle}
          description={sectionPlansAndStrategy.description}
          position='start'
        />
      </Container>
    </Section>
  );
};

export default PlansAndStrategy;
