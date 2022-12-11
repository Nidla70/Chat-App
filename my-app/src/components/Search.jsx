import React from "react";

function Search() {
  return (
    <div className="">
      <div className="border-b-2">
        <input
          placeholder="Find a user"
          className="placeholder:text-gray-300 h-10 bg-transparent border-none w-full text-white outline-none p-1"
        ></input>
      </div>
      <div className="flex flex-row items-center h-[65px] hover:bg-indigo-800">
        <img className="rounded-full w-[50px] h-[50px]  object-cover p-2 "></img>
        <div>
          <span className="text-white text-xl font-semibold">Jane</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
