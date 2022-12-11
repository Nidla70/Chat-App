import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Message() {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(false);
  });

  return (
    <div
      className={`${
        state ? "flex flex-row gap-5" : "flex-row-reverse flex gap-5"
      }  py-4 px-2 items-center`}
    >
      <div className=" ">
        <img
          className=" rounded-full object-cover w-[50px] h-[50px]"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        ></img>
        <span className="text-gray-50 text-sm">just now</span>
      </div>
      <div className="max-w-4/5 ">
        <p
          className={`${
            state
              ? "bg-white rounded-r-lg rounded-bl-lg"
              : "bg-blue-500 rounded-l-lg rounded-br-lg"
          }  py-3 px-3 w-min `}
        >
          Hellodddddddddddddddddddd
        </p>
        {/* <img
          className="w-1/2"
          // src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        ></img> */}
      </div>
    </div>
  );
}

export default Message;
