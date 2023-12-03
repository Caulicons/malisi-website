import { cva } from 'class-variance-authority';
import cn from '../../../../utils/cn';

type childrenProps = {} & React.HTMLAttributes<HTMLDivElement>;
type SectionProps = {
  childrenProps?: childrenProps;
} & React.HTMLAttributes<HTMLDivElement>;
/* FIXME: case not use this belong the project deleter the code block above  */
/* const variants = cva('h-screen', {
  variants: {
    size: {
      medium: '',
      large: '',
    },
  },
  defaultVariants: {
    size: 'large',
  },
}); */

export default function Section({
  className,
  children,
  childrenProps,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'flex h-screen w-full items-center justify-center p-4 md:p-10',
        className
      )}
      {...props}
    >
      <div
        className={cn('max-w-7xl px-8', childrenProps?.className)}
        {...childrenProps}
      >
        {children}
      </div>
    </section>
  );
}
