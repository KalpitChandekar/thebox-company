import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex md:flex-row flex-col md:px-0 px-4 text-secondary max-w-5xl mx-auto justify-between py-14 gap-16">
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <tbody>
                <tr>
                  <td className="font-medium align-top text-blue px-2 py-2">
                    ADDRESS:
                  </td>
                  <td className="px-2 py-2">
                    6391 Elgin St. Celina, Delaware 10299
                  </td>
                </tr>
                <tr>
                  <td className="font-medium align-top text-blue px-2 py-2">
                    PHONE:
                  </td>
                  <td className="px-2 py-2">+1-543-123-4567</td>
                </tr>
                <tr>
                  <td className="font-medium align-top text-blue px-2 py-2">
                    EMAIL:
                  </td>
                  <td className="px-2 py-2">hello@thebox.com</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-1 items-center cursor-pointer">
            <Image src="/symbol.png" alt="logo" width={29} height={36} />
            <Image src="/box.png" alt="logo" width={80} height={17} />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-blue font-medium">NEWSLETTER:</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 border border-gray rounded-md"
              />
              <button className="bg-orange text-white px-4 h-10 rounded-md">
                Subscribe
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-blue font-medium">SOCIAL:</p>
            <div className="flex gap-4">
              <Image src="/facebook.png" alt="logo" width={30} height={30} />
              <Image src="/twitter.png" alt="logo" width={30} height={30} />
              <Image src="/linkedin.png" alt="logo" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue text-center md:text-start py-4">
        <p className="text-white text-sm max-w-5xl mx-auto">
          TheBox Company © 2024. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
