import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import Card from '@/components/molecules/Card';
import { sectionOurPurpose } from '@data/infos';

const OurPurpose = () => {
  return (
    <Section className='min-h-fit'>
      <div className='flex max-w-sectionContainer flex-col gap-8'>
        <div>
          <Text
            variant='subTitle'
            className='tablet:text-start desktop:text-start'
          >
            {sectionOurPurpose.subTitle}
          </Text>
          <Text
            tag='h2'
            variant='h2'
            className='text-secondary tablet:text-start desktop:text-start'
          >
            {sectionOurPurpose.title}
          </Text>
          <Text variant='p' className='mt-3 '>
            {sectionOurPurpose.description}
          </Text>
        </div>
        <div className='mx-auto flex flex-col flex-wrap gap-3 tablet:flex-row'>
          {sectionOurPurpose.cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              variant={card?.variant}
              className='tablet:max-w-[49%]'
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurPurpose;
