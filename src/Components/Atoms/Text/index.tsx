import React, { forwardRef } from 'react';
import cn from '@utils/cn';
import { cva } from 'class-variance-authority';

type Variant = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
};

type TypographyProps = {
  children: React.ReactNode;
  styles?:
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
    | 'button';
  icon?: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement> &
  Variant;

const variants = cva('', {
  variants: {
    styles: {
      h1: [''],
      h2: [''],
      h3: [''],
      subTitle: [''],
      p: [''],
      pBold: [''],
      pHGL: [''],
      citation: [''],
      cardTitle: [''],
      cardBody: [''],
      ancor: [''],
      button: [''],
    },
  },
  defaultVariants: {
    styles: 'p',
  },
});

const Text = forwardRef<HTMLParagraphElement, TypographyProps>(function T(
  { children, variant = 'p', styles = 'p', icon, className, ...props },
  ref
) {
  const Tag = variant;
  return (
    <Tag ref={ref} className={cn(variants({ styles }), className)} {...props}>
      {icon ? icon + ' ' + children : children}
    </Tag>
  );
});

export default Text;
