import { articulate } from "@/fonts/index";
import Link from "next/link";
import { useState } from "react";

const Index = ({ data }: any) => {
  return (
    <>
      <section className="bg-[#200D00]">
        <div className="mx-auto w-[90%] max-w-[1300px] py-[50px]">
          <div className={`${articulate.className} lg:mb-[30px] xl:mb-[50px] `}>
            <h1 className="mb-[5px] text-center text-[12px] font-bold uppercase leading-[12px] tracking-[2px] text-primary md:text-[14px] md:leading-[14px] xl:mb-[10px] xl:text-[16px] xl:leading-[16px] ">
              {data?.subTitle}
            </h1>
            <h2 className="text-center text-[32px] font-bold leading-[42px] tracking-[-2%] text-white md:text-[38px] md:leading-[44px] xl:text-[48px] xl:leading-[48px] ">
              {data?.title}
            </h2>
          </div>
          <div className="lg:min-h-[90px]  " >
            <Description
              from={"bannerStripe"}
              description={data?.description}
              readMoreLabel={data?.readMoreText}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const Description = (props: any) => {
  const [readLess,setReadLess]=useState(false)
  const style = {
    container:
      props?.from == "bannerStripe"
        ? "hidden lg:block"
        : "w-[90%] mt-[50px] mx-auto max-w-[1300px] lg:hidden",
    description: `duration-300 ease-in w-full mr-[5px] text-center ${props?.from == "bannerStripe" ? "text-[18px] leading-[29px] text-white/50" : "text-[16px] leading-[24px] text-[#4D3D33]"} `,
    readMore: `text-primary ${props?.from == "bannerStripe" ? "underline cursor-pointer text-[18px] leading-[29px] " : "text-[16px] leading-[24px]"}`,
  };

  return (
    <div className={style.container}>
      <p className={style.description}>
        {readLess?props?.description:props?.description.slice(0, 350)}{" "}
        <span onClick={()=>setReadLess(!readLess)} className={style.readMore}>{readLess?"read less":props?.readMoreLabel}</span>
      </p>
    </div>
  );
};

export default Index;
