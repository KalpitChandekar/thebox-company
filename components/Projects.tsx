import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="max-w-5xl md:px-0 px-4 mx-auto py-40 space-y-4">
      <h1 className="font-semibold text-3xl text-secondary">Projects</h1>
      <div className="flex md:flex-row flex-col gap-8 md:gap-0">
        <div className="flex gap-2">
          <div className="h-6 w-1 bg-blue"></div>
          <div className="text-[#C2C7D6] space-y-2">
            <h1 className="text-blue font-semibold">All</h1>
            <h1 className="">Commercial</h1>
            <h1 className="">Residential</h1>
            <h1 className="">Other</h1>
          </div>{" "}
        </div>
        <div className="md:ml-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/project1.png"
                alt="project1"
                width={270}
                height={175}
                className="w-full"
              />
              <div className="p-2 text-white space-y-1 bg-blue">
                <h1 className="font-semibold text-lg">Wildstone Infra Hotel</h1>
                <p className="text-sm">2715 Ash Dr. San Jose, South Dakota</p>
              </div>
            </div>
            <div>
              <Image
                src="/project2.png"
                alt="project2"
                width={282}
                height={182}
                className="w-full"
              />
              <div className="p-2 text-white space-y-1 bg-blue">
                <h1 className="font-semibold text-lg">Wish Stone Building</h1>
                <p className="text-sm">
                  2972 Westheimer Rd. Santa Ana, Illinois{" "}
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/project3.png"
                alt="project3"
                width={282}
                height={182}
                className="w-full"
              />
              <div className="p-2 text-white space-y-1 bg-blue">
                <h1 className="font-semibold text-lg">
                  Mr. Parkinston’s House
                </h1>
                <p className="text-sm">2715 Ash Dr. San Jose, South Dakota</p>
              </div>
            </div>
            <div>
              <Image
                src="/project4.png"
                alt="project4"
                width={282}
                height={182}
                className="w-full"
              />
              <div className="p-2 text-white space-y-1 bg-blue">
                <h1 className="font-semibold text-lg">Oregano Height</h1>
                <p className="text-sm">2464 Royal Ln. Mesa, New Jersey </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-white">
            <button className="flex items-center justify-center gap-2 py-2 w-40 bg-secondary">
              <MoveLeft />
              Back
            </button>
            <div className="w-3 h-3 bg-gray hidden md:flex rounded-full"></div>
            <div className="w-3 h-3 bg-blue rounded-full"></div>
            <div className="w-3 h-3 bg-gray hidden md:flex rounded-full"></div>
            <button className="flex items-center justify-center gap-2 py-2 w-40 bg-secondary">
              Next
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
