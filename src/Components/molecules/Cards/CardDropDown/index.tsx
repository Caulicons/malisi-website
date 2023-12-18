'use client';
import Text from '@/components/atoms/Text';
import { cn } from '@/utils';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaCircleMinus } from 'react-icons/fa6';

type CardDropdownProps = {
  header: {
    title: string;
    icon: IconType;
  };
  body: {
    description: string;
    list?: string[];
    forWhat?: string;
    whatAreTheObjectives?: string;
    beNotDo?: string;
  };
  minHeight?: '150px' | 'none';
  borderColor?: 'white' | 'secondary';
};

const CardDropdown = ({
  header: { title, icon: Icon },
  body,
  minHeight = 'none',
  borderColor = 'secondary',
}: CardDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const variantBorder = {
    white: 'border-white',
    secondary: 'border-secondary',
  };

  const variantHeight = {
    '150px': 'min-h-[150px]',
    none: 'min-h-0',
  };

  return (
    <div
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      className={cn(
        'flex h-fit w-full flex-col items-center rounded-3xl border bg-white text-white',
        variantBorder[borderColor]
      )}
    >
      <div
        className={cn(
          ' flex h-fit w-full select-none items-center justify-between gap-3 rounded-3xl bg-secondary p-5 ',
          variantHeight[minHeight]
        )}
      >
        <span>
          {isOpen ? (
            <FaCircleMinus
              onClick={() => setIsOpen(false)}
              cursor='pointer'
              size={45}
            />
          ) : Icon ? (
            <Icon size={45} cursor='pointer' onClick={() => setIsOpen(true)} />
          ) : (
            <FaCirclePlus
              onClick={() => setIsOpen(true)}
              cursor='pointer'
              size={45}
            />
          )}
        </span>
        <Text
          tag='h3'
          variant='cardTitle'
          className='text-center text-base font-bold'
        >
          {title}
        </Text>
      </div>
      {isOpen && (
        <div className='flex h-fit w-full flex-col gap-6 rounded-3xl bg-white p-5 pt-2 text-black'>
          <Text className='text-center'>{body.description}</Text>
          {body.list && body.list.length > 0 && (
            <div className='flex w-full flex-col gap-2'>
              <ol className='list-disc  pl-8 pr-3'>
                {body.list.map((item, index) => (
                  <li key={index} className='font-bold '>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          )}
          {body.forWhat && (
            <div className='flex w-full flex-col gap-2'>
              <h4 className='text-xl font-bold uppercase text-secondary underline'>
                PARA QUEM ?
              </h4>
              <p>{body.forWhat}</p>
            </div>
          )}

          {body.whatAreTheObjectives && (
            <div className='flex w-full flex-col gap-2'>
              <h4 className='text-xl font-bold uppercase text-secondary underline'>
                Quais os Objetivos
              </h4>
              <p>{body.whatAreTheObjectives}</p>
            </div>
          )}
          {body.forWhat && (
            <div className='flex w-full flex-col gap-2'>
              <h4 className='text-xl font-bold uppercase text-secondary underline'>
                O que acontece se a empresa não realiza o trabalho ?
              </h4>
              <p>{body.beNotDo}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardDropdown;
