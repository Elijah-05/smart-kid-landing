import { Cambridge, Teacher } from "../../../assets";
import whyData from "../../../data";

interface CardPropsType {
  image: string;
  heading: string;
  paragraph: string;
}

const Card = ({ image, heading, paragraph }: CardPropsType) => {
  return (
    <div className=" border max-w-60 flex flex-col items-center text-center gap-2">
      <div className="flex flex-col items-center h-48">
        <div className=" border h-28 w-48">
          <img src={image} className=" w-full h-full object-contain" />
        </div>
        <h2 className=" mt-2 text-primary font-medium text-xl">{heading}</h2>
      </div>
      <p className=" mt-6 text-sm">{paragraph}</p>
    </div>
  );
};

const WhySection = () => {
  return (
    <div className=" py-16">
      <div className=" max-w-7xl mx-auto">
        <h1 className=" text-center text-4xl font-medium text-gray-700">
          Why Starkids?
        </h1>
        <p className=" text-center font-light">
          With so many online English learning platforms, why choose Starkid?
        </p>
        <div className=" mt-8 flex items justify-evenly max-w-[1350px] mx-auto">
          {whyData.map((data) => {
            return (
              <Card
                key={data.heading}
                image={data.image}
                heading={data.heading}
                paragraph={data.paragraph}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhySection;
