import Image from '@/components/atoms/Image';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardClientReview from '@/components/molecules/Card/CardClientReview';
import { sectionOurClients } from '@data/infos';

const OurClients = () => {
  return (
    <Section className='min-h-[50vh] rounded-t-[75px] bg-secondary '>
      <div className='flex max-w-sectionContainer flex-col gap-12'>
        <div className='flex flex-col gap-2'>
          <Text tag='p' variant='subTitle' className='text-white'>
            {sectionOurClients.subTitle}
          </Text>
          <Text tag='h2' variant='h2'>
            {sectionOurClients.title}
          </Text>
        </div>
        <div className='mx-auto flex w-4/5 flex-col gap-5 tablet:flex-row'>
          {sectionOurClients.reviews.map((review) => (
            <CardClientReview key={review.id} {...review} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurClients;
