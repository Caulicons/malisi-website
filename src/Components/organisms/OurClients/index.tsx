import Image from '@/components/atoms/Image';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardClientReview from '@/components/molecules/Cards/CardClientReview';
import { sectionOurClients } from '@data/infos';

const OurClients = () => {
  return (
    <Section className='min-h-[50vh] rounded-t-[75px] bg-secondary '>
      <div className='max-w-sectionContainer flex flex-col gap-12'>
        <div className='flex flex-col gap-2'>
          <Text tag='p' variant='subTitle' className='text-white'>
            {sectionOurClients.subTitle}
          </Text>
          <Text tag='h2' variant='h2'>
            {sectionOurClients.title}
          </Text>
        </div>
        <div className='tablet:flex-row mx-auto flex w-4/5 flex-col gap-5'>
          {sectionOurClients.reviews.map((review) => (
            <CardClientReview key={review.id} {...review} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurClients;
