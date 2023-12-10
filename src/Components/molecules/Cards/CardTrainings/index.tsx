import { CgArrowRightO } from 'react-icons/cg';

type CardServiceProps = {
  name: string;
  description: string;
};

const CardTrainings = ({ name, description }: CardServiceProps) => {
  return (
    <div className='flex h-full w-full items-center  gap-4  rounded-3xl border border-white px-3 py-2 text-start text-white '>
      <CgArrowRightO size={42} />
      <div className='flex w-full'>
        <span className='font-bold uppercase text-white'>
          {name} | <span className='font-normal '>{description}</span>
        </span>
      </div>
    </div>
  );
};

export default CardTrainings;
