"use client"; // Add this line
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image";
// import { useTranslation } from 'react-i18next';
import useLanguage from '../../useI18n';
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faClock, faRightFromBracket, faWallet } from '@fortawesome/free-solid-svg-icons';
import Connect from '../connect';
import SideBar from '../sidebar';
import ReactCountryFlag from "react-country-flag";
import ConnectedWallet from '../connectedWallet';
export interface RouterProps {
    route: string;
}
const Header: React.FC = () => {
    const { i18n, t } = useLanguage(); // Call useTranslation once
    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng);
        toggleLanguage()
      };
    const router = useRouter();
    const pathname = usePathname()
    const handleHome = () => {
        router.push("/");
    }
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const [isSideBar, setSideBar] = useState(false);
    // const [isConnected, setIsConnected] = useState(true);
    const [isConnectedDrop, setIsConnectedDrop] = useState(false);
    const [isConnectedStatus, setIsConnectedStatus] = useState(0);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const dropdownLanguageRef = useRef<HTMLDivElement | null>(null);
    const dropdownConnectedRef = useRef<HTMLDivElement | null>(null);
    const isConnected = true

    const handeConnected =(value :number) => {
        setIsConnectedStatus(value);
    }
    const handeCloseConnected =() => {
        setIsConnectedStatus(0);
    }
    const handleSideBar = () => {
        setSideBar(prev => !prev);
    };
    const closeSideBr = () => {
        setSideBar(false);
    }
    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };
    const toggleConnect = () => {
        setIsConnectedDrop(prev => !prev);
    };
    const toggleLanguage = () => {
        setIsOpenLanguage(prev => !prev);
    };

   
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
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
    const handleDarkMode = (status: boolean) => {
        setIsDarkMode(status)
    }
    useEffect(() => {
        if (isSideBar) {
            document.body.classList.add('overflow-hidden'); // Add class to prevent scroll
        } else {
            document.body.classList.remove('overflow-hidden'); // Remove class to allow scroll
        }

        // Cleanup function to remove the class when component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isSideBar]);
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
                <div className='flex space-x-2 lg:space-x-6'>
                    <button onClick={handleHome}>
                        <Image
                            src={`${isDarkMode ? "/assets/image/logo.png" : "/assets/image/light-logo.png"}`} 
                            alt="Logo Icon" 
                            width={140} // Set the desired width
                            height={40} // Set the desired height
                        />
                    </button>
                    {/* <button onClick={handleHome} className='flex gap-2 items-center'>
                        <Image
                            // src={`${isDarkMode ? "/assets/image/logo.png" : "/assets/image/light-logo.png"}`} 
                            src="/assets/image/logo.svg"
                            alt="Logo Icon" 
                            width={50} // Set the desired width
                            height={40} // Set the desired height
                        />
                        <p className='text-[20px] font-bold text-black dark:text-white'>{t('logo')}</p>
                    </button> */}
                    <div className="flex items-center justify-between" >
                        <div className="hidden md:block">
                            <div className="flex space-x-2 lg:space-x-6">
                                <Link href="/" className={`text-[14px] leading-[16.41px] ${pathname === "/" ? "text-green-default font-bold": "text-black dark:text-white font-normal "}`}>
                                    {t('home')}
                                </Link>
                                <Link href="/trade"  className={`text-[14px] leading-[16.41px] ${pathname === "/trade" ? "text-green-default font-bold": "text-black dark:text-white font-normal "}`}>
                                    {t('trade')}
                                </Link>
                                <Link href="/about" className={`text-[14px] leading-[16.41px] ${pathname === "/about" ? "text-green-default font-bold": "text-black dark:text-white font-normal"}`}>
                                    {t('about')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-3 lg:space-x-6 items-center '>
                    <div className='hidden lg:flex items-center space-x-1 '>
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
                    <div className="md:relative"  ref={dropdownRef}>
                        <button 
                            className='flex items-center w-full space-x-1 bg-light-light dark:bg-gray-default py-[7px] px-[10px] rounded-[10px] transition duration-200 ease-in-out hover:bg-light-light dark:hover:bg-gray-dark' 
                            onClick={toggleDropdown}
                        >
                            <Image 
                                src="/assets/image/bba.png" 
                                alt="Logo Icon" 
                                width={20} 
                                height={20} 
                            />
                            <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white pr-0 md:pr-3">
                                BBAChain
                            </p>
                            <FontAwesomeIcon 
                                icon={faAngleDown} 
                                className="text-[12px] font-bold text-black dark:text-white" 
                            />
                        </button>

                        {isOpen && (
                            <div className="absolute right-1/2 transform translate-x-1/2 translate-y-1/4 md:translate-y-0 md:translate-x-0 md:left-0 mt-1  bg-white dark:bg-gray-dark rounded-xl shadow-lg z-10 w-[300px] pt-[25px] pb-[10px] border-[0.6px] border-gray-light dark:border-gray-default">
                                <div className='flex border-b-[0.6px] border-gray-light pb-[6px] px-4 border-opacity-50'>
                                    <p className='text-[16px] font-normal leading-[18.41px] text-black dark:text-white'>
                                        {t('selectchain')}
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
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/eth.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Ethereum</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/bnb.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>BNB Chain</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/sol.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Solana</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/pol.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Polygon</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/arb.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Arbitrum</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/ava.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Avalance</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/car.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Cardano</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
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
                    {
                        isConnected ? (
                            <div ref={dropdownConnectedRef} className='relative items-center'>
                                <button 
                                    className='hidden md:flex items-center w-full space-x-1 bg-[#676F82] dark:bg-[#676F82] py-[7px] px-[10px] rounded-[10px] transition duration-200 ease-in-out hover:bg-light-light dark:hover:bg-gray-dark' 
                                    onClick={toggleConnect}
                                >
                                    <FontAwesomeIcon 
                                        icon={faWallet} 
                                        className="text-[15px] font-bold text-white dark:text-white" 
                                    />
                                    <p className="text-[14px] font-normal leading-[16.41px] text-white dark:text-white pr-0 md:pr-3">
                                        Ox...4dA3
                                    </p>
                                    <FontAwesomeIcon 
                                        icon={faAngleDown} 
                                        className="text-[12px] font-bold text-white dark:text-white" 
                                    />
                                </button>
                                {isConnectedDrop && (
                                    <div className="absolute right-0  mt-1  bg-white dark:bg-gray-dark rounded-xl shadow-lg z-10 w-[258px] py-[10px] border-[0.6px] border-gray-light dark:border-gray-default">
                                        <div className='flex flex-col space-y-2 py-2'>
                                            <a onClick={() => handeConnected(1)} href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
                                                <FontAwesomeIcon icon={faWallet} className="text-[15px] font-bold text-black dark:text-white" />
                                                <p className='text-[14px] font-normal leading-[16px]'>Wallet</p>
                                            </a>
                                            <a onClick={() => handeConnected(2)} href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-black dark:text-white hover:bg-light-light dark:hover:bg-gray-default">
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
                                className="hidden md:flex text-center justify-center border border-green-default bg-green-default text-black font-normal text-[14px] leading-[24px] py-[5px] px-[18px] lg:px-[25px] rounded-[10px] hover:bg-opacity-0 hover:text-black dark:hover:text-white transition duration-200"
                            >
                                {t('connect')}
                            </button>
                        )
                    }
                    {/* <button onClick={openConnect} className="hidden md:flex text-center justify-center border border-green-default bg-green-default text-black font-normal text-[14px] leading-[24px] py-[5px] px-[18px] lg:px-[25px] rounded-[10px] hover:bg-opacity-0 hover:text-black dark:hover:text-white transition duration-200">
                        {t('connect')}
                    </button> */}
                    <div ref={dropdownLanguageRef} className='relative items-center'>
                        <button onClick={toggleLanguage}>
                            <Image 
                                src={`${isDarkMode ? "/assets/image/world.png" : "/assets/image/light-world.png"}`} 
                                alt="world Icon" 
                                width={30} // Set the desired width
                                height={30} // Set the desired height
                                className='hidden md:flex'
                            />
                        </button>
                        {isOpenLanguage && (
                            <div className="absolute right-0  mt-1  bg-white dark:bg-gray-dark rounded-xl shadow-lg z-10 w-[172px] py-[10px] border-[0.6px] border-gray-light dark:border-gray-default">
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
                    <button className={`hidden md:flex rounded-full w-[65px] h-[31px]  bg-light-light dark:bg-gray-light items-center p-1  ${isDarkMode ? 'justify-end' : 'justify-start'}`} onClick={toggleTheme}>
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
                    <button onClick={handleSideBar} className='items-center justify-center flex md:hidden'>
                        <FontAwesomeIcon 
                            icon={faBars} 
                            className="text-[24px] font-bold text-black dark:text-white" 
                        />
                    </button>
                </div>
            </div>
            <Connect  isOpen={isConnectOpen} onClose={closeConnect}></Connect>
            <ConnectedWallet isOpen={isConnectedStatus === 1 || isConnectedStatus === 2} isStatus={isConnectedStatus} onClose={handeCloseConnected}/>
            <SideBar isOpen={isSideBar}  onClose={closeSideBr} setDark={handleDarkMode} openConnect={openConnect} handeConnected={handeConnected}/>
        </>
    );
};
export default Header;