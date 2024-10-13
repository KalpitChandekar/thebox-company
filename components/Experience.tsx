import Image from "next/image";

const Experience = () => {
  return (
    <div className="my-40 max-w-5xl mx-auto flex">
      <div className="w-2/3 relative">
        <div className="py-2 z-10 bg-white absolute top-0 right-40 px-4 w-40 rounded-sm shadow-xl">
          <h1 className="text-6xl font-bold text-secondary">84</h1>
          <div className="flex items-center gap-2">
            <div className="h-4 w-1 bg-orange"></div>
            <p className="text-sm text-gray">Happy Clients</p>
          </div>
          <Image
            src="/clients.png"
            alt="clients"
            width={72}
            height={72}
            className="w-16 absolute -top-6 -right-4"
          />
        </div>
        <div className="py-2 -z-10 bg-white absolute top-16 left-56 px-4 w-48 rounded-sm shadow-xl">
          <h1 className="text-6xl font-bold text-secondary">123</h1>
          <div className="flex items-center gap-2">
            <div className="h-4 w-1 bg-orange"></div>
            <p className="text-sm text-gray">Projects Completed</p>
          </div>
          <Image
            src="/projects.png"
            alt="projects"
            width={72}
            height={72}
            className="w-16 absolute -left-6 -top-10"
          />
        </div>
        <div className="py-2 z-20 bg-white absolute top-40 right-40 px-4 w-40 rounded-sm shadow-xl">
          <h1 className="text-6xl font-bold text-secondary">37</h1>
          <div className="flex items-center gap-2">
            <div className="h-4 w-1 bg-orange"></div>
            <p className="text-sm text-gray">Award Wins</p>
          </div>
          <Image
            src="/awards.png"
            alt="awards"
            width={72}
            height={72}
            className="w-16 absolute -right-6 -top-10"
          />
        </div>
        <div className="py-2 -z-10 bg-white absolute -bottom-10 left-56 px-4 w-48 rounded-sm shadow-xl">
          <h1 className="text-6xl font-bold text-secondary">30</h1>
          <div className="flex items-center gap-2">
            <div className="h-4 w-1 bg-orange"></div>
            <p className="text-sm text-gray">Years In Business</p>
          </div>
          <Image
            src="/business.png"
            alt="business"
            width={72}
            height={72}
            className="w-16 absolute -right-6 -bottom-8"
          />
        </div>
      </div>
      <div className="w-1/3 space-y-10">
        <h1 className="text-5xl font-semibold text-blue">
          30 Years Experience
        </h1>
        <p className="text-sm text-gray max-w-72">
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
        <button className="bg-blue py-2 px-4 rounded-sm text-white font-medium">
          Contact Us
        </button>
      </div>
    </div>
  );
};
export default Experience;
