import { cn } from '@/utils';

type MainProps = {} & React.HTMLProps<HTMLDivElement>;

const Main = ({ className, children, ...props }: MainProps) => {
  return (
    <main className={cn('h-full bg-white', className)} {...props}>
      {children}
    </main>
  );
};

export default Main;
