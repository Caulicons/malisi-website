import cn from '@utils/cn';
import Link, { LinkProps } from 'next/link';

type AnchorProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;
const Anchor = ({ children, className, ...props }: AnchorProps) => {
  return (
    <Link className={cn('cursor-pointer', className)} {...props}>
      {children}
    </Link>
  );
};

export default Anchor;
