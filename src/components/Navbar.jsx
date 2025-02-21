import React, { useState } from "react";
import logo from "../imgs/valons bites.png";

import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet, FaTruck } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className=" w-full h-[100px] flex justify-between items-center   z-50    sticky top-0 shadow-lg bg-white">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer  ">
          <AiOutlineMenu size={30} />
        </div>
        <div className="">
          <img className="h-[100px] object-cover " src={logo} alt="logo" />
        </div>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>
      <div>
        <button className="bg-black text-white hidden md:flex items-center py-2 px-2  mr-2  rounded-full">
          <BsFillCartFill size={20} className="mr-3 " />
          Cart
        </button>
      </div>

      {/*Mobile menu */}
      {/*overley*/}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
      ) : (
        ""
      )}
      {/*side drawer menu */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10  "
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer "
        />
        <h2 className="text-2xl p-4">
          Kafshon <span className="font-bold">Valon</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 ">
            <li className=" text-xl py-4 flex cursor-pointer ">
              <FaTruck size={25} className="mr-4" /> Orders
            </li>
            <li className=" text-xl py-4 flex cursor-pointer">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className=" text-xl py-4 flex cursor-pointer">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className=" text-xl py-4 flex cursor-pointer">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className=" text-xl py-4 flex cursor-pointer">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className=" text-xl py-4 flex cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className=" text-xl py-4 flex cursor-pointer">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
