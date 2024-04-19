const Banner = () => {
  return (
    <>
    <div className="text-center">
      <h1 className="font-semibold text-customBlue sm:text-5xl mt-10 px-2">
        Гъвкави решения за <span className="block">сухопътен транспорт за</span>{" "}
        <span className="block">всеки клиент</span>
      </h1>
    </div>
    <img src='/truck.png' alt='truck-img' className='mx-auto w-8/12 h-full my-12' />
    </>
  );
};

export default Banner;
