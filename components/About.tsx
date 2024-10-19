import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto max-w-6xl my-40 relative px-4 md:px-0">
      <div className="">
        <Image src="/about.png" alt="About Us" width={691} height={520} />
      </div>

      <div className="space-y-8 md:absolute top-16 right-60 p-6 md:w-[28%] bg-blue text-white">
        <h1 className="font-semibold text-lg">About us</h1>
        <div className="text-sm space-y-4">
          <p>
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way.
          </p>
          <p>
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
        </div>

        <button className="text-center font-semibold px-4 rounded-md py-2 bg-white text-blue">
          More on Our History
        </button>
      </div>
    </div>
  );
}
export default About