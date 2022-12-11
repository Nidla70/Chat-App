import React from "react";
import { BsFillCameraVideoFill, BsFillPersonPlusFill } from "react-icons/bs";
import { CgMoreAlt } from "react-icons/cg";
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
  return (
    <div>
      <div className="flex flex-row items-center h-[70px] bg-indigo-600 justify-between">
        <span className="text-2xl text-white font-semibold pl-3">Jane</span>
        <div className="flex-row flex gap-4 text-white pr-3">
          <BsFillCameraVideoFill size={30} />
          <BsFillPersonPlusFill size={30} />
          <CgMoreAlt size={30} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
