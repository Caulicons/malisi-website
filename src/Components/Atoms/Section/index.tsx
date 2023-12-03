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
        'tablet:p-10 flex h-full min-h-screen w-full items-center justify-center p-5',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
