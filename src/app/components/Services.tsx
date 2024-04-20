const Services = () => (
  <div className="xl:mb-40 xl:mx-32 mx-2 text-customBlue">
    <h2 className="my-10 xl:mt-28 xl:mb-24  tracking-tighter text-5xl font-bold">
      Други услуги
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
      <div className="text-center">
        <img
          className="mb-2 rounded-2xl backdrop-brightness-125"
          src="/1.png"
          alt=""
        />
        <p className="mb-2 mr-40 font-semibold text-2xl">Опасни товари (ADR)</p>
      </div>
      <div className="text-center">
        <img
          className="mb-2 rounded-2xl backdrop-brightness-125"
          src="/2.png"
          alt=""
        />
        <p className="mr-40 font-semibold text-2xl">Хладилен транспорт</p>
      </div>
      <div className="text-center">
        <img
          className="mb-2 rounded-2xl backdrop-brightness-125"
          src="/3.png"
          alt=""
        />
        <p className="mr-24 font-semibold text-2xl">Извънгабаритни товари</p>
      </div>
    </div>
  </div>
);

export default Services;
