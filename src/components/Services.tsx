const Services = () => (
    <div className="xl:mb-40 xl:mx-32 mx-2 text-customBlue">
      <h2 className="my-10 xl:mt-28 xl:mb-24  tracking-tighter text-5xl font-bold">
        Други услуги
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
        <div className="text-center">
          <img
            className="mb-2 rounded-2xl backdrop-brightness-125 hover:scale-105 transition duration-300 cursor-pointer"
            src="/1.png"
            alt="dangerous cargo"
          />
          <p className="mb-2 mr-40 font-semibold max-sm:text-base text-2xl">Опасни товари (ADR)</p>
        </div>
        <div className="text-center">
          <img
            className="mb-2 rounded-2xl backdrop-brightness-125 hover:scale-105 transition duration-300 cursor-pointer"
            src="/2.png"
            alt="temperature rquirements"
          />
          <p className="mr-40 font-semibold max-sm:text-base text-2xl">Хладилен транспорт</p>
        </div>
        <div className="text-center">
          <img
            className="mb-2 rounded-2xl backdrop-brightness-125 hover:scale-105 transition duration-300 cursor-pointer"
            src="/3.png"
            alt="oversized cargo"
          />
          <p className="mr-24 max-sm:mr-32 font-semibold max-sm:text-base text-2xl">Извънгабаритни товари</p>
        </div>
      </div>
    </div>
  );

  export default Services;
