"use client"; // Add this line
import React, { useEffect, useState } from 'react';
import Header from "./header";
import Footer from "./footer";

export default function DefaultLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const updateTheme = () => {
      const darkModeActive = document.documentElement.classList.contains('dark');
      setIsDarkMode(darkModeActive);
    };

    // Initial theme check
    updateTheme();

    // Listen for changes to the classList
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);
  return (
    <div className='h-fit relative bg-white dark:bg-black py-[25px] md:py-[50px]'
    style={{
      backgroundImage: !isDarkMode
        ? `url('./assets/image/light-bg.png')` // Dark mode background
        : `url('./assets/image/background.png')`, // Light mode background
      backgroundSize: 'cover',
    }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
