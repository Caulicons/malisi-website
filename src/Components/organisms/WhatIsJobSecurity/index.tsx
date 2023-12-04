import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardDropdown from '@/components/molecules/Cards/CardDropDown';
import { sectionWhatIsJobSecurity } from '@data/infos';

const WhatIsJobSecurity = () => {
  return (
    <Section className='min-h-[24vh]'>
      <div className='max-w-sectionContainer flex flex-col gap-7'>
        <div className='flex flex-col gap-2'>
          <Text tag='p' variant='subTitle' className='tablet:text-start'>
            {sectionWhatIsJobSecurity.subTitle}
          </Text>
          <Text tag='h2' variant='h2' className='tablet:text-start'>
            {sectionWhatIsJobSecurity.title}
          </Text>
        </div>
        <div className='tablet:flex-row flex flex-col flex-wrap gap-3'>
          {sectionWhatIsJobSecurity.cards.map((card) => (
            <CardDropdown
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhatIsJobSecurity;
