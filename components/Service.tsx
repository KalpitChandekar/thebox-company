import Image from "next/image";

interface Interface {
  title: string;
  image: string;
  className?: string;
  customClass: string;
  diveClass: string;
}
const Card = ({
  title,
  image,
  className,
  customClass,
  diveClass,
}: Interface) => {
  return (
    <div
      className={`${className} space-y-4 rounded-sm py-4 px-3 flex flex-col items-center`}
    >
      <Image src={image} width={30} height={30} alt="icon" />
      <div className={`${diveClass} h-[2px] w-10  rounded-full`}></div>
      <h1 className={`${customClass}  font-medium capitalize `}>{title}</h1>
    </div>
  );
};

const Service = () => {
  return (
    <div className="bg-[#F6F8F7] max-w-7xl mx-auto">
      <div className="px-4 md:px-0 max-w-6xl mx-auto my-40 py-10 space-y-28">
        <h1 className="text-center font-semibold text-3xl text-secondary">
          Services
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <Card
            title="construction"
            image="/construction.png"
            className="bg-white shadow-lg"
            customClass="text-blue"
            diveClass="bg-gray"
          />
          <Card
            title="renovation"
            image="/renovation.png"
            className="bg-blue"
            customClass="text-white"
            diveClass="bg-white"
          />
          <Card
            title="consultation"
            image="/consultation.png"
            className="bg-white shadow-lg"
            customClass="text-blue"
            diveClass="bg-gray"
          />
          <Card
            title="repair"
            image="/repair.png"
            className="bg-blue"
            customClass="text-white"
            diveClass="bg-white"
          />
          <Card
            title="architecture"
            image="/architecture.png"
            className="bg-white shadow-lg"
            customClass="text-blue"
            diveClass="bg-gray"
          />
          <Card
            title="electric"
            image="/electric.png"
            className="bg-blue"
            customClass="text-white"
            diveClass="bg-white"
          />
        </div>
      </div>{" "}
    </div>
  );
};
export default Service;
