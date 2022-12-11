import React from "react";

function Chats() {
  return (
    <div>
      <div className="flex flex-row items-center h-[65px] hover:bg-indigo-800">
        <img className="rounded-full  w-[50px] h-[50px]  object-cover p-2 "></img>
        <div>
          <span className="text-white text-xl font-semibold">Jane</span>
          <p className="text-sm text-gray-300">Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
