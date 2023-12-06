import Text from '@/components/atoms/Text';
import cn from '@utils/cn';
import { IconType } from 'react-icons';
import { IoPeopleCircleOutline } from 'react-icons/io5';

type CardDropdownProps = {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
};

const CardDropdown = ({
  title,
  description,
  className,
  icon: Icon,
}: CardDropdownProps) => {
  return (
    <button
      className={cn(
        'group/card h-fit w-full min-w-[300px] select-none rounded-2xl border-2 border-secondary ',
        className
      )}
    >
      <div
        className='flex items-center justify-between 
        gap-2 rounded-xl bg-secondary p-3'
      >
        <Icon size={45} color='white' />
        <Text tag='h3' variant='cardTitle' className='text-end text-white'>
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
