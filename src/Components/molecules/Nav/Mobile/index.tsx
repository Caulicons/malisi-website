'use client';
import { AnimatePresence, motion } from 'framer-motion';
import NavLinks from '../NavLinks';
import { useAtomValue } from 'jotai';
import { routesAtom } from '@/provider/atoms/routes';

const NavMobile = () => {
  const routes = useAtomValue(routesAtom);
  return (
    <ul className='flex flex-col gap-2 tablet:invisible tablet:hidden'>
      <AnimatePresence>
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
                delay: 1.8 + idx / 10,
                duration: 12,
                ease: 'easeInOut',
              }}
              key={route.name}
              className=' '
            >
              <NavLinks route={route} className='mt-2 p-[6px]' />
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
};

export default NavMobile;
