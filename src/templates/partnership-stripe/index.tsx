import { articulate } from "@/fonts";
import Image from "next/image";
import { useState } from "react";
const Index = ({ data }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-white py-[50px] ">
      <div className="mx-auto w-[90%] max-w-[1120px] rounded-[24px] bg-[#F5F1EA] pt-[25px] sm:pt-[40px] md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mb-[25px] px-[25px] md:mb-0 md:px-[30px] lg:px-[35px] xl:px-[45px] md:flex md:flex-col  md:justify-center ">
            <div className="mb-[25px] items-center min-[500px]:text-center md:text-left">
              <h3
                className={`${articulate.className} mb-[10px] text-[31px] md:text-[24px] md:leading-[28px] font-bold leading-[41px] tracking-[-2%] text-secondary lg:text-[40px] lg:leading-[40px] xl:text-[48px] xl:leading-[48px]`}
              >
                {data?.title}
              </h3>
              <p className="text-[18px] leading-[28px] md:leading-[24px] text-secondary lg:text-[24px] lg:leading-[28px]  ">
                {data?.description}
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-y-[10px] md:flex-row md:justify-start xl:gap-x-[20px] xl:gap-y-0">
              <button className="group flex items-center justify-center gap-x-[5px] rounded-[10px] bg-secondary px-[30px] md:p-[10px] py-[15px] min-[991px]:py-[20px] min-[991px]:px-[30px]   ">
                <span className=" text-[14px] font-[700] leading-[14px] tracking-[-2%] text-white xl:text-[16px] xl:leading-[16px]">
                  {data?.registerLabel}
                </span>
                <span>
                  <svg
                    className=" duration-200 ease-in-out xl:group-hover:translate-x-[2px] xl:group-hover:translate-y-[-2px] "
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 21"
                    fill="none"
                  >
                    <path
                      d="M16.9755 6.17653C16.9755 6.08725 16.8803 5.99798 16.7851 5.9087C16.6898 5.81942 16.5946 5.73015 16.4994 5.73015C16.4041 5.64087 16.2137 5.64087 16.1185 5.64087H7.54788C6.97651 5.64087 6.5956 5.99798 6.5956 6.53364C6.5956 7.0693 6.97651 7.42641 7.54788 7.42641H13.833L5.929 14.8364C5.54808 15.1935 5.54808 15.7291 5.929 16.0863C6.11945 16.2648 6.30991 16.3541 6.5956 16.3541C6.88128 16.3541 7.07174 16.2648 7.2622 16.0863L15.1662 8.67628V14.5685C15.1662 15.1042 15.5471 15.4613 16.1185 15.4613C16.6898 15.4613 17.0707 15.1042 17.0707 14.5685V6.53364C17.0707 6.44436 17.0707 6.26581 16.9755 6.17653Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
              <div
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
                className="relative flex h-full items-center justify-center rounded-[10px] p-[20px] md:p-[10px] min-[991px]:py-[20px] duration-200 ease-in-out min-[991px]:px-[30px] xl:hover:bg-[#4d1f000d] "
              >
                <span className="text-[14px]  font-bold leading-[14px] tracking-[-2%] text-secondary xl:text-[16px] xl:leading-[16px]">
                  {data?.whyRegister?.label}
                  <span className="hidden xl:inline">?</span>
                  <WhyRegister
                    data={data?.whyRegister?.featureList}
                    hovered={isHovered}
                  />
                </span>
                <span>
                  <svg
                    className="xl:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                  >
                    <path
                      d="M16.9755 6.17653C16.9755 6.08725 16.8803 5.99798 16.7851 5.9087C16.6898 5.81942 16.5946 5.73015 16.4994 5.73015C16.4041 5.64087 16.2137 5.64087 16.1185 5.64087H7.54788C6.97651 5.64087 6.5956 5.99798 6.5956 6.53364C6.5956 7.0693 6.97651 7.42641 7.54788 7.42641H13.833L5.929 14.8364C5.54808 15.1935 5.54808 15.7291 5.929 16.0863C6.11945 16.2648 6.30991 16.3541 6.5956 16.3541C6.88128 16.3541 7.07174 16.2648 7.2622 16.0863L15.1662 8.67628V14.5685C15.1662 15.1042 15.5471 15.4613 16.1185 15.4613C16.6898 15.4613 17.0707 15.1042 17.0707 14.5685V6.53364C17.0707 6.44436 17.0707 6.26581 16.9755 6.17653Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className=" rounded-tr-[24px] rounded-br-[24px] overflow-hidden">
            <Image
              src="/assets/images/partnership.png"
              alt="partnership"
              width="600"
              height="200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyRegister = ({ hovered, data }: any) => {
  return (
    <div
      className={`${hovered ? "visible opacity-100 " : "invisible opacity-0"} before-content-[''] absolute left-[100%] top-0 hidden min-w-[350px] items-center rounded-[10px] bg-[#0D1319] p-[10px] duration-300 ease-in-out before:absolute before:left-[-6px] before:top-[25px] before:h-[15px] before:w-[15px] before:rotate-45 before:bg-[#0D1319] xl:block`}
    >
      {data?.map?.((ele: any, index: any) => {
        return (
          <div
            key={index}
            className="relative] mb-[10px] flex items-start gap-x-[5px] last:mb-0 "
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="32"
                viewBox="0 0 15 32"
                fill="none"
              >
                <rect
                  y="8.02722"
                  width="15"
                  height="15"
                  rx="7.5"
                  fill="#02AC5B"
                />
                <path
                  d="M10.6196 13.0663L6.32275 17.3632L4.36963 15.41"
                  stroke="white"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="text-[18px] font-[400] leading-[28px] text-white ">
              {ele}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
