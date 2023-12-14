'use client';
import { useAtom } from 'jotai';
import { Divide as Hamburger } from 'hamburger-react';
import asideMenuOpenAtom from '@/provider/atoms/asideMenuOpen';
import AsideMenu from '../AsideMenu';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useAtom(asideMenuOpenAtom);

  return (
    <div>
      <div className='rounded-xl bg-primary text-white hover:bg-primary/95'>
        <Hamburger toggled={isOpen} size={21} toggle={setIsOpen} />
      </div>
      <AsideMenu />
    </div>
  );
}
