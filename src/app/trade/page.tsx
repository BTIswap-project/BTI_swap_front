"use client"; // Add this line
import React, {useState} from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGear } from '@fortawesome/free-solid-svg-icons';
import Connect from "@/components/connect";
import Setting from '@/components/setting';
export default function Home() {
  const [isConnectOpen, setConnectOpen] = useState<boolean>(false);
  const [isSettingOpen, setSettingOpen] = useState<boolean>(false);

  const openConnect = () => setConnectOpen(true);
  const closeConnect = () => setConnectOpen(false);

  const openSetting = () => setSettingOpen(true);
  const closeSetting = () => setSettingOpen(false);
  return (
    <div className="container mx-auto flex flex-col h-[100vh] py-[160px]">
      <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] border border-green-default px-[25px] py-[33px] rounded-[12px] bg-gray-dark space-y-3">
        <div className="flex justify-between">
          <p className="text-[20px] font-normal leading-[20px] text-white">
            Swap
          </p>
          <button onClick={openSetting}>
            <FontAwesomeIcon 
              icon={faGear} 
              className="text-[20px] font-bold  text-gray-light " 
            />
          </button>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col p-[10px] bg-black rounded-[10px] space-y-1 relative">
            <div className="flex">
              <p className="text-[12px] font-normal leading-[17px] text-white">
                From
              </p>
            </div>
            <div className="flex justify-between items-center">              
              <div className='flex items-center space-x-3 bg-gray-dark py-[7px] px-[10px] rounded-[10px]'>
                <Image
                  src="/assets/image/bnb.png" 
                  alt="Logo Icon" 
                  width={21} // Set the desired width
                  height={21} // Set the desired height
                />
                <p className="text-[12px] font-normal leading-[16.41px] text-white">
                    BNB
                </p>
                <FontAwesomeIcon 
                    icon={faAngleDown} 
                    className="text-[12px] font-bold  text-white " 
                />
            </div>
              <p className="text-[20px] font-normal leading-[20px] text-white">
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
            <Image
              src="/assets/image/swap.png" 
              alt="Logo Icon" 
              width={56} // Set the desired width
              height={56} // Set the desired height
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-7"
            />
          </div>
          <div className="flex flex-col p-[10px] bg-black rounded-[10px] space-y-1">
            <div className="flex">
              <p className="text-[12px] font-normal leading-[17px] text-white">
                To
              </p>
            </div>
            <div className="flex justify-between items-center">              
              <div className='flex items-center space-x-3 bg-gray-dark py-[7px] px-[10px] rounded-[10px]'>
                <Image
                  src="/assets/image/bba.png" 
                  alt="Logo Icon" 
                  width={21} // Set the desired width
                  height={21} // Set the desired height
                />
                <p className="text-[12px] font-normal leading-[16.41px] text-white">
                    BBA
                </p>
                <FontAwesomeIcon 
                    icon={faAngleDown} 
                    className="text-[12px] font-bold  text-white " 
                />
            </div>
              <p className="text-[20px] font-normal leading-[20px] text-white">
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
            <p className="text-[12px] font-normal leading-[17px] text-white">
              1 ETH = 1000.000 USDT
            </p>
          </div>    
          <div className="flex justify-between">
            <p className="text-[12px] font-normal leading-[17px] text-gray-light">
              Minimum Received
            </p>
            <p className="text-[12px] font-normal leading-[17px] text-white">
              1000.000 USDT
            </p>
          </div>   
          <div className="flex justify-between">
            <p className="text-[12px] font-normal leading-[17px] text-gray-light">
              Price Impact
            </p>
            <p className="text-[12px] font-normal leading-[17px] text-white">
              0.11%
            </p>
          </div>           
        </div>
        <button  onClick={openConnect} className="border border-green-default bg-green-default text-black font-[500] text-[18px] leading-[24px] py-[9px] px-[21px] rounded-[26px] w-full hover:bg-opacity-0  hover:text-white transition duration-200">
          Connect Wallet
        </button>
      </div>
      <Connect isOpen={isConnectOpen} onClose={closeConnect} />
      <Setting isOpen={isSettingOpen} onClose={closeSetting}/>
    </div>
  );
}
