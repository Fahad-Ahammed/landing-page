import Curator from "@/components/curator";
import AgencyCard from "@/components/agency-card";
import React from "react";

const Index = ({ data }: any) => {
  
  return (
    <>
      <section className="flex flex-col mb-[45px]">
        <div className="mx-auto w-[90%] mb-[45px] md:mb-0 max-w-[1300px] py-[25px] md:order-2 md:py-[50px]">
          {data?.agencyDetails?.map((info: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <AgencyCard data={info} />
              </React.Fragment>
            );
          })}
        </div>
        <div className="md:order-1">
          <Curator data={data?.curator} />
        </div>
      </section>
    </>
  );
};

export default Index;
