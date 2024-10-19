const Consultation = () => {
  return (
    <div className="bg-Consultation bg-cover bg-center max-w-7xl mx-auto">
      <div className="max-w-6xl md:px-0 px-4 mx-auto flex md:flex-row flex-col md:gap-0 gap-10 justify-between items-center py-6 md:py-20">
        <div className="space-y-4 text-white text-center md:text-start">
          <h1 className="text-3xl font-semibold">
            Free consultation with exceptional quality
          </h1>
          <p className="text-sm">
            Just one call away: <span className="border-b"> +84 1102 2703</span>
          </p>
        </div>
        <button className="py-2 px-4 border border-white rounded-sm text-white">
          Get your consultation
        </button>
      </div>
    </div>
  );
};
export default Consultation;
