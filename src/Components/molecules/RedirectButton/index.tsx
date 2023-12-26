import Anchor from '@/components/atoms/Anchor';
import Text from '@/components/atoms/Text';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { LinkProps } from 'next/link';
import { IconType } from 'react-icons';
import { FaPlus } from 'react-icons/fa';

type RedirectProps = {
  children?: React.ReactNode;
  icon?: IconType;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  highlight?: boolean;
  iconSize?: number;
  ariaLabel?: string;
  /* for some reason 'typeof Anchor' not working, so using 'LinkProps' */
} & LinkProps;

const variants = cva(
  'flex w-fit justify-between rounded-2xl px-4 py-3 items-center',
  {
    variants: {
      variant: {
        primary:
          'gap-3 border border-primary bg-white  font-bold text-primary hover:border-white hover:text-white hover:bg-primary',
        secondary:
          'justify-between gap-3 border border-white bg-primary  font-bold text-white hover:border-primary hover:text-primary hover:bg-white',
        tertiary:
          'gap-5 justify-between bg-primary text-white hover:bg-primary/95',
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
  icon: Icon,
  children,
  variant = 'primary',
  highlight = false,
  iconSize,
  ariaLabel,
}: RedirectProps) => {
  return (
    <Anchor
      href={href}
      className={cn(variants({ variant }), className)}
      aria-label={ariaLabel}
    >
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
