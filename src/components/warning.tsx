
import React, { useRef }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import DefaultAnimation from "./layout/DefaultAnimation";
import useLanguage from '../useI18n';
interface ConnectProps {
    isOpen: boolean;
    onClose: () => void;
}

const Warning: React.FC<ConnectProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const connectRef = useRef<HTMLDivElement | null>(null);

    return (
    (isOpen &&
    <div className={`absolute w-full h-[100vh] inset-0 bg-black bg-opacity-75 z-50`}>
      <div  ref={connectRef}  className={`absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[25px]`}>
        <DefaultAnimation>
        <div className="flex rounded-[15px] flex-wrap w-[320px] sm:w-[488px] h-hit bg-white dark:bg-gray-dark p-[20px] shadow-custom  border-[0.6px] border-gray-light dark:border-gray-default">
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex justify-between">
                <p className="text-[18px] font-normal leading-[21.41px] text-black dark:text-white">
                  {t('sure')}
                </p>
                <button onClick={onClose}>
                    <FontAwesomeIcon 
                        icon={faClose} 
                        className="text-[18px] font-bold text-black dark:text-white" 
                    />
                </button>
            </div>
            
            <div className="flex border border-warning-default rounded-[10px] px-[13px] py-[11px] ">
                <p className="text-[14px] text-normal leading-[20px] text-black dark:text-white">
                {t('suredescript')}
                </p>           
            </div>  
            <p className="text-[14px] text-normal leading-[20px] text-black dark:text-white text-center">
            {t('comfirmdescript')}
            {/* Please type the word<span className="text-warning-default"> Confirm </span>below to enable expert Mode */}
            </p>
            <input className="p-[10px] text-[12px] text-black dark:text-gray-light font-normal rounded-[10px] bg-light-light dark:bg-black w-full justify-start text-left" value={"Confirm"} readOnly/>
            <button  className="border border-warning-light bg-warning-light text-black font-[500] text-[18px] leading-[24px] py-[9px] px-[21px] rounded-[26px] w-full hover:bg-opacity-0  hover:text-black dark:text-white transition duration-200">
              {t('confirm')}
            </button>     
          </div>
        </div>
        </DefaultAnimation>
      </div>
    </div>
    )
  );
};

export default Warning;