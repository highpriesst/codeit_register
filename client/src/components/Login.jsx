import React from "react";

function Login() {
  return (
    <div className="border border-gray-800 rounded-md bg-gray-600 text-gray-200">
      <div className="flex flex-col p-5">
        <div className=" text-center w-full mb-5 text-xl">
          <h1>Login</h1>
        </div>
        <form className="flex flex-col text-center [&>*]:mb-2 items-center">
          <label htmlFor="email">Email or Username</label>
          <input
            type="email"
            id="email"
            className="border rounded-lg p-2"
            placeholder="tylerdurden@gamil.com"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border rounded-lg p-2"
            placeholder="*********"
          />
          <input
            type="submit"
            value="Submit"
            className="rounded-lg p-2 max-w-min bg-orange-600 mt-2 hover:bg-orange-500"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
