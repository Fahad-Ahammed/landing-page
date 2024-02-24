import Header from "../header";
import { inter } from "@/fonts";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className={inter.className}>
        <Header />
        <main className={``}>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
