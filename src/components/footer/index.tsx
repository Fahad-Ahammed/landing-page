import Image from "next/image";
import React, { useState } from "react";
import useScreenWidth from "@/utils/custom-hooks";
import Link from "next/link";
const footerData = {
  logo: "/assets/images/logo.png",
  description:
    "Qoruz is an influencer marketing and intelligence platform, that enables superior influencer discovery, quick and easy influencer outreach.",
  pages: [
    {
      title: "company",
      data: [
        "About us",
        "Pricing",
        "Book a demo",
        "Terms of use",
        "Privacy policy",
      ],
    },
    {
      title: "why qoruz",
      data: ["for brands", "for agencies"],
    },
    {
      title: "resources",
      data: [
        "find creators",
        "case study",
        "reports",
        "blogs",
        "playbooks",
        "compare",
        "marketing tools",
      ],
    },
  ],
  socialLinks: [
    {
      name: "facebook",
      icon: "/assets/images/facebook.svg",
    },
    {
      name: "instagram",
      icon: "/assets/images/instagram.svg",
    },
    {
      name: "twitter",
      icon: "/assets/images/twitter.svg",
    },
    {
      name: "linkedin",
      icon: "/assets/images/linkedin.svg",
    },
  ],
};
const Index = () => {
  const isMobile = useScreenWidth() < 768;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleToggle = (index: any) => {
    setSelectedIndex((prevIndex: any) => (prevIndex === index ? null : index));
  };
  return (
    <footer className="bg-secondary py-[25px] md:py-[40px] xl:py-[50px]">
      <div className="mx-auto w-[90%] max-w-[1120px]">
        <div className="flex flex-col md:border-b md:border-white/20 md:mb-[40px] xl:mb-[50px] min-[930px]:flex-row md:justify-between">
          <div className="md:max-w-[600px] min-[930px]:max-w-[315px] md:mb-[25px] min-[930px]:mb-0">
            <Image
              className="mb-[20px] xl:mb-[25px]"
              src={footerData.logo}
              alt="logo"
              quality={100}
              width="120"
              height="40"
            />
            <p className="mb-[20px] text-[14px] font-[500] leading-[20px] text-white opacity-60 xl:mb-[25px] xl:text-[16px] md:opacity-90 ">
              {footerData.description}
            </p>
            <div className="hidden md:block">
              <SocialMediaInfo
                data={footerData.socialLinks}
                isMobile={isMobile}
              />
            </div>
          </div>
          <div className="md:flex md:flex-wrap md:gap-x-[80px]">
            {footerData.pages.map((ele: any, index: any) => {
              return (
                <div
                  key={index}
                  onClick={() => handleToggle(index)}
                  className={`${index == footerData.pages.length - 1 ? "mb-[25px]" : "mb-[20px]"} border-b border-[#E2D4F9] py-[10px] xl:mb-[15px] md:border-none`}
                >
                  <div className="flex items-center justify-between gap-x-[15px]">
                    <h4 className="text-[18px] font-semibold capitalize leading-[21px] text-primary md:mb-[15px] xl:font-[700] ">
                      {ele.title}
                    </h4>
                    <svg
                      className={`md:hidden ${selectedIndex==index?"rotate-180":""} duration-300 ease-in-out `}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M5.99998 7.37404C5.78492 7.37404 5.56988 7.29193 5.40591 7.12804L0.24617 1.96825C-0.0820567 1.64002 -0.0820567 1.10786 0.24617 0.779762C0.574264 0.451668 1.10632 0.451668 1.43458 0.779762L5.99998 5.34543L10.5654 0.779921C10.8936 0.451827 11.4256 0.451827 11.7537 0.779921C12.0821 1.10802 12.0821 1.64018 11.7537 1.96841L6.59405 7.1282C6.43 7.29211 6.21496 7.37404 5.99998 7.37404Z"
                        fill="#FF6435"
                      />
                    </svg>
                  </div>
                  <ul
                    className={`overflow-hidden xl:overflow-visible ${isMobile ? (selectedIndex == index ? "visible max-h-[400px] overflow-hidden pt-[10px] opacity-100" : "invisible max-h-0 opacity-0 ") : "h-fit"} px-[5px] duration-300  ease-in-out last:mb-[0px] md:px-0`}
                  >
                    {ele.data.map((page: any, index: any) => {
                      return (
                        <li
                          key={index}
                          className="mb-[5px] text-base capitalize text-white/60 xl:text-[18px] xl:leading-[28px] min-[930px]:text-white/90"
                        >
                          <Link href="/">{page}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between py-[25px] md:py-0">
          <p className="text-[14px] font-[500] leading-[16px] text-[#FFF4EE] xl:text-[16px] xl:leading-[24px] xl:text-white/90 ">
            {isMobile
              ? "Datrux Systems Pvt. Ltd. © 2022"
              : "2023 Qoruz, inc. All rights reserved."}
          </p>
          <div className="md:hidden">
            <SocialMediaInfo
              isMobile={isMobile}
              data={footerData.socialLinks}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialMediaInfo = ({ data, isMobile }: any) => {
  return (
    <ul className="flex items-center gap-x-[15px]">
      {data.map((ele: any, index: any) => {
        return (
          <li
            key={index}
            className={`${isMobile && index == 1 ? "hidden" : "md:block"}`}
          >
            <Link href="/">
              <Image src={ele.icon} alt={ele.title} width="17" height="17" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Index;
