import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardConsultancies from '@/components/molecules/Card/CardConsultancies';
import { sectionOurConsultancies } from '@data/infos';

const OurConsultancies = () => {
  return (
    <Section className='rounded-b-[75px] bg-secondary'>
      <div className='flex max-w-sectionContainer flex-col gap-16'>
        <div className='flex  flex-col gap-4'>
          <Text variant='subTitle' className='text-white'>
            {sectionOurConsultancies.subTitle}
          </Text>
          <Text tag='h2' variant='h2' className='text-white'>
            {sectionOurConsultancies.title}
          </Text>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-4'>
          {sectionOurConsultancies.cards.map((consultancy) => (
            <CardConsultancies key={consultancy.name} {...consultancy} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurConsultancies;
