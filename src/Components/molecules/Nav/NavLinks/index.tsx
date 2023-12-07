'use client';
import Anchor from '@/components/atoms/Anchor';
import asideMenuOpenAtom from '@/provider/atoms/asideMenuOpen';
import cn from '@utils/cn';
import { useSetAtom } from 'jotai';

type NavLinksProps = {
  route: {
    name: string;
    href: string;
    active: boolean;
  };
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
} & React.HTMLAttributes<HTMLAnchorElement>;

const NavLinks = ({ route, setState, className }: NavLinksProps) => {
  const menuIsOpen = useSetAtom(asideMenuOpenAtom);
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    menuIsOpen(false);
  };

  return (
    <Anchor
      onMouseEnter={() => {}}
      onClick={(e) => onClick(e)}
      className={cn(
        'group/underline flex flex-col  text-xl font-semibold tracking-[3px] text-primary hover:ml-2 hover:text-secondary  tablet:p-4 tablet:text-lg tablet:hover:ml-0',
        className
      )}
      href={route.href}
    >
      {route.name}
      <span
        className={cn(
          'h-[2px] w-0 bg-primary duration-700 group-hover/underline:w-10/12'
        )}
      />
    </Anchor>
  );
};

export default NavLinks;
