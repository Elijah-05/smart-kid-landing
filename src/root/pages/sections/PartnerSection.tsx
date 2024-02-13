import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
} from "../../../assets";

const PartnerSection = () => {
  return (
    <div className=" py-10 pb-16 bg-gray-100">
      <div className=" max-w-7xl mx-auto">
        <h1 className=" text-center text-4xl font-medium text-gray-700">
          Our Partners
        </h1>
        <div className=" mt-8 flex items-center justify-between max-w-3xl mx-auto">
          <div className=" h-10 ">
            <img className="h-full" src={Partner1} alt="" />
          </div>
          <div className=" h-10 ">
            <img className="h-full" src={Partner2} alt="" />
          </div>
          <div className=" h-10 ">
            <img className="h-full" src={Partner3} alt="" />
          </div>
          <div className=" h-10 ">
            <img className="h-full" src={Partner4} alt="" />
          </div>
          <div className=" h-10 ">
            <img className="h-full" src={Partner5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
