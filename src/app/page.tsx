"use client"; // Add this line
import React, {useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import Connect from '@/components/connect';
import DefaultAnimation from '@/components/layout/DefaultAnimation';
 // Import the i18n configuration
import useLanguage from '../useI18n';
export default function Home() {
    const { t } = useLanguage();
    const [isConnectOpen, setConnectOpen] = useState<boolean>(false);
    const openConnect = () => setConnectOpen(true);
    const closeConnect = () => setConnectOpen(false);

  return (
    <div className="container mx-auto flex flex-col main-container py-[20px] md:py-[50px] px-[25px]">
      <DefaultAnimation>
      <div className="w-full rounded-[10px] md:rounded-[30px] flex flex-col justify-center relative md:hidden">
        <div className='absolute top-0 bg-black dark:bg-white bg-opacity-25 dark:bg-opacity-0 w-full h-full  p-3 lg:p-[27px] rounded-[10px] md:rounded-[30px]'>
          <p className="text-[15px] md:text-[20px] lg:text-[25px] font-[600] text-black ">
            {t('join')}
          </p>
          <p className="text-[8px] md:text-[15px] font-normal leading-[18px] text-gray-default">
            {t('discord')}
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
      <div className="hidden w-full rounded-[10px] md:rounded-[30px] justify-center relative md:flex">
        <div className='bg-black dark:bg-white bg-opacity-25 w-full h-full rounded-[10px] md:rounded-[30px] flex justify-between'>
          <div className='flex flex-col  p-3 lg:p-[27px]'>
            <p className="text-[15px] md:text-[20px] lg:text-[25px] font-[600] text-black ">
              {t('join')}
            </p>
            <p className="text-[8px] md:text-[15px] font-normal leading-[18px] text-gray-default">
              {t('discord')}
            </p>
          </div>
          <Image 
            src="/assets/image/Comp 1.gif" 
            alt="Gif Icon" 
            width={250}
            height={117} 
            className='md:w-full max-h-[117px] max-w-[450px] rounded-[10px] md:rounded-[30px]'
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-10 w-full items-center">
        <div className="w-7/12 flex flex-col h-full space-y-3 md:space-y-10 py-5 md:py-10 w-full">
          <p className="text-[30px] md:text-[89px] font-[600] leading-[40px] md:leading-[105px] text-black dark:text-white">
            {t('welcome')}
          </p>
          <p className="text-[18px] md:text-[30px] font-normal leading-[35px] text-gray-light">
            {t('gateway')}
          </p>
          <div className="flex space-x-0 space-y-3 md:space-y-0 md:space-x-5 flex-col md:flex-row">
            <Link href="/trade" className="text-center border border-green-default bg-green-default  text-white dark:text-black  font-[500] text-[18px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[158px] hover:text-green-default dark:hover:text-white hover:bg-opacity-0 transition duration-200">
              {t('tradenow')}
            </Link>
            <button  onClick={openConnect} className="border border-green-default text-green-default font-[500] text-[18px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[158px] hover:bg-green-default hover:text-white transition duration-200">
              {t('connect')}
            </button>
          </div>
        </div>
        <Image 
          src="/assets/image/comb.gif" 
          alt="Gif Icon" 
          width={415} // Set the desired width
          height={415} // Set the desired height
          className='w-[220px] md:w-[315px] lg:w-[415px]'
        />
      </div>
      </DefaultAnimation>
      <Connect  isOpen={isConnectOpen} onClose={closeConnect}></Connect>
    </div>
  );
}
