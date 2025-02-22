
"use client"; // Add this line
import React, {useState, useRef, useEffect} from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCopy, faPaste, faRightLeft} from '@fortawesome/free-solid-svg-icons';
import DefaultAnimation from "./layout/DefaultAnimation";
import useLanguage from '../useI18n';
interface ConnectProps {
    isOpen: boolean;
    isStatus: number;
    onClose: () => void;
}
const ConnectedWallet: React.FC<ConnectProps> = ({ isOpen, isStatus, onClose }) => {
    const { t } = useLanguage();
  const connectRef = useRef<HTMLDivElement | null>(null);
  const [isConnectedStatus, setIsConnectedStatus] = useState(0);

  useEffect(() => {
    setIsConnectedStatus(isStatus)
  }, [isStatus])

  const handleToggle = () => {
    if(isConnectedStatus === 1)
    {
        setIsConnectedStatus(2)
    }
    else
    {
        setIsConnectedStatus(1)
    }
  }
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
  return (
    (isOpen &&
    <div className={`absolute w-full h-[100vh] inset-0 bg-black bg-opacity-50 z-[1000]`}>
      <div ref={connectRef} className={`absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[25px]`}>
      <DefaultAnimation>
        <div className="flex flex-col rounded-[15px] flex-wrap  w-[340px] sm:w-[490px] h-hit bg-white dark:bg-gray-dark p-[20px] sm:p-[35px] shadow-custom  border-[0.6px] border-gray-light dark:border-gray-default">
          <div className="flex flex-col gap-6">
            <div className="flex w-full relative">
                <p className="w-full text-[20px] font-bold leading-[23.41px] text-black dark:text-white">
                {t('connectedwallet')}
                </p>
                <button onClick={onClose}>
                    <FontAwesomeIcon 
                        icon={faClose} 
                        className="text-[18px] font-bold text-black dark:text-white absolute top-0 right-0" 
                    />
                </button>
            </div>
            <button
                onClick={handleToggle}
                className={`flex w-full bg-[#E4E4E4] dark:bg-[#3C3C3C] text-[#757575] dark:text-gray-light rounded-lg ${isConnectedStatus === 1 ? '' : 'nav-item-hide'}`}
                >
                <span className={`flex w-full justify-center rounded-lg p-2 px-4 ${isConnectedStatus === 1 ? 'bg-green-default border-1 border-green-default rounded-lg text-white dark:text-black' : ''}`}>Details</span>
                <span className={`flex w-full justify-center rounded-lg p-2 px-4 ${isConnectedStatus === 1 ? '' : 'bg-green-default border-1 border-green-default text-white dark:text-black'}`}>Transactions</span>
            </button>
            {
                isConnectedStatus === 1 ? (
                    <>
                        <div className='flex justify-between w-full bg-[#E4E4E4] dark:bg-[#3C3C3C] text-[#757575] dark:text-gray-light rounded-lg p-[12px]'>
                            <p className='text-[13px] break-words w-10/12'>0xA324987d887AB76543</p>
                            <FontAwesomeIcon 
                                    icon={faCopy} 
                                    className="text-[18px] font-bold text-black dark:text-white" 
                                />
                            <FontAwesomeIcon 
                                icon={faPaste} 
                                className="text-[18px] font-bold text-black dark:text-white" 
                            />
                        </div>
                        <div className='flex w-full bg-[#F4BA8533] dark:bg-[#713F1233] border border-[#8A4200] rounded-lg p-[11px]'>
                            <p className='text-[14px] text-[#A85B0D]'>Low BBA balance. You need BBA for transaction fees.</p>
                        </div>
                        <div className='flex justify-between w-full text-[#757575] dark:text-gray-light rounded-lg'>
                            <div className='flex items-center space-x-1 bg-light-light dark:bg-[#3C3C3C] py-[7px] px-[10px] rounded-[10px] transition duration-200 ease-in-out hover:bg-light-light dark:hover:bg-gray-dark'>
                                <Image 
                                    src="/assets/image/bba.png" 
                                    alt="Logo Icon" 
                                    width={20} 
                                    height={20} 
                                />
                                <p className="text-[14px] font-normal leading-[16.41px] text-light-gray dark:text-white pr-0">
                                BBA Chain
                                </p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <p className='text-green-default text-[12px]'>View in Explorer</p>
                                <FontAwesomeIcon 
                                    icon={faRightLeft} 
                                    className="text-[18px] font-bold text-green-default" 
                                />
                            </div>
                        </div>
                        <div className='flex justify-between w-full text-[#757575] dark:text-gray-light rounded-lg'>
                            <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white pr-0">
                            BBA Balance
                            </p>
                            <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white pr-0">
                            0.000458
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <button  className="bg-[#EF4444] font-[500] text-[18px] leading-[24px] py-[9px] px-[21px] rounded-full text-white">
                            Disconnect Wallet
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                    <div className='flex justify-between w-full text-[#757575] dark:text-gray-light rounded-lg bg-[#676F82] dark:bg-[#334158] p-[18px] gap-[10px]'>
                        <div className='flex items-center space-x-1  py-[7px] px-[10px] rounded-[10px] gap-1'>
                           
                            <Image 
                                src="/assets/image/direct.png" 
                                alt="Logo Icon" 
                                width={40} 
                                height={40} 
                            />
                            <div className='flex flex-col gap-1'>
                                <p className="text-[14px] font-normal leading-[16.41px] text-white ">
                                    Approved BBACoin
                                </p>
                                <p className="text-[12px] font-normal leading-[16.41px] text-gray-light">
                                    2 mins ago
                                </p>
                            </div>
                           
                        </div>
                        <div className='flex flex-col gap-1 items-end justify-center'>
                            <p className="text-[14px] font-normal leading-[16.41px] text-white ">
                                1.54 BBA
                            </p>
                            <p className="text-[12px] font-normal leading-[16.41px] text-green-default">
                                Pending
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between w-full text-[#757575] dark:text-gray-light rounded-lg bg-[#676F82] dark:bg-[#334158] p-[18px] gap-[10px]'>
                        <div className='flex items-center space-x-1  py-[7px] px-[10px] rounded-[10px] gap-1'>
                           
                            <Image 
                                src="/assets/image/check.png" 
                                alt="Logo Icon" 
                                width={40} 
                                height={40} 
                            />
                            <div className='flex flex-col gap-1'>
                                <p className="text-[14px] font-normal leading-[16.41px] text-white ">
                                    Approved BBACoin
                                </p>
                                <p className="text-[12px] font-normal leading-[16.41px] text-gray-light">
                                    2 mins ago
                                </p>
                            </div>
                           
                        </div>
                        <div className='flex flex-col gap-1 items-end justify-center'>
                            <p className="text-[14px] font-normal leading-[16.41px] text-white ">
                                1.54 BBA
                            </p>
                            <p className="text-[12px] font-normal leading-[16.41px] text-green-default">
                                Confirrm
                            </p>
                        </div>
                    </div>
                    </>
                )
            }
            
          </div>
        </div>      
        </DefaultAnimation>
      </div>

    </div>
   
    )
  );
};

export default ConnectedWallet;