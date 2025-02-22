"use client"; // Add this line
import React, { useState, useEffect, useRef }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faClock, faClose, faRightFromBracket, faWallet} from '@fortawesome/free-solid-svg-icons';
// import { faClose} from '@fortawesome/free-solid-svg-icons';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import useLanguage from '../useI18n';
interface ConnectProps {
    isOpen: boolean;
    onClose: () => void;
    setDark: (value: boolean) => void; 
    openConnect: () => void;
    handeConnected: (value: number) => void;
}

const SideBar: React.FC<ConnectProps> = ({ isOpen, onClose, setDark, openConnect, handeConnected }) => {
    const { i18n, t } = useLanguage(); // Call useTranslation once
    const isConnected = true;
    // const [isConnectedStatus, setIsConnectedStatus] = useState(0);
    const [isConnectedDrop, setIsConnectedDrop] = useState(false);
    // const handeConnected =(value :number) => {
    //     setIsConnectedStatus(value);
    // }
    const handleClose = (value : number) => {
        setIsConnectedDrop(false);
        handeConnected(value);
    }
    const toggleConnect = () => {
        setIsConnectedDrop(prev => !prev);
    };
    const dropdownConnectedRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const changeLanguage = (lng:string) => {
        toggleLanguage()
        i18n.changeLanguage(lng);
      };
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const toggleLanguage = () => {
        setIsOpenLanguage(prev => !prev);
    };
    const dropdownLanguageRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (event: MouseEvent) => {

        if (dropdownLanguageRef.current && !dropdownLanguageRef.current.contains(event.target as Node)) {
            setIsOpenLanguage(false);
        }
        if (dropdownConnectedRef.current && !dropdownConnectedRef.current.contains(event.target as Node)) {
            setIsConnectedDrop(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const pathname = usePathname()
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
        setDark(!isDarkMode);
        if (!isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
    <>
    {isOpen &&
    (<div className={`absolute w-full h-[100vh] inset-0 bg-black bg-opacity-50 z-50`}>
      <div ref={connectRef} className={`absolute h-full w-[300px] bg-white dark:bg-black flex flex-col top-0 right-0 py-[50px] px-[18px] space-y-3`}>
        <div className="flex justify-between">
            <div ref={dropdownLanguageRef} className='relative'>
                <button onClick={toggleLanguage}>
                    <Image 
                        src={`${isDarkMode ? "/assets/image/world.png" : "/assets/image/light-world.png"}`} 
                        alt="world Icon" 
                        width={30} // Set the desired width
                        height={30} // Set the desired height
                    />
                </button>
                {isOpenLanguage && (
                    <div className="absolute left-0  mt-1  bg-white dark:bg-gray-dark rounded-xl shadow-lg z-10 w-[172px] py-[10px] border-[0.6px] border-gray-light dark:border-gray-default">
                        <div className='flex flex-col space-y-2 py-2'>
                            <a onClick={() => changeLanguage('en')} href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                <ReactCountryFlag countryCode="GB" svg style={{ width: '15px', height: '15px' }} title="UK" />
                                <p className='text-[14px] font-normal leading-[16px]'>English</p>
                            </a>
                            <a onClick={() => changeLanguage('ch')}  href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                <ReactCountryFlag countryCode="CN" svg style={{ width: '15px', height: '15px' }} title="Chinese" />
                                <p className='text-[14px] font-normal leading-[16px]'>Chinese</p>                                
                            </a>
                            <a onClick={() => changeLanguage('hd')} href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                <ReactCountryFlag countryCode="IN" svg style={{ width: '15px', height: '15px' }} title="Hindi" />
                                <p className='text-[14px] font-normal leading-[16px]'>Hindi</p>                                
                            </a>
                            <a onClick={() => changeLanguage('sh')} href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                <ReactCountryFlag countryCode="ES" svg style={{ width: '15px', height: '15px' }} title="Spanish" />
                                <p className='text-[14px] font-normal leading-[16px]'>Spanish</p>                                
                            </a>
                            <a onClick={() => changeLanguage('ab')} href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                <ReactCountryFlag countryCode="SA" svg style={{ width: '15px', height: '15px' }} title="Arabic" />
                                <p className='text-[14px] font-normal leading-[16px]'>Arabic</p>                                
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <button onClick={onClose}>
                <FontAwesomeIcon 
                    icon={faClose} 
                    className="text-[18px] font-bold text-black dark:text-white" 
                />
            </button>
        </div>
        <div className="flex flex-col gap-1">
            <Link onClick={onClose} href="/" className={`flex p-2 px-5  rounded-lg dark:text-white ${pathname === "/" ? "bg-light-light dark:bg-gray-default": ""}`}>{t('home')}</Link>
            <Link onClick={onClose} href="/trade" className={`flex p-2 px-5 rounded-lg dark:text-white  ${pathname === "/trade" ? "bg-light-light dark:bg-gray-default": ""}`}>{t('trade')}</Link>
            <Link onClick={onClose} href="/about"className={`flex p-2 px-5 rounded-lg dark:text-white  ${pathname === "/about" ? "bg-light-light dark:bg-gray-default": ""}`}>{t('about')}</Link>
        </div>
        <div className="h-full"></div>
        <div className="flex flex-col items-center gap-4 ">
            {/* <button onClick={openConnect} className=" w-full text-center justify-center border border-green-default bg-green-default text-white dark:text-black font-normal text-[14px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[124px] hover:bg-opacity-0 hover:text-black dark:hover:text-white transition duration-200">
                Connect
            </button> */}
            {
                isConnected ? (
                    <div ref={dropdownConnectedRef} className='relative items-center w-full'>
                        <button 
                            className='flex w-full justify-between  items-center w-full space-x-1 bg-[#676F82] dark:bg-[#676F82] py-[7px] px-[10px] rounded-[10px] transition duration-200 ease-in-out hover:bg-light-light dark:hover:bg-gray-dark' 
                            onClick={toggleConnect}
                        >
                            <div className="flex gap-2">
                            <FontAwesomeIcon 
                                icon={faWallet} 
                                className="text-[15px] font-bold text-white dark:text-white" 
                            />
                            <p className="text-[14px] font-normal leading-[16.41px] text-white dark:text-white pr-0 md:pr-3">
                                Ox...4dA3
                            </p>
                            </div>
                            <FontAwesomeIcon 
                                icon={faAngleDown} 
                                className="text-[12px] font-bold text-white dark:text-white" 
                            />
                        </button>
                        {isConnectedDrop && (
                            <div className="absolute right-0  bottom-0 transfrom -translate-y-10 mt-1  bg-white dark:bg-gray-dark rounded-xl shadow-lg z-10 w-[258px] py-[10px] border-[0.6px] border-gray-light dark:border-gray-default">
                                <div className='flex flex-col space-y-2 py-2'>
                                    <a onClick={() => {handleClose(1) }} href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <FontAwesomeIcon icon={faWallet} className="text-[15px] font-bold text-black dark:text-white" />
                                        <p className='text-[14px] font-normal leading-[16px]'>Wallet</p>
                                    </a>
                                    <a onClick={() => handleClose(2)} href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <FontAwesomeIcon icon={faClock} className="text-[15px] font-bold text-black dark:text-white" />
                                        <p className='text-[14px] font-normal leading-[16px]'>Recent Transactions</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <FontAwesomeIcon icon={faRightFromBracket} className="text-[15px] font-bold text-black dark:text-white" />
                                        <p className='text-[14px] font-normal leading-[16px]'>Disconnect</p>                                
                                    </a>                                            
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button 
                        onClick={openConnect} 
                        className="flex w-full text-center justify-center border border-green-default bg-green-default text-black font-normal text-[14px] leading-[24px] py-[5px] px-[18px] lg:px-[25px] rounded-[10px] hover:bg-opacity-0 hover:text-black dark:hover:text-white transition duration-200"
                    >
                        {t('connect')}
                    </button>
                )
            }
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
            </div>
        </div>
      </div>
    </div>)}
    </>
  );
};

export default SideBar;