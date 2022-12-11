import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row font-semibold  bg-indigo-900 h-[70px] p-3 text-white justify-between items-center gap-3">
      <span className="text-xl">Nidla Chat</span>
      <div className="flex flex-row gap-5 items-center">
        <img
          className=" w-[24px] h-[24px] object-cover rounded-full border-none"
          src=""
        ></img>
        <span>ddddd</span>
        <button className="bg-blue-600 text-white py-2 px-2 font-semibold hover:bg-blue-500">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
