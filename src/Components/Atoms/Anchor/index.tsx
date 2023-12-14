import { cn } from '@/utils';
import { Url } from 'next/dist/shared/lib/router/router';
import Link, { LinkProps } from 'next/link';

type AnchorProps = {
  children: React.ReactNode;
  className?: string;
  href: Url;
} & LinkProps;
const Anchor = ({ children, className, ...props }: AnchorProps) => {
  return (
    <Link className={cn('cursor-pointer', className)} {...props}>
      {children}
    </Link>
  );
};

export default Anchor;
