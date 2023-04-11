import React, { useState } from "react";
import Bulb from "../assets/bulb.png";
import OctLogo from "../assets/octlogo.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")


  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(firstName);
    console.log(lastName);
    console.log(password);

    if (password !== confirmPassword) {
      alert("passwords don't match", {
        type: "info",
      });
    }

    try {
      const savedUserResponse = await fetch(
        "https://octavewebsiteback.up.railway.app/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
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
            Sign Up
          </div>
          <div class="">
            <form class="" onSubmit={handleSubmit}>
              <div class="mb-4">
                <input
                  class="border rounded w-full py-2 px-3 bg-innerText text-textcolor"
                  id="username"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div class="mb-4">
                <input
                  class="border rounded w-full py-2 px-3 bg-innerText text-textcolor"
                  id="username"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div class="mb-4">
                <input
                  class="border rounded w-full py-2 px-3 bg-innerText text-textcolor"
                  id="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="User Name"
                />
              </div>
              <div class="mb-4">
                <input
                  class="border rounded w-full py-2 px-3 bg-innerText text-textcolor"
                  id="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="E-mail"
                />
              </div>
              <div class="mb-4">
                <input
                  class="border rounded w-full py-2 px-3 bg-innerText text-textcolor"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div class="mb-6">
                <input
                  class="border rounded w-full py-2 px-3 bg-innerText text-textcolor"
                  id="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div class="pb-4">
                <input type="checkbox" class="rounded pr-10" />
                Keep me logged in
              </div>
              <div class="flex items-center justify-between  w-full pb-2">
                <button
                  class="bg-submitBT text-white font-bold py-2 px-4 rounded w-full"
                  type="submit"    
                >
                  Sign Up
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
              Already have an account?{" "}
              <Link className="text-login" to="/signin">
                Login
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
