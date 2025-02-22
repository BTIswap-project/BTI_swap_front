
import React, { useEffect, useRef }  from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons';
import DefaultAnimation from "./layout/DefaultAnimation";
import useLanguage from '../useI18n';
interface ConnectProps {
    isOpen: boolean;
    onClose: () => void;
}
const Connect: React.FC<ConnectProps> = ({ isOpen, onClose }) => {
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
  return (
    (isOpen &&
    <div className={`absolute w-full h-[100vh] inset-0 bg-black bg-opacity-50 z-[1000]`}>
      <div ref={connectRef} className={`absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[25px]`}>
      <DefaultAnimation>
        <div className="flex flex-col rounded-[15px] flex-wrap  w-[320px] sm:w-[505px] h-hit bg-white dark:bg-gray-dark p-[35px] shadow-custom  border-[0.6px] border-gray-light dark:border-gray-default">
          <div className="flex flex-col space-y-5 border-b-2 border-gray-light py-3">
            <div className="flex w-full relative">
                <p className="w-full text-[20px] font-bold leading-[23.41px] text-black dark:text-white text-center">
                {t('selectwallet')}
                </p>
                <button onClick={onClose}>
                    <FontAwesomeIcon 
                        icon={faClose} 
                        className="text-[18px] font-bold text-black dark:text-white absolute top-0 right-0" 
                    />
                </button>
            </div>
            
            <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">              
              {t('walletdescript')}
            </p>
            <div className="grid grid-cols-3 gap-5 gap-y-10">
              <button className="flex flex-col items-center  space-y-2 transition-transform duration-200 transform hover:scale-105">
                    <div className="flex w-[57px] h-[57px] items-center justify-center bg-black dark:bg-white">
                        <Image 
                            src="/assets/image/bti-icon.png" 
                            alt="Logo Icon" 
                            width={50} 
                            height={50} 
                        />
                    </div>
                    <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">
                        BTI Wallet
                    </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                    <div className="flex w-[57px] h-[57px] items-center justify-center bg-black dark:bg-white">
                        <Image 
                            src="/assets/image/meta-icon.png" 
                            alt="Logo Icon" 
                            width={39} 
                            height={39} 
                        />
                    </div>       
                    <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">
                        Metamask
                    </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                  <Image 
                      src="/assets/image/biance.png" 
                      alt="Logo Icon" 
                      width={57} 
                      height={57} 
                  />
                  <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">
                      Biance
                  </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                  <Image 
                      src="/assets/image/coinbace.png" 
                      alt="Logo Icon" 
                      width={57} 
                      height={57} 
                  />
                  <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">
                      CoinBase
                  </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                  <Image 
                      src="/assets/image/WalletConnect.png" 
                      alt="Logo Icon" 
                      width={57} 
                      height={57} 
                  />
                  <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">
                    Wallet Connect
                  </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                  <Image 
                      src="/assets/image/safepal.png" 
                      alt="Logo Icon" 
                      width={57} 
                      height={57} 
                  />
                  <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">
                      Safepal
                  </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                  <Image 
                      src="/assets/image/phantom.png" 
                      alt="Logo Icon" 
                      width={57} 
                      height={57} 
                  />
                  <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">
                      Phantom
                  </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                    <div className="flex w-[57px] h-[57px] items-center justify-center bg-black dark:bg-white">
                        <Image 
                            src="/assets/image/trust-icon.png" 
                            alt="Logo Icon" 
                            width={39} 
                            height={39} 
                        />
                    </div>   
                  <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">
                    Trust Wallet
                  </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                  <Image 
                      src="/assets/image/Ledger.png" 
                      alt="Logo Icon" 
                      width={57} 
                      height={57} 
                  />
                  <p className="text-[12px] font-normal leading-[14.41px] text-black dark:text-white text-center">
                    Ledger
                  </p>
              </button>
            </div>
          </div>
        </div>      
        </DefaultAnimation>
      </div>

    </div>
   
    )
  );
};

export default Connect;