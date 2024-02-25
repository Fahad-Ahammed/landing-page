import React from "react";
import Image from "next/image";
import { articulate } from "@/fonts";
import Link from "next/link";
import styles from "./agency-card.module.css";

const Index = ({ data }: any) => {
  return (
    <>
      <Link
        href="/"
        className={`${styles["agency-card"]} group mb-[30px] block rounded-[24px] p-[25px] shadow-[0px_1px_3px_0px_#00000026] last:mb-0 md:mb-0 md:rounded-none 
      md:border-b md:border-[#99999933] md:shadow-none md:last:border-none`}
      >
        <div className="flex flex-col items-start gap-x-[15px] gap-y-[10px] md:flex-row md:gap-x-[20px] md:gap-y-0">
          <div className="flex gap-x-[5px] md:gap-x-[10px] ">
            <div className="relative h-[70px] w-[70px] md:h-[50px] md:w-[50px] ">
              <Image
                alt="agency"
                src={data?.logo}
                className="rounded-[7px]"
                fill
              />
              <svg
                className="absolute bottom-0 right-[-10px] hidden md:block"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2 1.82679C10.148 1.21944 8.85196 1.21944 7.8 1.82679L3.70481 4.19115C2.65285 4.79851 2.00481 5.92094 2.00481 7.13564V11.8644C2.00481 13.0791 2.65285 14.2015 3.70481 14.8088L7.8 17.1732C8.85196 17.7806 10.148 17.7806 11.2 17.1732L15.2952 14.8088C16.3472 14.2015 16.9952 13.0791 16.9952 11.8644V7.13564C16.9952 5.92094 16.3472 4.79851 15.2952 4.19115L11.2 1.82679Z"
                  fill="#02AC5B"
                  stroke="#FFFBF6"
                  stroke-width="2"
                />
                <path
                  d="M12.5 7L8.375 11.5L6.5 9.45455"
                  stroke="#FFFBF6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="md:hidden">
              <div
                className={`${articulate.className} mb-[5px] text-[20px] leading-[26px] text-secondary xl:mb-[10px] `}
              >
                {data?.title}
              </div>
              <div className=" text-[12px] leading-[19px] text-[#4D3D33] xl:hidden">
                {data?.companyInfo?.[0]?.label}
              </div>
            </div>
          </div>
          <div
            className={`xl:group-hover:translate-y-[-2px duratio\n-300 ease-linea mb-[25px] md:mb-0 ${styles["agency-card-info"]}`}
          >
            <div
              className={`${articulate.className} mb-[5px] hidden text-[20px] leading-[26px] text-secondary duration-300 ease-in-out md:block xl:mb-[10px] xl:group-hover:text-primary `}
            >
              {data?.title}
            </div>
            <div className="mb-[10px] flex flex-col gap-x-[5px] gap-y-[5px] md:flex-row">
              {data?.features?.map((ele: any, index: any) => {
                return (
                  <React.Fragment key={index}>
                    <AgencyFeature feature={ele} />
                  </React.Fragment>
                );
              })}
            </div>
            <div className="mb-[20px] text-[16px] leading-[25px] text-[#4D3D33] md:text-[14px] md:leading-[22px] xl:mb-[15px]">
              <span className="mr-[5px] hidden capitalize lg:inline ">
                the mavericks:
              </span>
              <p className="inline">{data?.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-[25px] gap-y-[5px]">
              {data?.companyInfo.map((info: any, index: any) => {
                return (
                  <div
                    key={index}
                    className={`${info.type == "employee" ? "hidden xl:flex" : ""} flex items-center gap-x-[5px] text-[12px] capitalize leading-[19px] text-[#4D3D33] duration-300 ease-in-out md:text-[#98908A] md:group-hover:text-[#4D3D33]`}
                  >
                    <div className="relative h-[16px] w-[16px] duration-300 ease-in-out xl:opacity-50 xl:group-hover:opacity-100">
                      <Image src={info?.icon} alt={info?.type} fill />
                    </div>
                    <span>{info.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-x-[4px] rounded-[10px] bg-primary py-[10px] text-center text-[14px] font-semibold capitalize leading-[21px] text-white transition-colors duration-300 ease-in-out max-md:mx-auto max-md:max-w-[400px] md:ml-auto md:max-w-[112px] md:self-center md:border md:border-[#99999933] md:bg-white md:px-[10px] md:text-secondary xl:group-hover:bg-primary xl:group-hover:text-white">
            <span>{data?.button_label}</span>
            <span>
              <svg
                width="18"
                className="stroke-white duration-300 ease-in-out md:stroke-black xl:group-hover:-translate-y-[1.5px] xl:group-hover:translate-x-[1.5px] xl:group-hover:stroke-white "
                height="18"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75024 11.887L13.1749 4.46234"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.75024 4.4624H13.1749V11.887"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </Link>
    </>
  );
};

const AgencyFeature = ({ feature }: any) => {
  return (
    <div className="text-cente w-fit rounded-[5px] bg-[#F5F1EA] px-[10px] py-[5px] text-[16px] font-[700] capitalize leading-[25px] text-[#4D3D33] md:text-[12px] md:leading-[19px]">
      {feature}
    </div>
  );
};

export default Index;
