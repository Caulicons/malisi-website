'use client';
import { useAtom } from 'jotai';
import { Divide as Hamburger } from 'hamburger-react';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import Image from '@/components/atoms/Image';
import Nav from '@/components/molecules/Nav';
import asideMenuOpenAtom from '@/provider/atoms/asideMenuOpen';
import Anchor from '@/components/atoms/Anchor';
const AsideMenu = () => {
  const [isOpen, setIsOpen] = useAtom(asideMenuOpenAtom);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed left-0 right-0 top-0 z-10 h-screen'>
          {/* Apply the gray overlay */}
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: 0.8,
              width: '100%',
              transition: { delay: 0.3, duration: 0.4 },
            }}
            exit={{
              opacity: 0.6,
              width: 0,
              transition: { duration: 0.6, delay: 0.1 },
            }}
            className='fixed left-0 right-0 top-0 h-screen  bg-gray-600'
          />
          {/* Aside menu */}
          <motion.aside
            ref={ref}
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: 1,
              width: '78%',
              transition: {
                delay: 0.6,
                duration: 0.4,
              },
            }}
            exit={{
              opacity: 0,
              width: 0,
              transition: { duration: 0.2, delay: 0.1 },
            }}
            className='fixed left-0 right-0 top-0 h-screen  bg-white p-6'
          >
            <div className='flex w-full justify-between pb-6'>
              <Anchor href='/'>
                <Image
                  src='/assets/images/logos/Logo.webp'
                  alt='Malisi Engenharia de segurança do trabalho e meio ambiente logo'
                  width={120}
                  height={47}
                  className='mr-1'
                />
              </Anchor>
              <div className='rounded-xl bg-primary text-white hover:bg-primary/95'>
                <Hamburger
                  toggled={isOpen}
                  size={21}
                  toggle={setIsOpen}
                  label='menu'
                />
              </div>
            </div>
            <Nav />
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AsideMenu;
