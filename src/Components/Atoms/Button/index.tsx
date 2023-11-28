import { cva } from 'class-variance-authority';
import cn from '../../../../utils/cn';
import { IconType } from 'react-icons';

type ButtonProps = {
  icon?: IconType | string;
  variant?: 'primary' | 'secondary';
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const variants = cva('', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export default function Button({
  className,
  icon,
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(variants({ variant }), className)} {...props}>
      {icon ? icon + ' ' + children : children}
    </button>
  );
}
