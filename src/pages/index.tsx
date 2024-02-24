import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} bg-[#200D00] h-screen`}>
      hello world
    </main>
  );
}
