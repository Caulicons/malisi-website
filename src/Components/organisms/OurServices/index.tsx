import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardService from '@/components/molecules/Card/CardService';
import { sectionOurServices } from '@data/infos';

const OurServices = () => {
  return (
    <Section className='rounded-t-[75px] bg-secondary '>
      <div className='flex max-w-sectionContainer flex-col gap-16 p-3'>
        <div className='flex  flex-col gap-4'>
          <Text variant='subTitle' className='text-white'>
            {sectionOurServices.subTitle}
          </Text>
          <Text tag='h2' variant='h2' className='text-white'>
            {sectionOurServices.title}
          </Text>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-4 p-4'>
          {sectionOurServices.cards.map((service) => (
            <CardService key={service.name} {...service} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurServices;
