import Image from "next/image";

const OurReputation = () => {
  return (
    <div className="max-w-6xl mx-auto my-40 space-y-28">
      <h1 className="text-center font-semibold text-3xl text-secondary">
        Our Reputation
      </h1>
      <div className="flex md:flex-row flex-col px-4 md:px-0 md:gap-0 gap-10 justify-between">
        <div className="space-y-2 py-4 px-3 border-2 border-[#E0E3EB]">
          <Image src="/icon1.png" width={30} height={30} alt="icon" />
          <h1 className="font-semibold text-lg text-secondary">
            Best Services
          </h1>
          <p className="text-gray text-sm max-w-[16rem]">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>
        <div className="space-y-2 py-4 px-3 border-2 border-[#E0E3EB]">
          <Image src="/icon1.png" width={30} height={30} alt="icon" />
          <h1 className="font-semibold text-lg text-secondary">
            Best Services
          </h1>
          <p className="text-gray text-sm max-w-[16rem]">
            Cursus semper tellus volutpat aliquet lacus.
          </p>
        </div>
        <div className="space-y-2 py-4 px-3 border-2 border-[#E0E3EB]">
          <Image src="/icon2.png" width={30} height={30} alt="icon" />
          <h1 className="font-semibold text-lg text-secondary">
            Best Services
          </h1>
          <p className="text-gray text-sm max-w-[16rem]">
            Ultricies at ipsum nunc, tristique nam lectus.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurReputation;
