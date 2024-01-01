import Image from '@/components/atoms/Image';
import Text from '@/components/atoms/Text';
import { clientReviewCard } from '@/types';

const CardClientReview = ({
  id,
  start,
  logo,
  company,
  description,
  author,
  role,
}: clientReviewCard) => {
  return (
    <div
      key={id}
      className='flex  min-h-full flex-col items-center justify-center gap-6 rounded-2xl bg-white p-5 text-center tablet:max-w-[600px]'
    >
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Image
          src={`/assets/images/clients/${logo}`}
          width={90}
          height={90}
          alt={`${company}, logo.`}
        />
        <Text className='font-semibold'>{company}</Text>
        <Text className=''>{start}</Text>
      </div>
      <Text className='text-center'>{description}</Text>
      <div className=' flex flex-col items-center justify-center gap-2 text-center'>
        <Text variant='citation' className=''>
          - {author}
        </Text>
        <Text className='-mt-2 text-sm font-bold'>{role}</Text>
      </div>
    </div>
  );
};

export default CardClientReview;
