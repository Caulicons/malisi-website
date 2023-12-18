'use client';
import { ourValuesData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardContainer from '@/components/molecules/Cards/CardContainer';
import CardDropdown from '@/components/molecules/Cards/CardDropdown';

const OurValues = () => {
  return (
    <Section>
      <Container>
        <Presentation
          title={ourValuesData.title}
          subtitle={ourValuesData.subtitle}
          position='end'
        />
        <CardContainer grid='tablet:grid-cols-2 desktop:grid-cols-3'>
          {ourValuesData.cards.map((card) => (
            <CardDropdown key={card.header.title} {...card} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default OurValues;
