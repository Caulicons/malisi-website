'use client';
import { Divide as Hamburger } from 'hamburger-react';
import { useRef, useState } from 'react';
import routes from '@data/routes';
import { useClickAway } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import Image from '@components/atoms/Image';
import NavLinks from '@/components/atoms/NavLinks';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(true);
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
          <>
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
              <nav>
                <ul className='flex flex-col gap-2'>
                  {routes.map((route, idx) => {
                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        exit={{
                          scale: 0,
                          opacity: 0,
                          width: 0,
                          transition: { delay: 0, damping: 0 },
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.9 + idx / 10,
                          duration: 0.7,
                          ease: 'easeInOut',
                        }}
                        key={route.name}
                        className=' '
                      >
                        <NavLinks
                          route={route}
                          setState={setIsOpen}
                          className='mt-2 p-[6px]'
                        />
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
