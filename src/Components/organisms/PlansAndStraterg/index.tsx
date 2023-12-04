import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import { sectionPlansAndStrategy } from '@data/infos';

const PlansAndStrategy = () => {
  return (
    <Section className='h-fit min-h-0'>
      <div className='flex max-w-sectionContainer flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <Text
            variant='subTitle'
            className='tablet:text-start desktop:text-start'
          >
            {sectionPlansAndStrategy.subTitle}
          </Text>
          <Text
            tag='h2'
            variant='h2'
            className=' tablet:text-start desktop:text-start'
          >
            {sectionPlansAndStrategy.title}
          </Text>
        </div>
        <Text variant='p' className='mt-3 '>
          {sectionPlansAndStrategy.description}
        </Text>
      </div>
    </Section>
  );
};

export default PlansAndStrategy;
