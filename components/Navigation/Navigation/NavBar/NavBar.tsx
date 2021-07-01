import { ReactNode } from 'react';

interface NavBarProps {
  children: ReactNode;
  className: string;
}

const NavBar = ({ children, className }: NavBarProps) => {
  return <div className={className}>{children}</div>;
};

export default NavBar;
