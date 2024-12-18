import Image from '@/components/atoms/Image';
import { cn } from '@/utils';
import { IconType } from 'react-icons';
import { cva } from 'class-variance-authority';
import Text from '@/components/atoms/Text';

type CardProps = {
  icon?: IconType;
  iconColor?: 'string';
  description?: string;
  iconSize?: number;
  title: string;
  imgURL?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const variants = cva(
  'flex  flex-col gap-4 rounded-2xl bg-white p-6 pb-9 text-left',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        secondary: 'bg-white text-primary border-2 border-primary',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export default function Card({
  className,
  icon: Icon,
  iconColor,
  iconSize,
  imgURL,
  title,
  description,
  variant = 'primary',
}: CardProps) {
  if (!Icon && !imgURL) {
    throw new Error('One of Icon and imgURL must be provided');
  } else if (Icon && imgURL) {
    throw new Error('Only one of Icon and imgURL can be provided');
  }

  return (
    <div className={cn(variants({ variant }), className)}>
      <div className='flex  items-center justify-between'>
        <div>
          {Icon && (
            <span className={cn('text-primary', `text-${iconColor}`)}>
              <Icon fontSize={iconSize ? iconSize : 50} />
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
