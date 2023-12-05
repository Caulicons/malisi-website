import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardDropdown from '@/components/molecules/Card/CardDropDown';
import { sectionOurValues } from '@data/infos';
import { PiUsers } from 'react-icons/pi';

const OurValues = () => {
  return (
    <Section>
      <Container>
        <Presentation
          title={sectionOurValues.title}
          subtitle={sectionOurValues.subtitle}
          position='end'
        />
        <div className='mx-auto flex flex-col flex-wrap justify-center gap-3 tablet:flex-row'>
          {sectionOurValues.cards.map((card) => (
            <CardDropdown
              icon={PiUsers}
              className='tablet:min-w-[310px] tablet:max-w-[49%] desktop:min-w-[310px] desktop:max-w-[32%]'
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurValues;
