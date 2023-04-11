import React, { useState } from "react";
import Bulb from "../assets/bulb.png";
import OctLogo from "../assets/octlogo.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(email);
    console.log(password);

    try {
      const savedUserResponse = await fetch(
        "https://octavewebsiteback.up.railway.app/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const savedUser = await savedUserResponse.json();
      console.log(savedUserResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row justify-center items-center bg-uniqueWhite opacity-90">
        <div className="w-4/12 min-w-4/12">
          <img src={Bulb} />
        </div>
        <div className="p-5 w-6/12">
          <div className="">
            <img src={OctLogo} class="mx-auto" />
          </div>
          <div className="flex justify-center font-semibold mb-6  mt-6">
            Sign In
          </div>
          <div class="">
            <form class="" onSubmit={handleSubmit}>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email Address
                </label>
                <input
                  class="border rounded w-full py-2 px-3  text-textcolor"
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndavid@gmail.com"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="border rounded w-full py-2 px-3  text-textcolor"
                  id="password"
                  type="password"
                  placeholder="........."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="pb-4 flex flex-row  justify-between">
                <div>
                  <input type="checkbox" class="rounded pr-10" />
                  Keep me logged in
                </div>
                <div class="text-login">Forgot password?</div>
              </div>
              <div class="flex items-center justify-between  w-full pb-2">
                <button
                  class="bg-submitBT text-white font-bold py-2 px-4 rounded w-full"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div class="flex flex-row  justify-between pt-4 pb-4">
            <div class="flex flex-row text-textcolor">
              <img src={Facebook} className="w-8 p-1" /> Log in with Facebook
            </div>
            <div class="flex flex-row text-textcolor">
              <img src={Google} className="w-8 " /> Log in with Google
            </div>
          </div>
          <div>
            <a class=" text-textcolor" href="#">
              Do not have an account?{" "}
              <Link className="text-login" to="/signup">
                Create now
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
