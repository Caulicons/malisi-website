import React, { forwardRef } from 'react';
import { cn } from '@/utils';
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
    | 'subtitle'
    | 'p'
    | 'pBold'
    | 'pHGL'
    | 'citation'
    | 'cardTitle'
    | 'cardBody'
    | 'anchor'
    | 'footerHeader'
    | 'button';
  icon?: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement> &
  Tag;

const variants = cva('', {
  variants: {
    variant: {
      h1: [
        'uppercase text-2xl font-semibold tablet:extrabold tablet:text-3xl desktop:text-[35px] tracking-[5px] desktop:leading-heading',
      ],
      h2: [
        ' desktop:leading-heading uppercase font-bold text-[21px] tablet:font-extrabold tablet:text-3xl desktop:text-[42px]	 tracking-[4px]',
      ],
      h3: [
        'leading-heading uppercase font-bold text-xl  tablet:text-[27px]  tracking-[4px] ',
      ],
      subtitle: ['uppercase font-bold text-sm tablet:text-lg tracking-[9px]'],
      p: ['tracking-wide'],
      pBold: [''],
      pHGL: [''],
      citation: ['uppercase font-normal tracking-[1.5px]'],
      cardTitle: [
        ' text-left text-lg tablet:text-xl font-bold uppercase tracking-[2px]',
      ],
      cardBody: [
        ' w-full p-2 tablet:p-4 text-center font-medium tracking-wide ',
      ],
      anchor: [''],
      footerHeader: ['text-2xl font-bold text-black uppercase tracking-[2px]'],
      button: ['text-left text-lg tablet:text-xl font-bold uppercase'],
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
