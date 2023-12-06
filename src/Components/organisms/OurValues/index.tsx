import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardDropdown from '@/components/molecules/Cards/CardDropDown';
import { PiUsers } from 'react-icons/pi';
import { ourValuesData } from './data';
import CardContainer from '@/components/molecules/Cards/CardContainer';

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
            <CardDropdown key={card.title} {...card} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default OurValues;
