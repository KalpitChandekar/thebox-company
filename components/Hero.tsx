import { MoveLeft, MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-hero max-w-7xl mx-auto h-[556px] bg-cover flex items-center relative">
      <h1 className="text-6xl font-medium pl-16 max-w-lg text-secondary">
        Building things is our mission.
      </h1>

      <div className="bg-blue text-white absolute bottom-0 right-0 w-72">
        <div className="py-4 text-center space-y-1">
          {" "}
          <h1 className="font-medium">Feature Projects</h1>
          <p>The National University of Architecture</p>
        </div>
        <div className="flex">
          <button className="flex items-center justify-center gap-2  w-1/2 bg-secondary border-r">
            <MoveLeft />
            Back
          </button>
          <button className="flex items-center justify-center gap-2 w-1/2 bg-secondary border-l">
            Next
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
