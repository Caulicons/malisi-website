import { cn } from '../../../utils';

type SectionProps = {
  sectionRef?: React.Ref<HTMLElement>;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Section({
  className,
  children,
  sectionRef,
  ...props
}: SectionProps) {
  return (
    <section
      ref={sectionRef}
      className={cn(
        'flex h-fit w-full items-center justify-center p-5 py-10 tablet:p-14',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
