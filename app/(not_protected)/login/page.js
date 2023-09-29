"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

export default function page() {
  const router = useRouter();
  // state to manage username and password
  const [formDetails, setFormDetails] = React.useState({
    username: "",
    password: "",
  });

  // login button handler

  const handleLoginUser = (e) => {
    e.preventDefault();

    // getting all users from localstorage
    const getAllUsers = JSON.parse(localStorage.getItem("users")) || [];
    const all_users = [...getAllUsers];

    // checking who is logging in
    let checkUserName = all_users?.filter(
      (us) => us.username == formDetails.username
    );
    // console.log("checkUserName", checkUserName);

    if (checkUserName?.length > 0) {
      let thisUser = checkUserName[0];

      // checking username and password are correct or not

      if (
        thisUser.username == formDetails.username &&
        thisUser.password == formDetails?.password
      ) {
        // if username  and password are correct then redirect it to profile page
        localStorage.setItem("loggedInUser", JSON.stringify(thisUser));
        router.push("/profile");
      }
    } else {
      Swal.fire({
        icon: "error",
        text: "Username or password is invalid!",
      });
    }
  };

  // function to handle input fields value
  const handleInput = (e) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLoginUser}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={formDetails?.username}
                onChange={handleInput}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handleInput}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
          <div className="mt-2">
            <Link href={"/register"}>
              <button className="flex w-full justify-center rounded-md text-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Create New Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
