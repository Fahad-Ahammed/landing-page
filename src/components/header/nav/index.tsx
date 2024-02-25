import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import useScreenWidth from "@/utils/custom-hooks";
const navData = [
  {
    category: "solutions",
    title: "solutions",
    items: [
      {
        name: "for agencies",
        desc: "Empowering agencies to excel in influencer campaign management.",
      },
      {
        name: "for brands",
        desc: "Empowering brands that outsource influencer campaigns for informed decision-making.",
      },
    ],
  },
  {
    category: "resources",
    title: "resources",
    items: [
      {
        name: "success stories",
      },
      {
        name: "insights & trends",
      },
      {
        name: "playbooks",
      },
      {
        name: "comparison",
      },
      {
        name: "top influencer list",
      },
      {
        name: "success stories",
      },
      {
        name: "free tools",
      },
    ],
  },
  {
    category: "features",
    title: "features",
    items: [
      {
        name: "Find Influencer Instantly ",
      },
      {
        name: "Invite Influencers Effortlessly",
      },
      {
        name: "Build Custom Reports",
      },
    ],
  },
];

const Navbar = () => {
  const isMobile = useScreenWidth() < 1279;
  const [showNav, setShowNav] = useState(false);
  const [openNavIndex, setOpenNavIndex] = useState(null);

  useEffect(() => {
    setShowNav(false);
    document.body.style.overflow = !isMobile
      ? "auto"
      : showNav
        ? "hidden"
        : "auto";
  }, [isMobile]);

  const handleNav = () => {
    setShowNav(!showNav);
    if (isMobile) document.body.style.overflow = showNav ? "auto" : "hidden";
  };
  const handleToggle = (index: any) => {
    setOpenNavIndex((prevIndex: any) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className={`xl:w-full`}>
        <svg
          className="cursor-pointer xl:hidden "
          onClick={handleNav}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12.6465H21"
            stroke="#200D00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 6.64648H21"
            stroke="#200D00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 18.6465H21"
            stroke="#200D00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div
          className={`fixed right-0 top-[80px] h-[calc(100%-80px)] w-full items-center bg-white px-[25px] max-xl:overflow-scroll md:w-[50%] xl:relative xl:top-0 xl:h-fit xl:w-full xl:px-[0px] ${showNav || !isMobile ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <div className="relative flex h-full flex-col justify-between xl:flex-row xl:pb-0 ">
            <ul className="flex flex-col bg-white xl:flex-row xl:gap-x-[32px]  ">
              {navData.map((ele: any, index: any) => {
                return (
                  <React.Fragment key={index}>
                    <li
                      onClick={() => handleToggle(index)}
                      className={`relative cursor-pointer py-[20px] max-xl:border-b `}
                    >
                      <div className="group flex h-fit items-center justify-between gap-x-[5px] ">
                        <span
                          className={`${openNavIndex == index ? "text-primary xl:opacity-100 " : "text-black xl:opacity-50 "} text-[18px] font-semibold capitalize leading-[28px] transition-opacity duration-200 ease-in xl:text-[16px] xl:font-[400] xl:leading-[24px] xl:text-[#200D00] xl:group-hover:opacity-100`}
                        >
                          {ele?.title}
                        </span>
                        <svg
                          className={`${openNavIndex == index ? "rotate-180 opacity-100" : "rotate-0 opacity-50"}  duration-200  ease-in-out xl:group-hover:opacity-100`}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="1">
                            <path
                              d="M4.00018 6L8.00018 10L12.0002 6"
                              stroke="#200D00"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <ul
                        className={`${openNavIndex == index ? "visible max-h-[1000px] opacity-100" : "invisible max-h-0 opacity-0"} rounded-[32px] rounded-t-none duration-[300ms] ease-in-out xl:absolute xl:left-0 xl:top-[77px] xl:bg-white xl:shadow-[0px_4px_25px_1px_rgba(0,0,0,0.08)] `}
                      >
                        <div className=" flex flex-col gap-y-[15px] pl-[25px] pt-[25px] xl:w-[340px] xl:gap-y-0 xl:p-[25px] ">
                          {ele.items.map((item: any, index: any) => {
                            return (
                              <li
                                key={index}
                                className="group duration-300 ease-in-out xl:p-[25px] xl:hover:rounded-[24px] xl:hover:bg-[#FFFBF6]"
                              >
                                <Link href="#" className="">
                                  <div className="flex xl:mb-[16px]">
                                    <span className="text-[16px] font-[500] capitalize leading-[24px] text-black xl:text-[20px] xl:font-bold xl:text-[#200D00] xl:group-hover:text-primary ">
                                      {item?.name}
                                    </span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M12 16L16 12L12 8"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M8 12H16"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div className="hidden text-[14px] leading-[24px] xl:block ">
                                    {item?.desc}
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </div>
                      </ul>
                    </li>
                  </React.Fragment>
                );
              })}
              <div
                className={`hidden h-fit cursor-pointer items-center justify-between gap-x-[5px] py-[20px] text-[18px] font-semibold leading-[28px] duration-200 ease-in max-xl:border-b xl:flex xl:text-[16px] xl:font-[400] xl:leading-[24px] xl:text-[#200D00]  xl:opacity-50 xl:hover:opacity-100  `}
              >
                <span className="capitalize">pricing</span>
              </div>
            </ul>

            <div
              className={`flex w-full justify-center gap-x-[15px] text-[16px] font-bold leading-[16px] tracking-[-2%] max-xl:pb-[15px] max-xl:pt-[30px] xl:ml-auto `}
            >
              <Link
                href="/"
                className="group hidden items-center rounded-[12px] px-[20px] duration-200 ease-in-out xl:flex xl:hover:bg-[#4d1f000d]"
              >
                <p className=" text-[#200D00]">Login</p>
                <svg
                  className=" transition-transform duration-200 ease-in-out group-hover:-translate-y-[3px] group-hover:translate-x-[3px] "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6933 6.6C18.6933 6.5 18.5867 6.4 18.48 6.3C18.3733 6.2 18.2667 6.1 18.16 6.1C18.0533 6 17.84 6 17.7333 6H8.13333C7.49333 6 7.06667 6.4 7.06667 7C7.06667 7.6 7.49333 8 8.13333 8H15.1733L6.32 16.3C5.89333 16.7 5.89333 17.3 6.32 17.7C6.53333 17.9 6.74667 18 7.06667 18C7.38667 18 7.6 17.9 7.81333 17.7L16.6667 9.4V16C16.6667 16.6 17.0933 17 17.7333 17C18.3733 17 18.8 16.6 18.8 16V7C18.8 6.9 18.8 6.7 18.6933 6.6Z"
                    fill={!isMobile ? "#200D00" : "black"}
                  />
                </svg>
              </Link>
              <Link
                href="/"
                className="group flex w-full max-w-[390px] items-center justify-center rounded-[12px] bg-primary px-[30px] py-[20px] transition-colors duration-200 ease-in-out xl:max-w-[210px] xl:hover:bg-[#F65E30]"
              >
                <p className={`font-bold text-white`}>Get started free</p>
                <svg
                  className=" transition-transform duration-200 ease-in-out group-hover:-translate-y-[3px] group-hover:translate-x-[3px] "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6933 6.6C18.6933 6.5 18.5867 6.4 18.48 6.3C18.3733 6.2 18.2667 6.1 18.16 6.1C18.0533 6 17.84 6 17.7333 6H8.13333C7.49333 6 7.06667 6.4 7.06667 7C7.06667 7.6 7.49333 8 8.13333 8H15.1733L6.32 16.3C5.89333 16.7 5.89333 17.3 6.32 17.7C6.53333 17.9 6.74667 18 7.06667 18C7.38667 18 7.6 17.9 7.81333 17.7L16.6667 9.4V16C16.6667 16.6 17.0933 17 17.7333 17C18.3733 17 18.8 16.6 18.8 16V7C18.8 6.9 18.8 6.7 18.6933 6.6Z"
                    fill="#fff"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
