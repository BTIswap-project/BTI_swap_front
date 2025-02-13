
import React, { useEffect, useRef }  from "react";
import Image from "next/image";

interface ConnectProps {
    isOpen: boolean;
    onClose: () => void;
}

const Connect: React.FC<ConnectProps> = ({ isOpen, onClose }) => {
  const connectRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
      if (connectRef.current && !connectRef.current.contains(event.target as Node)) {
        onClose();
      }
  };
  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);
  return (
    (isOpen &&
    <div className={`absolute w-full h-full inset-0 bg-black bg-opacity-50 z-50`}>
      <div ref={connectRef} className={`absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
        <div className="flex flex-col rounded-[15px] w-[505px] h-[490px] bg-gray-dark p-[35px] shadow-custom ">
          <div className="flex flex-col space-y-5 border-b-2 border-gray-light py-3">
            <p className="text-[20px] font-bold leading-[23.41px] text-white text-center">
              Select your Wallet
            </p>
            <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
              Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. 
            </p>
            <div className="grid grid-cols-3 gap-5 gap-y-10">
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                  <Image 
                      src="/assets/image/bti-wallet.png" 
                      alt="Logo Icon" 
                      width={57} 
                      height={57} 
                  />
                  <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
                      BTI Wallet
                  </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                  <Image 
                      src="/assets/image/metamask.png" 
                      alt="Logo Icon" 
                      width={57} 
                      height={57} 
                  />
                  <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
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
                  <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
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
                  <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
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
                  <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
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
                  <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
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
                  <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
                      Phantom
                  </p>
              </button>
              <button className="flex flex-col items-center space-y-2 transition-transform duration-200 transform hover:scale-105">
                  <Image 
                      src="/assets/image/Trust Wallet.png" 
                      alt="Logo Icon" 
                      width={57} 
                      height={57} 
                  />
                  <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
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
                  <p className="text-[12px] font-normal leading-[14.41px] text-white text-center">
                    Ledger
                  </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default Connect;