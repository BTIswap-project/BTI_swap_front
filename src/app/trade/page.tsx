"use client"; // Add this line
import React, {useState} from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRightArrowLeft, faGear } from '@fortawesome/free-solid-svg-icons';
import Connect from "@/components/connect";
import Setting from '@/components/setting';
import Token from '@/components/token';
export default function Home() {
  const [isConnectOpen, setConnectOpen] = useState<boolean>(false);
  const [isSettingOpen, setSettingOpen] = useState<boolean>(false);
  const [isTokenOpen, setTokenOpen] = useState<boolean>(false);

  const openConnect = () => setConnectOpen(true);
  const closeConnect = () => setConnectOpen(false);

  const openSetting = () => setSettingOpen(true);
  const closeSetting = () => setSettingOpen(false);

  const openToken = () => setTokenOpen(true);
  const closeToken = () => setTokenOpen(false);
  return (
    <div className="container mx-auto flex flex-col main-container items-center justify-center w-full px-[25px] py-[55px]">
      <div className="flex  flex-wrap flex-col border  w-full border-green-default px-[25px] max-w-[500px] py-[33px] rounded-[12px] bg-white dark:bg-gray-dark space-y-3">
        <div className="flex justify-between">
          <p className="text-[20px] font-normal leading-[20px] text-black dark:text-white">
            Swap
          </p>
          <button onClick={openSetting}>
            <FontAwesomeIcon 
              icon={faGear} 
              className="text-[20px] font-bold  text-light-gray dark:text-gray-light " 
            />
          </button>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col p-[10px] bg-light-default dark:bg-black rounded-[10px] space-y-1 relative">
            <div className="flex">
              <p className="text-[12px] font-normal leading-[17px] text-black dark:text-white">
                From
              </p>
            </div>
            <div className="flex justify-between items-center">              
              <button onClick={openToken} className='flex items-center space-x-3 bg-light-light dark:bg-gray-dark py-[7px] px-[10px] rounded-[10px]'>
                <Image
                  src="/assets/image/bnb.png" 
                  alt="Logo Icon" 
                  width={21} // Set the desired width
                  height={21} // Set the desired height
                />
                <p className="text-[12px] font-normal leading-[16.41px] text-black dark:text-white">
                    BNB
                </p>
                <FontAwesomeIcon 
                    icon={faAngleDown} 
                    className="text-[12px] font-bold  text-black dark:text-white " 
                />
            </button>
              <p className="text-[20px] font-normal leading-[20px] text-black dark:text-white">
                0.00
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[12px] font-normal leading-[17px] text-gray-light">
                Balance: 2.8989 BNB <span className="text-white">Max</span>
              </p>
              <p className="text-[12px] font-normal leading-[17px] text-gray-light">
                ≈$ 1726.2307
              </p>
            </div>
            <div className='flex w-[56px] h-[56px]  bg-light-light dark:bg-gray-dark rounded-full items-center justify-center border-2 border-green-default  absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-7'>
              <FontAwesomeIcon 
                  icon={faArrowRightArrowLeft} 
                  className="text-[25px] text-white dark:text-gray-light rotate-90" 
              />
            </div>
          </div>
          <div className="flex flex-col p-[10px]  bg-light-default dark:bg-black rounded-[10px] space-y-1">
            <div className="flex">
              <p className="text-[12px] font-normal leading-[17px] text-black dark:text-white">
                To
              </p>
            </div>
            <div className="flex justify-between items-center">              
              <button onClick={openToken} className='flex items-center space-x-3 bg-light-light dark:bg-gray-dark py-[7px] px-[10px] rounded-[10px]'>
                <Image
                  src="/assets/image/bba.png" 
                  alt="Logo Icon" 
                  width={21} // Set the desired width
                  height={21} // Set the desired height
                />
                <p className="text-[12px] font-normal leading-[16.41px] text-black dark:text-white">
                    BBA
                </p>
                <FontAwesomeIcon 
                    icon={faAngleDown} 
                    className="text-[12px] font-bold  text-black dark:text-white " 
                />
            </button>
              <p className="text-[20px] font-normal leading-[20px] text-black dark:text-white">
                0.00
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[12px] font-normal leading-[17px] text-gray-light">
                Balance: 2.8989 BBA
              </p>
              <p className="text-[12px] font-normal leading-[17px] text-gray-light">
                ≈$ 1726.2307
              </p>
            </div>
          </div>
        </div>
        <p className="text-[12px] font-normal leading-[17px] text-gray-light">
          Max slippage: <span className="text-white">0.05%</span>
        </p>
        <div className="flex flex-col p-[10px] rounded-[10px] space-y-2 relative border border-gray-default">
          <div className="flex justify-between">
            <p className="text-[12px] font-normal leading-[17px] text-gray-light">
              Rate
            </p>
            <p className="text-[12px] font-normal leading-[17px] text-black dark:text-white">
              1 ETH = 1000.000 USDT
            </p>
          </div>    
          <div className="flex justify-between">
            <p className="text-[12px] font-normal leading-[17px] text-gray-light">
              Minimum Received
            </p>
            <p className="text-[12px] font-normal leading-[17px] text-black dark:text-white">
              1000.000 USDT
            </p>
          </div>   
          <div className="flex justify-between">
            <p className="text-[12px] font-normal leading-[17px] text-gray-light">
              Price Impact
            </p>
            <p className="text-[12px] font-normal leading-[17px] text-black dark:text-white">
              0.11%
            </p>
          </div>           
        </div>
        <button  onClick={openConnect} className="border border-green-default bg-green-default text-white dark:text-black font-[500] text-[18px] leading-[24px] py-[9px] px-[21px] rounded-[26px] w-full hover:bg-opacity-0  hover:text-black dark:hover:text-white transition duration-200">
          Connect Wallet
        </button>
      </div>
      <Connect isOpen={isConnectOpen} onClose={closeConnect} />
      <Setting isOpen={isSettingOpen} onClose={closeSetting}/>
      <Token isOpen={isTokenOpen} onClose={closeToken}/>
    </div>
  );
}
