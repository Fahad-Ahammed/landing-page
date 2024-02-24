import fs from "fs/promises";
import path from "path";
import HeroStripe from "@/templates/hero-stripe";
import Agencies from "@/templates/agencies";

export default function Home(props: any) {
  const { pageData } = props ?? {};
  const heroData = pageData.find((ele: any) => ele?.stripe === "hero");
  const agenciesData = pageData.find((ele: any) => ele?.stripe === "agencies");

  return (
    <main className={`pt-[80px] xl:pt-[88px]`}>
      {heroData && <HeroStripe data={heroData} />}
      {agenciesData &&< Agencies data={agenciesData} />}
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
