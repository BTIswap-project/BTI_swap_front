"use client"; // Add this line
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import Connect from '../connect';
import SideBar from '../sidebar';

export interface RouterProps {
    route: string;
}
const Header: React.FC = () => {
    const router = useRouter();
    const handleHome = () => {
        router.push("/");
    }
    const [isOpen, setIsOpen] = useState(false);
    const [isSideBar, setSideBar] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleSideBar = () => {
        setSideBar(prev => !prev);
    };
    const closeSideBr = () => {
        setSideBar(false);
    }
    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [isConnectOpen, setisConnectOpen] = useState<boolean>(false);

    const openConnect = () => setisConnectOpen(true);
    const closeConnect = () => setisConnectOpen(false);


    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
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
    return (
        <>
            <div className='container mx-auto  flex justify-between items-center p-3 px-[25px]'>
                <div className='flex space-x-6'>
                    <button onClick={handleHome}>
                        <Image 
                            src={`${isDarkMode ? "/assets/image/logo.png" : "/assets/image/light-logo.png"}`} 
                            alt="Logo Icon" 
                            width={142} // Set the desired width
                            height={40} // Set the desired height
                        />
                    </button>
                    <div className="flex items-center justify-between" >
                        <div className="hidden sm:block ml-3">
                            <div className="flex md:space-x-6">
                                <Link href="/" className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">
                                    Home
                                </Link>
                                <Link href="/trade" className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">
                                    Trade
                                </Link>
                                <Link href="/about" className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">
                                    About
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-3 md:space-x-6 items-center '>
                    <div className='hidden sm:flex items-center space-x-1 '>
                        <Image 
                            src="/assets/image/bba.png" 
                            alt="Logo Icon" 
                            width={20} // Set the desired width
                            height={20} // Set the desired height
                        />
                        <p className="text-[14px] font-bold leading-[16.41px] text-black dark:text-white">
                            $2.345
                        </p>
                    </div>
                    <div className="relative"  ref={dropdownRef}>
                        <button 
                            className='flex items-center space-x-1 bg-light-light dark:bg-gray-default py-[7px] px-[10px] rounded-[10px] transition duration-200 ease-in-out hover:bg-light-light dark:hover:bg-gray-dark' 
                            onClick={toggleDropdown}
                        >
                            <Image 
                                src="/assets/image/bba.png" 
                                alt="Logo Icon" 
                                width={20} 
                                height={20} 
                            />
                            <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white pr-3">
                                BBAChain
                            </p>
                            <FontAwesomeIcon 
                                icon={faAngleDown} 
                                className="text-[12px] font-bold text-black dark:text-white" 
                            />
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 mt-1  bg-white dark:bg-gray-dark rounded-md shadow-lg z-10 w-[300px] py-2">
                                <div className='flex border-b-[0.4px] border-gray-light py-[6px] px-4'>
                                    <p className='text-[16px] font-normal leading-[18.41px] text-black dark:text-white'>
                                        Select a chain
                                    </p>
                                </div>
                                <div className='flex flex-col space-y-2 py-2'>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/bba.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>BBA Chain</p>
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark: hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/eth.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Ethereum</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark: hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/bnb.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>BNB Chain</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark: hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/sol.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Solana</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark: hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/pol.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Polygon</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark: hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/arb.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Arbitrum</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark: hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/ava.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Avalance</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark: hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/car.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Cardano</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark: hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/opt.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Optimism</p>                                
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    <button onClick={openConnect} className="hidden sm:flex text-center justify-center border border-green-default bg-green-default text-black font-normal text-[14px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[124px] hover:bg-opacity-0 hover:text-black dark:hover:text-white transition duration-200">
                        Connect
                    </button>
                    <Image 
                        src={`${isDarkMode ? "/assets/image/world.png" : "/assets/image/light-world.png"}`} 
                        alt="world Icon" 
                        width={30} // Set the desired width
                        height={30} // Set the desired height
                        className='hidden sm:flex'
                        
                    />
                    <button className={`hidden sm:flex rounded-full w-[65px] h-[31px]  bg-light-light dark:bg-gray-light items-center p-1  ${isDarkMode ? 'justify-end' : 'justify-start'}`} onClick={toggleTheme}>
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
                    <button onClick={handleSideBar} className='items-center justify-center flex sm:hidden'>
                        <FontAwesomeIcon 
                            icon={faBars} 
                            className="text-[24px] font-bold text-black dark:text-white" 
                        />
                    </button>
                </div>
            </div>
            <Connect  isOpen={isConnectOpen} onClose={closeConnect}></Connect>
            <SideBar isOpen={isSideBar} onClose={closeSideBr}/>
        </>
    );
};
export default Header;