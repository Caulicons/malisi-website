import SocialMediaIcon from '@/components/atoms/SocialMediaIcon';
import Text from '@/components/atoms/Text';
import type { memberCard } from '@/types';

import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton';

const Image = dynamic(() => import('@/components/atoms/Image'), {
  ssr: false,
  loading: () => (
    <div className='rounded-t-2xl'>
      <Skeleton width={300} height={423} />
    </div>
  ),
});

const CardMember = ({
  id,
  name,
  role,
  formations,
  quote,
  socialMedias,
}: memberCard) => {
  return (
    <div
      className='flex max-w-[300px]  flex-col justify-center self-center rounded-t-2xl text-center'
      key={id}
    >
      <Image
        src={`/assets/images/team/member${id}.webp`}
        alt={`${name}, ${role}`}
        width={300}
        height={423}
        className='rounded-t-2xl'
      />
      <div className=' flex flex-col gap-6 rounded-b-3xl border-2 border-t-0 border-white px-4 py-5'>
        <div className='flex flex-col gap-2'>
          <Text
            tag='h3'
            variant='h3'
            className='text-base text-white  tablet:text-base'
          >
            {name}
          </Text>
          <Text className='w-full self-center text-center text-[14px] font-bold uppercase tracking-[9px] text-white'>
            {role}
          </Text>
          {formations && (
            <ul className='grid list-inside list-disc gap-2'>
              {formations.map((formation) => (
                <li key={formation} className='text-white'>
                  {formation}
                </li>
              ))}
            </ul>
          )}
          {quote && <Text className='text-white'>{quote}</Text>}
        </div>
        <div className='flex justify-evenly '>
          {socialMedias.map((socialMedia) => (
            <SocialMediaIcon
              key={socialMedia.name}
              ariaLabel={`Siga ${name} no ${socialMedia.name}.`}
              {...socialMedia}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMember;
