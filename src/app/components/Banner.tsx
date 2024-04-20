const Banner = () => {
  // const commonTextClasses = "sm:text-sm lg:text-lg text-customBlue";
  // const headingClasses =
  //   "font-semibold lg:text-5xl text-customBlue mb-4 lg:mb-8";

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
      {/* <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-screen-md mx-auto">
          <h2 className={`pt-4 ${headingClasses}`}>Решения</h2>
          <div className={`${commonTextClasses} pt-2 mb-8`}>
            <p className="mb-4 mt-2">
              Фокусът ни върху клиентите е същността на нашата работа. Ние
              доставяме услуги за всички видове бизнес – от малки местни
              предприятия до мултинационални компании.
            </p>
            <p className="mt-10 -mb-6">
              Ние обработваме вашата пратка като всяка друга голяма товарна
              пратка – старателно и професионално.
            </p>
          </div>
          <div className={`${commonTextClasses} ml-7`}>
            <ul className="list-disc sm:text-sm lg:text-lg text-customBlue">
              <li className="mb-5">
                Решения за всички видове стоки (конвенционални, изискващи
                температурен режим, опасни товари)
              </li>
              <li className="mb-6 -mt-4">
                Превоз на стоки от и до Балканите и всички страни на ЕС, цели и
                частични товари
              </li>
              <li className="-mt-5 mb-6">
                Взимане на стоки и доставки за от и в България;
              </li>
              <li className="-mt-4">
                Съчетаване на дълги и къси дестинации за ефективно планиране и
                разходи;
              </li>
              <li>Регулярни групажни линии;</li>
              <li>Транспортни услуги до Турция и Близкия изток;</li>
              <li>
                Спазване на изискванията за качество и стандарти на клиентите
                и/или на техни специфични изисквания.
              </li>
            </ul>
          </div>
          <h2 className={`font-semibold mt-20 ${headingClasses}`}>
            Предимства
          </h2>
          <div className={`${commonTextClasses} mb-10`}>
            <p>
              Фокусът ни върху клиентите е същността на нашата работа. Ние
              доставяме услуги за всички видове бизнес – от малки местни
              предприятия до мултинационални <br /> компании. <br />
              <br />
              Ние обработваме вашата пратка като всяка друга голяма товарна
              пратка – <br /> старателно и професионално.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 lg:h-[600px] flex items-center justify-center bg-form">
        <div className="flex flex-col items-center text-center py-6 xl:py-8 max-w-[620px] mx-auto">
          <h2 className="text-white my-8 font-bold leading-[4rem] md:leading-[3rem] text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
            <span className="tracking-tight">
              Готoви ли сте да работим заедно?
            </span>
          </h2>
          <p className="text-white text-base md:text-lg lg:text-xl xl:text-1xl leading-normal mb-4">
            Оставете вашият телефон и ние ще се свържем с вас, за да{" "}
            <span className="mt-2">отговорим на всички въпроси</span>
          </p>
          <div className="my-10 flex flex-nowrap justify-center">
            <div className="flex items-center bg-white rounded-l-xl pl-2 xl:pl-4 xl:py-2">
              <svg
                className="h-6 w-6 xl:h-8 xl:w-4 fill-current text-gray-400 mr-2 xl:mr-4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3zm16.828 2H4.172L12 11.896 19.828 5zM4 19V8.104l7.096 6.398a.5.5 0 0 0 .608 0L20 8.104V19H4z"
                />
              </svg>
              <input
                className="p-3 w-[14rem] xl:w-[16rem] xl:p-4 outline-none border-none bg-transparent text-sm xl:text-base"
                type="text"
                placeholder="Мобилен телефон"
              />
            </div>
            <button className="p-3 xl:p-4 xl:px-8 text-customGreen bg-button-yellow xl:text-base rounded-r-xl border-0 font-bold">
              Изпрати
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Banner;
