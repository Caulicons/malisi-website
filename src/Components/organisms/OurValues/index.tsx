import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardDropdown from '@/components/molecules/Card/CardDropDown';
import { sectionOurValues } from '@data/infos';
import { PiUsers } from 'react-icons/pi';

const OurValues = () => {
  return (
    <Section className='min-h-fit'>
      <div className='flex max-w-sectionContainer flex-col gap-8'>
        <div>
          <Text
            variant='subTitle'
            className='tablet:text-start desktop:text-end'
          >
            {sectionOurValues.subTitle}
          </Text>
          <Text
            tag='h2'
            variant='h2'
            className='text-secondary tablet:text-start desktop:text-end'
          >
            {sectionOurValues.title}
          </Text>
        </div>
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
      </div>
    </Section>
  );
};

export default OurValues;
