import React from "react";

function Register() {
  //To limit given time
  const current = new Date().toISOString().split("T")[0];

  return (
    <div className="border border-gray-800 rounded-md bg-gray-600 text-gray-200">
      <div className="flex flex-col p-5">
        <div className=" text-center w-full mb-5 text-xl">
          <h1>Login</h1>
        </div>
        <form className="flex flex-col text-center [&>*]:mb-2 items-center [&>label]:text-gray-white [&>input]:text-black">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border rounded-lg p-2"
            placeholder="tylerdurden@gamil.com"
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="border rounded-lg p-2"
            placeholder="Tdurden_33"
          />
          <label htmlFor="realName">Name</label>
          <input
            type="text"
            id="realName"
            className="border rounded-lg p-2"
            placeholder="Trevor Balthazar"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border rounded-lg p-2"
            placeholder="*********"
          />
          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="date"
            id="birthDate"
            className="border rounded-lg p-2 w-full"
            placeholder="Birth Date"
            max={current}
          />
          <div className="text-black w-full">
            <select className="w-full text-center rounded-md">
              <option value="turkiye">Turkiye</option>

              <option value="ukraina">Ukraina</option>

              <option value="bulgaria">Bulgaria</option>
            </select>
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              id="checkbox"
              className="border rounded-lg p-2"
            />
            <label htmlFor="checkbox">Agree the terms.</label>
          </div>

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

export default Register;

//     - country (drop down list taken from database);
