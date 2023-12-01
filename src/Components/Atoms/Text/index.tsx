import React, { forwardRef } from 'react';
import cn from '@utils/cn';
import { cva } from 'class-variance-authority';

type Tag = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
};

type TypographyProps = {
  children: React.ReactNode;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'subTitle'
    | 'p'
    | 'pBold'
    | 'pHGL'
    | 'citation'
    | 'cardTitle'
    | 'cardBody'
    | 'ancor'
    | 'footerHeader'
    | 'button';
  icon?: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement> &
  Tag;

const variants = cva('', {
  variants: {
    variant: {
      h1: [
        'uppercase font-semibold md:font-bold text-2xl text-white  md:text-4xl lg:text-5xl tracking-[9px]',
      ],
      h2: [''],
      h3: [''],
      subTitle: [
        'uppercase font-bold text-secondary text-sm md:text-lg lg:text-2xl tracking-[9px]',
      ],
      p: [''],
      pBold: [''],
      pHGL: [''],
      citation: [''],
      cardTitle: [''],
      cardBody: [''],
      ancor: [''],
      footerHeader: ['text-2xl font-bold text-black uppercase tracking-[px]'],
      button: [''],
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

const Text = forwardRef<HTMLParagraphElement, TypographyProps>(function T(
  { children, tag = 'p', variant = 'p', icon, className, ...props },
  ref
) {
  const Tag = tag;
  return (
    <Tag ref={ref} className={cn(variants({ variant }), className)} {...props}>
      {icon ? icon + ' ' + children : children}
    </Tag>
  );
});

export default Text;
