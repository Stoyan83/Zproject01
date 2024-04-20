"use client";
import { useState } from "react";
import EmailIcon from "../ui/icons/EmailIcon";

export default function Form() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const phoneNumberRegex = /^[0-9]+$/;

  const handleClick = () => {
    if (phoneNumber.trim() === "" || !phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage("Моля въведете валиден телефонен номер.");
    } else {
      setIsModalOpen(true);
      setErrorMessage("");
      setPhoneNumber("");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: any) => {
    setPhoneNumber(e.target.value);
    setErrorMessage("");
  };

  return (
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
            <EmailIcon />
            <input
              className="p-3 w-[14rem] xl:w-[16rem] xl:p-4 outline-none border-none bg-transparent text-sm xl:text-base"
              placeholder="Мобилен телефон"
              value={phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleClick}
            className="p-3 xl:p-4 xl:px-8 text-customGreen bg-button-yellow hover:bg-amber-200 xl:text-base rounded-r-xl border-0 font-bold ml-[-1px]"
          >
            Изпрати
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">
                Благодарим ви, че се свързахте с нас!
              </h2>
              <p className="text-sm leading-relaxed">
                Получихме вашата контактна информация и скоро ще ви отговорим.
              </p>
            </div>
            <div className="flex justify-end p-3 bg-gray-100">
              <button
                onClick={closeModal}
                className="text-sm font-semibold px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
              >
                Затвори
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
