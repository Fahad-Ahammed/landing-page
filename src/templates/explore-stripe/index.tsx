import { articulate } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index = ({ data }: any) => {
  return (
    <section className="my-[50px] bg-white lg:mt-[80px] ">
      <div className="mx-auto w-[90%] max-w-[1300px] ">
        <div className="mb-[50px] text-center xl:mb-[80px]  ">
          <h3
            className={`${articulate.className} mb-[10px] text-center text-[12px] font-bold uppercase leading-[12px] tracking-widest text-primary md:text-[14px] md:leading-[14px] xl:text-[16px] xl:leading-[16px]`}
          >
            {data?.subtitle}
          </h3>
          <h2
            className={`${articulate.className} mb-[10px] text-center text-[24px] font-bold leading-[32px] tracking-[-2%] text-secondary xl:text-[32px] `}
          >
            {data?.title}
          </h2>
          <p className="mx-auto max-w-[800px] text-center  text-[16px] leading-[24px] text-[#4D3D33] xl:text-[18px] xl:leading-[28px] ">
            {data?.description}
          </p>
        </div>
        <div className="bg-rd-300 mx-auto grid w-full max-w-[1120px] grid-cols-1  gap-x-[35px] gap-y-[50px] md:grid-cols-2 lg:grid-cols-3">
          {data?.exploreCard?.map((ele: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <Card data={ele}  />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Card = ({data}:any) => {
  return (
    <div className="xl:w-max-w-[350px] group mx-auto w-full max-w-[370px] cursor-pointer rounded-[16px] border border-[#99999933] duration-300 ease-in-out last:mb-0 md:max-w-[330px] lg:max-w-[300px] xl:max-w-[350px] xl:hover:shadow-xl">
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-[16px]">
        <Image
          className="object-cover duration-300 ease-in-out xl:group-hover:scale-[1.02] "
          src={data?.img}
          alt="explore"
          fill
        />
      </div>
      <div className="p-[25px]">
        <div className="relative flex min-h-[125px] flex-col justify-between">
          <h4
            className={`${articulate.className} mb-[24px] text-[20px] font-bold leading-[26px] tracking-[-2%] text-secondary   `}
          >
            {data?.title}
          </h4>
          <Link href="/" className="flex items-center gap-x-[4px]">
            <span className=" text-[16px] font-semibold leading-[24px] text-secondary duration-300 ease-in-out xl:group-hover:text-primary xl:group-hover:underline capitalize ">
              {data?.redirectionText}
            </span>
            <span>
              <svg
                className="duration-300 ease-in-out xl:group-hover:-translate-y-[2px] xl:group-hover:translate-x-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 17.8491L14.8995 7.94963"
                  stroke="#200D00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 7.94971H14.8995V17.8492"
                  stroke="#200D00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
