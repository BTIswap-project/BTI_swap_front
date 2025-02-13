"use client"; // Add this line
import React, { useState , useEffect} from 'react';
import Image from "next/image";
import { useRouter, usePathname  } from "next/navigation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export interface RouterProps {
    route: string;
}
const Header: React.FC = () => {
    const router = useRouter();
    const handleHome = () => {
        router.push("/");
    }
    return (
        <div className='container mx-auto  flex justify-between items-center py-3 pt-[75px]'>
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
                            <a href="#" className={`text-[14px] font-normal leading-[16.41px] text-white`} >Home</a>
                            <a href="#" className={`text-[14px] font-normal leading-[16.41px] text-white`}>Trade</a>
                            <a href="#" className={`text-[14px] font-normal leading-[16.41px] text-white`}>About</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex space-x-6 items-center'>
                <div className='flex items-center space-x-1'>
                    <Image 
                        src="/assets/image/small-logo.png" 
                        alt="Logo Icon" 
                        width={20} // Set the desired width
                        height={20} // Set the desired height
                    />
                    <p className="text-[14px] font-bold leading-[16.41px] text-white">
                        $2.345
                    </p>
                </div>
                <div className='flex items-center space-x-1 bg-gray-default  py-[7px] px-[10px] rounded-[10px]'>
                    <Image 
                        src="/assets/image/small-logo.png" 
                        alt="Logo Icon" 
                        width={20} // Set the desired width
                        height={20} // Set the desired height
                    />
                    <p className="text-[14px] font-normal leading-[16.41px] text-white pr-3">
                        BBA Chain
                    </p>
                    <FontAwesomeIcon 
                        icon={faAngleDown} 
                        className="text-[12px] font-bold  text-white " 
                    />
                </div>
                <button className="bg-green-default text-white font-normal text-[14px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[124px] hover:bg-green-600 transition duration-200">
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
    );
};
export default Header;