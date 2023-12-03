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
        'group/card h-full w-full select-none rounded-2xl border-2 border-secondary transition-all duration-1000  md:max-w-[49%] lg:max-w-[24%] ',
        className
      )}
    >
      <div
        className='flex w-full items-center justify-between 
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
        className='hidden duration-700 group-focus/card:block group-focus/card:h-full '
      >
        {description}
      </Text>
    </button>
  );
};

export default CardDropdown;
