import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto my-6">
      <div className="flex gap-1 items-center cursor-pointer">
        <Image src="/symbol.png" alt="logo" width={29} height={36} />
        <Image src="/box.png" alt="logo" width={80} height={17} />
      </div>
      <ul>
        <li className="inline-block mx-3 cursor-pointer font-medium">Home</li>
        <li className="inline-block mx-3 cursor-pointer font-medium">About Us</li>
        <li className="inline-block mx-3 cursor-pointer font-medium">Projects</li>
        <li className="inline-block mx-3 cursor-pointer font-medium">Services</li>
        <li className="inline-block mx-3 cursor-pointer font-medium text-orange">
          Contact Us
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
