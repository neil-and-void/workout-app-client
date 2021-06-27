import { ReactNode } from 'react';

interface NavContentProps {
  children: ReactNode
};

const NavContent = ({ children }: NavContentProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default NavContent
