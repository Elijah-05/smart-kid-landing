import NavBar from "../../components/navigation/NavBar";
import LandingPage from "../pages/LandingPage";

const MasterLayout = () => {
  return (
    <div className="">
      <nav className=" sticky top-0 z-50">
        <NavBar />
      </nav>
      <LandingPage />
    </div>
  );
};

export default MasterLayout;
