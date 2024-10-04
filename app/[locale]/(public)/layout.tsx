import React from 'react';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
