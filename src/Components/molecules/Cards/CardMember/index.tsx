import Anchor from '@/components/atoms/Anchor';
import Image from '@/components/atoms/Image';
import SocialMediaIcon from '@/components/atoms/SocialMediaIcon';
import Text from '@/components/atoms/Text';

type CardMemberProps = {
  id: number;
  name: string;
  role: string;
  quote: string;
  socialMedias: {
    name: string;
    url: string;
  }[];
};

const CardMember = ({
  id,
  name,
  role,
  quote,
  socialMedias,
}: CardMemberProps) => {
  return (
    <div
      className='flex max-w-[300px] flex-col justify-center  text-center'
      key={id}
    >
      <Image
        src={`/assets/images/team/member${id}.png`}
        alt={`${name}, ${role}`}
        width={300}
        height={300}
        className='rounded-t-2xl'
      />
      <div className=' flex flex-col gap-6 rounded-b-3xl border-2 border-t-0 border-white px-4 py-5'>
        <div className='flex flex-col gap-2'>
          <Text
            tag='h3'
            variant='h3'
            className='tablet:text-base text-base  text-white'
          >
            {name}
          </Text>
          <Text className='font-bold uppercase tracking-[9px]'>{role}</Text>
          <Text className='text-white'>{quote}</Text>
        </div>
        <div className='flex justify-evenly '>
          {/* FIXME: resolve this type any */}
          {socialMedias.map((socialMedia: any) => (
            <SocialMediaIcon key={socialMedia.name} {...socialMedia} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMember;
