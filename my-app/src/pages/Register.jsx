import React from "react";

function Register() {
  return (
    <div className=" bg-violet-300 flex w-screen h-screen justify-center text-center items-center ">
      <div className="bg-white  grid w-[450px]  h-[550px] rounded-xl">
        <div className="grid grid-rows-2 ">
          <span className="text-3xl font-bold text-violet-500 mt-5">Chat</span>
          <span>Register</span>
        </div>
        <form className="grid grid-rows-4 gap-y-2 p-4">
          <input
            className="border-b-2  border-indigo-500 focus:outline-none p-4"
            type="type"
            placeholder="Name"
          ></input>
          <input
            className="border-b-2 border-indigo-500 focus:outline-none p-4"
            type="email"
            placeholder="Email"
          ></input>
          <input
            className="border-b-2 border-indigo-500 focus:outline-none p-4"
            type="password"
            placeholder="Password"
          ></input>
          <input
            type="file"
            className="p-4 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
          ></input>
          <button className="bg-violet-500 h-10 font-lightbold">Sign up</button>
        </form>
        <p>Do you have an account? Log in</p>
      </div>
    </div>
  );
}

export default Register;
