"use client"; // Add this line
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Connect from '../connect';

export interface RouterProps {
    route: string;
}
const Header: React.FC = () => {
    const router = useRouter();
    const handleHome = () => {
        router.push("/");
    }
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

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

    const [isConnectOpen, setConnectOpen] = useState<boolean>(false);

    const openConnect = () => setConnectOpen(true);
    const closeConnect = () => setConnectOpen(false);
    return (
        <>
            <div className='container mx-auto  flex justify-between items-center py-3 absolute top-12 left-1/2 transform -translate-x-1/2'>
                <div className='flex space-x-6'>
                    <button onClick={handleHome}>
                        <Image 
                            src="/assets/image/logo.png" 
                            alt="Logo Icon" 
                            width={142} // Set the desired width
                            height={40} // Set the desired height
                        />
                    </button>
                    <div className="flex items-center justify-between" >
                        <div className="hidden sm:block ml-3">
                            <div className="flex md:space-x-6">
                                <Link href="/" className="text-[14px] font-normal leading-[16.41px] text-white">
                                    Home
                                </Link>
                                <Link href="/trade" className="text-[14px] font-normal leading-[16.41px] text-white">
                                    Trade
                                </Link>
                                <Link href="/about" className="text-[14px] font-normal leading-[16.41px] text-white">
                                    About
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-6 items-center'>
                    <div className='flex items-center space-x-1'>
                        <Image 
                            src="/assets/image/bba.png" 
                            alt="Logo Icon" 
                            width={20} // Set the desired width
                            height={20} // Set the desired height
                        />
                        <p className="text-[14px] font-bold leading-[16.41px] text-white">
                            $2.345
                        </p>
                    </div>
                    <div className="relative"  ref={dropdownRef}>
                        <button 
                            className='flex items-center space-x-1 bg-gray-default py-[7px] px-[10px] rounded-[10px] transition duration-200 ease-in-out hover:bg-gray-dark' 
                            onClick={toggleDropdown}
                        >
                            <Image 
                                src="/assets/image/bba.png" 
                                alt="Logo Icon" 
                                width={20} 
                                height={20} 
                            />
                            <p className="text-[14px] font-normal leading-[16.41px] text-white pr-3">
                                BBA Chain
                            </p>
                            <FontAwesomeIcon 
                                icon={faAngleDown} 
                                className="text-[12px] font-bold text-white" 
                            />
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 mt-1  bg-gray-dark rounded-md shadow-lg z-10 w-[300px] py-2">
                                <div className='flex border-b-[0.4px] border-gray-light py-[6px] px-4'>
                                    <p className='text-[16px] font-normal leading-[18.41px] text-white'>
                                        Select a chain
                                    </p>
                                </div>
                                <div className='flex flex-col space-y-2 py-2'>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-white hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/bba.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>BBA Chain</p>
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-white hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/eth.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Ethereum</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-white hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/bnb.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>BNB Chain</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-white hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/sol.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Solana</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-white hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/pol.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Polygon</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-white hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/arb.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Arbitrum</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-white hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/ava.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Avalance</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-white hover:bg-gray-default">
                                        <Image 
                                            src="/assets/image/car.png" 
                                            alt="Logo Icon" 
                                            width={20} 
                                            height={20}
                                        />
                                        <p className='text-[14px] font-normal leading-[16px]'>Cardano</p>                                
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 block px-[12px] py-[7px] text-white hover:bg-gray-default">
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
                    <button onClick={openConnect} className="border border-green-default bg-green-default text-black font-normal text-[14px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[124px] hover:bg-opacity-0 hover:text-white transition duration-200">
                        Connect
                    </button>
                    <Image 
                        src="/assets/image/world.png" 
                        alt="world Icon" 
                        width={24} // Set the desired width
                        height={24} // Set the desired height
                    />
                </div>
                
            </div>
            <Connect  isOpen={isConnectOpen} onClose={closeConnect}></Connect>
        </>
    );
};
export default Header;