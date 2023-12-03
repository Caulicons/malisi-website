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
        'uppercase font-semibold md:font-bold text-xl text-white  md:text-4xl lg:text-[45px] tracking-[9px] ',
      ],
      h2: [
        'uppercase font-bold md:font-extrabold text-xl text-black md:text-3xl lg:text-[42px]	 tracking-[9px]',
      ],
      h3: [
        'uppercase leading-[120%] font-bold text-xl  md:text-[27px] text-secondary 	 tracking-[9px]',
      ],
      subTitle: [
        'uppercase font-bold text-secondary text-sm md:text-lg  tracking-[9px]',
      ],
      p: [''],
      pBold: [''],
      pHGL: [''],
      citation: ['leading-[140%] uppercase font-normal tracking-[3px]'],
      cardTitle: [' text-left text-lg md:text-xl font-bold uppercase '],
      cardBody: [' w-full p-4 text-center font-medium'],
      ancor: [''],
      footerHeader: ['text-2xl font-bold text-black uppercase tracking-[px]'],
      button: ['text-left text-lg md:text-xl font-bold uppercase'],
      span: [''],
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
