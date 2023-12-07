'use client';
import Text from '@/components/atoms/Text';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaCircleMinus } from 'react-icons/fa6';

type CardConsultanciesProps = {
  name: string;
  details: {
    description: string;
    forWhat: string;
    whatAreTheObjectives: string;
    beNotDo: string;
  };
};

const CardConsultancies = ({ name, details }: CardConsultanciesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex h-fit w-full flex-col items-center  justify-center   rounded-3xl border border-white bg-white text-start text-white'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full  items-center justify-between gap-5 rounded-3xl bg-secondary p-5 tablet:min-h-[150px]'
      >
        <span>
          {isOpen ? <FaCircleMinus size={42} /> : <FaCirclePlus size={42} />}
        </span>
        <Text
          tag='h3'
          variant='cardTitle'
          className='text-right text-base font-bold'
        >
          {name}
        </Text>
      </div>
      {isOpen && (
        <div className='flex w-full flex-col gap-6 rounded-3xl bg-white p-5 text-black'>
          <Text>{details.description}</Text>
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

export default CardConsultancies;
