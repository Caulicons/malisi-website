import Anchor from '@/components/atoms/Anchor';
import Text from '@/components/atoms/Text';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { LinkProps } from 'next/link';
import { IconType } from 'react-icons';
import { FaPlus } from 'react-icons/fa';

type RedirectProps = {
  children?: React.ReactNode;
  Icon?: IconType;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  highlight?: boolean;
  iconSize?: number;
  /* for some reason 'typeof Anchor' not working, so using 'LinkProps' */
} & LinkProps;

const variants = cva(
  'flex w-fit justify-between rounded-2xl px-4 py-3 items-center',
  {
    variants: {
      variant: {
        primary:
          'gap-3 border border-secondary bg-white  font-bold text-secondary hover:border-white hover:text-white hover:bg-secondary',
        secondary:
          'justify-between gap-3 border border-white bg-secondary  font-bold text-white hover:border-secondary hover:text-secondary hover:bg-white',
        tertiary:
          'gap-5 justify-between bg-secondary text-white hover:bg-secondary/95',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

const Redirect = ({
  href,
  className,
  Icon,
  children,
  variant = 'primary',
  highlight = false,
  iconSize,
}: RedirectProps) => {
  return (
    <Anchor href={href} className={cn(variants({ variant }), className)}>
      {Icon ? (
        <Icon size={iconSize ? iconSize : 27} />
      ) : (
        <FaPlus size={iconSize ? iconSize : 27} />
      )}
      <Text tag='p' variant={highlight ? 'button' : 'p'} className=''>
        {children}
      </Text>
    </Anchor>
  );
};

export default Redirect;
