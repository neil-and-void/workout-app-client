import { ReactNode } from 'react';

interface NavBarProps {
  children: ReactNode
};

const NavBar = ({ children }: NavBarProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default NavBar
