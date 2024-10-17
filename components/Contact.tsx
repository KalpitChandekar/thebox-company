const Contact = () => {
  return (
    <div className="max-w-7xl bg-[#F6F8F7] mx-auto">
      <div className="max-w-xl text-center mx-auto py-24 space-y-4">
        <h1 className="text-center font-semibold text-3xl text-secondary">
          What can us do for you?
        </h1>
        <p className="leading-5 max-w-md mx-auto">
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-2  border border-gray rounded-md"
            />
            <input
              type="email"
              placeholder="Email*"
              className="p-2  border border-gray rounded-md"
            />
            <input
              type="text"
              placeholder="Reason for Contacting"
              className="p-2  border border-gray rounded-md"
            />
            <input
              type="number"
              placeholder="Phone*"
              className="p-2  border border-gray rounded-md"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full p-2 h-24 resize-none border border-gray rounded-xl"
          ></textarea>
        </div>
        <button className="py-2 px-20 rounded-sm bg-blue text-white">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Contact;
