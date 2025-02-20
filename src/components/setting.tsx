
import React, { useState, useEffect, useRef }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Warning from "./warning";

interface ConnectProps {
    isOpen: boolean;
    onClose: () => void;
}

const Setting: React.FC<ConnectProps> = ({ isOpen, onClose }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    const [isWarningOpen, setWarningOpen] = useState<boolean>(false);

    const openWarning = () => setWarningOpen(true);
    const closeWarning = () => setWarningOpen(false);
    useEffect(() => {
        if (isChecked)
        {
            openWarning();
        }
    }, [isChecked]);
    const connectRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (connectRef.current && !connectRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if(!isWarningOpen)
        {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
        
    }, [isWarningOpen, onClose]);
    return (<>
    {isOpen &&
    (<div className={`absolute w-full h-[100vh] inset-0 bg-black bg-opacity-50 z-50`}>
      <div ref={connectRef} className={`absolute flex  flex-wrap w-full justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[25px]`}>
        <div className="flex rounded-[15px]  flex-wrap max-w-[531px] w-full h-hit bg-white dark:bg-gray-dark p-[25px] shadow-custom ">
          <div className="flex flex-col space-y-6 py-3 w-full">
            <div className="flex justify-between">
                <p className="text-[18px] font-normal leading-[21.41px] text-black dark:text-white">
                    Settings
                </p>
                <button onClick={onClose}>
                    <FontAwesomeIcon 
                        icon={faClose} 
                        className="text-[18px] font-bold text-black dark:text-white" 
                    />
                </button>
            </div>
            
            <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                    <p className="text-[14px] font-normal leading-[16.41px] text-gray-light">
                        Max Slippage
                    </p>
                    <div className="flex w-3 h-3 border-[0.5px] border-gray-light rounded-full items-center justify-center">
                        <FontAwesomeIcon 
                            icon={faQuestion} 
                            className="text-[8px] font-bold text-gray-light" 
                        />
                    </div>
                </div>    
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-[10px]">
                    <button className="slippage bg-light-light dark:bg-black text-black dark:text-white border border-green-default">0.05%</button>
                    <button className="slippage bg-light-light dark:bg-black text-gray-light dark:text-white">0.1%</button>
                    <button className="slippage bg-light-light dark:bg-black text-gray-light dark:text-white">0.5%</button>
                    <button className="slippage bg-light-light dark:bg-black text-gray-light dark:text-white">Custom%</button>
                </div>              
            </div>  
            <div className="flex justify-between">
                <div className="flex items-center space-x-1">
                    <p className="text-[14px] font-normal leading-[16.41px] text-gray-light">
                        Transaction time limit
                    </p>
                    <div className="flex w-3 h-3 border-[0.5px] border-gray-light rounded-full items-center justify-center">
                        <FontAwesomeIcon 
                            icon={faQuestion} 
                            className="text-[8px] font-bold text-gray-light" 
                        />
                    </div>
                </div> 
                <div className="flex justify-end items-center space-x-3">
                    <input className="slippage bg-light-light dark:bg-black text-black dark:text-white w-[60px]" value={20} readOnly/>
                    <p className="text-[14px] font-normal leading-[16.41px] text-gray-light">
                        Minutes
                    </p>
                </div>
            </div>    
            <div className="flex justify-between">
                <div className="flex items-center space-x-1">
                    <p className="text-[14px] font-normal leading-[16.41px] text-gray-light">
                        Expert Mode
                    </p>
                    <div className="flex w-3 h-3 border-[0.5px] border-gray-light rounded-full items-center justify-center">
                        <FontAwesomeIcon 
                            icon={faQuestion} 
                            className="text-[8px] font-bold text-gray-light" 
                        />
                    </div>
                </div> 
                <div className="flex justify-end items-center space-x-3">
                    <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="sr-only" 
                                checked={isChecked} 
                                onChange={handleToggle} 
                            />
                            <div className={`w-[65px] h-[31px] ${isChecked ? 'bg-green-default' : 'bg-light-light dark:bg-black'} rounded-full transition duration-200 ease-in-out`}>
                                <div className={`absolute top-[2px] transition-transform duration-200 ease-in-out ${isChecked ? 'translate-x-[34px] bg-white' : 'translate-x-0 bg-white dark:bg-gray-light'} w-[27px] h-[27px] rounded-full shadow`}></div>
                            </div>
                        </label>
                    </div>

                </div>
            </div>       
          </div>
        </div>
      </div>
    </div>)}
    <Warning isOpen={isWarningOpen} onClose={closeWarning} />
    </>
  );
};

export default Setting;