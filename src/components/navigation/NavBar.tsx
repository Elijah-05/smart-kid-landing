import { StarKidLogo } from "../../assets";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className=" bg-white shadow-lg">
      <div className=" w-full py-5 px-2 flex justify-between items-center max-w-[1300px] mx-auto">
        <div className=" h-6 sm:h-9">
          <a href="/">
            <img className=" h-full" src={StarKidLogo} alt="star kid logo" />
          </a>
        </div>
        <ul className=" hidden sm:flex gap-6 items-center ">
          <li className=" hover:text-primary duration-300">
            <a href="" className="">
              about us
            </a>
          </li>
          <li className="hover:text-primary duration-300">
            <a href="" className="">
              Why choose us
            </a>
          </li>
          <li className="hover:text-primary duration-300">
            <a href="" className="">
              Curriculum Framwork
            </a>
          </li>
          <li className="hover:text-primary duration-300">
            <a href="" className="">
              More
            </a>
          </li>
        </ul>
        <div className=" sm:hidden">
          <IoMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
