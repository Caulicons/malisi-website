'use client';
import Text from '@/components/atoms/Text';
import { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaCircleMinus } from 'react-icons/fa6';

type CardConsultanciesProps = {
  name: string;
  details: {
    description: string;
    list: string[];
    forWhat: string;
    whatAreTheObjectives: string;
    beNotDo: string;
  };
};

const CardServices = ({ name, details }: CardConsultanciesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      className='flex h-fit w-full flex-col items-center justify-center rounded-3xl border border-white bg-white text-start text-white'
    >
      <div className='cursor flex w-full select-none items-center justify-between gap-2 rounded-3xl bg-secondary p-5 tablet:min-h-[150px]'>
        <span>
          {isOpen ? (
            <FaCircleMinus
              onClick={() => setIsOpen(false)}
              cursor='pointer'
              size={42}
            />
          ) : (
            <FaCirclePlus
              onClick={() => setIsOpen(true)}
              cursor='pointer'
              size={42}
            />
          )}
        </span>
        <Text
          tag='h3'
          variant='cardTitle'
          className='text-center text-base font-bold'
        >
          {name}
        </Text>
      </div>
      {isOpen && (
        <div className='flex h-fit w-full flex-col gap-6 rounded-3xl bg-white p-5 pt-2 text-black'>
          <Text>{details.description}</Text>
          {details.list.length > 0 && (
            <div className='flex w-full flex-col gap-2'>
              <ol className='list-disc  pl-8 pr-3'>
                {details.list.map((item, index) => (
                  <li key={index} className='font-bold '>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          )}
          {details.forWhat && (
            <div className='flex w-full flex-col gap-2'>
              <h4 className='text-xl font-bold uppercase text-secondary underline'>
                PARA QUEM ?
              </h4>
              <p>{details.forWhat}</p>
            </div>
          )}

          {details.whatAreTheObjectives && (
            <div className='flex w-full flex-col gap-2'>
              <h4 className='text-xl font-bold uppercase text-secondary underline'>
                Quais os Objetivos
              </h4>
              <p>{details.whatAreTheObjectives}</p>
            </div>
          )}
          {details.forWhat && (
            <div className='flex w-full flex-col gap-2'>
              <h4 className='text-xl font-bold uppercase text-secondary underline'>
                O que acontece se a empresa não realiza o trabalho ?
              </h4>
              <p>{details.beNotDo}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardServices;
