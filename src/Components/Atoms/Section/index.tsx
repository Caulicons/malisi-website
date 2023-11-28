import { cva } from 'class-variance-authority';
import cn from '../../../../utils/cn';

type SectionProps = {
  size?: 'medium' | 'large';
  childrenClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const variants = cva('h-screen', {
  variants: {
    size: {
      medium: '',
      large: '',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

export default function Section({
  className,
  children,
  childrenClassName,
  size = 'large',
}: SectionProps) {
  return (
    <section className={className}>
      <div className={cn(variants({ size }), childrenClassName)}>
        {children}
      </div>
    </section>
  );
}
