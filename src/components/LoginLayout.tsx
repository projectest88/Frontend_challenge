import React from 'react';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-login min-h-screen'>
      <nav>
        <div className='flex justify-between mx-5 py-4'>
          <h1 className='text-4xl font-bold tracking-widest'>Logo</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;