import React from "react";

const Pricing = () => {
  return (
    <div className="py-8 lg:py-24 lg:h-screen flex items-center" id="pricing">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-col xl:flex-row 2xl:flex-row gap-5">
          <div className="w-[300px] h-auto bg-slate-200 py-[30px] rounded-[15px] grid items-center justify-items-center">
            <h1 className="text-[20px] font-semibold pb-[20px]">Team</h1>
            <h1 className="text-[18px] font-medium pb-[20px]">IDR.500.000</h1>
            <butto className=" border-[1px] border-blue-200 hover:border-black py-[5px] px-[40px] rounded-[10px] text-[15px] text-blue-300 hover:text-black font-semibold cursor-pointer uppercase">
              Buy
            </butto>
          </div>
          <div className="w-[300px] h-auto bg-slate-200 py-[30px] rounded-[15px] grid items-center justify-items-center">
            <h1 className="text-[20px] font-semibold pb-[20px]">Agency</h1>
            <h1 className="text-[18px] font-medium pb-[20px]">IDR.1.000.000</h1>
            <butto className=" border-[1px] border-blue-200 hover:border-black py-[5px] px-[40px] rounded-[10px] text-[15px] text-blue-300 hover:text-black font-semibold cursor-pointer uppercase">
              Buy
            </butto>
          </div>
          <div className="w-[300px] h-auto bg-slate-200 py-[30px] rounded-[15px] grid items-center justify-items-center">
            <h1 className="text-[20px] font-semibold pb-[20px]">Enterprise</h1>
            <h1 className="text-[18px] font-medium pb-[20px]">IDR.1.500.000</h1>
            <butto className=" border-[1px] border-blue-200 hover:border-black py-[5px] px-[40px] rounded-[10px] text-[15px] text-blue-300 hover:text-black font-semibold cursor-pointer uppercase">
              Buy
            </butto>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
