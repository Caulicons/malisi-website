'use client';
import Text from '@/components/atoms/Text';
import cn from '@utils/cn';
import { ReactNode, useState } from 'react';
import { IconType } from 'react-icons';

type CardDropdownProps = {
  /* I don't can pass I function to a Client component, so because of that I need the slot approach
  Example: icon={<Icon.type {...Icon.props} />}
  https://github.com/vercel/next.js/discussions/49885
  */
  icon: ReactNode;
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      tabIndex={0}
      className={cn(
        'grid h-fit w-full cursor-pointer flex-col rounded-2xl border-2 border-secondary',
        className
      )}
      onBlur={() => setIsOpen(false)}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between 
        gap-2 rounded-xl bg-secondary p-4'
      >
        {Icon}
        <Text tag='h3' variant='cardTitle' className='text-end text-white'>
          {title}
        </Text>
      </div>
      {isOpen && (
        <Text tag='p' variant='cardBody' className='cursor-default'>
          {description}
        </Text>
      )}
    </div>
  );
};

export default CardDropdown;
