import { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface AuthGuardProps {
  children: ReactNode | null;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();

  if (!true) {
    router.push('/');
    return;
  }

  return <>{children}</>;
};

export default AuthGuard;
