"use client"; // Add this line
import React, {useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import Connect from '@/components/connect';

export default function Home() {
    const [isConnectOpen, setConnectOpen] = useState<boolean>(false);

    const openConnect = () => setConnectOpen(true);
    const closeConnect = () => setConnectOpen(false);
  return (
    <div className="container mx-auto flex flex-col main-container py-[50px] px-[25px]">
      <div className=" w-full rounded-[30px] flex flex-col justify-center relative">
          <div className='absolute top-0 bg-black dark:bg-white bg-opacity-25 dark:bg-opacity-0 w-full h-full  p-3 md:p-[27px] rounded-[30px]'>
            <p className="text-[15px] md:text-[25px] font-[600] text-black ">
              Join the DeFi Revolution with BTI Swap!
            </p>
            <p className="text-[8px] md:text-[15px] font-normal leading-[18px] text-gray-default">
              Discover the power of decentralized trading with BTI Swap.
            </p>
          </div>
          <Image 
            src="/assets/image/sub-new.png" 
            alt="Gif Icon" 
            width={415} // Set the desired width
            height={415} // Set the desired height
            className='w-full md:w-full min-h-[63px] rounded-[10px] md:rounded-[30px]'
          />
        
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-10  w-full items-center">
        <div className="w-7/12 flex flex-col h-full space-y-3 md:space-y-10 py-10 w-full">
          <p className="text-[30px] md:text-[90px] font-[600] leading-[40px] md:leading-[105px] text-black dark:text-white">
            Welcome to BTI Swap
          </p>
          <p className="text-[18px] md:text-[30px] font-normal leading-[35px] text-gray-light">
            Your Gateway to Decentralized Trading
          </p>
          <div className="flex space-x-0 space-y-3 md:space-y-0 md:space-x-5 flex-col md:flex-row">
            <Link href="/trade" className="text-center border border-green-default bg-green-default  text-white dark:text-black  font-[500] text-[18px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[158px] hover:text-green-default dark:hover:text-white hover:bg-opacity-0 transition duration-200">
              Trade Now
            </Link>
            <button  onClick={openConnect} className="border border-green-default text-green-default font-[500] text-[18px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[158px] hover:bg-green-default hover:text-white transition duration-200">
              Connect
            </button>
          </div>
        </div>
        <Image 
          src="/assets/image/comb.gif" 
          alt="Gif Icon" 
          width={415} // Set the desired width
          height={415} // Set the desired height
          className='w-[220px] md:w-[415px]'
        />
      </div>
      <Connect  isOpen={isConnectOpen} onClose={closeConnect}></Connect>
    </div>
  );
}
