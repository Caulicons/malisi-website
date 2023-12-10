import Text from '@/components/atoms/Text';
import { IconType } from 'react-icons';
import { BsBuildingCheck } from 'react-icons/bs';

import Redirect from '@/components/molecules/Redirect';

type CardCallToActionProps = {
  title: string;
  description: string;
  icon?: IconType;
  button: {
    icon?: IconType | undefined;
    name: string;
  };
} & React.HTMLAttributes<HTMLDivElement>;

const CardCallToAction = ({
  title,
  description,
  icon: Icon,
}: CardCallToActionProps) => {
  return (
    <div className='flex  w-full flex-col justify-between gap-4 rounded-2xl bg-secondary p-4 text-white'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between gap-2 border-white'>
          {Icon ? <Icon size={36} /> : <BsBuildingCheck size={27} />}
          <Text tag='h3' variant='cardTitle'>
            {title}
          </Text>
        </div>
        <Text className='text-center'>{description}</Text>
      </div>
      {/* TODO: change href later */}
      <Redirect href='/servicos' iconSize={21} className='self-end'>
        Saiba mais
      </Redirect>
    </div>
  );
};

export default CardCallToAction;
