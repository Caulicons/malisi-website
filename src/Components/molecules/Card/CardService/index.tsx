import { CgArrowRightO } from 'react-icons/cg';

type CardServiceProps = {
  name: string;
  description: string;
};

const CardService = ({ name, description }: CardServiceProps) => {
  return (
    <div className='bg-green  flex h-full w-full items-center  gap-4  rounded-3xl border border-white px-3 py-2 text-start text-white tablet:min-h-[93px] tablet:max-w-[49%] laptop:max-w-[32%] '>
      <CgArrowRightO size={42} />
      <div className='flex w-full'>
        <span className='font-bold uppercase text-white'>
          {name} | <span className='font-normal '>{description}</span>
        </span>
      </div>
    </div>
  );
};

export default CardService;
