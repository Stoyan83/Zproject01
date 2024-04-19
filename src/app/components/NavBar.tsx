"use client";
import { useState } from "react";
import Link from "next/link";
import CloseIcon from "../ui/icons/CloseIcon";
import MenuIcon from "../ui/icons/MenuIcon";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const menuIconClasses = "md:hidden text-customBlue focus:outline-none transition-transform";
  const menuContainerClasses = `absolute top-full left-11  md:relative md:flex justify-center ${
    isOpen ? "block h-screen" : "hidden"
  } md:items-center bg-white py-2 md:py-4 md:bg-transparent transition-all duration-300 w-full md:w-auto`;
  const menuItemClasses =
    "block md:inline-block my-2 md:my-0 md:mx-1 lg:mx-5 hover:underline transition-opacity";
  const menuButtonClasses = "rounded-lg border-[2px] border-customBlueDark px-[14px] py-[12px] font-semibold border-customBlue bg-white text-customBlue hover:text-white hover:bg-customBlue whitespace-nowrap min-w-[150px]";
  const spanClasses = "hover:text-customBlue whitespace-nowrap";

  return (
    <nav className="relative flex flex-col md:flex-row justify-center items-center py-3 px-8 md:px-10">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="#" className="text-customBlue mr-4 md:mr-12 lg:mr-40">
          <span className="font-semibold text-3xl tracking-tight">Website</span>
        </Link>
        <button onClick={toggleMenu} className={menuIconClasses}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className={menuContainerClasses}>
        <div className="flex flex-col md:flex-row md:items-center">
          <Link href="#" className={menuItemClasses}>
            <span className={spanClasses}>Начало</span>
          </Link>
          <Link href="#" className={menuItemClasses}>
            <span className={spanClasses}>За нас</span>
          </Link>
          <Link href="#" className={menuItemClasses}>
            <span className={spanClasses}>Услуги</span>
          </Link>
          <Link href="#" className={menuItemClasses}>
            <span className={spanClasses}>Цени</span>
          </Link>
          <Link href="#" className={menuItemClasses}>
            <span className={spanClasses}>Как работи</span>
          </Link>
          <Link href="#" className={menuItemClasses}>
            <span className={`${spanClasses} md:mr-5 lg:mr-24`}>Контакти</span>
          </Link>
          <Link href="#" className={`${menuItemClasses} lg:mr-12`}>
            <span className={spanClasses}>Профил</span>
          </Link>
        </div>
        <button className={menuButtonClasses}>Заявка за пратка</button>
      </div>
    </nav>
  );
};

export default NavBar;
