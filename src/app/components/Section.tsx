const Section = () => {
    const commonTextClasses = "sm:text-sm lg:text-lg text-customBlue";
    const headingClasses = "font-semibold font-space-grotesk lg:text-5xl text-customBlue mb-4 lg:mb-8";

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-screen-md mx-auto">
                <h2 className={`pt-7 ${headingClasses}`}>
                    Решения
                </h2>
                <div className={`${commonTextClasses} pt-2 mb-8`}>
                    <p className="mb-4">
                        Фокусът ни върху клиентите е същността на нашата работа. Ние
                        доставяме услуги за всички видове бизнес – от малки местни
                        предприятия до мултинационални компании.
                    </p>
                    <p className="mt-10 -mb-6">
                        Ние обработваме вашата пратка като всяка друга голяма товарна пратка –
                        старателно и професионално.
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
                        <li className="-mt-5 mb-6">Взимане на стоки и доставки за от и в България;</li>
                        <li className="-mt-5">
                            Съчетаване на дълги и къси дестинации за ефективно планиране и
                            разходи;
                        </li>
                        <li className="mb-2">Регулярни групажни линии;</li>
                        <li className="">Транспортни услуги до Турция и Близкия изток;</li>
                        <li>Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания.</li>
                    </ul>
                </div>
                <h2 className={`font-semibold font-space-grotesk mt-20 ${headingClasses}`}>
                    Предимства
                </h2>
                <div className={`${commonTextClasses} mb-10`}>
                    <p>
                        Фокусът ни върху клиентите е същността на нашата работа. Ние
                        доставяме услуги за всички видове бизнес – от малки местни
                        предприятия до мултинационални компании. <br /><br />
                        Ние обработваме вашата пратка като всяка друга голяма товарна пратка –
                        старателно и професионално.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section;
