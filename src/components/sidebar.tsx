"use client"; // Add this line
import React, { useState, useEffect, useRef }  from "react";
import Link from 'next/link';
import Image from "next/image";
interface ConnectProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideBar: React.FC<ConnectProps> = ({ isOpen, onClose }) => {

    const connectRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (connectRef.current && !connectRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

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
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        }
    };
    return (<>
    {isOpen &&
    (<div className={`absolute w-full h-[100vh] inset-0 bg-black bg-opacity-50 z-50`}>
      <div ref={connectRef} className={`absolute h-full w-[300px] bg-white dark:bg-black flex flex-col top-0 right-0 py-[50px] space-y-3`}>
        <div className="flex flex-col">
            <Link href="/" className="flex p-2 px-5 text-black dark:text-white border-t border-gray-default bg-light-light dark:bg-gray-default">Home</Link>
            <Link href="/trade" className="flex p-2 px-5 text-black dark:text-white border-t border-gray-default">Trade</Link>
            <Link href="/about" className="flex p-2 px-5 text-black dark:text-white border-t border-b border-gray-default">About</Link>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <button className="text-center justify-center border border-green-default bg-green-default text-black font-normal text-[14px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[124px] hover:bg-opacity-0 hover:text-black dark:hover:text-white transition duration-200">
                Connect
            </button>
            <div className="flex w-full justify-center space-x-5">
                <button className={`flex rounded-full w-[65px] h-[31px]  bg-light-light dark:bg-gray-light items-center p-1  ${isDarkMode ? 'justify-end' : 'justify-start'}`} onClick={toggleTheme}>
                    <div className={`w-[27px] h-[27px] bg-white rounded-full items-center justify-center ${isDarkMode ? 'hidden' : 'flex'}`}>
                        <Image 
                            src="/assets/image/sun.png" 
                            alt="Sun Icon" 
                            width={19.25} // Set the desired width
                            height={19.25} // Set the desired height
                        />   
                    </div> 
                    <div className={`w-[27px] h-[27px] bg-green-default rounded-full items-center justify-center ${isDarkMode ? 'flex' : 'hidden'}`}>
                        <Image 
                            src="/assets/image/moon.png" 
                            alt="Sun Icon" 
                            width={17} // Set the desired width
                            height={19}                               
                        />
                    </div>
                </button>
                <Image 
                    src={`${isDarkMode ? "/assets/image/world.png" : "/assets/image/light-world.png"}`} 
                    alt="world Icon" 
                    width={30} // Set the desired width
                    height={30} // Set the desired height
                />
            </div>
        </div>
        
      </div>
    </div>)}
    </>
  );
};

export default SideBar;