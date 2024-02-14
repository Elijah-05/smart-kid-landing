import { StudyKid } from "../../assets";

const HeroBanner = () => {
  return (
    <div className="relative z-0 h-screen max-h-[950px]">
      <div className="absolute top-0 left-0 h-full w-full bg-black">
        <img
          className=" h-full w-full object-cover opacity-80 object-bottom"
          src={StudyKid}
          alt="child studying"
        />
      </div>
      <div className=" absolute w-full sm:w-auto max-w-[1350px] flex flex-col justify-center items-center sm:right-[20%] top-[350px] ">
        <div className=" text-4xl sm:text-6xl text-center font-medium text-white">
          <h1 className=" ">1 to 1 Online</h1>
          <h1 className=" ">Native English</h1>
          <h1 className=" ">Learning</h1>
        </div>
        <div className=" max-w-64 mt-8 w-full">
          <input className=" w-full block h-14 rounded-lg indent-3 placeholder:text-lg" type="email" placeholder="Enter your email"  />
          <button className=" text-white text-xl font-semibold bg-primary p-3 w-full rounded-lg mt-4">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
