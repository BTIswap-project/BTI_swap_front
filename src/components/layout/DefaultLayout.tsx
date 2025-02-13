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
    <div className='pb-12'>
       <Header />
       {children}
       <Footer />
    </div>
  );
}
