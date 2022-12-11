import React from "react";

function Login() {
  return (
    <div className=" bg-violet-300 flex w-screen h-screen justify-center text-center items-center ">
      <div className="bg-white  grid w-[400px]  h-[450px] rounded-xl">
        <div className="grid grid-rows-2 ">
          <span className="text-3xl font-bold text-violet-500 mt-5">Chat</span>
          <span>Login</span>
        </div>
        <form className="grid grid-rows-4 gap-y-1 p-4">
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

          <button className="bg-violet-500 h-10 font-lightbold">Sign in</button>
        </form>
        <p>Do you have an account? Log in</p>
      </div>
    </div>
  );
}

export default Login;
