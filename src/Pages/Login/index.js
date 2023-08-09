import React from "react";
import imageLogin from "../../Assets/Image/ImageLogin.png";

const Login = () => {
  return (
    <div className="relative">
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:grid justify-items-center items-center">
          <img src={imageLogin} alt="/" />
        </div>
        <div className="grid justify-items-center items-center px-[10px] md:px-[100px]">
          <div className=" w-full h-auto py-[10px] px-[10px] rounded-xl bg-slate-50">
            <form className="flex flex-col gap-5 items-start">
              <h1 className="text-[25px] cursor-pointer font-bold uppercase text-black">
                Login
              </h1>
              <input
                placeholder="type your email..."
                className="w-full border-[1px] border-black h-[41px] pl-4 rounded-xl"
              />
              <input
                placeholder="type your password..."
                className="w-full border-[1px] border-black h-[41px] pl-4 rounded-xl"
              />
              <button className="w-full border-[1px] border-blue-200 hover:border-black py-[10px] px-[40px] rounded-[10px] text-[15px] text-blue-300 hover:text-black font-semibold cursor-pointer uppercase">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
