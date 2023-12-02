'use client';
import { Divide as Hamburger } from 'hamburger-react';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import Image from '@components/atoms/Image';
import Nav from '@/components/molecules/Nav';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <div>
      {!isOpen && (
        <div className='rounded-xl bg-primary text-white hover:bg-primary/95'>
          <Hamburger toggled={isOpen} size={21} toggle={setIsOpen} />
        </div>
      )}
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
                transition: { delay: 0.5, duration: 0.6 },
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
              exit={{ opacity: 0, width: 0, transition: { delay: 0.3 } }}
              className='fixed left-0 right-0 top-0 h-screen  bg-white p-6'
            >
              <div className='flex w-full justify-between pb-6'>
                <Image
                  src='/assets/images/logo/Logo.png'
                  alt='Malisi Engenharia de segurança do trabalho e meio ambiente logo'
                  width={120}
                  height={47}
                  className='mr-1'
                />
                <div className='rounded-xl bg-primary text-white hover:bg-primary/95'>
                  <Hamburger toggled={isOpen} size={21} toggle={setIsOpen} />
                </div>
              </div>
              <Nav />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
