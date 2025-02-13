import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="h-[117px] w-full px-[27px] py-[26px] rounded-[30px] flex flex-col justify-center mt-12"  style={{
          backgroundImage: `url('./assets/image/sub-new.png')`, 
          backgroundSize: 'cover',
        }}>
        <p className="text-[25px] font-[600] leading-[30px] text-black ">
          Join the DeFi Revolution with BTI Swap!
        </p>
        <p className="text-[15px] font-normal leading-[18px] text-gray-default">
          Discover the power of decentralized trading with BTI Swap.
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-7/12 flex flex-col h-full space-y-10 py-10">
          <p className="text-[90px] font-[600] leading-[105px] text-white">
            Welcome to BTI Swap
          </p>
          <p className="text-[30px] font-normal leading-[35px] text-gray-light">
            Your Gateway to Decentralized Trading
          </p>
          <div className="flex space-x-5">
            <button className="bg-green-default text-white font-[500] text-[18px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[158px] hover:bg-green-600 transition duration-200">
              Trade Now
            </button>
            <button className="border border-green-default text-white font-[500] text-[18px] leading-[24px] py-[5px] px-[10px] rounded-[10px] w-[158px] hover:bg-green-600 transition duration-200">
              Connect
            </button>
          </div>
        </div>
        <Image 
          src="/assets/image/comb.gif" 
          alt="Gif Icon" 
          width={415} // Set the desired width
          height={415} // Set the desired height
        />
      </div>
    </div>
  );
}
