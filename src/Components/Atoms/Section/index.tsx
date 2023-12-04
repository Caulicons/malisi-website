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
        'flex h-full min-h-screen w-full items-center justify-center p-5 tablet:p-10',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
