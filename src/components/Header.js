import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { BsCart } from "react-icons/bs";
const nav = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Men",
    to: "/men",
  },
  {
    name: "Women",
    to: "/women",
  },
];
const Header = () => {
  return (
    <header className="flex text-gray-600 fixed w-full z-10 bg-white h-[60px] items-center ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <Link to={"/"}>
          <div className="flex title-font font-medium items-base text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="Group-1" border="0" className="w-[200px] h-[40px] " />
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {nav.map((navitem) => (
            <Link to={navitem.to}>
              <div className="mr-5 hover:text-gray-900">{navitem.name}</div>
            </Link>
          ))}
        </nav>
        <Link to="/cart">
          <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 space-x-1 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
            Cart
            <BsCart />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
