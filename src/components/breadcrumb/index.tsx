import Link from "next/link";

const Index = ({ data }: any) => {
  return (
    <nav className="mx-auto w-[90%] max-w-[1300px] ">
      <ul className="flex gap-x-[10px]">
        {data.map((ele: any, index: any) => {
          return (
            <li key={index} className="flex items-center gap-x-[5px]">
              <Link
                href="/"
                className={`line-clamp-1 w-fit text-ellipsis ${index == data.length - 1 ? "font-bold text-primary" : "text-secondary "} text-[16px] capitalize leading-[25px] `}
              >
                {ele}
              </Link>
              <svg
                className={`h-[24px] w-[24px] lg:h-[16px] lg:w-[16px] ${index == data.length - 1 ? "hidden" : ""} `}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#4D3D33"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Index;
