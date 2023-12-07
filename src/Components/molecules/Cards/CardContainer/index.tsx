import cn from '@utils/cn';

type CardContainerProps = {
  gap?: 'medium' | 'large' | 'extraLarge' | 'none';
  grid: string;
} & React.HTMLAttributes<HTMLDivElement>;

const CardContainer = ({
  grid,
  gap = 'medium',
  className,
  children,
  ...props
}: CardContainerProps) => {
  const gapVariants = {
    medium: 'gap-6',
    large: 'gap-8',
    extraLarge: 'gap-12',
    none: '',
  };

  return (
    <div className={cn('grid ', gapVariants[gap], grid, className)} {...props}>
      {children}
    </div>
  );
};

export default CardContainer;