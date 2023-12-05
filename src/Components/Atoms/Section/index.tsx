import cn from '../../../../utils/cn';

type SectionProps = {} & React.HTMLAttributes<HTMLDivElement>;

export default function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'flex  h-fit w-full items-center justify-center p-5 py-10 tablet:p-14',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
