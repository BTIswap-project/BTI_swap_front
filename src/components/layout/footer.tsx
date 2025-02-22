import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import useLanguage from '../../useI18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className=' w-full bg-white dark:bg-black shadow-custom-green py-[15px] px-[25px]'>
            <div className='container mx-auto flex flex-col md:flex-row  justify-between items-center space-y-1 relative'>
                <div className='flex  w-full justify-center md:justify-start items-center space-x-1'>
                    <p className="text-[14px] font-normal leading-[16.41px] text-gray-light">
                        {t('powered')}
                    </p>
                    <Image 
                        src="/assets/image/footer-logo.png" 
                        alt="Logo Icon" 
                        width={80} // Set the desired width
                        height={22} // Set the desired height
                    />
                </div>
                <p className="flex w-full justify-center text-[14px] text-center font-[300] leading-[30px] text-gray-light dark:text-white ">
                    {t('footer')}
                </p>
                <div className="flex w-full  justify-end items-center  space-x-0 md:space-x-4 flex-col md:flex-row space-y-2">
                    <div className="flex items-center justify-between space-x-4">
                        <Image 
                            src="/assets/image/X.png" 
                            alt="Logo Icon" 
                            width={18} // Set the desired width
                            height={18} // Set the desired height
                        />
                        <Image 
                            src="/assets/image/linked.png" 
                            alt="Logo Icon" 
                            width={18} // Set the desired width
                            height={18} // Set the desired height
                        />
                        <Image 
                            src="/assets/image/telegram.png" 
                            alt="Logo Icon" 
                            width={18} // Set the desired width
                            height={18} // Set the desired height
                        />
                        <Image 
                            src="/assets/image/Medium.png" 
                            alt="Logo Icon" 
                            width={18} // Set the desired width
                            height={18} // Set the desired height
                        />
                        <Image 
                            src="/assets/image/Github.png" 
                            alt="Logo Icon" 
                            width={18} // Set the desired width
                            height={18} // Set the desired height
                        />
                        <Image 
                            src="/assets/image/Instagram.png" 
                            alt="Logo Icon" 
                            width={18} // Set the desired width
                            height={18} // Set the desired height
                        />
                    </div>
                    <Link 
                        href="/support" 
                        className="flex items-center space-x-2 justify-center border border-green-default bg-green-default text-white dark:text-black font-[500] text-[18px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[150px] group transition duration-200 hover:bg-opacity-0 hover:text-black dark:hover:text-white"
                    >
                        <div className="flex w-4 h-4 border-2 border-white dark:border-black group-hover:border-black dark:group-hover:border-white rounded-full items-center justify-center transition duration-200">
                            <FontAwesomeIcon 
                                icon={faQuestion} 
                                className="text-[12px] font-bold group-hover:text-black dark:group-hover:text-white" 
                            />
                        </div>
                        <p className="group-hover:text-black dark:group-hover:text-white">{t('support')}</p>
                    </Link>

                </div>
            </div>
        </div>
    );
};
export default Footer;