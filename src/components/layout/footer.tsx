import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <div className=' w-full bg-black shadow-custom-green py-[15px] absolute bottom-12 left-1/2 transform -translate-x-1/2'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex items-center space-x-1'>
                    <p className="text-[14px] font-normal leading-[16.41px] text-gray-light">
                        Powered by
                    </p>
                    <Image 
                        src="/assets/image/footer-logo.png" 
                        alt="Logo Icon" 
                        width={80} // Set the desired width
                        height={22} // Set the desired height
                    />
                </div>
                <p className="text-[14px] font-[300] leading-[30px] text-white">
                    © 2024 BTI Group OÜ
                </p>
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
                    <button className=" flex items-center space-x-1 justify-center bg-green-default text-black font-[500] text-[18px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[150px] hover:bg-gray-600 transition duration-200">
                        <Image 
                            src="/assets/image/question.png" 
                            alt="Logo Icon" 
                            width={18} // Set the desired width
                            height={18} // Set the desired height
                        />
                        <p>Support</p>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Footer;