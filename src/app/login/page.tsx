// src/app/login/page.tsx
'use client'; // Pastikan menggunakan 'use client' karena kita menggunakan hooks

import Login from '@/components/Login';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const handleLoginSuccess = () => {
    router.push('/profile');
  };

  return (
    <div>
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}