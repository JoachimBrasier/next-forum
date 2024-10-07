import React from 'react';

import Breadcrumb from './_components/breadcrumb';
import Navbar from './_components/navbar';
import Sidebar from './_components/sidebar';

import './globals.css';

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Breadcrumb />
      <main className="w-full lg:ps-64">
        <div className="p-4">{children}</div>
      </main>
    </>
  );
}
