import { ReactNode } from 'react';

interface NavContentProps {
  children?: ReactNode;
  className?: string;
}

const NavContent = ({ children, className }: NavContentProps) => {
  return <div className={className}>{children}</div>;
};

export default NavContent;
