import React from "react";
import { GrAttachment, GrImage } from "react-icons/gr";

function Input() {
  return (
    <div className="h-[70px] bg-white p-2 gap-2 flex flex-row justify-between">
      <input
        className="w-full border-none outline-none text-xl"
        placeholder="Type something..."
      ></input>
      <div className="flex-row flex gap-4 items-center pr-1">
        <GrAttachment size={30} />
        <input type="file" style={{ display: "none" }} id="file"></input>
        <label htmlFor="file">
          <GrImage size={30} />
        </label>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 font-semibold py-2">
          Send
        </button>
      </div>
    </div>
  );
}

export default Input;
