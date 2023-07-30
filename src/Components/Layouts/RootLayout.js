import Footer from "@/Sheared/Footer";
import Navbar from "@/Sheared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
