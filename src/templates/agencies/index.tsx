import Currator from "@/components/currator";

const Index = ({ data }: any) => {
  return (
    <>
    <section>
      <Currator data={data?.curator} />

    </section>
    </>
  );
};

export default Index;
