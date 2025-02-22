"use client"; // Add this line
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import DefaultAnimation from '@/components/layout/DefaultAnimation';
import useLanguage from '../../useI18n';
export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto flex flex-col main-container py-[40px] md:p-[80px] px-[25px]">
      <DefaultAnimation>
      <div className='flex flex-col space-y-[32px]'>
        <div className='flex flex-col space-y-2'>
          <p className="text-[30px] font-bold leading-[35px] text-black dark:text-white ">
            {t('supportticket')}
          </p>
          <p className="text-[14px] font-normal leading-[16px] text-gray-light">           
            {t('supportdescript')}
          </p>
        </div>
        <div className='flex flex-col space-y-4'>
          <p className="text-[18px] font-normal leading-[17px] text-black dark:text-white ">
            {t('fullname')}*
          </p>
          <div className="flex items-center rounded-[8px] border border-light-light dark:border-gray-light bg-light-light dark:bg-[#171717] w-full md:w-7/12 px-[12px] py-[4px]" >
            <input
                type="text"               
                className="bg-light-light dark:bg-[#171717] outline-none flex-1 text-black dark:text-white "
            />
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <p className="text-[18px] font-normal leading-[17px] text-black dark:text-white ">
            {t('email')}*
          </p>
          <div className="flex items-center rounded-[8px] border border-light-light dark:border-gray-light bg-light-light dark:bg-[#171717] w-full md:w-7/12 px-[12px] py-[4px]" >
            <input
                type="text"               
                className="bg-light-light dark:bg-[#171717] outline-none flex-1 text-black dark:text-white "
            />
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <p className="text-[18px] font-normal leading-[17px] text-black dark:text-white ">
            {t('contactnumber')}
          </p>
          <div className="flex items-center rounded-[8px] border border-light-light dark:border-gray-light bg-light-light dark:bg-[#171717] w-full md:w-7/12 px-[12px] py-[4px]" >
            <input
                type="text"               
                className="bg-light-light dark:bg-[#171717] outline-none flex-1 text-black dark:text-white "
            />
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <p className="text-[18px] font-normal leading-[17px] text-black dark:text-white ">
          {t('category')}
          </p>
          <div className="flex items-center rounded-[8px] border border-light-light dark:border-gray-light bg-light-light dark:bg-[#171717] w-full md:w-7/12 px-[12px] py-[4px]" >
            <input
                type="text"               
                className="bg-light-light dark:bg-[#171717] outline-none flex-1 text-black dark:text-white "
            />
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <p className="text-[18px] font-normal leading-[17px] text-black dark:text-white ">
          {t('issuedescribe')}
          </p>
          <div className="flex items-center rounded-[8px] border border-light-light dark:border-gray-light bg-light-light dark:bg-[#171717] px-[12px] py-[4px]" >
            <textarea
              rows={5}
              className="bg-light-light dark:bg-[#171717] outline-none flex-1 text-black dark:text-white "
            />
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <p className="text-[18px] font-normal leading-[17px] text-black dark:text-white ">
          {t('attachfiles')}
          </p>
          <div className="flex items-center justify-center space-x-2 cursor-pointer bg-light-light dark:bg-gray-light w-full md:w-[320px] rounded-[8px] p-[8px]">
            <FontAwesomeIcon 
                icon={faPaperclip} 
                className="text-[18px] font-bold text-black" 
            />
            <p className="text-[20px] font-normal leading-[24px] text-black">
            {t('attach')}
            </p>
            <input 
                type="file" 
                className="hidden" 
                onChange={(e) => console.log(e.target.files)} 
            />
          </div>
        </div>
        <button className="text-center border border-green-default bg-green-default text-white dark:text-black font-bold text-[18px] leading-[24px] py-[5px] px-[10px] rounded-[10px] hover:bg-opacity-0 hover:text-black dark:hover:text-white transition duration-200">
        {t('submit')}
        </button>
      </div>
      </DefaultAnimation>
    </div>
  );
}
