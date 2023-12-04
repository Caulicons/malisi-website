import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardDropdown from '@/components/molecules/Card/CardDropDown';
import { sectionWhatIsJobSecurity } from '@data/infos';

const WhatIsJobSecurity = () => {
  return (
    <Section className='min-h-[24vh]'>
      <div className='flex max-w-sectionContainer flex-col gap-7'>
        <div className='flex flex-col gap-2'>
          <Text tag='p' variant='subTitle' className='tablet:text-start'>
            {sectionWhatIsJobSecurity.subTitle}
          </Text>
          <Text tag='h2' variant='h2' className='tablet:text-start'>
            {sectionWhatIsJobSecurity.title}
          </Text>
        </div>
        <div className='flex flex-col flex-wrap gap-3 tablet:flex-row'>
          {sectionWhatIsJobSecurity.cards.map((card) => (
            <CardDropdown
              key={card.title}
              title={card.title}
              description={card.description}
              className='tablet:min-w-[310px] tablet:max-w-[49%] desktop:min-w-[310px] desktop:max-w-[24%]'
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhatIsJobSecurity;
