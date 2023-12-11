import { ourPurposeData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/SectionPresentation';
import Section from '@/components/atoms/Section';
import Card from '@/components/molecules/Cards/Card';
import CardContainer from '@/components/molecules/Cards/CardContainer';

const OurPurpose = () => {
  return (
    <Section>
      <Container>
        <Presentation
          title={ourPurposeData.title}
          subtitle={ourPurposeData.subtitle}
          description={ourPurposeData.description}
          titleColor='secondary'
          position='start'
        />
        <CardContainer grid='tablet:grid-cols-2'>
          {ourPurposeData.cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              variant={card?.variant}
            />
          ))}
        </CardContainer>
        <div className='grid w-full  gap-5 tablet:grid-cols-2'></div>
      </Container>
    </Section>
  );
};

export default OurPurpose;
