import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Home;
