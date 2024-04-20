const Banner = () => {
  return (
    <>
      <div className="text-center lg:mt-14">
        <h1 className="font-bold tracking-tight text-customBlue lg:mr-3 md:text-6xl lg:text-7xl whitespace-nowrap mt-10 px-2">
          <span className="lg:ml-2 whitespace-nowrap">
            Гъвкави <span className="lg:ml-2 tracking-tight">решения за</span>
          </span>
          <span className="block lg:mt-1 whitespace-nowrap lg:mr-3 tracking-tighter">
            <span className="lg:ml-3 lg:tracking-tight">сухопътен</span>{" "}
            транспорт за
          </span>
          <span className="block whitespace-nowrap lg:mr-5 lg:mt-2 tracking-tighter">
            <span className="lg:ml-8 lg:tracking-tight">всеки</span>{" "}
            <span className="lg:tracking-normal">клиент</span>
          </span>
        </h1>
      </div>
      <img
        src="/truck.png"
        alt="truck"
        className="mx-auto w-7/12 md:min-w-[800px] h-full my-16"
      />
    </>
  );
};

export default Banner;
