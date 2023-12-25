import Text from '@/components/atoms/Text';
import { cn } from '@/utils';

type PresentationProps = {
  title: string;
  subtitle?: string;
  description?: string;
  titleColor?: 'secondary' | 'black' | 'white';
  heading?: 'h1' | 'h2' | 'h3';
  subtitleColor?: 'secondary' | 'white';
  position?: 'start' | 'end' | 'center';
};

const Presentation = ({
  subtitle,
  title,
  description,
  titleColor = 'secondary',
  subtitleColor = 'secondary',
  heading = 'h2',
  position = 'center',
}: PresentationProps) => {
  const positionVariant = {
    start: 'tablet:text-start',
    end: 'tablet:text-end',
    center: 'text-center',
  };

  const tileColor = {
    secondary: 'text-primary',
    black: 'text-black',
    white: 'text-white',
  };

  const subtitleColorVariant = {
    secondary: 'text-primary',
    white: 'text-white',
  };

  return (
    <div className='flex flex-col gap-2'>
      <div
        className={cn(
          'flex flex-col gap-2 text-center',
          positionVariant[position]
        )}
      >
        <Text
          tag='p'
          variant='subtitle'
          className={cn('h-fit', subtitleColorVariant[subtitleColor])}
        >
          {subtitle}
        </Text>
        <Text
          tag={heading}
          variant={heading}
          className={cn(tileColor[titleColor])}
        >
          {title}
        </Text>
      </div>
      <div>
        <Text variant='p' className='mt-3 '>
          {description}
        </Text>
      </div>
    </div>
  );
};

export default Presentation;
