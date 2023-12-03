import Text from '@/components/atoms/Text';
import cn from '@utils/cn';
import { IoPeopleCircleOutline } from 'react-icons/io5';

type CardDropdownProps = {
  title: string;
  description: string;
  className?: string;
};

const CardDropdown = ({ title, description, className }: CardDropdownProps) => {
  return (
    <button
      className={cn(
        'group/card tablet:min-w-[310px] tablet:max-w-[49%] desktop:min-w-[310px] desktop:max-w-[24%] h-full w-full select-none rounded-2xl border-2 border-secondary ',
        className
      )}
    >
      <div
        className='flex items-center justify-between 
        gap-2 rounded-xl bg-secondary p-3'
      >
        <IoPeopleCircleOutline
          className='text-white'
          style={{ fontSize: '45px', fontColor: 'white' }}
        />
        <Text tag='h3' variant='cardTitle' className='text-white'>
          {title}
        </Text>
      </div>
      <Text
        tag='p'
        variant='cardBody'
        className='hidden group-focus/card:flex '
      >
        {description}
      </Text>
    </button>
  );
};

export default CardDropdown;
