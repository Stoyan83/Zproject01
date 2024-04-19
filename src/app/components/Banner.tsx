const Banner = () => {
  return (
    <>
      <div className="text-center lg:mt-12">
        <h1 className="font-semibold tracking-tight text-customBlue lg:mr-5 md:text-6xl lg:text-7xl whitespace-nowrap mt-10 px-2">
          Гъвкави решения за <span className="block lg:mt-2 whitespace-nowrap lg:mr-5 tracking-tighter">сухопътен транспорт за</span>
          <span className="block whitespace-nowrap lg:mr-10 lg:mt-2 tracking-tighter">всеки клиент</span>
        </h1>
      </div>
      <img src='/truck.png' alt='truck-img' className='mx-auto w-7/12 h-full my-16' />
    </>
  );
};

export default Banner;
