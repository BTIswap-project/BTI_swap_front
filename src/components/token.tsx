
import React, { useEffect, useRef }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faQuestion, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import DefaultAnimation from "./layout/DefaultAnimation";
import useLanguage from '../useI18n';
interface ConnectProps {
    isOpen: boolean;
    onClose: () => void;
}

const Token: React.FC<ConnectProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const connectRef = useRef<HTMLDivElement | null>(null);
    
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
    return (<>
    {isOpen &&
    (<div className={`absolute w-full h-[100vh] inset-0 bg-black bg-opacity-50 z-50`}>
      <div ref={connectRef} className={`absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[25px]`}>
        <DefaultAnimation>
        <div className="flex rounded-[15px]  flex-wrap  w-[320px] sm:w-[436px] h-[536px] bg-white dark:bg-gray-dark p-[20px] shadow-custom  border-[0.6px] border-gray-light dark:border-gray-default">
          <div className="flex flex-col space-y-[22px] w-full">
            <div className="flex justify-between">
                <div className="flex items-center space-x-1">
                    <p className="text-[18px] font-normal leading-[21.41px] text-black dark:text-white">
                        {t('selecttoken')}
                    </p>
                    <div className="relative flex w-3 h-3 border-[0.5px] border-gray-light rounded-full items-center justify-center  tootip-header">
                        <FontAwesomeIcon 
                            icon={faQuestion} 
                            className="text-[8px] font-bold text-gray-light" 
                        />
                        <div className="tooltip absolute left-5 top-0 h-[85px] w-[145px] transform -translate-y-1/2 z-50 bottom-full text-[12px] font-[300] p-2 bg-white dark:bg-gray-1 text-black dark:text-white rounded opacity-0 transition-opacity duration-200">
                            {t('selecttokendescript')}
                        </div>
                    </div>
                </div>
                <button onClick={onClose}>
                    <FontAwesomeIcon 
                        icon={faClose} 
                        className="text-[18px] font-bold text-black dark:text-white" 
                    />
                </button>
            </div>
            <div className="flex flex-col space-y-[40px] py-[8px]">
                <div className="flex items-center rounded-[10px] border border-gray-light bg-light-light dark:bg-gray-default w-full px-[14px] py-[6px]">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-light mr-4 w-4" />
                    <input
                        type="text"
                        placeholder={t('searchplaceholder')}
                        className="bg-light-light dark:bg-gray-default outline-none flex-1 text-black dark:text-white"
                    />
                </div>
                <div className="flex space-x-2">
                    <div className="flex items-center justify-center space-x-2 border border-gray-light px-[10px] py-[5px] rounded-[5px]">
                        <Image
                            src="/assets/image/bba.png" 
                            alt="Logo Icon" 
                            width={15} // Set the desired width
                            height={15} // Set the desired height
                        />
                        <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">
                            BBA
                        </p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 border border-gray-light px-[10px] py-[5px] rounded-[5px]">
                        <Image
                            src="/assets/image/bnb.png" 
                            alt="Logo Icon" 
                            width={15} // Set the desired width
                            height={15} // Set the desired height
                        />
                        <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">
                            BNB
                        </p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 border border-gray-light px-[10px] py-[5px] rounded-[5px]">
                        <Image
                            src="/assets/image/eth.png" 
                            alt="Logo Icon" 
                            width={15} // Set the desired width
                            height={15} // Set the desired height
                        />
                        <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">
                            ETH
                        </p>
                    </div>
                </div>
                <div className="flex flex-col py-[9px] space-y-[9px] border-t border-gray-light">
                    <div className="flex justify-between px-[7px] py-[10px] items-center hover:bg-light-light dark:hover:bg-gray-default cursor-pointer">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/assets/image/bba.png" 
                                alt="Logo Icon" 
                                width={20}
                                height={20}
                            />
                            <div className="flex flex-col space-y-[1px]">
                                <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">BBA</p>
                                <p className="text-[10px] font-[300] leading-[11.41px] text-gray-light">BBA Coin</p>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            icon={faStar} 
                            className="text-[12px] font-bold text-[#F8C100]" 
                        />
                    </div>
                    <div className="flex justify-between px-[7px] py-[10px] items-center hover:bg-light-light dark:hover:bg-gray-default cursor-pointer">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/assets/image/eth.png" 
                                alt="Logo Icon" 
                                width={20}
                                height={20}
                            />
                            <div className="flex flex-col space-y-[1px]">
                                <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">ETH</p>
                                <p className="text-[10px] font-[300] leading-[11.41px] text-gray-light">Ethereum</p>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            icon={faStar} 
                            className="text-[12px] font-bold text-[#F8C100]" 
                        />
                    </div>
                    <div className="flex justify-between px-[7px] py-[10px] items-center hover:bg-light-light dark:hover:bg-gray-default cursor-pointer">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/assets/image/bnb.png" 
                                alt="Logo Icon" 
                                width={20}
                                height={20}
                            />
                            <div className="flex flex-col space-y-[1px]">
                                <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">BNB</p>
                                <p className="text-[10px] font-[300] leading-[11.41px] text-gray-light">BBA Coin</p>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            icon={faStar} 
                            className="text-[12px] font-bold text-[#F8C100]" 
                        />
                    </div>
                    <div className="flex justify-between px-[7px] py-[10px] items-center hover:bg-light-light dark:hover:bg-gray-default cursor-pointer">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/assets/image/btc.png" 
                                alt="Logo Icon" 
                                width={20}
                                height={20}
                            />
                            <div className="flex flex-col space-y-[1px]">
                                <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">BTC</p>
                                <p className="text-[10px] font-[300] leading-[11.41px] text-gray-light">Bitcoin</p>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            icon={faStar} 
                            className="text-[12px] font-bold text-gray-light" 
                        />
                    </div>
                    <div className="flex justify-between px-[7px] py-[10px] items-center hover:bg-light-light dark:hover:bg-gray-default cursor-pointer">
                        <div className="flex items-center space-x-2 ">
                            <Image
                                src="/assets/image/pol.png" 
                                alt="Logo Icon" 
                                width={20}
                                height={20}
                            />
                            <div className="flex flex-col space-y-[1px]">
                                <p className="text-[14px] font-normal leading-[16.41px] text-black dark:text-white">Matic</p>
                                <p className="text-[10px] font-[300] leading-[11.41px] text-gray-light">Polyon</p>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            icon={faStar} 
                            className="text-[12px] font-bold text-gray-light" 
                        />
                    </div>                    
                </div>
            </div>
                  
          </div>
        </div>
        </DefaultAnimation>
      </div>
    </div>)}
    </>
  );
};

export default Token;