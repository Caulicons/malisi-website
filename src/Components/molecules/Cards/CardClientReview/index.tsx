import Image from '@/components/atoms/Image';
import Text from '@/components/atoms/Text';

type CardClientReviewProps = {
  id: number;
  start: string;
  description: string;
  author: string;
};

const CardClientReview = ({
  id,
  start,
  description,
  author,
}: CardClientReviewProps) => {
  return (
    <div
      key={id}
      className='flex h-full max-w-[400px] flex-col gap-2 rounded-2xl bg-white p-5'
    >
      <Image
        src={`/assets/images/clients/client${id}.png`}
        width={50}
        height={50}
        alt={`${author}, logo.`}
      />
      <Text>{start}</Text>
      <Text>{description}</Text>
      <Text variant='citation' className='mt-6'>
        - {author}
      </Text>
    </div>
  );
};

export default CardClientReview;
