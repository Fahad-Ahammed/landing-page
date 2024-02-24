import Image from "next/image";
import Navbar from "./nav";

const Index = () => {
  return (
    <>
      <div className="z-[10] fixed inset-0 h-[80px] border-b-[2px] border-[#999999] border-opacity-20 bg-white xl:h-[88px] ">
        <div className=" relative mx-auto flex h-full w-[88%] max-w-[1200px] items-center justify-between xl:justify-start xl:gap-x-[35px]">
          <div className="relative h-[48px] w-[120px]">
            <Image alt="logo" fill src="/assets/images/logo.svg" />
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Index;
