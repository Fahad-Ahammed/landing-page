import fs from "fs/promises";
import path from "path";
import BannerStripe from "@/templates/banner-stripe";
import Agencies from "@/templates/agency-listing";
import BreadCrumb from "@/components/breadcrumb";
import { Description } from "@/templates/banner-stripe";
import ExploreStripe from "@/templates/explore-stripe";
import PartnerShipStripe from "@/templates/partnership-stripe";

export default function Home(props: any) {
  const { pageData } = props ?? {};
  const bannerData = pageData.find((ele: any) => ele?.stripe === "banner");
  const agenciesData = pageData.find((ele: any) => ele?.stripe === "agencies");
  const breadcrumbData = pageData.find(
    (ele: any) => ele?.stripe === "breadcrumb",
  );
  const exploreStripeData = pageData.find(
    (ele: any) => ele?.stripe === "explore",
  );
  const partnershipData = pageData.find(
    (ele: any) => ele?.stripe === "partnership",
  );

  return (
    <main className={`pt-[80px] xl:pt-[88px]`}>
      {bannerData && <BannerStripe data={bannerData} />}
      {agenciesData && <Agencies data={agenciesData} />}
      {breadcrumbData && <BreadCrumb data={breadcrumbData?.data} />}
      {bannerData?.description && bannerData?.readMoreText && (
        <Description
          description={bannerData?.description}
          readMoreLabel={bannerData?.readMoreText}
        />
      )}
      {exploreStripeData && <ExploreStripe data={exploreStripeData} />}
      {partnershipData&&<PartnerShipStripe data={partnershipData} />}
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
