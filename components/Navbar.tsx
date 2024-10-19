import { Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="px-4 md:px-0 flex justify-between items-center max-w-6xl mx-auto my-2">
      <div className="flex gap-1 items-center cursor-pointer">
        <Image src="/symbol.png" alt="logo" width={29} height={36} />
        <Image src="/box.png" alt="logo" width={80} height={17} />
      </div>
      <ul className="hidden md:flex">
        <li className="inline-block mx-3 cursor-pointer font-medium">Home</li>
        <li className="inline-block mx-3 cursor-pointer font-medium">About Us</li>
        <li className="inline-block mx-3 cursor-pointer font-medium">Projects</li>
        <li className="inline-block mx-3 cursor-pointer font-medium">Services</li>
        <li className="inline-block mx-3 cursor-pointer font-medium text-orange">
          Contact Us
        </li>
      </ul>
      <Menu className="md:hidden" size={32} />
    </div>
  );
};
export default Navbar;
