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
} & React.HTMLAttributes<HTMLAnchorElement>;

const NavLinks = ({ route, setState, className }: NavLinksProps) => {
  return (
    <Link
      onClick={() => (setState ? setState((prev) => !prev) : null)}
      className={cn(
        'group/underline flex flex-col text-xl font-semibold tracking-[3px] text-primary hover:ml-2 hover:text-secondary  md:p-4 md:text-lg md:hover:ml-0',
        className
      )}
      href={route.href}
    >
      {route.name}
      <span className='h-[2px] w-0 bg-primary duration-700 group-hover/underline:w-4/5' />
    </Link>
  );
};

export default NavLinks;
