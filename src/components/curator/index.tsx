import Image from "next/image";

const Index = ({ data }: any) => {
    
  return (
    <>
      <div className="bg-white md:border-b md:py-[15px]">
        <div className="mx-auto w-[90%] max-w-[1300px]">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-x-[15px]">
              <div>
                <Image alt="currator" src={data?.img} width="50" height="50" />
              </div>
              <div className="text-[#200D00]">
                <div className="text-[12px]  leading-[19px] opacity-50 ">
                  {data?.title}
                </div>
                <div className="text-[16px] font-[700] capitalize leading-[22px] ">
                  {data?.name}
                </div>
                <div className="text-[12px] capitalize  leading-[19px] opacity-50 ">
                  {data?.companyName}
                </div>
              </div>
            </div>
            <div className="hidden text-[12px] font-[500] leading-[19px] text-[#200D00] md:block ">
              {data?.updatedDate}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
