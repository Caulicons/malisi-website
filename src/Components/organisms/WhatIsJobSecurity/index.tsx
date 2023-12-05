import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardDropdown from '@/components/molecules/Card/CardDropDown';
import { sectionWhatIsJobSecurity } from '@data/infos';

const WhatIsJobSecurity = () => {
  return (
    <Section>
      <Container>
        <Presentation
          title={sectionWhatIsJobSecurity.title}
          subtitle={sectionWhatIsJobSecurity.subtitle}
          position='start'
        />
        <div className='flex flex-col flex-wrap justify-center gap-3 tablet:flex-row'>
          {sectionWhatIsJobSecurity.cards.map((card) => (
            <CardDropdown
              key={card.title}
              title={card.title}
              description={card.description}
              className='tablet:min-w-[310px] tablet:max-w-[49%] desktop:min-w-[310px] desktop:max-w-[24%]'
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default WhatIsJobSecurity;
