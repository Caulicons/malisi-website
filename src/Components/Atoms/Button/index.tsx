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

const variants = cva(
  ' rounded-2xl  px-4 py-3 flex items-center gap-5 justify-between w-fit',
  {
    variants: {
      variant: {
        primary: ' bg-secondary text-white  hover:bg-secondary/95',
        secondary: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export default function Button({
  className,
  icon,
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(variants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
