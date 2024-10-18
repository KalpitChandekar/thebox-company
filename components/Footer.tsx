import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex text-secondary max-w-5xl mx-auto justify-between py-14">
        <div className="space-y-6">
          <div className="flex gap-2">
            <div className="space-y-4 text-blue font-medium">
              <p>ADDRESS:</p>
              <p>PHONE:</p>
              <p>EMAIL:</p>
            </div>
            <div className="space-y-4">
              <p>6391 Elgin St. Celina, Delaware 10299</p>
              <p>+1-543-123-4567</p>
              <p>hello@thebox.com</p>
            </div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            <Image src="/symbol.png" alt="logo" width={29} height={36} />
            <Image src="/box.png" alt="logo" width={80} height={17} />
          </div>
        </div>

        <div></div>
      </div>

      <div className="bg-blue py-4">
        <p className="text-white text-sm max-w-5xl mx-auto">
          TheBox Company © 2024. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
