import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardDropdown from '@/components/molecules/Cards/CardDropDown';
import whatIsJobSecurityData from './data';
import CardContainer from '@/components/molecules/Cards/CardContainer';

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
          {whatIsJobSecurityData.cards.map(({ Icon, ...card }) => (
            <CardDropdown
              key={card.title}
              icon={<Icon.type {...Icon.props} />}
              {...card}
            />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default WhatIsJobSecurity;
