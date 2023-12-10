import cn from '@utils/cn';

type ContainerProps = {
  size?: 'default' | 'small';
  direction?: 'column' | 'row';
  gap?: 'lg' | 'xl' | 'default';
} & React.HTMLAttributes<HTMLDivElement>;

const Container = ({
  className,
  children,
  size = 'default',
  direction = 'column',
  gap = 'default',
  ...props
}: ContainerProps) => {
  const variantSize = {
    default: 'max-w-sectionContainer',
    small: 'max-w-sectionContainerSmall',
  };
  const variantDirection = {
    column: 'flex-col',
    row: 'tablet:flex-row',
  };
  const variantGap = {
    default: 'gap-2 tablet:gap-4',
    xl: 'gap-4 tablet:gap-8',
    lg: 'gap-9 tablet:gap-12',
  };
  return (
    <div
      className={cn(
        'flex w-full flex-col',
        variantSize[size],
        variantDirection[direction],
        variantGap[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
