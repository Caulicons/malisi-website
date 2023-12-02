'use client';
import Text from '@/components/atoms/Text';
import cn from '@utils/cn';
import { useState } from 'react';
import { IoPeopleCircleOutline } from 'react-icons/io5';

type CardToggleProps = {
  title: string;
  description: string;
  className?: string;
};

const CardToggle = ({ title, description, className }: CardToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        'h-full w-full select-none rounded-2xl border-2 border-secondary transition-all duration-1000 md:max-w-[49%] lg:max-w-[24%] ',
        className
      )}
    >
      <div
        className=' flex items-center justify-between 
        gap-2 rounded-xl bg-secondary p-3 '
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoPeopleCircleOutline
          className='text-white'
          style={{ fontSize: '48px', fontColor: 'white' }}
        />
        <Text tag='h3' variant='cardTitle' className='text-white'>
          {title}
        </Text>
      </div>
      {isOpen && (
        <Text tag='p' variant='cardBody'>
          {description}
        </Text>
      )}
    </div>
  );
};

export default CardToggle;

/* 
 <div className=' p-4 '>
      <h2
        className='cursor-pointer border text-xl font-bold'
        onClick={() => setIsVisible(!isVisible)}
      >
        Click to toggle content
      </h2>
      {isVisible && <p className='mt-2'>This is the content.</p>}
    </div>
*/
