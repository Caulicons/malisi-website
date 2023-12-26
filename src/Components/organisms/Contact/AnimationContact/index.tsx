'use client';
import Container from '@/components/atoms/Container';
import Redirect from '@/components/molecules/RedirectButton';
import {
  useAnimation,
  useInView,
  AnimatePresence,
  motion,
} from 'framer-motion';
import { useRef, useEffect } from 'react';
import { contactData } from '../data';

const AnimationContact = () => {
  const ref = useRef(null);
  const animation = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        scale: 1,
        opacity: 1,
      });
    } else {
      animation.start({
        y: '100vh',
      });
    }
  }, [inView, animation]);
  return (
    <Container containerRef={ref} className='flex w-full flex-col gap-4'>
      <AnimatePresence>
        {contactData.links.map((link, idx) => (
          <motion.div
            key={link.name}
            initial={{ scale: 0, opacity: 0 }}
            animate={animation}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.5 + idx / 10,
              duration: 10,
              ease: 'easeInOut',
            }}
          >
            <Redirect
              variant={'secondary'}
              href={link.url}
              icon={link.Icon}
              iconSize={30}
              className='mx-auto w-full min-w-[240px] justify-between'
              highlight={true}
              ariaLabel={`Entre em contato com a gente via ${link.name}.`}
            >
              {link.name}
            </Redirect>
          </motion.div>
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default AnimationContact;
