import { ourServicesData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardContainer from '@/components/molecules/Cards/CardContainer';
import CardDropdown from '@/components/molecules/Cards/CardDropdown';

const OurServices = () => {
  return (
    <Section id='servicos' className='rounded-t-section bg-primary'>
      <Container>
        <Presentation
          title={ourServicesData.title}
          subtitle={ourServicesData.subtitle}
          titleColor='white'
          subtitleColor='white'
        />

        <CardContainer grid='tablet:grid-cols-2 desktop:grid-cols-3'>
          {ourServicesData.cards.map(({ header: { title }, ...card }) => (
            <CardDropdown
              key={title}
              header={{
                title: title,
              }}
              body={card.body}
              borderColor='white'
              minHeight='150px'
            />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default OurServices;
