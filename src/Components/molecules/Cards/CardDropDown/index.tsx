'use client';
import Text from '@/components/atoms/Text';
import { cn } from '@/utils';
import { ReactNode, useState } from 'react';
import { FaCircleMinus } from 'react-icons/fa6';

type CardDropdownProps = {
  /* I can't pass the function to a Client component, so I need use the slot approach.
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
      onFocus={() => setIsOpen(true)}
    >
      <div
        className='flex w-full select-none items-center 
        justify-between gap-2 rounded-xl bg-secondary p-4'
      >
        <span className='cursor-pointer text-white transition-all'>
          {isOpen ? (
            <FaCircleMinus
              onClick={(
                event: React.MouseEvent<HTMLSpanElement, MouseEvent>
              ) => {
                setIsOpen(false);
                event.currentTarget.blur();
                event.cancelable = true;
              }}
              cursor='pointer'
              size={42}
            />
          ) : (
            Icon
          )}
        </span>
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
