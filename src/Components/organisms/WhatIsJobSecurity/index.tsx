'use client';
import whatIsJobSecurityData from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardContainer from '@/components/molecules/Cards/CardContainer';
import CardDropdown from '@/components/molecules/Cards/CardDropdown';

const WhatIsJobSecurity = () => {
  return (
    <Section>
      <Container>
        <Presentation
          title={whatIsJobSecurityData.title}
          subtitle={whatIsJobSecurityData.subtitle}
          position='start'
        />
        <CardContainer grid='tablet:grid-cols-2 desktop:grid-cols-4'>
          {whatIsJobSecurityData.cards.map((card) => (
            <CardDropdown key={card.header.title} {...card} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default WhatIsJobSecurity;
