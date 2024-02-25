import fs from "fs/promises";
import path from "path";
import HeroStripe from "@/templates/hero-stripe";
import Agencies from "@/templates/agencies";
import BreadCrumb from "@/components/breadcrumb"
import { Description } from "@/templates/hero-stripe"

export default function Home(props: any) {
  const { pageData } = props ?? {};
  const heroData = pageData.find((ele: any) => ele?.stripe === "hero");
  const agenciesData = pageData.find((ele: any) => ele?.stripe === "agencies");
  const breadcrumbData=pageData.find((ele:any)=>ele?.stripe==='breadcrumb')

  return (
    <main className={`pt-[80px] xl:pt-[88px]`}>
      {heroData && <HeroStripe data={heroData} />}
      {agenciesData &&< Agencies data={agenciesData} />}
      <BreadCrumb data={breadcrumbData?.data} />
      <Description description={heroData?.description} readMoreLabel={heroData?.readMoreText} />
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "json", "data.json");

  try {
    const jsonFile = await fs.readFile(filePath, "utf-8");
    const pageData = JSON.parse(jsonFile);

    return {
      props: {
        pageData,
      },
    };
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return {
      notFound: true,
    };
  }
}
