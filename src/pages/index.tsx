import fs from "fs/promises";
import path from "path";
import BannerStripe from "@/templates/banner-stripe";
import Agencies from "@/templates/agencies";
import BreadCrumb from "@/components/breadcrumb"
import { Description } from "@/templates/banner-stripe"
import ExploreStripe from "@/templates/explore-stripe"

export default function Home(props: any) {
  const { pageData } = props ?? {};
  const bannerData = pageData.find((ele: any) => ele?.stripe === "banner");
  const agenciesData = pageData.find((ele: any) => ele?.stripe === "agencies");
  const breadcrumbData=pageData.find((ele:any)=>ele?.stripe==='breadcrumb')
  const exploreStripeData=pageData.find((ele:any)=>ele?.stripe==='explore')

  return (
    <main className={`pt-[80px] xl:pt-[88px]`}>
      {bannerData && <BannerStripe data={bannerData} />}
      {agenciesData &&< Agencies data={agenciesData} />}
      <BreadCrumb data={breadcrumbData?.data} />
      <Description description={bannerData?.description} readMoreLabel={bannerData?.readMoreText} />
      {exploreStripeData&&<ExploreStripe data={exploreStripeData}  />}
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
