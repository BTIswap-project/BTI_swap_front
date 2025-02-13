import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="container mx-auto flex flex-col py-[200px] items-center">
      <div className="flex flex-col max-w-[1000px]  space-y-[100px]">
        <div className="flex flex-col items-center space-y-7">
          <p className="text-[30px] font-[500] leading-[17px] text-white">
            About BTI Group OÜ  
          </p>
          <p className="text-[16px] font-normal leading-[25px] text-white text-center">
            BTI Group is a pioneering force in blockchain and Web3 technologies, committed to fostering innovation and accessibility in decentralized finance and applications. With a focus on community-driven growth and cutting-edge solutions, we empower individuals and businesses to thrive in the digital economy.
          </p>
        </div>
        <div className="flex w-full items-center">
          <div className="w-8/12">
            <div className="flex flex-col space-y-7">
              <p className="text-[30px] font-[500] leading-[30px] text-white">
              Unlock Superior Token Swaps with BTI Swap
              </p>
              <p className="text-[16px] font-normal leading-[25px] text-white">
                Experience unparalleled trading rates with our Dynamic Trade Routing technology, harnessing liquidity from various DEXs to secure the best trade routes for you. Benefit from:
              </p>
              <div className="flex flex-col px-3">
                <li>Guaranteed superior prices</li>
                <li>Minimal slippage</li>
                <li>Time and effort savings</li>
              </div>
              <Link href="/trade" className="text-center border border-green-default bg-green-default text-black font-[500] text-[18px] leading-[24px] py-[9px] px-[21px] rounded-[10px] w-[200px] hover:bg-opacity-0 hover:text-white transition duration-200">
                Trade Now
              </Link>
            </div>
          </div>
          <div className="w-4/12">
            <Image 
              src="/assets/image/trade.png" 
              alt="Logo Icon" 
              width={335} // Set the desired width
              height={338} // Set the desired height              
            />
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-5/12">
            <Image 
              src="/assets/image/contact.png" 
              alt="Logo Icon" 
              width={246} // Set the desired width
              height={246} // Set the desired height
            />
          </div>
          <div className="w-7/12">
            <div className="flex flex-col space-y-7">
              <p className="text-[30px] font-[500] leading-[17px] text-white">
                Contact Us
              </p>
              <p className="text-[16px] font-normal leading-[25px] text-white">
              Have questions or feedback? Reach out to our team at info@btiswap.com or connect with us on social media. We&apos;re here to assist you every step of the way.
              </p>              
              <button className="border border-green-default bg-green-default text-black font-[500] text-[18px] leading-[24px] py-[9px] px-[21px] rounded-[10px] w-[200px] hover:bg-opacity-0 hover:text-white transition duration-200">
                Contact Us
              </button>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
}
