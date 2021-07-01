import { ReactNode } from 'react';

interface NavSideBarProps {
  children: ReactNode;
  className: string;
}

const NavSideBar = ({ children, className }: NavSideBarProps) => {
  return <div>{children}</div>;
};

export default NavSideBar;
