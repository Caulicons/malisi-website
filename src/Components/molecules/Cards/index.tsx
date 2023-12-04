import Image from '@components/atoms/Image';
import cn from '../../../../utils/cn';
import { IconType } from 'react-icons';
import { cva } from 'class-variance-authority';
import Text from '@/components/atoms/Text';

type CartProps = {
  icon?: IconType;
  iconColor?: 'string';
  description?: string;
  iconSize?: number;
  title: string;
  imgURL?: string;
  variant?: 'primary' | 'secondary';
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const variants = cva(
  'flex w-full flex-col gap-4 rounded-2xl bg-white p-6 pb-9 text-left',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        secondary: 'bg-white text-secondary border-2 border-secondary',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export default function Card({
  className,
  children,
  icon: Icon,
  iconColor,
  imgURL,
  title,
  description,
  variant = 'primary',
}: CartProps) {
  if (!Icon && !imgURL) {
    throw new Error('One of Icon and imgURL must be provided');
  } else if (Icon && imgURL) {
    throw new Error('Only one of Icon and imgURL can be provided');
  }

  return (
    <div className={cn(variants({ variant }), className)}>
      <div className='flex items-center justify-between'>
        <div>
          {Icon && (
            <span className={cn('text-primary', `text-${iconColor}`)}>
              <Icon fontSize={50} />
            </span>
          )}
          {imgURL && (
            <Image
              src={imgURL}
              alt='logo'
              width={70}
              height={70}
              className={'h-20 w-20 rounded-full'}
            />
          )}
        </div>
        <Text tag='h3' variant='cardTitle' className='text-inherit'>
          {title}
        </Text>
      </div>
      <div>
        <Text variant='cardBody' className='text-center  tablet:text-start'>
          {description}
        </Text>
      </div>
    </div>
  );
}
