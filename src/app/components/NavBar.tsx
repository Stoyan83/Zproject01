"use client";
import { useState } from "react";
import Link from "next/link";
import CloseIcon from "../ui/icons/CloseIcon";
import MenuIcon from "../ui/icons/MenuIcon";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-10 flex flex-col md:flex-row justify-center items-center py-3 px-4 md:px-10">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="#" className="text-customBlue mr-4 md:mr-10 lg:mr-40">
          <span className="font-semibold text-xl tracking-tight">Website</span>
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden text-customBlue focus:outline-none transition-transform"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div
        className={`absolute top-full left-4 right-0 md:relative md:flex justify-center ${
          isOpen ? "block" : "hidden"
        } md:items-center bg-white py-2 md:py-0 md:bg-transparent transition-all duration-300 w-full md:w-auto`}
      >
        <div className="flex flex-col md:flex-row md:items-center">
          <Link
            href="#"
            className="block md:inline-block my-2 md:my-0 md:mx-1 lg:mx-5 hover:underline transition-opacity"
          >
            <span className="hover:text-customBlue whitespace-nowrap">
              Начало
            </span>
          </Link>
          <Link
            href="#"
            className="block md:inline-block my-2 md:my-0 md:mx-1 lg:mx-5 hover:underline transition-opacity"
          >
            <span className="hover:text-customBlue whitespace-nowrap">
              За нас
            </span>
          </Link>
          <Link
            href="#"
            className="block md:inline-block my-2 md:my-0 md:mx-1 lg:mx-5 hover:underline transition-opacity"
          >
            <span className="hover:text-customBlue whitespace-nowrap">
              Услуги
            </span>
          </Link>
          <Link
            href="#"
            className="block md:inline-block my-2 md:my-0 md:mx-1 lg:mx-5 hover:underline transition-opacity"
          >
            <span className="hover:text-customBlue whitespace-nowrap">
              Цени
            </span>
          </Link>
          <Link
            href="#"
            className="block md:inline-block my-2 md:my-0 md:mx-1 lg:mx-5 hover:underline transition-opacity"
          >
            <span className="hover:text-customBlue whitespace-nowrap">
              Как работи
            </span>
          </Link>
          <Link
            href="#"
            className="block md:inline-block my-2 md:my-0 md:mx-1 lg:mx-5 hover:underline transition-opacity"
          >
            <span className="hover:text-customBlue md:mr-4 lg:mr-20 whitespace-nowrap">
              Контакти
            </span>
          </Link>
          <Link
            href="#"
            className="block md:inline-block my-2 md:my-0 md:mx-1 lg:mx-5 hover:underline transition-opacity"
          >
            <span className="hover:text-customBlue whitespace-nowrap">
              Профил
            </span>
          </Link>
        </div>
        <button className="rounded-lg border-[2px] border-customBlueDark px-[14px] py-[12px] font-semibold border-customBlue bg-white text-customBlue hover:text-white hover:bg-customBlue whitespace-nowrap min-w-[150px]">
          Заявка за пратка
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
