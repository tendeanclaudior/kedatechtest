import React from "react";

const Contact = () => {
  return (
    <div
      className="py-8 lg:py-24 lg:h-screen flex flex-col items-center"
      id="contact"
    >
      <div className="grid justify-items-center">
        <form className="flex flex-col gap-5">
          <input
            placeholder="Name..."
            className=" w-[300px] border-[1px] border-black pl-2"
          />
          <input
            placeholder="Email..."
            className=" w-[300px] border-[1px] border-black pl-2"
          />
          <textarea
            placeholder="Description..."
            className=" w-[300px] border-[1px] border-black pl-2"
          />
          <button className=" border-[1px] border-blue-200 hover:border-black py-[5px] px-[40px] text-[15px] text-blue-300 hover:text-black font-semibold cursor-pointer uppercase">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
