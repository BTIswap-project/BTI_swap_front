
import React, { useRef }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
interface ConnectProps {
    isOpen: boolean;
    onClose: () => void;
}

const Warning: React.FC<ConnectProps> = ({ isOpen, onClose }) => {
    const connectRef = useRef<HTMLDivElement | null>(null);

    return (
    (isOpen &&
    <div className={`absolute w-full h-full inset-0 bg-black bg-opacity-75 z-50`}>
      <div  ref={connectRef}  className={`absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
        <div className="flex rounded-[15px] w-[488px] h-[295px] bg-gray-dark p-[20px] shadow-custom ">
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex justify-between">
                <p className="text-[18px] font-normal leading-[21.41px] text-white">
                   Are you sure?
                </p>
                <button onClick={onClose}>
                    <FontAwesomeIcon 
                        icon={faClose} 
                        className="text-[18px] font-bold text-white" 
                    />
                </button>
            </div>
            
            <div className="flex border border-warning-default rounded-[10px] px-[13px] py-[11px] ">
                <p className="text-[14px] text-normal leading-[20px] text-white">
                    Expert mode turns off the &apos;Confirm&apos; transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.
                </p>           
            </div>  
            <p className="text-[14px] text-normal leading-[20px] text-white text-center">
                Please type the word<span className="text-warning-default"> Confirm </span>below to enable expert Mode
            </p>
            <input className="p-[10px] text-[12px] text-gray-light font-normal rounded-[10px] bg-black w-full justify-start text-left" value={"Confirm"} readOnly/>
            <button  className="border border-warning-light bg-warning-light text-black font-[500] text-[18px] leading-[24px] py-[9px] px-[21px] rounded-[26px] w-full hover:bg-opacity-0  hover:text-white transition duration-200">
                Confirm
            </button>     
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default Warning;