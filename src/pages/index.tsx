import fs from "fs/promises";
import path from "path";
import HeroStripe from "@/templates/hero-stripe";

export default function Home(props: any) {
  const { pageData } = props ?? {};
  const heroData = pageData.find((ele: any) => ele?.stripe === "hero");

  return (
    <main className={`pt-[80px] xl:pt-[88px]`}>
      {heroData && <HeroStripe data={heroData} />}
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
