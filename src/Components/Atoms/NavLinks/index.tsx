'use client';
import cn from '@utils/cn';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

type NavLinksProps = {
  route: {
    name: string;
    href: string;
  };
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: 'mobile' | 'desktop';
} & React.HTMLAttributes<HTMLAnchorElement>;

const variants = cva(
  'group/underline flex flex-col text-xl font-semibold tracking-[3px] text-primary hover:text-secondary ',
  {
    variants: {
      variant: {
        mobile: 'hover:ml-2 ',
        desktop: 'p-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'mobile',
    },
  }
);

const NavLinks = ({
  route,
  setState,
  variant = 'mobile',
  className,
}: NavLinksProps) => {
  return (
    <Link
      onClick={() => (setState ? setState((prev) => !prev) : null)}
      className={cn(variants({ variant }), className)}
      href={route.href}
    >
      {route.name}
      <span className='h-[2px] w-0 bg-primary duration-700 group-hover/underline:w-4/5 md:group-hover/underline:w-4/5' />
    </Link>
  );
};

export default NavLinks;
