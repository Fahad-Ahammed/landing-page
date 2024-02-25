import { articulate } from "@/fonts/index";
import Link from "next/link";

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
          <div className="hidden lg:block">
            <p className="inline text-center text-[18px] leading-[29px] text-white opacity-50  mr-[5px]">
              {data?.description}
            </p>
            <Link
              href="/"
              className="cursor-pointer text-[18px] leading-[29px] text-primary underline "
            >
              {data?.readMoreText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
