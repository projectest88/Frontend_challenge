// src/app/register/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import LoginLayout from '@/components/LoginLayout';
import Register from '@/components/Register';

export default function RegisterPage() {
  const router = useRouter();
  const handleRegisterSuccess = () => {
    router.push('/login'); 
  };

  return (
    <LoginLayout>
      <Register onRegisterSuccess={handleRegisterSuccess} />
    </LoginLayout>
  );
}