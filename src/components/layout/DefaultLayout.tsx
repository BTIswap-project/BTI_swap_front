// "use client";

import React from 'react';
import Header from "./header";
import Footer from "./footer";

export default function DefaultLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

  return (
    <div className='h-fit relative'>
       <Header />
       {children}
       <Footer />
    </div>
  );
}
