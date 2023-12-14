'use client';
import { cn } from '@/utils';
import { useAnimation, motion, useInView, AnimationType } from 'framer-motion';
import { useEffect, useRef, MutableRefObject } from 'react';

type animationProps = {
  direction?: 'left-to-right' | 'right-to-left' | 'up-to-down' | 'down-to-up';
  reference?: MutableRefObject<null>;
  once?: boolean;
  customAnimation?: {
    start: AnimationType;
    end: AnimationType;
  };
} & React.HTMLAttributes<HTMLDivElement>;
export default function Animation({
  children,
  className,
  direction = 'left-to-right',
  reference,
  once = true,
  customAnimation,
  ...props
}: animationProps) {
  const ref = useRef(null);
  const animation = useAnimation();
  const inView = useInView(reference ? reference : ref, { once });

  useEffect(() => {
    if (customAnimation) {
      if (inView) {
        animation.start(customAnimation.start);
      } else {
        animation.start(customAnimation.end);
      }
      return;
    }

    const directions = {
      'left-to-right': {
        x: '-87vw',
      },
      'right-to-left': {
        x: '87vw',
      },
      'up-to-down': {
        y: '-87vh',
      },
      'down-to-up': {
        y: '87vh',
      },
    };

    if (inView) {
      animation.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          delay: 0.2,
          ease: 'easeInOut',
        },
      });
    } else {
      animation.start({
        ...directions[direction],
        opacity: 0,
      });
    }
  }, [inView, animation, direction, customAnimation]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className={cn('overflow-hidden', className)}
    >
      {children}
    </motion.div>
  );
}
