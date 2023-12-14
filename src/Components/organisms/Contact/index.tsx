'use client';
import { contactData } from './data';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import Redirect from '@/components/molecules/RedirectButton';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
const Contact = () => {
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
    <Section className='h-screen'>
      <Container containerRef={ref} direction='row'>
        <Presentation
          subtitle={contactData.subtitle}
          title={contactData.title}
          position='start'
        />
        <Container className='flex w-full flex-col gap-4'>
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
                  delay: 0.7 + idx / 10,
                  duration: 10,
                  ease: 'easeInOut',
                }}
                className=' '
              >
                <Redirect
                  variant={'secondary'}
                  href={link.url}
                  Icon={link.Icon}
                  iconSize={30}
                  className='mx-auto w-full min-w-[240px] justify-between'
                  highlight={true}
                >
                  {link.name}
                </Redirect>
              </motion.div>
            ))}
          </AnimatePresence>
        </Container>
      </Container>
    </Section>
  );
};

export default Contact;
