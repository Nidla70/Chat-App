import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

function Home() {
  return (
    <div className="bg-blue-300 flex  justify-center items-center h-screen w-screen">
      <div className="flex flex-row border-2 overflow-hidden rounded-md w-8/12 h-3/4">
        <div className="bg-indigo-500  border-r-2 basis-1/3 ">
          <Sidebar />
        </div>
        <div className=" basis-2/3">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Home;
