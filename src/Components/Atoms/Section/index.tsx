import { cva } from 'class-variance-authority';
import cn from '../../../../utils/cn';

type childrenProps = {} & React.HTMLAttributes<HTMLDivElement>;
type SectionProps = {
  size?: 'medium' | 'large';
  childrenProps: childrenProps;
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
        'flex h-screen w-full items-center justify-center',
        className
      )}
      {...props}
    >
      <div className={cn('', childrenProps.className)} {...childrenProps}>
        {children}
      </div>
    </section>
  );
}
