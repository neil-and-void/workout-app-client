import { ReactNode } from 'react';

interface NavItemProps {
  children: ReactNode;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const NavItem = ({ children, className, onClick }: NavItemProps) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default NavItem;
