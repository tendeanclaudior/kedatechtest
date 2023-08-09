import React, { useState } from "react";
import imageNavbar from "../Assets/Image/imageNavbar.png";
// saya menggunakan react scrool agar lebih mempermudah untuk berpindah pada setiap komponen yang ada
import { Link } from "react-scroll";
// saya menggunakan react icons agar mempermudah untuk munggunakan icon
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link as Links } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <img alt="/" src={imageNavbar} className="w-[350px] h-auto" />
      <div className="mx-auto top-0 sticky">
        <div className=" absolute bottom-[130px] w-full px-[40px] flex justify-between items-center">
          <h1 className="text-[25px] font-bold uppercase text-white items-center">
            Home
          </h1>

          <ul className="hidden md:flex items-center gap-5">
            <Link
              to="about"
              offset={-200}
              className="text-[25px] cursor-pointer font-bold uppercase text-black"
            >
              About
            </Link>
            <Link
              to="pricing"
              className="text-[25px] cursor-pointer font-bold uppercase text-black"
            >
              Pricing
            </Link>
            <Link
              to="contact"
              className="text-[25px] cursor-pointer font-bold uppercase text-black"
            >
              Contact
            </Link>
            <Links
              to={"/login"}
              className=" border-[1px] border-blue-200 hover:border-black py-[10px] px-[40px] rounded-[10px] text-[15px] text-blue-300 hover:text-black font-semibold cursor-pointer uppercase"
            >
              Login
            </Links>
          </ul>
          <div
            onClick={() => handleNav()}
            className="block md:hidden cursor-pointer"
          >
            {nav ? <AiOutlineMenu size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <ul
            className={
              nav
                ? "fixed z-20 left-0 top-0 w-full h-full bg-white ease-in-out duration-500 cursor-pointer"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <img alt="/" src={imageNavbar} className="w-[350px] h-auto" />
            <div className="absolute top-[40px] w-full px-[40px] flex justify-between items-center">
              <h1 className="text-[25px] font-bold uppercase text-white">
                Home
              </h1>
              <div onClick={() => handleNav()}>
                {nav ? (
                  <AiOutlineClose size={20} />
                ) : (
                  <AiOutlineClose size={20} />
                )}
              </div>
            </div>

            <div className="px-[40px] pt-[30px] flex flex-col gap-5">
              {nav ? (
                <Link
                  onClick={() => handleNav()}
                  to="about"
                  className="text-[25px] cursor-pointer font-bold uppercase text-black"
                >
                  About
                </Link>
              ) : (
                <Link
                  onClick={() => handleNav()}
                  to="about"
                  className="text-[25px] cursor-pointer font-bold uppercase text-black"
                >
                  About
                </Link>
              )}
              {nav ? (
                <Link
                  onClick={() => handleNav()}
                  to="pricing"
                  className="text-[25px] cursor-pointer font-bold uppercase text-black"
                >
                  Pricing
                </Link>
              ) : (
                <Link
                  onClick={() => handleNav()}
                  to="pricing"
                  className="text-[25px] cursor-pointer font-bold uppercase text-black"
                >
                  Pricing
                </Link>
              )}
              {nav ? (
                <Link
                  onClick={() => handleNav()}
                  to="contact"
                  className="text-[25px] cursor-pointer font-bold uppercase text-black"
                >
                  Contact
                </Link>
              ) : (
                <Link
                  onClick={() => handleNav()}
                  to="contact"
                  className="text-[25px] cursor-pointer font-bold uppercase text-black"
                >
                  Contact
                </Link>
              )}
              <Links
                to={"/login"}
                className=" border-[1px] border-blue-200 hover:border-black py-[10px] px-[40px] rounded-[10px] text-[15px] text-blue-300 hover:text-black font-semibold text-center cursor-pointer uppercase"
              >
                Login
              </Links>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
